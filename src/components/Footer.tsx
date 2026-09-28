import Link from "next/link";
import Image from "next/image";
import { COMPANY, NAV_LINKS, SERVICES } from "@/config/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Image src="/logo/logo-white.png" alt={COMPANY.legalName} width={126} height={58} />
            <p style={{ marginTop: 16, maxWidth: 320 }}>
              Government contracting firm providing HVAC, facility maintenance, and real estate
              solutions to federal, state, and local agencies.
            </p>
            <p className="footer-ids">
              <strong>UEI</strong> {COMPANY.uei} &nbsp;·&nbsp; <strong>CAGE</strong> {COMPANY.cage}
              <br />
              <strong>SAM.gov</strong> {COMPANY.samStatus}
            </p>
          </div>
          <nav aria-label="Footer">
            <h4>Site</h4>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
              <li><Link href="/request-capabilities">Request Capabilities</Link></li>
            </ul>
          </nav>
          <div>
            <h4>Capabilities</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.slug}><Link href={`/capabilities#${s.slug}`}>{s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>{COMPANY.legalName}</li>
              <li><a href={`tel:${COMPANY.officePhoneHref}`}>Office {COMPANY.officePhone}</a></li>
              <li><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {COMPANY.legalName}. All rights reserved.</span>
          <span><Link href="/privacy">Privacy</Link></span>
        </div>
      </div>
    </footer>
  );
}
