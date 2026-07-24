import express from "express";
import multer from "multer";

import {
  uploadPDF,
  getAllPDFs,
  getLatestPDF,
  deletePDF,
} from "../controllers/uploadController.js";

const router = express.Router();

// Configure Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
});

// Routes
router.post("/", upload.single("pdf"), uploadPDF);

router.get("/", getAllPDFs);

router.get("/latest", getLatestPDF);

router.delete("/:id", deletePDF);

export default router;