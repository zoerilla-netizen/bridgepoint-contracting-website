import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import WhatWeDo from "@/components/WhatWeDo";
import BridgepointModel from "@/components/BridgepointModel";
import PageCTA from "@/components/PageCTA";
import { contactInfo, imagePaths } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Four services Bridgepoint offers federal contractors: Federal Contracting Support, Teaming & Contract Execution, Federal Contractor Setup & Training, and Prime Contracting.",
};

export default function SolutionsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Solutions"
        title="Our four services."
        intro="Bridgepoint is a federal contracting company. From qualifying your first federal pursuit to executing as the prime contractor, our services meet you where you are."
      />

      <section className="relative aspect-[21/9] w-full overflow-hidden bg-navyDeep">
        <Image
          src={imagePaths.solutionsBanner}
          alt="Bridgepoint team reviewing federal pursuit strategy"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navyDeep/50 to-transparent" />
      </section>

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
