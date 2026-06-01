import express from "express"
import {createServiceSchema, updateServiceSchema} from "../validations/service.validation.js"
import { authenticate, isAdmin } from "../middlewares/auth.middleware.js"
import validate from "../middlewares/validate.js"
import serviceController from "../controllers/service.controller.js"

const router = express.Router();

router.post('/create', authenticate,  isAdmin, validate(createServiceSchema), serviceController.createService)
router.patch('/update/:id', authenticate,  isAdmin, validate(updateServiceSchema), serviceController.updateService)
router.delete('/delete/:id', authenticate,  isAdmin, serviceController.deleteService)
router.get('', serviceController.getAllService)


export default router;

