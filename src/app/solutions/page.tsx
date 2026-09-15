import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WhatWeDo from "@/components/WhatWeDo";
import BridgepointModel from "@/components/BridgepointModel";
import PageCTA from "@/components/PageCTA";
import { contactInfo } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Four ways Bridgepoint works with federal contractors: Federal Contracting Support, Teaming & Contract Execution, Federal Contractor Setup & Training, and Prime Contracting.",
};

export default function SolutionsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Solutions"
        title="Four ways we work."
        intro="From qualifying your first federal pursuit to executing as the prime contractor, Bridgepoint's solutions meet you where you are."
      />
      <WhatWeDo showLink={false} showHeading={false} />
      <BridgepointModel />
      <PageCTA
        title="Ready to talk through your requirement?"
        buttons={[
          {
            label: "Team With Bridgepoint",
            href: "/team-with-us",
            primary: true,
          },
          {
            label: "Government Agencies",
            href: "/government",
          },
          {
            label: "Contact Bridgepoint",
            href: `mailto:${contactInfo.email}?subject=${encodeURIComponent("Solutions Inquiry")}`,
          },
        ]}
      />
    </main>
  );
}
