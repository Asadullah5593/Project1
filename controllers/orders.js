const Order = require("../schemas/database-schemas/orderSchema");

async function createNewOrder(req, res) {
    var {
        user_id,
        products
    } = req.body;
    try {

        let order = new Order({
            user_id: user_id,
            products: products
        });
        order = await order.save();
        return res
            .status(200)
            .json({status: true, order: order});
    } catch (error) {
        res.status(500).json({status: false, error: error.message});
    }
}

async function getSingleOrderDetail(req, res) {
    const id = req.params.id;
    try {
        const orders = await Order.find({
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
    const user_id = req.params.user_id;
    try {
        const orders = await Order.find({
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