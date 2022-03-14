import React from "react";
import CheckoutInfo from "../components/checkout-info";
import CartSummary from "../components/cart-summary";
import Calendar from "../components/Calendar";
import CartCanvas from "../components/CartCanvas";

export default function Checkout() {
	return (
		
			<body>
				
			<CheckoutInfo />
			<CartSummary />
			{/* <Calendar /> */}
			<CartCanvas />
			</body>
		
	);
}
