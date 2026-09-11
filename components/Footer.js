import { NAV_LINKS, SITE } from "../config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline py-14">
      <div className="shell flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg font-bold tracking-tightest text-white">
            BRIDGEPOINT CONTRACTING
          </p>
          <p className="mt-2 text-sm text-steel">{SITE.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-steel hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="shell mt-10 border-t border-hairline pt-6">
        <p className="text-xs text-steel">
          © {year} {SITE.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
