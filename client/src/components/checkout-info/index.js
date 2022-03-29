import React, { useEffect } from "react";
import "../checkout-info/style.css";
import { useStoreContext } from "../../utils/GlobalState";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../../utils/mutations";
import { ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import spinner from "../../assets/spinner.gif";
import { useState } from "react";
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export default function CheckoutInfo() {
	const flState = "Florida";

	const flCity = "Orlando";
	const [addOrder] = useMutation(ADD_ORDER);
	const [getCheckout, { loading, data }] = useLazyQuery(QUERY_CHECKOUT);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		address: "",
		address2: "",
		city: "Orlando",
		state: "Florida",
		zipCode: "",
		email: "",
		phone: "",
	});
	const [state, dispatch] = useStoreContext();

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	useEffect(() => {
		async function getCart() {
			const cart = await idbPromise("cart", "get");
			dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
		}

		if (!state.cart.length) {
			getCart();
		}
	}, [state.cart.length, dispatch]);

	const submitCheckout = async () => {
	 
		// console.log({
		// 	form: {
		// 		...formData,
		// 		flCity,
		// 		flState,
		// 	},
		// 	products: state.cart,
		// });

		const productIds = [];

		state.cart.forEach((item) => {
			for (let i = 0; i < item.purchaseQuantity; i++) {
				productIds.push(item._id);
			}
		});

		

		const order = {...formData, products: productIds}
		console.log(order)
		
		 const { data } = await addOrder({
			variables: { ...order },
		  });

		// getCheckout({
		// 	variables: { products: productIds },
		// });

		// window.location.assign("/success");
	}


	// useEffect(() => {
	// 	async function saveOrder() {
	// 		const cart = await idbPromise("cart", "get");
	// 		const products = cart.map((item) => item._id);

	// 		if (products.length) {
	// 			const { data } = await addOrder({ variables: { products } });
	// 			const productData = data.addOrder.products;

	// 			productData.forEach((item) => {
	// 				idbPromise("cart", "delete", item);
	// 			});
	// 		}

	// 		setTimeout(() => {
	// 			window.location.assign("/");
	// 		}, 3000);
	// 	}

	// 	saveOrder();
	// }, [addOrder]);


	return (
		<div className="col-2">
			{/* container start */}
			<div class="container">
				{/* whole column begin */}
				<div class="row">
					{/* Only column begin */}
					<div class="col">
						{/* Header */}

						<div className="login-prompt mb-3">
							<p>
								Already have an account?{" "}
								<a href="/login">
									<u>Log in</u>
								</a>{" "}
								for a faster checkout
							</p>
						</div>
						{/* buttons */}
						<p className="mt-4">DELIVERY METHOD</p>
						<div className="d-flex justify-content-center">
							<input
								type="button"
								value="DELIVER"
								className="deliver-method deliver"
							/>
							<input
								type="button"
								value="PICKUP"
								className="deliver-method pickup"
							/>
						</div>
					</div>
					{/* only column end */}
				</div>
				{/* ^ whole column end */}
				{/* FORM COlumn start */}
				<div class="container">
					<div class="row row mt-5">
						{/* first name */}
						<div class="col padding-left">
							<input
								type="text"
								className="form-control"
								placeholder="First name*"
								aria-label="First name"
								name="firstName"
								onChange={handleChange}
							/>
						</div>
						{/* last name */}
						<div className="col">
							<input
								type="text"
								className="form-control"
								placeholder="Last name*"
								aria-label="Last name"
								onChange={handleChange}
								name="lastName"
							/>
						</div>
					</div>
					{/* Address row pt.1*/}
					<div className="row mt-3">
						{/* Address */}
						<div className="col-9 padding-left">
							<input
								type="text"
								className="form-control"
								placeholder="Address*"
								aria-label="Address"
								onChange={handleChange}
								name="address"
							/>
						</div>
						{/* APT */}
						<div className="col">
							<input
								type="text"
								className="form-control"
								placeholder="Apt, suite, etc."
								aria-label="Apt"
								onChange={handleChange}
								name="address2"
							/>
						</div>
					</div>
					{/* Address row pt.2  */}
					<div className="row mt-3">
						{/* City */}
						<div className="col-5 padding-left">
							<input
								className="form-control"
								type="text"
								placeholder={flCity}
								aria-label={flCity}
								disabled
							/>
						</div>
						{/* state */}
						<div className="col">
							<input
								className="form-control"
								type="text"
								placeholder={flState}
								aria-label={flState}
								disabled
							/>
						</div>
						{/* zip code */}
						<div className="col">
							<input
								type="text"
								className="form-control"
								placeholder="Zip Code*"
								aria-label="Zip Code"
								onChange={handleChange}
								name="zipCode"
							/>
						</div>
					</div>
					{/* Email/Phone */}
					<div className="row mt-3">
						{/* email */}
						<div className="col-8 padding-left">
							<input
								type="text"
								className="form-control"
								placeholder="Email*"
								aria-label="Email"
								onChange={handleChange}
								name="email"
							/>
						</div>
						{/* phone */}
						<div className="col">
							<input
								type="text"
								className="form-control"
								placeholder="Phone Number*"
								aria-label="Phone Number"
								onChange={handleChange}
								name="phone"
							/>
						</div>
					</div>
					{/* Payment */}
					<div class="row mt-5">
						<div className="col d-flex justify-content-center">
							{loading ? (
								<img src={spinner} alt="loading" id="spinner" />
							) : null}
							<button
								type="button"
								className="cont-btn"
								onClick={submitCheckout}
							>
								PLACE ORDER
							</button>
						</div>
					</div>
				</div>
				{/* form column end */}
			</div>
			{/* ^ containder end */}
		</div>
	);
}