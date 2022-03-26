const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
	user: {
		type: String,
	},
	purchaseDate: {
		type: String,
	},
	address: {
		type: String,
	},
	price: {
		type: Number,
	},
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
