import React from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import "../CartCanvas/style.css";

export default function CartCanvas() {
	return (
		<div>
			<button
				className="btn btn-primary"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasRight"
				aria-controls="offcanvasRight"
			>
				Toggle right offcanvas
			</button>

			<div
				className="offcanvas offcanvas-end"
				tabIndex="-1"
				id="offcanvasRight"
				aria-labelledby="offcanvasRightLabel"
			>
				<div className="offcanvas-header">
					<h5 id="offcanvasRightLabel">Offcanvas right</h5>
					<button
						type="button"
						className="btn-close text-reset"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div className="offcanvas-body">...</div>
			</div>
		</div>
	);
}
