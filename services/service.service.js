import bcrypt from "bcrypt";
import Service from "../models/service.model.js"
import {generateAccessToken, generateRefreshToken} from "../utils/jwt.js"
import serviceUtil  from "../utils/serviceUtil.js";
import { httpStatusCodes } from "../constants/customTypes/networkTypes.js";
import { genericServiceErrors } from "../constants/errors/genericServiceErrors.js";


const createService = async(data) =>{
    try {
    const  serviceExist = await Service.findOne({name: data.name})
    if(serviceExist){
        return serviceUtil.buildResult(
            false,
            httpStatusCodes.CLIENT_ERROR_BAD_REQUEST,
            genericServiceErrors.generic.ServiceAlreadyExist
        )
    }
    const result = await Service.create(data)

    await result.save();
    console.log(result)
    return serviceUtil.buildResult(
        true,
        httpStatusCodes.SUCCESS_CREATED,
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
const getAllService = async()=>{
    try {
        const result = await Service.find().sort({ createdAt: -1 })
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
const updateService = async(id, data) =>{
    try {
    console.log("id", id)
    const result = await Service.findByIdAndUpdate(id, data, { new: true });
    if(!result){
        return serviceUtil.buildResult(
            false,
            httpStatusCodes.CLIENT_ERROR_BAD_REQUEST,
            genericServiceErrors.generic.ServiceDoesNotExist
        )
    }

    console.log(result)
    return serviceUtil.buildResult(
        true,
        httpStatusCodes.SUCCESS_OK,
        null,
        "data update successfull done"
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

const deleteService = async(id) =>{
    try {
    const  serviceExist = await Service.findById(id)
    if(!serviceExist){
        return serviceUtil.buildResult(
            false,
            httpStatusCodes.CLIENT_ERROR_BAD_REQUEST,
            genericServiceErrors.generic.ServiceDoesNotExist
        )
    }
    await serviceExist.deleteOne()

    return serviceUtil.buildResult(
        true,
        httpStatusCodes.SUCCESS_OK,
        null,
        "delete service succesfully"
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


export default {createService, getAllService, updateService, deleteService}