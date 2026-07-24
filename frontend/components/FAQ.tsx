"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is DocuMind AI?",
    answer:
      "DocuMind AI allows you to upload PDF documents and interact with them using Artificial Intelligence.",
  },
  {
    question: "Is my uploaded data secure?",
    answer:
      "Yes. Your documents remain private and are processed securely.",
  },
  {
    question: "Which file types are supported?",
    answer:
      "Currently DocuMind AI supports PDF documents.",
  },
  {
    question: "Can I ask unlimited questions?",
    answer:
      "Yes. Once your document is processed you can ask multiple questions.",
  },
  {
    question: "Does it support scanned PDFs?",
    answer:
      "Yes, support for scanned PDFs with OCR will be available in future updates.",
  },
  {
     question: "Can I upload multiple PDF files?",
    answer:
      "Yes. You can upload and manage multiple PDF documents from your personal dashboard after signing in.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-4xl font-bold text-white">
          Frequently Asked Questions
        </h2>

        <p className="mt-5 text-center text-slate-400">
          Everything you need to know about DocuMind AI.
        </p>

        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-800 bg-slate-950"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <span className="text-2xl text-cyan-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}