import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              DocuMind AI
            </h2>

            <p className="mt-4 text-slate-400">
              AI-powered document intelligence platform that lets you upload
              PDFs, chat with documents, and generate intelligent summaries.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3 text-slate-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/dashboard">Dashboard</Link></li>
              <li><Link href="/upload">Upload</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Features
            </h3>

            <ul className="mt-4 space-y-3 text-slate-400">
              <li>AI Chat</li>
              <li>PDF Summary</li>
              <li>Semantic Search</li>
              <li>Secure Storage</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <ul className="mt-4 space-y-3 text-slate-400">
              <li>
                Email:
                <br />
                support@documind.ai
              </li>

              <li>GitHub</li>

              <li>LinkedIn</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          © 2026 DocuMind AI. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}