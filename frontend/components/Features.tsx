const features = [
  {
    title: "Upload PDF",
    description:
      "Upload financial reports, research papers, contracts, and other PDF documents.",
    icon: "📄"
  },
  {
    title: "AI Chat",
    description:
      "Ask questions about your documents and receive intelligent answers instantly.",
    icon: "🤖"
  },
  {
    title: "AI Summaries",
    description:
      "Generate concise summaries of lengthy documents with one click.",
    icon: "📝"
  },
  {
    title: "Semantic Search",
    description: "Search documents using meaning instead of exact keywords.",
    icon: "🔍"
  },
  {
    title: "Lightning Fast",
    description:
      "Get AI-powered responses within seconds using Retrieval-Augmented Generation.",
    icon: "⚡"
  },
  {
    title: "Secure Storage",
    description:
      "Your uploaded documents are stored securely and accessed only by you.",
    icon: "🔒"
  }
];

export default function Features() {
  return (
    <section id="features">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center text-4xl font-bold text-white">
          Powerful Features
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-slate-400">
          Everything you need to understand your documents using Artificial
          Intelligence.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-500 hover:shadow-lg"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
