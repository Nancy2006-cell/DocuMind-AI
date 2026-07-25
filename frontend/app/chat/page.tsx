"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

type Pdf = {
  _id: string;
  originalName: string;
};

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [currentPDF, setCurrentPDF] = useState<Pdf>({
    _id: "",
    originalName: ""
  });

  const [pdfs, setPdfs] = useState<Pdf[]>([]);
  const [search, setSearch] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hello! I'm DocuMind AI. Upload a PDF and ask me anything."
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto Scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages, loading]);

  // Initial Load
  useEffect(() => {
    fetchLatestPDF();
    fetchPDFs();
    inputRef.current?.focus();
  }, []);

  // Load history whenever PDF changes
  useEffect(() => {
    if (currentPDF._id) {
      fetchHistory();
    }
  }, [currentPDF._id]);

  // -----------------------------
  // Fetch History
  // -----------------------------

  const fetchHistory = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/history`,
        {
          params: {
            pdfId: currentPDF._id,
          },
        }
      );
    
    type Chat = {
      question: string;
      answer: string;
    };

    const chats: Chat[] = res.data.chats;

    if (chats.length === 0) {
      setMessages([
        {
          role: "assistant",
          text: "Hello! I'm DocuMind AI. Upload a PDF and ask me anything.",
        },
      ]);
      return;
    }

    const history: ChatMessage[] = [];

    chats.forEach((chat) => {
      history.push({
        role: "user",
        text: chat.question,
      });

      history.push({
        role: "assistant",
        text: chat.answer,
      });
    });

    setMessages(history);
  } catch (error) {
    console.log(error);
  }
};
  // -----------------------------
  // Fetch Latest PDF
  // -----------------------------

  const fetchLatestPDF = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/upload/latest`
      );

      setCurrentPDF(res.data.pdf);
    } catch (error) {
      console.log(error);
    }
  };

  // -----------------------------
  // Fetch All PDFs
  // -----------------------------

  const fetchPDFs = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/upload`
      );

      setPdfs(res.data.pdfs);
    } catch (error) {
      console.log(error);
    }
  };

  // -----------------------------
  // Send Message
  // -----------------------------

  const handleSend = async () => {
    if (!message.trim()) return;

    if (!currentPDF._id) {
      alert("Please upload/select a PDF first.");
      return;
    }

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage
      }
    ]);

    setMessage("");

    inputRef.current?.focus();

    setLoading(true);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/chat`, {
        message: userMessage,
        pdfId: currentPDF._id
      });

      await fetchHistory();
    } catch (error) {
      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "⚠️ Unable to contact AI server."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // Search Filter
  // -----------------------------

  const filteredMessages = messages.filter((msg) =>
    msg.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-24 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8">
        {/* ================= Sidebar ================= */}

        <aside className="col-span-3 rounded-xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-xl font-bold">📂 Conversations</h2>

          <p className="mt-2 mb-5 text-sm text-slate-400">
            {pdfs.length} PDF{pdfs.length !== 1 ? "s" : ""} uploaded
          </p>

          <div className="space-y-3">
            {pdfs.length === 0 ? (
              <div className="rounded-lg bg-slate-800 p-4 text-center text-slate-400">
                No PDFs uploaded yet.
              </div>
            ) : (
              pdfs.map((pdf) => (
                <div
                  key={pdf._id}
                  onClick={() => {
                    setSearch("");
                    setCurrentPDF(pdf);
                  }}
                  className={`cursor-pointer rounded-lg p-3 transition-all duration-200 ${
                    currentPDF._id === pdf._id
                      ? "bg-cyan-600"
                      : "bg-slate-800 hover:bg-slate-700"
                  }`}
                >
                  📄 {pdf.originalName}
                </div>
              ))
            )}
          </div>
        </aside>

        {/* ================= Main Chat ================= */}

        <section className="col-span-9">
          <h1 className="text-4xl font-bold">🤖 AI Chat</h1>

          <p className="mt-3 text-slate-400">
            Ask questions about your uploaded PDF.
          </p>

          {/* Current PDF */}

          <div className="mt-6 rounded-xl border border-cyan-500/30 bg-slate-900 p-4">
            <p className="text-sm text-slate-400">Current PDF</p>

            <p className="mt-2 text-lg font-semibold">
              {currentPDF._id
                ? `📄 ${currentPDF.originalName}`
                : "No PDF Selected"}
            </p>
          </div>

          {/* Search */}

          <div className="mt-6">
            <input
              type="text"
              placeholder="🔍 Search previous chats..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
            />
          </div>

          {/* ================= Chat Box ================= */}

          <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <div className="h-[500px] space-y-4 overflow-y-auto">
              {filteredMessages.length === 0 ? (
                <div className="py-12 text-center text-slate-400">
                  {search
                    ? "No matching conversations found."
                    : "Start chatting with your PDF."}
                </div>
              ) : (
                filteredMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[75%] rounded-2xl px-5 py-3 ${
                        msg.role === "user"
                          ? "bg-cyan-500 text-white"
                          : "bg-slate-800 text-slate-200"
                      }`}
                    >
                      <p className="mb-1 text-xs font-semibold">
                        {msg.role === "assistant" ? "🤖 DocuMind AI" : "👤 You"}
                      </p>

                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  </div>
                ))
              )}

              {/* Loading */}

              {loading && (
                <div className="flex justify-start">
                  <div className="max-w-[75%] rounded-2xl bg-slate-800 px-5 py-3">
                    <p className="mb-2 text-xs font-semibold">🤖 DocuMind AI</p>

                    <div className="flex gap-2 text-lg">
                      <span className="animate-bounce">•</span>

                      <span className="animate-bounce delay-100">•</span>

                      <span className="animate-bounce delay-200">•</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={bottomRef}></div>
            </div>
            {/* ================= Input Area ================= */}

            <div className="mt-8 flex gap-4">
              <input
                ref={inputRef}
                type="text"
                value={message}
                disabled={loading || !currentPDF._id}
                placeholder={
                  currentPDF._id
                    ? "Ask DocuMind AI about your uploaded PDF..."
                    : "Upload or select a PDF first..."
                }
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
                className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500 disabled:cursor-not-allowed disabled:bg-slate-700"
              />

              <button
                onClick={handleSend}
                disabled={loading || !message.trim() || !currentPDF._id}
                className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:bg-slate-600"
              >
                {loading ? "Thinking..." : "Send"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
