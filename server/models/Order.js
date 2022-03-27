const mongoose = require("mongoose");

const { Schema } = mongoose;

const Product = require("./Product");

const orderSchema = new Schema({
	address: {
		type: String,
	},
	address2: { type: String },
	email: { type: String },
	firstName: { type: String },
	flCity: { type: String },
	flState: { type: String },
	lastName: { type: String },
	phone: { type: String },
	zipCode: { type: String },
	
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

//add properties
