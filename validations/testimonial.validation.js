import  Joi from "joi";


const createTestimonialSchema =  Joi.object({
    clientName: Joi.string().required(),
    company:Joi.string().required(),
    feedback:Joi.string().required(),
    rating:Joi.number().optional(),
})

const updateTestimonialSchema =  Joi.object({
    clientName: Joi.string().optional(),
    company:Joi.string().optional(),
    feedback:Joi.string().optional(),
    rating:Joi.number().optional(),
})


export {createTestimonialSchema, updateTestimonialSchema}