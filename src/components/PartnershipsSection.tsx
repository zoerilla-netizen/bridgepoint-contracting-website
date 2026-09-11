import Image from "next/image";
import { imagePaths, contactInfo } from "@/config/siteConfig";
import SectionLabel from "./SectionLabel";

export default function PartnershipsSection() {
  return (
    <section className="border-b border-black/10 bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            {/*
              REPLACE IMAGE HERE:
              Swap /public/images/partners-01.jpg with your own
              image (landscape orientation, at least 1600x1000px).
            */}
            <div className="corner-frame relative aspect-[8/5] w-full overflow-hidden bg-charcoal text-white">
              <Image
                src={imagePaths.partners}
                alt="Bridgepoint Contracting partner execution team"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center md:col-span-6">
            <SectionLabel>Partnerships</SectionLabel>
            <h2 className="mt-4 text-[32px] font-semibold leading-[1.08] tracking-tight text-black md:text-[40px]">
              Have the capability. We may have the opportunity.
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-graphite">
              Bridgepoint works with qualified contractors, subcontractors,
              specialty trade firms, vendors, property professionals, and
              strategic partners to execute federal requirements.
            </p>
            <div className="mt-8">
              <a
                href={`mailto:${contactInfo.email}?subject=${encodeURIComponent("Partnership")}`}
                className="inline-flex items-center justify-center bg-black px-7 py-4 text-[13px] font-medium tracking-wide text-white transition-opacity hover:opacity-80"
              >
                PARTNER WITH BRIDGEPOINT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
