import Link from "next/link";
import { navLinks, siteConfig, contactInfo } from "@/config/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white py-16">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[15px] font-semibold tracking-tight text-charcoal">
              {siteConfig.companyName}
            </p>
            <p className="mt-3 max-w-xs text-[14px] text-graphite">
              {siteConfig.positioning}
            </p>
            <p className="mt-1 text-[13px] text-steel">{siteConfig.markets}</p>
          </div>

          <div className="md:col-span-3">
            <p className="section-label text-[12px] text-steel">Navigation</p>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[14px] text-graphite hover:text-black"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <p className="section-label text-[12px] text-steel">Contact</p>
            <div className="mt-4 space-y-2 text-[14px] text-graphite">
              <p>
                <a href={`tel:${contactInfo.phoneHref}`} className="hover:text-black">
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-black">
                  {contactInfo.email}
                </a>
              </p>
              <p className="pt-2 text-steel">
                {contactInfo.addressLine1}
                <br />
                {contactInfo.addressLine2}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-black/10 pt-6 text-[13px] text-steel">
          © {year} {siteConfig.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
