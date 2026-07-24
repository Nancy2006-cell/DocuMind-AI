"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import StatCard from "@/components/StatCard";
import DocumentCard from "@/components/DocumentCard";
import ActionButton from "@/components/ActionButton";

type Pdf = {
  _id: string;
  originalName: string;
  filename: string;
  size: number;
  createdAt: string;
};

export default function DashboardPage() {
  const [pdfs, setPdfs] = useState<Pdf[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPDFs();
  }, []);

  const fetchPDFs = async () => {
    try {
      const res = await axios.get(
  `${process.env.NEXT_PUBLIC_API_URL}/api/upload`
);
      setPdfs(res.data.pdfs);
    } catch (error) {
      console.log("Error fetching PDFs:", error);
    } finally {
      setLoading(false);
    }
  };

  const totalStorage = (
  pdfs.reduce((sum, pdf) => sum + (pdf.size || 0), 0) /
  (1024 * 1024)
).toFixed(2);

  const deletePDF = async (id: string) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this PDF?"
  );

  if (!confirmDelete) return;

  try {
    await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/api/upload/${id}`
    );

    fetchPDFs();
  } catch (error) {
    console.log(error);
  }
};

  const stats = [
    {
      title: "Total PDFs",
      value: pdfs.length.toString(),
      icon: "📄"
    },
    {
    title: "AI Chats",
    value: "--",
    icon: "💬"
},
    {
      title: "Storage Used",
      value: `${totalStorage} MB`,
      icon: "💾"
    },
    {
      title: "Current Plan",
      value: "Pro",
      icon: "⭐"
    }
  ];

  const actions = [
    {
      title: "Upload PDF",
      icon: "📤",
      href: "/upload"
    },
    {
      title: "Start AI Chat",
      icon: "💬",
      href: "/chat"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-10 text-white">
      {/* Welcome */}
      <section>
        <h1 className="text-4xl font-bold">👋 Welcome Back!</h1>

        <p className="mt-3 text-lg text-slate-400">
          Manage your AI documents, chat with PDFs, and gain insights using
          DocuMind AI.
        </p>
      </section>

      {/* Stats */}
      <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </section>

      {/* Recent Documents */}
      <section className="mt-14">
        <h2 className="mb-6 text-3xl font-bold">📂 Recent Documents</h2>

        {loading ? (
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
    <p className="animate-pulse text-slate-400">
        Loading PDFs...
    </p>
</div>
        ) : pdfs.length === 0 ? (
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
            <p className="text-slate-400">No PDFs uploaded yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {pdfs.map((pdf) => (
              <DocumentCard
                key={pdf._id}
                id={pdf._id}
                fileName={pdf.originalName}
                filename={pdf.filename}
                date={new Date(pdf.createdAt).toLocaleDateString()}
                onDelete={() => deletePDF(pdf._id)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Quick Actions */}
      <section className="mt-14">
        <h2 className="mb-6 text-3xl font-bold">⚡ Quick Actions</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {actions.map((action) => (
            <ActionButton
              key={action.title}
              title={action.title}
              icon={action.icon}
              href={action.href}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
