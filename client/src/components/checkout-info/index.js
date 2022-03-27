import React, { useEffect, useState } from "react";
import "../checkout-info/style.css";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import spinner from "../../assets/spinner.gif";
import Auth from "../../utils/auth";
import PaymentBtn from "../PaymentBtn";
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')



export default function CheckoutInfo() {
	
	app.post('/create-checkout-session', async (req, res) => {
		const session = await stripe.checkout.sessions.create({
		  line_items: [
			{
			  price_data: {
				currency: 'usd',
				product_data: {
				  name: 'T-shirt',
				},
				unit_amount: 2000,
			  },
			  quantity: 1,
			},
		  ],
		  mode: 'payment',
		  success_url: 'https://example.com/success',
		  cancel_url: 'https://example.com/cancel',
		});
	  
		res.redirect(303, session.url);
	  });
	  
	  app.listen(4242, () => console.log(`Listening on port ${4242}!`));


	const flState = "Florida";
	const flCity = "Orlando";
	
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		address: "",
		address2: "",
		zipCode: "",
		email: "",
		phone: "",
	});


	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	function submitAddress () {
		console.log({
			form: {
				...formData,
				flCity,
				flState,
			},
	// products: state.cart,
	})};


	return (
		<div className="col-2">
			{/* container start */}
			<div class="container">
				{/* whole column begin */}
				<div class="row">
					{/* Only column begin */}
					<div class="col">
						{/* Header */}

					
 						{Auth.loggedIn() ? (
 							<>
							 
 						</>
 						) :(
 							<>
 							<div className="login-prompt mb-3">
 							<p>
 								Already have an account?{" "}
 								<a href="/login">
									<u>Log in</u>
								</a>{" "}
 								for a faster checkout
 							</p>
 						</div>
 							</>
 						 )}
						 
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
														
							<button
								type="button"
								className="cont-btn"
								onClick={submitAddress}
							>Continue to Payment
							</button>

							
							<form action="/create-checkout-session" method="POST">
     					 <button type="submit">Checkout</button>
    						</form>
						</div>
					</div>
				</div>
				{/* form column end */}
			</div>
			{/* ^ containder end */}
		</div>
	);
}
