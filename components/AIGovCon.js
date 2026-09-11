import ImageSlot from "./ImageSlot";

const USE_CASES = [
  "Proposal development",
  "Opportunity research",
  "Document analysis",
  "Administrative workflows",
  "Knowledge management",
  "Internal productivity",
];

export default function AIGovCon() {
  return (
    <section id="ai-govcon" className="py-24 md:py-32">
      <div className="shell grid grid-cols-1 gap-16 md:grid-cols-12 md:items-center">
        <div className="md:col-span-6">
          <ImageSlot
            src="/images/ai-govcon.jpg"
            alt="AI integration for government contractors"
            label="Drop ai-govcon.jpg in /public/images/"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div className="md:col-span-6">
          <h2 className="font-display text-4xl font-bold tracking-tightest text-white md:text-5xl">
            AI, applied where it matters.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-steel">
            We help government contractors adopt AI as a working tool inside
            the business — not as a headline feature. Used well, it shortens
            the distance between a solicitation landing in your inbox and a
            compliant proposal going out the door.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            {USE_CASES.map((item) => (
              <li
                key={item}
                className="border-t border-graphite pt-3 text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
