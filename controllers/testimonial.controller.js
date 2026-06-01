import testimonialService from "../services/testimonial.service.js";

const createTestimonial = async (req, res, next) => {
    try {
        const { httpStatusCode, responseBody } = await testimonialService.createTestimonial(req.body);
        res.status(httpStatusCode).json(responseBody);
    } catch (error) {
        next(error);
    }
};

const updateTestimonial = async (req, res, next) => {
    try {
        const { httpStatusCode, responseBody } = await testimonialService.updateTestimonial(req.params.id, req.body);
        res.status(httpStatusCode).json(responseBody);
    } catch (error) {
        next(error);
    }
};

const deleteTestimonial = async (req, res, next) => {
    try {
        const { httpStatusCode, responseBody } = await testimonialService.deleteTestimonial(req.params.id);
        res.status(httpStatusCode).json(responseBody);
    } catch (error) {
        next(error);
    }
};


const getTestimonial = async (req, res, next) => {
    try {
        const { httpStatusCode, responseBody } = await testimonialService.getTestimonial();
        res.status(httpStatusCode).json(responseBody);
    } catch (error) {
        next(error);
    }
};




export default { createTestimonial, updateTestimonial, deleteTestimonial, getTestimonial };