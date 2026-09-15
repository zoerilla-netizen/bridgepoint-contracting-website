import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Industries from "@/components/Industries";
import PageCTA from "@/components/PageCTA";
import { govCredentials, imagePaths, contactInfo, GOOGLE_CAPABILITIES_FORM_URL } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Government Agencies",
  description:
    "Bridgepoint pursues and executes federal contracts by combining internal contract management with qualified subcontractors, suppliers, and industry partners.",
};

export default function GovernmentPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Government Agencies"
        title="Capability meets execution."
        intro="Bridgepoint pursues and executes federal contracts by combining internal contract management with qualified subcontractors, suppliers, and industry partners."
      />

      <section className="relative aspect-[21/9] w-full overflow-hidden bg-navyDeep">
        <Image
          src={imagePaths.government}
          alt="Federal government infrastructure"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navyDeep/60 to-transparent" />
      </section>

      <section className="bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="label text-[12px] text-electric">Credentials</p>
              <h2 className="mt-4 text-[28px] font-bold leading-tight text-navy md:text-[34px]">
                Registered and ready.
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 gap-px overflow-hidden border border-lightgray bg-lightgray sm:grid-cols-2">
                {govCredentials.map((cred) => (
                  <div key={cred.label} className="bg-white px-6 py-6">
                    <p className="label text-[11px] text-steel">{cred.label}</p>
                    <p className="mt-2 font-mono text-[16px] text-navy">{cred.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Industries />

      <PageCTA
        title="Request Bridgepoint's capability statement."
        buttons={[
          {
            label: "Download Capability Statement",
            href: GOOGLE_CAPABILITIES_FORM_URL,
            primary: true,
            external: true,
          },
          {
            label: "Contact Bridgepoint",
            href: `mailto:${contactInfo.email}?subject=${encodeURIComponent("Government Agency Inquiry")}`,
          },
        ]}
      />
    </main>
  );
}
