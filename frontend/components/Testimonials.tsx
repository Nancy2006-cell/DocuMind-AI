const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Research Student",
    review:
      "DocuMind AI helped me understand complex research papers in minutes. The AI chat feature is incredibly accurate.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Michael Brown",
    role: "Legal Consultant",
    review:
      "I can quickly search contracts and legal documents without reading hundreds of pages. Huge time saver!",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Emily Davis",
    role: "Software Engineer",
    review:
      "The document summaries are concise, and the semantic search makes finding information effortless.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "David Wilson",
    role: "Data Analyst",
    review:
      "The semantic search feature helped me find key insights from hundreds of pages in seconds.",
    rating: "⭐⭐⭐⭐⭐",
  }
];

export default function Testimonials() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-white">
          What Our Users Say
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-slate-400">
          Thousands of students and professionals trust DocuMind AI to understand their documents faster.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-8 transition hover:border-cyan-500 hover:shadow-lg"
            >
              <p className="text-xl text-yellow-400">
                {testimonial.rating}
              </p>

              <p className="mt-6 italic text-slate-300">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white">
                  {testimonial.name}
                </h3>

                <p className="text-slate-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}