import groq from "../config/groq.js";
import Chat from "../models/Chat.js";
import Pdf from "../models/Pdf.js";

export const chatWithAI = async (req, res) => {
  try {
    const { message, pdfId } = req.body;

    if (!message || !pdfId) {
      return res.status(400).json({
        success: false,
        message: "Message and PDF ID are required",
      });
    }

    const selectedPdf = await Pdf.findById(pdfId);

    if (!selectedPdf) {
      return res.status(404).json({
        success: false,
        message: "PDF not found",
      });
    }

    const prompt = `
You are DocuMind AI, an intelligent PDF assistant.

Your job is to answer ONLY using the uploaded document.

Rules:

1. Never invent information.
2. If the answer does not exist in the document, reply:

"I couldn't find this information in the uploaded document."

3. Format responses professionally.

4. Use headings whenever helpful.

5. Use bullet points for lists.

6. If the user asks for a summary:
- Give a concise summary.
- Mention important topics.
- Keep it easy to understand.

7. If the user asks for key points:
Return bullet points.

8. If the user asks to explain something:
Explain in simple English.

-----------------------
DOCUMENT
-----------------------

${selectedPdf.extractedText}

-----------------------
QUESTION
-----------------------

${message}
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2,
      max_tokens: 1024,
    });

    const answer = completion.choices[0].message.content;

    await Chat.create({
      pdf: pdfId,
      question: message,
      answer,
    });

    res.json({
      success: true,
      answer,
    });
  } catch (error) {
    console.log("========== GROQ ERROR ==========");
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Groq AI Error",
    });
  }
};