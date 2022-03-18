import React from "react";
import CheckoutInfo from "../components/checkout-info";
import CartSummary from "../components/cart-summary";
import Calendar from "../components/Calendar";
import CartCanvas from "../components/CartCanvas";
// import DishModal from "../components/DishModal";

export default function Checkout() {
	return (
		
			<body>
				
			
			<div className="row p-5">
			<h1 className="m-5">CHECKOUT</h1>
				<CheckoutInfo />
				<CartSummary />
			</div>
			
			</body>
		
	);
}
