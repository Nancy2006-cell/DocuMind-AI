import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },

    answer: {
      type: String,
      required: true,
    },

    pdf: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pdf",
      required: true,
    },

    user: {
      type: String,
      default: "Demo User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Chat", chatSchema);