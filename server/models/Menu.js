const { Schema, model } = require('mongoose');

const MenuSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    }, 
    meal_time: {
        type: String
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0
    }
})

// create the Pizza model using the PizzaSchema
const Menu = model('Menu', MenuSchema);

// export the Pizza model
module.exports = Menu;