"use client";

import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useUser();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-cyan-400">
          DocuMind AI
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>

          <Link href="/dashboard" className="hover:text-cyan-400 transition">
            Dashboard
          </Link>

          <Link href="/upload" className="hover:text-cyan-400 transition">
            Upload
          </Link>

          <Link href="/chat" className="hover:text-cyan-400 transition">
            Chat
          </Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          {isSignedIn ? (
            <UserButton />
          ) : (
            <>
              <Link
                href="/sign-in"
                className="rounded-lg border border-slate-600 px-5 py-2 hover:bg-slate-800"
              >
                Login
              </Link>

              <Link
                href="/sign-up"
                className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold hover:bg-cyan-600"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
