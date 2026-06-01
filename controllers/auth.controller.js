import authService from "../services/auth.service.js"

const signup = async(req, res, next)=>{
  try {
    const {httpStatusCode, responseBody} = await authService.signupUser( req.body);
    console.log(httpStatusCode, responseBody)
    res.status(httpStatusCode).json(responseBody)
    
  } catch (error) {
    next(error)
  }  
   
}
const login = async(req, res, next)=>{
  try {
    const {httpStatusCode, responseBody} = await authService.loginUser( req.body);
    console.log(httpStatusCode, responseBody)
    res.status(httpStatusCode).json(responseBody)
    
  } catch (error) {
    next(error)
  }  
   
}

export default {signup, login}