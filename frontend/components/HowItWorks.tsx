const steps = [
  {
    number: "01",
    title: "Upload PDF",
    description:
      "Upload any PDF document such as research papers, contracts, books, or reports.",
  },
  {
    number: "02",
    title: "AI Understands",
    description:
      "Our AI processes your document, understands the content, and builds searchable knowledge.",
  },
  {
    number: "03",
    title: "Ask Anything",
    description:
      "Ask questions in natural language and receive accurate answers with context.",
  },
  {
    number: "04",
    title: "Start Chatting",
    description: 
       "Interact with your document using natural language and receive instant, AI-powered answers with relevant context."
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-white">
          How It Works
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-slate-400">
          Three simple steps to chat with your documents using Artificial
          Intelligence.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-8 transition hover:border-cyan-500"
            >
              <div className="text-5xl font-extrabold text-cyan-500">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {step.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}