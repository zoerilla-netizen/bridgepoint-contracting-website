import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import TwoPathways from "@/components/TwoPathways";
import WhatWeDo from "@/components/WhatWeDo";
import BridgepointModel from "@/components/BridgepointModel";
import Industries from "@/components/Industries";
import TeamWithBridgepoint from "@/components/TeamWithBridgepoint";
import GovernmentAgencies from "@/components/GovernmentAgencies";
import AboutMission from "@/components/AboutMission";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Introduction />
      <TwoPathways />
      <WhatWeDo />
      <BridgepointModel />
      <Industries />
      <TeamWithBridgepoint />
      <GovernmentAgencies />
      <AboutMission />
      <FinalCTA />
    </main>
  );
}
