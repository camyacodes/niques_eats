import React from "react";

export default function HomeInfoCards() {
	return (
		<div>
			<div class="container info-container" id="home-info-cards">
				{/* First row of info cards */}
				<div class="row info-row">
					<div class="col-sm info-section">
						<img
							src="https://www.jessicagavin.com/wp-content/uploads/2018/06/ribeye-steak-with-red-wine-sauce-3-1200.jpg"
							className="img-fluid info-img"
						/>
					</div>
					<div class="col-sm info-section">
						<h2 className="info-text">Quality Ingedients</h2>
					</div>
					<div class="col-sm info-section">
						<img
							src="https://bakingmischief.com/wp-content/uploads/2021/02/banana-pudding-image-square.jpg"
							className="img-fluid info-img"
						/>
					</div>
					<div class="col-sm info-section">
						<h2 className="info-text">Customizable</h2>
					</div>
				</div>
				{/* Second Row of Info Cards */}
				<div class="row info-row">
					<div class="col-sm info-section">
						<h2 className="info-text">Southern Style</h2>
					</div>
					<div class="col-sm info-section">
						<img
							src="https://basilandbubbly.com/wp-content/uploads/2020/03/salmon-croquettes-9.jpg"
							className="img-fluid info-img"
						/>
					</div>
					<div class="col-sm info-section">
						<h2 className="info-text">Convenient</h2>
					</div>
					<div class="col-sm info-section">
						<img
							src="https://thecozycook.com/wp-content/uploads/2020/10/Buttermilk-Biscuits-f.jpg"
							className="img-fluid info-img"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
