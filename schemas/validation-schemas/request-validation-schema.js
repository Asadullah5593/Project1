var Joi = require('joi');
var JoiObjectId = require("joi-objectid");
var joiObjectId = JoiObjectId(Joi);

var orderProductsSchema = Joi.object({

    product_id: joiObjectId().required(),

    quantity: Joi.number()
        .required(),

    price: Joi.number()
        .precision(2)
        .required(),
});

var requestValidationSchema = {

    loginRequestSchema: Joi.object({
        email: Joi.string()
            .email({minDomainSegments: 2})
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$'))
            .required()

    }),
    signupRequestSchema: Joi.object({
        first_name: Joi.string()
            .required(),

        last_name: Joi.string()
            .required(),

        email: Joi.string()
            .email({minDomainSegments: 2})
            .required(),

        phone: Joi.string()
            .length(10)
            .pattern(/^[0-9]+$/)
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$'))
            .required()

    }),
    createProductRequestSchema: Joi.object({
        product_name: Joi.string()
            .required(),

        brand_name: Joi.string()
            .required(),

        color: Joi.string()
            .required(),

        product_code: Joi.string()
            .length(10)
            .required(),

        made_in: Joi.string()
            .required(),

        specifications: Joi.string()
            .required(),

        price: Joi.number()
            .precision(2)
            .required(),

        model: Joi.string()
            .required(),

        image_url: Joi.string()
            .uri()
            .required()
    }),

    createOrderRequestSchema: Joi.object({

        user_id: joiObjectId().required(),

        products: Joi.array().items(orderProductsSchema).required(),
    }),
}
module.exports = requestValidationSchema;