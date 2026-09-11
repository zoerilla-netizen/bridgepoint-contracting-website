import { executionSteps } from "@/config/siteConfig";
import SectionLabel from "./SectionLabel";

export default function ProcessSection() {
  return (
    <section className="border-b border-black/10 bg-charcoal py-20 text-white md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="max-w-2xl">
          <SectionLabel>
            <span className="text-white/50">How We Execute</span>
          </SectionLabel>
          <h2 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-tight md:text-[44px]">
            From opportunity to execution.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {executionSteps.map((step) => (
            <div key={step.num} className="border-t border-white/20 pt-6">
              <span className="block text-[15px] font-light text-white/40">
                {step.num}
              </span>
              <h3 className="mt-4 text-[19px] font-medium">{step.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/60">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
