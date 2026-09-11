import type { Metadata } from "next";
import Image from "next/image";
import { imagePaths, principles } from "@/config/siteConfig";
import SectionLabel from "@/components/SectionLabel";
import CapabilitiesCTA from "@/components/CapabilitiesCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bridgepoint Contracting is a federal contracting company focused on construction, facility maintenance, and real estate.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-black/10 pt-20 md:pt-24">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-6">
              <SectionLabel>About</SectionLabel>
              <h1 className="mt-4 text-[38px] font-semibold leading-[1.08] tracking-tight text-black md:text-[52px]">
                Built to execute.
              </h1>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-graphite">
                Bridgepoint Contracting is a federal contracting company
                focused on construction, facility maintenance, and real
                estate.
              </p>
              <p className="mt-4 max-w-md text-[16px] leading-relaxed text-graphite">
                We identify opportunities, develop contracting strategies,
                assemble qualified execution resources, and manage the
                business and contractual requirements necessary to deliver
                successful outcomes.
              </p>
            </div>

            <div className="md:col-span-6">
              {/*
                REPLACE IMAGE HERE:
                Swap /public/images/about-main.jpg with your own
                image (portrait orientation, at least 1400x1700px).
              */}
              <div className="corner-frame relative aspect-[4/5] w-full overflow-hidden bg-mist text-charcoal">
                <Image
                  src={imagePaths.aboutMain}
                  alt="Bridgepoint Contracting"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <div key={principle.title} className="bg-white px-7 py-9">
                <h3 className="section-label text-[13px] text-black">
                  {principle.title}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-graphite">
                  {principle.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CapabilitiesCTA />
    </>
  );
}
