import ImageSlot from "./ImageSlot";

export default function About() {
  return (
    <section id="about" className="border-t border-hairline py-24 md:py-32">
      <div className="shell grid grid-cols-1 gap-16 md:grid-cols-12 md:items-center">
        <div className="md:col-span-6">
          <h2 className="font-display text-4xl font-bold tracking-tightest text-white md:text-5xl">
            Bridging business & government.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-steel">
            Bridgepoint Contracting is a business development consulting
            firm built for one purpose: helping companies enter, compete
            in, and grow within the federal marketplace.
          </p>
          <p className="mt-5 leading-relaxed text-steel">
            We work as a strategic partner — translating agency requirements
            into a plan your business can actually execute, and standing
            beside you from first opportunity to contract performance.
          </p>
        </div>

        <div className="md:col-span-6">
          <ImageSlot
            src="/images/about.jpg"
            alt="Bridgepoint Contracting team"
            label="Drop about.jpg in /public/images/"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
