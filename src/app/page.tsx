import Hero from "@/components/Hero";
import MarketsSection from "@/components/MarketsSection";
import ProcessSection from "@/components/ProcessSection";
import ApproachSection from "@/components/ApproachSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import CapabilitiesCTA from "@/components/CapabilitiesCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarketsSection />
      <ProcessSection />
      <ApproachSection />
      <PartnershipsSection />
      <CapabilitiesCTA />
    </>
  );
}
