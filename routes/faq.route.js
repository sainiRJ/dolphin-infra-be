import express from "express";
import { authenticate, isAdmin } from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.js";
import faqController from "../controllers/faq.controller.js";
import { createFaqSchema, updateFaqSchema } from "../validations/faq.validation.js";

const router = express.Router();

router.post("/create", authenticate, isAdmin, validate(createFaqSchema), faqController.createFaq);
router.put("/update/:id", authenticate, isAdmin, validate(updateFaqSchema), faqController.updateFaq);
router.delete("/delete/:id", authenticate, isAdmin, faqController.deleteFaq);
router.get("/", faqController.getAllFaq)

export default router;