import SectionLabel from "./SectionLabel";

export default function ApproachSection() {
  return (
    <section className="border-b border-black/10 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-tight text-black md:text-[44px]">
              Built around execution.
            </h2>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-graphite">
              Bridgepoint Contracting approaches every requirement from an
              execution-first perspective. We identify the work, understand
              the requirement, build the appropriate team, establish the
              contractual framework, and manage performance through
              completion.
            </p>
          </div>

          <div className="flex items-start md:col-span-5 md:justify-end">
            <div className="border border-black/15 px-8 py-10">
              <p className="section-label text-[15px] text-black md:text-[16px]">
                Compliance is foundational.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
