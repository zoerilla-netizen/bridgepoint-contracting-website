const SERVICES = [
  {
    name: "Federal Contracting",
    detail: "Positioning your business to compete and win in the federal marketplace.",
  },
  {
    name: "Federal Opportunity Identification",
    detail: "Finding solicitations and contract vehicles that match your capabilities.",
  },
  {
    name: "Solicitation & SOW Analysis",
    detail: "Breaking down requirements into plain-English scope you can price and staff.",
  },
  {
    name: "Proposal Development",
    detail: "Building compliant, competitive proposals from outline to final submission.",
  },
  {
    name: "Contract Management Support",
    detail: "Keeping awarded contracts on schedule, in compliance, and on budget.",
  },
  {
    name: "Business Development",
    detail: "Building the pipeline and relationships that turn into future awards.",
  },
  {
    name: "GovCon Strategy",
    detail: "Long-range positioning — certifications, teaming, and past performance.",
  },
  {
    name: "AI Integration for Government Contractors",
    detail: "Practical AI tools for research, drafting, and internal operations.",
  },
  {
    name: "Compliance Support",
    detail: "Staying current on FAR, DFARS, and agency-specific requirements.",
  },
  {
    name: "Subcontractor & Vendor Coordination",
    detail: "Managing teaming partners and vendors through the bid and delivery cycle.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 md:py-32">
      <div className="shell">
        <div className="mb-16 max-w-xl">
          <h2 className="font-display text-4xl font-bold tracking-tightest text-white md:text-5xl">
            Built for the federal marketplace.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-steel">
            We help businesses identify opportunities, understand what
            agencies actually require, compete for the work, and prepare to
            perform once it's awarded.
          </p>
        </div>

        <div className="border-t border-hairline">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="group grid grid-cols-1 gap-2 border-b border-hairline py-7 transition-colors hover:bg-white md:grid-cols-12 md:gap-8 md:py-8"
            >
              <h3 className="font-display text-xl font-bold text-white group-hover:text-ink md:col-span-4">
                {service.name}
              </h3>
              <p className="text-steel group-hover:text-graphite md:col-span-8">
                {service.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
