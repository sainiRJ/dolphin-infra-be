import express from "express";
import { authenticate, isAdmin } from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.js";
import testimonialController from "../controllers/testimonial.controller.js";
import { createTestimonialSchema, updateTestimonialSchema } from "../validations/testimonial.validation.js";

const router = express.Router();

router.post("/create", authenticate, isAdmin, validate(createTestimonialSchema), testimonialController.createTestimonial);
router.patch("/update/:id", authenticate, isAdmin, validate(updateTestimonialSchema), testimonialController.updateTestimonial);
router.delete("/delete/:id", authenticate, isAdmin, testimonialController.deleteTestimonial);
router.get("/", testimonialController.getTestimonial);


export default router;