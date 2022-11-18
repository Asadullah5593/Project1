var express = require("express");
var router = express.Router();
var ProductController = require("../controllers/products");
var handler = require("../middlewares/auth-handler/auth-handler");
const JoiHandler = require("../middlewares/request-validator/request-validator");
const {createProductRequestSchema} = require("../schemas/validation-schemas/request-validation-schema");

router.post("/create", handler.authHandler, JoiHandler(createProductRequestSchema), ProductController.createProduct);
router.get("/get-all", ProductController.getAllProducts);
router.get("/detail/:id", handler.authHandler, ProductController.getProductDetail);

module.exports = router;