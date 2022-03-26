import React from "react";
import CheckoutInfo from "../components/checkout-info";
import CheckoutCart from "../components/CheckoutCart";
// import DishModal from "../components/DishModal";

export default function Checkout() {
	return (
		
			<body>
				
			
			<div className="row">
			<h1 className="mt-5 ps-5">CHECKOUT</h1>
				<CheckoutInfo />
				<CheckoutCart />
			</div>
			
			</body>
		
	);
}