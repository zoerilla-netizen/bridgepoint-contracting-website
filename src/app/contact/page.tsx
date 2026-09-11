import type { Metadata } from "next";
import { contactInfo } from "@/config/siteConfig";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Bridgepoint Contracting about a federal opportunity, a partnership, or a general inquiry.",
};

const PATHS = [
  {
    title: "Federal Opportunity",
    detail: "Have a federal requirement or opportunity to discuss?",
    href: `mailto:${contactInfo.email}?subject=${encodeURIComponent("Federal Opportunity")}`,
  },
  {
    title: "Partnership",
    detail: "Have capabilities that could support a federal requirement?",
    href: `mailto:${contactInfo.email}?subject=${encodeURIComponent("Partnership")}`,
  },
  {
    title: "General Inquiry",
    detail: "Contact Bridgepoint Contracting.",
    href: `mailto:${contactInfo.email}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-black/10 pt-20 md:pt-24">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-4 max-w-2xl text-[38px] font-semibold leading-[1.08] tracking-tight text-black md:text-[52px]">
            Let&apos;s talk about the requirement.
          </h1>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 md:grid-cols-3">
            {PATHS.map((path) => (
              <div key={path.title} className="flex flex-col justify-between bg-white px-7 py-9">
                <div>
                  <h2 className="text-[19px] font-semibold text-black">{path.title}</h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-graphite">
                    {path.detail}
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href={path.href}
                    className="section-label text-[12px] text-black underline underline-offset-4"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div>
              <p className="section-label text-[12px] text-steel">Phone</p>
              <a
                href={`tel:${contactInfo.phoneHref}`}
                className="mt-2 block text-[17px] text-charcoal hover:text-black"
              >
                {contactInfo.phone}
              </a>
            </div>
            <div>
              <p className="section-label text-[12px] text-steel">Email</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="mt-2 block text-[17px] text-charcoal hover:text-black"
              >
                {contactInfo.email}
              </a>
            </div>
            <div>
              <p className="section-label text-[12px] text-steel">Address</p>
              <p className="mt-2 text-[17px] text-charcoal">
                {contactInfo.addressLine1}
                <br />
                {contactInfo.addressLine2}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
