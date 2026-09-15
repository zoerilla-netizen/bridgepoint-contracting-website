import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";
import { verticals, contactInfo, imagePaths } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Team With Us",
  description:
    "Bridgepoint identifies federal opportunities and forms strategic relationships with capable contractors, suppliers, and industry partners.",
};

const teaming = verticals.find((v) => v.slug === "teaming-contract-execution")!;

export default function TeamWithUsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Team With Us"
        title={teaming.tagline ?? "Partner. Pursue. Perform."}
        intro={teaming.description}
      />

      <section className="relative aspect-[21/9] w-full overflow-hidden bg-navyDeep">
        <Image
          src={imagePaths.teamWithUsBanner}
          alt="Partners joining hands together"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navyDeep/50 to-transparent" />
      </section>

      <section className="bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <p className="label text-[12px] text-electric">Relationship types</p>
          <h2 className="mt-4 max-w-lg text-[28px] font-bold leading-tight text-navy md:text-[34px]">
            We work through whichever structure fits the requirement.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-lightgray bg-lightgray sm:grid-cols-2">
            {teaming.relationshipTypes?.map((type, i) => (
              <div key={type} className="flex items-center gap-4 bg-white px-6 py-6">
                <span className="text-[13px] font-semibold text-electric">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] font-medium text-navy">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Have the capability? Let's start a conversation."
        buttons={[
          {
            label: "Start a Teaming Conversation",
            href: `mailto:${contactInfo.email}?subject=${encodeURIComponent("Teaming Opportunity")}`,
            primary: true,
          },
          {
            label: "See Full Solutions",
            href: "/solutions",
          },
        ]}
      />
    </main>
  );
}
