import React from "react";
import "../cart-summary/style.css";

export default function CartSummary() {
	return (
        <div className="col-1">
			<div class="container cart-cards">
				<div class="row row-cols-1 w-100">
					<div class="col date">
						<div class="d-flex justify-content-between">
							<p>Monday</p>
							<p>03/12/2022</p>
						</div>
					</div>
					<div class="col summary">
						<div class="d-flex justify-content-between">
							<div className="wrapper counter">
								<span>-</span>
								<span>01</span>
                                <span>+</span>
                                
							</div>
							<ul className="cart-meals">
                            <li>Chicken and Waffles</li>
                            <li class="fs-6">Remove</li>
                        </ul>
							<p>12.00</p>
						</div>
					</div>
					<div class="col date">
						<div class="d-flex justify-content-between">
							<p>Tuesday</p>
							<p>03/13/2022</p>
						</div>
					</div>
					<div class="col summary"><div class="d-flex justify-content-between">
							<div className="wrapper counter">
								<span>-</span>
								<span>01</span>
								<span>+</span>
                        </div>
                        <ul className="cart-meals">
                            <li>Crab Stuffed Salmon</li>
                            <li class="fs-6">Remove</li>
                        </ul>
							<p>12.00</p>
						</div></div>
						<div class="col date">
						<div class="d-flex justify-content-between">
							<p>Friday</p>
							<p>03/18/2022</p>
						</div>
					</div>
					<div class="col summary"><div class="d-flex justify-content-between">
							<div className="wrapper counter">
								<span>-</span>
								<span>01</span>
								<span>+</span>
							</div>
							<ul className="cart-meals">
                            <li>Loaded Baked Potato</li>
                            <li class="fs-6">Remove</li>
                        </ul>
							<p>12.00</p>
						</div></div>
					<div class="col cart-price">Add Order Notes</div>
                    <div class="col cart-price">Subtotal</div>
					<div class="col cart-price">Total</div>
					
				</div>
			</div>
		</div>
	);
}
