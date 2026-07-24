import express from "express";
import { getHistory } from "../controllers/historyController.js";

const router = express.Router();

// Get chat history for a PDF
router.get("/", getHistory);

export default router;