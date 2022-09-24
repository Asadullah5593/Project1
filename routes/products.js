var express = require("express");
var router = express.Router();
var ProductController = require("../controllers/products");

router.post("/create", ProductController.createProduct);
router.get("/get-all", ProductController.getAllProducts);

module.exports = router;