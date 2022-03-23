import React, { useEffect } from "react";
import CheckoutCartItem from '../CheckoutCartItem';
import Auth from '../../utils/auth';
import '../CheckoutCart/style.css';
import { useStoreContext } from '../../utils/GlobalState';
// import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { QUERY_CHECKOUT } from '../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { Link } from "react-router-dom";



const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
const CheckoutCart = () => {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
    };

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);


  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds }
    });
  }



  console.log(state)


  return (
    <div className="col-1">
      {state.cart.length ? (
        <div>
          {state.cart.map(item => (
            <CheckoutCartItem key={item._id} item={item} />
          ))}
          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  );
};

export default CheckoutCart;