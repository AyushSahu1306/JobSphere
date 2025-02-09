import express from "express";
import { rateLimit } from "express-rate-limit";
import { register, signIn } from "../controllers/authController.js";

// IP rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window(15 mins)
  standardHeaders: true,
  legacyHeaders: false,
});

const router = express.Router();

// register routes
router.post("/register", limiter, register);
router.post("/login", signIn);

export default router;
