const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    products: [{
        product_id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product'},
        quantity: {type: Number},
        price: {type: Number}
    }]
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;