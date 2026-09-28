import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/config/siteConfig";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="ids">
            <span>UEI <strong>{COMPANY.uei}</strong></span>
            <span>CAGE <strong>{COMPANY.cage}</strong></span>
            <span>SAM.gov <strong>{COMPANY.samStatus}</strong></span>
          </div>
          <div className="toplinks">
            <a href={`tel:${COMPANY.officePhoneHref}`}>{COMPANY.officePhone}</a>
            <span aria-hidden="true">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-row">
          <Link href="/" className="brand" aria-label={`${COMPANY.legalName} — home`}>
            <Image src="/logo/logo.png" alt={COMPANY.legalName} width={180} height={82} priority />
          </Link>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-label="Toggle navigation menu" />
          <label htmlFor="nav-toggle" className="nav-burger" aria-hidden="true">
            <span />
          </label>
          <nav className="main-nav" aria-label="Primary">
            <NavLinks />
          </nav>
        </div>
      </header>
    </>
  );
}
