import  Joi from "joi";

const createFaqSchema = Joi.object({
    question: Joi.string().required(),
    answer: Joi.string().required(),
})
const updateFaqSchema = Joi.object({
    question: Joi.string().allow("").optional(),
    answer: Joi.string().allow("").optional(),
})
export {createFaqSchema, updateFaqSchema}