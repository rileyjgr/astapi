const Joi = require('joi');

module.exports = {
    validateBody: schema => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);

            // if error

            if (result.error) {
                return res.status(400).json(result.error);
            }

            if (!req.value) {
                req.value = {};
            }
            req.value.body = result.value;
            next();
        };
    },
    schemas: {
        ast: Joi.object().keys({
            name: Joi.string().required(),
            ip: Joi.number().required(),
            diameter: Joi.number().required(),
            mass: Joi.number().required(),
            v_imp: Joi.number().required(),
            energy: Joi.number().required(),
            blastRadius: Joi.number()
        })
    }
};
