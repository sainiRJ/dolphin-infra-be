import  Joi from "joi";

const createServiceSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().required(),
    icon: Joi.string().allow("").optional()
})

const updateServiceSchema = Joi.object({
    name: Joi.string().allow("").optional(),
    description: Joi.string().allow("").optional(),
    status: Joi.string().allow("").optional(),
    icon: Joi.string().optional()
})


export {createServiceSchema, updateServiceSchema}