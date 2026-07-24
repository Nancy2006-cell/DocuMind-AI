"use client";

import { useState } from "react";
import axios from "axios";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
  try {
    if (!file) {
      alert("Please select a PDF first.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("pdf", file);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    alert(response.data.message);

    setFile(null);

  } catch (error) {
    console.error(error);
    alert("Upload Failed");
  } finally {
    setLoading(false);
  }
};
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-24 text-white">
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <h1 className="text-4xl font-bold">
          📄 Upload Your Document
        </h1>

        <p className="mt-3 text-slate-400">
          Upload a PDF and let DocuMind AI analyze, summarize, and answer
          questions about your document.
        </p>

        {/* Upload Box */}
        <div className="mt-10 rounded-2xl border-2 border-dashed border-slate-700 bg-slate-900 p-10 text-center">

          <div className="text-6xl">☁️</div>

          <h2 className="mt-4 text-2xl font-semibold">
            Drag & Drop your PDF here
          </h2>

          <p className="mt-3 text-slate-400">
            or click below to browse files
          </p>

          {/* Hidden Input */}
          <input
            id="pdf-upload"
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
              }
            }}
          />

          {/* Choose Button */}
          <label
            htmlFor="pdf-upload"
            className="mt-6 inline-block cursor-pointer rounded-lg bg-cyan-500 px-6 py-3 font-semibold transition hover:bg-cyan-600"
          >
            Choose PDF
          </label>

          <p className="mt-5 text-sm text-slate-500">
            Supported Format: PDF
          </p>

          <p className="text-sm text-slate-500">
            Maximum File Size: 20 MB
          </p>

        </div>

        {/* Selected File */}
        {file && (
          <div className="mt-8 rounded-xl border border-slate-700 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold">
              📄 Selected Document
            </h2>

            <p className="mt-4 text-lg font-medium text-cyan-400">
              {file.name}
            </p>

            <p className="mt-1 text-slate-400">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>

            <p className="mt-2 text-green-400">
              ✅ Ready to Upload
            </p>

          </div>
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={loading}
          className="mt-8 w-full rounded-xl bg-cyan-500 py-4 text-lg font-semibold transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Uploading..." : "🚀 Upload & Analyze"}
        </button>

      </div>
    </main>
  );
}