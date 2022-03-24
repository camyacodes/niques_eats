import React from "react";
import "./style.css"

const Hero = () => {
	return (
		//  this is where Mya will add Carousel on landing page
		<div>
			<section class="bgimage">
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="hero-text">
							<h1 className="text-center" id="title">Nique's Eats</h1>
							<p className="text-center" id="sub-title">
								Home made meals delivered for your convenience
							</p>
							<p className="text-center">
								<a href="/menu" class="btn btn-large" id="order-b">
									ORDER NOW
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Hero;
