const STEPS = [
  {
    number: "01",
    title: "Identify",
    detail: "Find opportunities aligned with the company's capabilities.",
  },
  {
    number: "02",
    title: "Qualify",
    detail: "Evaluate requirements, competition, compliance, and fit.",
  },
  {
    number: "03",
    title: "Compete",
    detail: "Develop the strategy and proposal needed to pursue the opportunity.",
  },
  {
    number: "04",
    title: "Perform",
    detail: "Support contract administration and successful execution.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="border-t border-hairline bg-charcoal py-24 md:py-32">
      <div className="shell">
        <h2 className="mb-16 font-display text-4xl font-bold tracking-tightest text-white md:text-5xl">
          Our approach.
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.number}>
              <span className="font-display text-sm font-bold text-steel">
                {step.number}
              </span>
              <div className="mt-4 border-t border-graphite pt-4">
                <h3 className="font-display text-2xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-steel">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
