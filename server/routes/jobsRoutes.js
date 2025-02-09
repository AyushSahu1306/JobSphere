import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import {
  createJob,
  deleteJob,
  getJobById,
  getJobPosts,
  updateJob,
} from "../controllers/jobController.js";

const router = express.Router();

router.post("/upload-job", userAuth, createJob);
router.put("/update-job/:jobId", userAuth, updateJob);

router.get("/find-jobs", getJobPosts);
router.get("/get-job-detail/:id", getJobById);

router.delete("/delete-job/:id", userAuth, deleteJob);

export default router;
