const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User',},
    products: [{type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product'}]
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;