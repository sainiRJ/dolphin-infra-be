import serviceService from "../services/service.service.js"

const createService = async(req, res, next)=>{
  try {
    const {httpStatusCode, responseBody} = await serviceService.createService( req.body);
    console.log(httpStatusCode, responseBody)
    res.status(httpStatusCode).json(responseBody)
    
  } catch (error) {
    next(error)
  }  
   
}

const getAllService = async(req, res, next)=>{
    try {
    const {httpStatusCode, responseBody} = await serviceService.getAllService();
    console.log(httpStatusCode, responseBody)
    res.status(httpStatusCode).json(responseBody)
    
    } catch (error) {
        next(error)
    }
}
const updateService = async(req, res, next)=>{
    try {
    const {httpStatusCode, responseBody} = await serviceService.updateService(req.params.id, req.body);
    console.log(httpStatusCode, responseBody)
    res.status(httpStatusCode).json(responseBody)
    
    } catch (error) {
        next(error)
    }
}
const deleteService = async(req, res, next)=>{
    try {
    const {httpStatusCode, responseBody} = await serviceService.deleteService(req.params.id);
    console.log(httpStatusCode, responseBody)
    res.status(httpStatusCode).json(responseBody)
    
    } catch (error) {
        next(error)
    }
}
export default {createService, getAllService, updateService, deleteService}