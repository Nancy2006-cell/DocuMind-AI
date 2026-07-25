import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import uploadRoutes from "./routes/uploadRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";
import path from "path";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
    "/uploads",
    express.static(path.join(process.cwd(), "uploads"))
);

app.use("/api/upload", uploadRoutes);

app.use("/api/chat", chatRoutes);

app.use("/api/history", historyRoutes);

app.get("/", (req, res) => {
    res.send("DocuMind AI Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});