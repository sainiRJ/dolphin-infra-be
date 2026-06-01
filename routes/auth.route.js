import express from "express"
import {signupSchema, loginSchema} from "../validations/auth.validation.js"
import validate from "../middlewares/validate.js"
import authController from "../controllers/auth.controller.js"

const router = express.Router();

router.post('/signup', validate(signupSchema), authController.signup)
router.post('/login', validate(loginSchema), authController.login)


export default router;

