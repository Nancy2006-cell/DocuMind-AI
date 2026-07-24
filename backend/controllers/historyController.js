import Chat from "../models/Chat.js";

export const getHistory = async (req, res) => {
  try {
    const { pdfId } = req.query;

    if (!pdfId) {
      return res.status(400).json({
        success: false,
        message: "PDF ID is required",
      });
    }

    const chats = await Chat.find({
      pdf: pdfId,
    }).sort({ createdAt: 1 });

    res.json({
      success: true,
      chats,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch history",
    });
  }
};