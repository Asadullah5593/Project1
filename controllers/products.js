const Product = require("../schemas/database-schemas/productSchema");

async function createProduct(req, res) {
    var {
        product_name,
        brand_name,
        color,
        product_code,
        made_in,
        specifications,
        price,
        model,
        image_url
    } = req.body;
    try {

        let newProduct = new Product({
            product_name: product_name,
            brand_name: brand_name,
            color: color,
            product_code: product_code,
            made_in: made_in,
            specifications: specifications,
            price: price,
            model: model,
            image_url: image_url
        });
        newProduct = await newProduct.save();
        return res
            .status(200)
            .json({status: true, product: newProduct});
    } catch (error) {
        res.status(500).json({status: false, error: error.message});
    }
}

async function getAllProducts(req, res) {
    try {
        const products = await Product.find();
        return res.status(200).json({status: true, products: products});
    } catch (error) {
        res.status(500).json({status: false, error: error.message});
    }
}

async function getProductDetail(req, res) {
    const id = req.params.id;
    try {
        let product = await Product.findOne({_id: id.toString()});

        if (product) {
            return res
                .status(200)
                .json({status: true, product: product});
        } else {
            return res
                .status(404)
                .json({status: false, product: null});
        }

    } catch (error) {
        res.status(500).json({status: false, error: error.message});
    }
}

module.exports = {createProduct, getAllProducts, getProductDetail};