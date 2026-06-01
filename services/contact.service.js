import Contact from "../models/contact.model.js"
import {generateAccessToken, generateRefreshToken} from "../utils/jwt.js"
import serviceUtil  from "../utils/serviceUtil.js";
import { httpStatusCodes } from "../constants/customTypes/networkTypes.js";
import { genericServiceErrors } from "../constants/errors/genericServiceErrors.js";


const createContact = async(data) =>{
    try {
    const  contactExist = await Contact.findOne({email: data.email})
    if(contactExist){
        return serviceUtil.buildResult(
            false,
            httpStatusCodes.CLIENT_ERROR_BAD_REQUEST,
            genericServiceErrors.generic.ContactAlreadyExists
        )
    }
    const result = await Contact.create(data)

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

const getAllContact = async()=>{
    try {
        const result = await Contact.find().sort({ createdAt: -1 })
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


export default {createContact, getAllContact}