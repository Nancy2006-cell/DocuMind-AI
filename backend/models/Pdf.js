import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema(
  {
    originalName: {
      type: String,
      required: true,
    },

    filename: {
      type: String,
      required: true,
    },

    path: {
      type: String,
      required: true,
    },

    size: {
      type: Number,
      required: true,
    },

    extractedText: {
      type: String,
      default: "",
    },

    uploadedBy: {
      type: String,
      default: "Demo User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Pdf", pdfSchema);