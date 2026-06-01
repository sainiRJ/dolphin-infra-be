import express from "express";
import userRoutes from "./auth.route.js";
import serviceRoute from "./service.route.js"
import contactRoute from "./contact.route.js"
import testimonialRoute from "./testimonial.route.js"
import faqRoutes from "./faq.route.js"

const router = express.Router();

router.use('/user', userRoutes);
router.use('/service', serviceRoute)
router.use('/contact', contactRoute)
router.use('/testimonial', testimonialRoute)
router.use('/faq', faqRoutes)

export default router;