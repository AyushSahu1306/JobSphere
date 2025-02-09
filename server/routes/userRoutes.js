import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import { getUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

// GET user
router.post("/get-user", userAuth, getUser);

// UPDATE user
router.put("/update-user", userAuth, updateUser);

export default router;
