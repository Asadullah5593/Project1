var Order = require("../schemas/database-schemas/orderSchema");
var Product = require("../schemas/database-schemas/productSchema");
var User = require("../schemas/database-schemas/userSchema");
var sendEmail = require("../libs/mailer").sendEmail;

async function createNewOrder(req, res) {
    var {
        user_id,
        products
    } = req.body;
    try {

        var unavailableProducts = [];
        var availableProducts = [];

        var user = await User.findById(user_id.toString());

        for (var product of products) {
            var availableProduct = await Product.findById(product.product_id.toString());

            if (availableProduct && availableProduct.available_quantity > 0) {
                availableProduct.available_quantity -= product.quantity;
                await Product.update(availableProduct);
                availableProducts.push({product_name: availableProduct.product_name, ...product});
            } else {
                unavailableProducts.push(unavailableProducts);
            }
        }

        if (availableProducts.length) {

            let order = new Order({
                user_id: user_id,
                products: availableProducts
            });

            await sendEmail({
                to: user.email,
                subject: `Hi ${user.first_name} Your order been successfully placed!`,
                text: "Your order been placed! Will be delivered to you in 60 minutes"
            })

            order = await order.save();
            return res
                .status(200)
                .json({status: true, order: order});
        } else {
            res.status(400).json({status: false, error: "All selected products are out of stock!"})
        }
    } catch (error) {
        res.status(500).json({status: false, error: error.message});
    }
}

async function getSingleOrderDetail(req, res) {
    var id = req.params.id;
    try {
        var orders = await Order.find({
            _id: id.toString()
        }).populate({
            path: 'user_id',
            model: 'User'
        }).populate({
            path: 'products.product_id',
            model: 'Product'
        });
        return res.status(200).json({status: true, orders: orders});
    } catch (error) {
        res.status(500).json({status: false, error: error.message});
    }
}

async function getAllOrdersByUser(req, res) {
    var user_id = req.params.user_id;
    try {
        var orders = await Order.find({
            user_id: user_id.toString()
        }).populate({
            path: 'user_id',
            model: 'User'
        }).populate({
            path: 'products.product_id',
            model: 'Product'
        });
        return res.status(200).json({status: true, orders: orders});
    } catch (error) {
        res.status(500).json({status: false, error: error.message});
    }
}

module.exports = {createNewOrder, getAllOrdersByUser, getSingleOrderDetail};