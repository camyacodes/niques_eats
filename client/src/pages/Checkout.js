import React from "react";
import CheckoutInfo from "../components/checkout-info";
import CartSummary from "../components/cart-summary";
import CheckoutCart from "../components/CheckoutCart";
import Calendar from "../components/Calendar";
import CartCanvas from "../components/CartCanvas";
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