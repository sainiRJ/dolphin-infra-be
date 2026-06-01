import express from "express"
import {createContactSchema} from "../validations/contact.validation.js"
import validate from "../middlewares/validate.js"
import { authenticate, isAdmin } from "../middlewares/auth.middleware.js";
import contactController from "../controllers/contact.controller.js"

const router = express.Router();

router.post('/create', validate(createContactSchema), contactController.createContact)
router.get("", authenticate, isAdmin, contactController.getAllContact);


export default router;

