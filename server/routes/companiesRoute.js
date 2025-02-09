import express from "express";
import { rateLimit } from "express-rate-limit";
import {
  getCompanies,
  getCompanyById,
  getCompanyJobListing,
  getCompanyProfile,
  register,
  signIn,
  updateCompanyProfile,
} from "../controllers/companiesController.js";
import userAuth from "../middleware/authMiddleware.js";

const router = express.Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window(15 mins)
  standardHeaders: true,
  legacyHeaders: false,
});

// register
router.post("/register", limiter, register);

// login
router.post("/login", limiter, signIn);

// get data
router.post("/get-company-profile", userAuth, getCompanyProfile);
router.post("/get-company-joblisting", userAuth, getCompanyJobListing);
router.get("/", getCompanies);
router.get("/get-company/:id", getCompanyById);

// update data
router.put("/update-company", userAuth, updateCompanyProfile);

export default router;
