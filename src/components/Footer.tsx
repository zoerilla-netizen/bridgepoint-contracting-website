import Image from "next/image";
import { siteConfig, contactInfo, logoPaths } from "@/config/siteConfig";

const FOOTER_LINKS = [
  { label: "Government Capabilities", href: "/government" },
  { label: "Contractor Services", href: "/solutions" },
  { label: "Teaming", href: "/team-with-us" },
  { label: "Resources", href: "/resources" },
  {
    label: "Contact",
    href: `mailto:${contactInfo.email}`,
  },
  { label: "Privacy", href: "/privacy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navyDeep px-6 py-16 text-white md:px-10">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src={logoPaths.light}
              alt={siteConfig.companyName}
              width={170}
              height={80}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-xs text-[14px] text-white/60">{siteConfig.motto}</p>
          </div>

          <div className="md:col-span-4">
            <p className="label text-[11px] text-white/40">Navigation</p>
            <nav className="mt-4 flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] text-white/70 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="label text-[11px] text-white/40">Contact</p>
            <div className="mt-4 space-y-2 text-[14px] text-white/70">
              <p>
                <a href={`tel:${contactInfo.phoneHref}`} className="hover:text-white">
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                  {contactInfo.email}
                </a>
              </p>
              <p className="pt-1 text-white/40">
                {contactInfo.addressLine1}
                <br />
                {contactInfo.addressLine2}
              </p>
              <p className="pt-2">
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-[13px] text-white/40">
          © {year} {siteConfig.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
