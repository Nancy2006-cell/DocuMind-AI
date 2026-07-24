import Pdf from "../models/Pdf.js";
import { extractPDFText } from "../services/pdfService.js";

export const uploadPDF = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF uploaded",
      });
    }

    console.log("========== EXTRACTING PDF ==========");

    // Extract real text from PDF
    const extractedText = await extractPDFText(req.file.path);

    console.log("========== PDF TEXT ==========");
    console.log(extractedText.substring(0, 1000)); // Print first 1000 characters
    console.log("==============================");

    console.log("========== EXTRACTION COMPLETE ==========");

    // Save PDF information in MongoDB
    const pdf = await Pdf.create({
      originalName: req.file.originalname,
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
      extractedText,
    });

    res.status(201).json({
      success: true,
      message: "PDF uploaded successfully",
      pdf,
    });

  } catch (error) {
    console.error("========== UPLOAD ERROR ==========");
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Upload Failed",
    });
  }
};

export const getAllPDFs = async (req, res) => {
  try {
    const pdfs = await Pdf.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      pdfs,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch PDFs",
    });
  }
};

export const getLatestPDF = async (req, res) => {
  try {
    const pdf = await Pdf.findOne().sort({ createdAt: -1 });

    if (!pdf) {
      return res.status(404).json({
        success: false,
        message: "No PDF uploaded",
      });
    }

    res.json({
      success: true,
      pdf,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const deletePDF = async (req, res) => {
  try {
    const { id } = req.params;

    const pdf = await Pdf.findByIdAndDelete(id);

    if (!pdf) {
      return res.status(404).json({
        success: false,
        message: "PDF not found",
      });
    }

    res.json({
      success: true,
      message: "PDF deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Delete Failed",
    });
  }
};