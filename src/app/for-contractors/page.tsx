import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Industries from "@/components/Industries";
import PageCTA from "@/components/PageCTA";
import { verticals, contactInfo, imagePaths } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "For Contractors",
  description:
    "Bridgepoint helps capable businesses enter, compete in, and grow within the federal marketplace — through contracting support, teaming, and setup and training.",
};

const contractorVerticals = verticals.filter(
  (v) => v.audience === "contractor" || v.audience === "both"
);

export default function ForContractorsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="For Contractors"
        title="You bring the capability. We help build the opportunity."
        intro="Bridgepoint identifies federal opportunities and brings together the people, partnerships, and resources capable businesses need to compete and perform."
      />

      <section className="relative aspect-[21/9] w-full overflow-hidden bg-navyDeep">
        <Image
          src={imagePaths.forContractorsBanner}
          alt="A connected network of capable businesses"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navyDeep/50 to-transparent" />
      </section>

      <section className="bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-lightgray bg-lightgray md:grid-cols-2">
            {contractorVerticals.map((v) => (
              <div key={v.num} className="flex flex-col bg-white p-8 md:p-10">
                <span className="text-[13px] font-semibold text-electric">{v.num}</span>
                <h3 className="mt-3 text-[22px] font-bold text-navy">{v.name}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-steel">{v.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-electric hover:text-navy"
            >
              See full solutions
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Industries />

      <PageCTA
        title="Ready to see if your business is a fit?"
        buttons={[
          {
            label: "Get Started",
            href: `mailto:${contactInfo.email}?subject=${encodeURIComponent("Contractor Inquiry")}`,
            primary: true,
          },
          {
            label: "Explore Teaming",
            href: "/team-with-us",
          },
        ]}
      />
    </main>
  );
}
