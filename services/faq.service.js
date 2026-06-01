import Faq from "../models/faq.model.js";
import serviceUtil from "../utils/serviceUtil.js";
import { httpStatusCodes } from "../constants/customTypes/networkTypes.js";
import { genericServiceErrors } from "../constants/errors/genericServiceErrors.js";

const createFaq = async (data) => {
    try {
        const faqExist = await Faq.findOne({ question: data.question });
        if (faqExist) {
            return serviceUtil.buildResult(
                false,
                httpStatusCodes.CLIENT_ERROR_BAD_REQUEST,
                "FAQ with this question already exists"
            );
        }
        const result = await Faq.create(data);
        return serviceUtil.buildResult(
            true,
            httpStatusCodes.SUCCESS_CREATED,
            null,
            result
        );
    } catch (error) {
        console.log(error);
        return serviceUtil.buildResult(
            false,
            httpStatusCodes.SERVER_ERROR_INTERNAL_SERVER_ERROR,
            genericServiceErrors.errors.SomethingWentWrong
        );
    }
};

const updateFaq = async (id, data) => {
    try {
        const result = await Faq.findByIdAndUpdate(id, data, { new: true });
        if (!result) {
            return serviceUtil.buildResult(
                false,
                httpStatusCodes.CLIENT_ERROR_BAD_REQUEST,
                "FAQ not found"
            );
        }
        return serviceUtil.buildResult(
            true,
            httpStatusCodes.SUCCESS_OK || 200,
            null,
            result
        );
    } catch (error) {
        console.log(error);
        return serviceUtil.buildResult(
            false,
            httpStatusCodes.SERVER_ERROR_INTERNAL_SERVER_ERROR,
            genericServiceErrors.errors.SomethingWentWrong
        );
    }
};

const deleteFaq = async (id) => {
    try {
        const result = await Faq.findByIdAndDelete(id);
        if (!result) {
            return serviceUtil.buildResult(
                false,
                httpStatusCodes.CLIENT_ERROR_BAD_REQUEST,
                "FAQ not found"
            );
        }
        return serviceUtil.buildResult(
            true,
            httpStatusCodes.SUCCESS_OK || 200,
            null,
            { message: "FAQ deleted successfully" }
        );
    } catch (error) {
        console.log(error);
        return serviceUtil.buildResult(
            false,
            httpStatusCodes.SERVER_ERROR_INTERNAL_SERVER_ERROR,
            genericServiceErrors.errors.SomethingWentWrong
        );
    }
};

const getAllFaq = async()=>{
    try {
        const result = await Faq.find().sort({ createdAt: -1 })
        return serviceUtil.buildResult(
        true,
        httpStatusCodes.SUCCESS_OK,
        null,
        result
    )
    } catch (error) {
        console.log(error)
        return serviceUtil.buildResult(
            false,
            httpStatusCodes.SERVER_ERROR_INTERNAL_SERVER_ERROR,
            genericServiceErrors.errors.SomethingWentWrong
        )
    }
}

export default { createFaq, updateFaq, deleteFaq, getAllFaq };