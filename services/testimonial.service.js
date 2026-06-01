import Testimonial from "../models/testimonial.model.js";
import serviceUtil from "../utils/serviceUtil.js";
import { httpStatusCodes } from "../constants/customTypes/networkTypes.js";
import { genericServiceErrors } from "../constants/errors/genericServiceErrors.js";

const createTestimonial = async (data) => {
    try {
        const result = await Testimonial.create(data);
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

const updateTestimonial = async (id, data) => {
    try {
        const result = await Testimonial.findByIdAndUpdate(id, data);
        if (!result) {
            return serviceUtil.buildResult(
                false,
                httpStatusCodes.CLIENT_ERROR_BAD_REQUEST,
                "Testimonial not found"
            );
        }
        return serviceUtil.buildResult(
            true,
            httpStatusCodes.SUCCESS_OK,
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

const deleteTestimonial = async (id) => {
    try {
        const result = await Testimonial.findByIdAndDelete(id);
        if (!result) {
            return serviceUtil.buildResult(
                false,
                httpStatusCodes.CLIENT_ERROR_BAD_REQUEST,
                "Testimonial not found"
            );
        }
        return serviceUtil.buildResult(
            true,
            httpStatusCodes.SUCCESS_OK || 200,
            null,
            { message: "Testimonial deleted successfully" }
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

const getTestimonial = async()=>{
    try {
        const result = await Testimonial.find().sort({ createdAt: -1 })
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

export default { createTestimonial, updateTestimonial, deleteTestimonial, getTestimonial };