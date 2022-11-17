const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product',
        }
    ]
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;