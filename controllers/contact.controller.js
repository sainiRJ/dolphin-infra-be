import contactService from "../services/contact.service.js"

const createContact = async(req, res, next)=>{
  try {
    const {httpStatusCode, responseBody} = await contactService.createContact( req.body);
    console.log(httpStatusCode, responseBody)
    res.status(httpStatusCode).json(responseBody)
    
  } catch (error) {
    next(error)
  }  
   
}

const getAllContact = async (req, res, next) => {
    try {
        const { httpStatusCode, responseBody } = await contactService.getAllContact();
        res.status(httpStatusCode).json(responseBody);
    } catch (error) {
        next(error);
    }
};


export default {createContact, getAllContact}