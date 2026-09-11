// Add or remove industries here — the layout adjusts automatically.
const INDUSTRIES = [
  "Facility Maintenance",
  "HVAC",
  "Healthcare",
  "Construction & Specialty Trades",
  "Professional Services",
  "Technology",
  "Operations & Maintenance",
];

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="border-t border-hairline bg-charcoal py-24 md:py-32">
      <div className="shell">
        <div className="mb-14 max-w-xl">
          <h2 className="font-display text-4xl font-bold tracking-tightest text-white md:text-5xl">
            Who we help.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-steel">
            We work across industries — the common thread is a business
            that's ready to compete for federal work.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {INDUSTRIES.map((industry) => (
            <span
              key={industry}
              className="border border-graphite px-5 py-3 text-sm text-white"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
