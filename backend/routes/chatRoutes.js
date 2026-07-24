import express from "express";
import { chatWithAI } from "../controllers/chatController.js";

const router = express.Router();

// Chat with Gemini
router.post("/", chatWithAI);

export default router;