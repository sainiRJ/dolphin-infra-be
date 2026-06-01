import faqService from "../services/faq.service.js";

const createFaq = async (req, res, next) => {
    try {
        const { httpStatusCode, responseBody } = await faqService.createFaq(req.body);
        res.status(httpStatusCode).json(responseBody);
    } catch (error) {
        next(error);
    }
};

const updateFaq = async (req, res, next) => {
    try {
        const { httpStatusCode, responseBody } = await faqService.updateFaq(req.params.id, req.body);
        res.status(httpStatusCode).json(responseBody);
    } catch (error) {
        next(error);
    }
};

const deleteFaq = async (req, res, next) => {
    try {
        const { httpStatusCode, responseBody } = await faqService.deleteFaq(req.params.id);
        res.status(httpStatusCode).json(responseBody);
    } catch (error) {
        next(error);
    }
};

const getAllFaq = async (req, res, next) => {
    try {
        const { httpStatusCode, responseBody } = await faqService.getAllFaq();
        res.status(httpStatusCode).json(responseBody);
    } catch (error) {
        next(error);
    }
};

export default { createFaq, updateFaq, deleteFaq, getAllFaq };