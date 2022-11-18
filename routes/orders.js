var express = require("express");
var router = express.Router();
var OrderController = require("../controllers/orders");
var handler = require("../middlewares/auth-handler/auth-handler");
const JoiHandler = require("../middlewares/request-validator/request-validator");
const {createOrderRequestSchema} = require("../schemas/validation-schemas/request-validation-schema");

router.post("/create", handler.authHandler, JoiHandler(createOrderRequestSchema), OrderController.createNewOrder);
router.get("/all/:user_id", handler.authHandler, JoiHandler(createOrderRequestSchema), OrderController.getAllOrdersByUser);
router.get("/detail/:id", handler.authHandler, JoiHandler(createOrderRequestSchema), OrderController.getSingleOrderDetail);

module.exports = router;