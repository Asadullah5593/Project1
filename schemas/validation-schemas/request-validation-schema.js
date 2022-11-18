var Joi = require('joi');

var requestValidationSchema = {

    loginRequest: Joi.object({
        email: Joi.string()
            .email({minDomainSegments: 2})
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$'))
            .required()

    }),

    signupRequest: Joi.object({
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

    })
}
module.exports = requestValidationSchema