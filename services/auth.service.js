import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import {generateAccessToken, generateRefreshToken} from "../utils/jwt.js"
import serviceUtil  from "../utils/serviceUtil.js";
import { httpStatusCodes } from "../constants/customTypes/networkTypes.js";
import { genericServiceErrors } from "../constants/errors/genericServiceErrors.js";


const signupUser = async(userData) =>{
    try {
    const  userexist = await User.findOne({email: userData.email})
    if(userexist){
        return serviceUtil.buildResult(
            false,
            httpStatusCodes.CLIENT_ERROR_BAD_REQUEST,
            genericServiceErrors.generic.EmailAlreadyExists
        )
    }
    const hashed = await bcrypt.hash(userData.password, 10);
    const role = userData.role || "admin"
    const user = await User.create({fullName: userData.fullName, email: userData.email, password: hashed, role: role})

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;
    const result = {fullName: user.fullName, email: user.email, role: "admin", accessToken, refreshToken}
    await user.save();
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

const loginUser = async(userData) =>{
    try {
    const  user = await User.findOne({email: userData.email})
    if(!user){
        return serviceUtil.buildResult(
            false,
            httpStatusCodes.CLIENT_ERROR_BAD_REQUEST,
            genericServiceErrors.generic.UserDoesNotExist
        )
    }
    const match = await bcrypt.compare(userData.password, user.password);
    console.log("user pass", user.password)
    console.log("userData pass", userData.password)
    console.log("matching password ", match)
    if(!match){
         return serviceUtil.buildResult(
            false,
            httpStatusCodes.CLIENT_ERROR_BAD_REQUEST,
            genericServiceErrors.generic.InvalidCredentials
        )
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    user.refreshToken = refreshToken;
    const result = {fullName: user.fullName, email: user.email, accessToken, refreshToken, role: user.role}
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


export default {signupUser, loginUser}