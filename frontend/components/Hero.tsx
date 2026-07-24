"use client";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function Hero() {
  const { isSignedIn } = useUser();
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      {/* Badge */}
      <span className="rounded-full border border-cyan-500 px-4 py-1 text-sm text-cyan-400">
        🚀 AI Powered Document Intelligence
      </span>

      {/* Heading */}
      <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
        Understand Your Documents
        <br />
        <span className="text-cyan-400">With AI</span>
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-2xl text-lg text-slate-300">
        Upload PDFs, chat with your documents, generate AI summaries, ask
        intelligent questions, and extract valuable insights within seconds.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex gap-5">
       
        <Link 
          href= {isSignedIn ? "/dashboard" : "/sign-up"}
          className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold transition hover:bg-cyan-600"
         >
         {isSignedIn ? "Go to Dashboard" : "Get Started"}
        </Link>

        <Link
          href="/#features"
          className="rounded-xl border border-slate-600 px-7 py-3 transition hover:bg-slate-800"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
