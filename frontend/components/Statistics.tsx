const stats = [
  {
    number: "10K+",
    label: "Documents Processed",
  },
  {
    number: "98%",
    label: "Answer Accuracy",
  },
  {
    number: "5K+",
    label: "Active Users",
  },
  {
    number: "24/7",
    label: "AI Availability",
  },
  {
    number: "99.9%",
    label: "Uptime"
  }
];

export default function Statistics() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-white">
          Trusted By Thousands
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-slate-400">
          Our AI platform helps students, professionals, and businesses understand documents faster.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-cyan-500 hover:shadow-lg"
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {stat.number}
              </h3>

              <p className="mt-4 text-lg text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}