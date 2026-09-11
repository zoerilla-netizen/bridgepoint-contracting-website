import type { Metadata } from "next";
import MarketsSection from "@/components/MarketsSection";
import CapabilitiesCTA from "@/components/CapabilitiesCTA";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Bridgepoint Contracting operates across construction, facility maintenance, and real estate, developing execution strategies around federal requirements.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <section className="border-b border-black/10 pt-20 md:pt-24">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
          <SectionLabel>Capabilities</SectionLabel>
          <h1 className="mt-4 max-w-2xl text-[38px] font-semibold leading-[1.08] tracking-tight text-black md:text-[52px]">
            Capabilities
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-graphite md:text-[18px]">
            Bridgepoint Contracting operates across construction, facility
            maintenance, and real estate, developing execution strategies
            around federal requirements and coordinating qualified resources
            to deliver successful contract performance.
          </p>
        </div>
      </section>

      <MarketsSection detailed showHeading={false} />
      <CapabilitiesCTA />
    </>
  );
}
