import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { COMPANY, NAICS_GROUPS } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Contracting Information",
  description:
    "Bridgepoint Contracting LLC UEI, CAGE code, SAM.gov registration status, NAICS codes, and points of contact for government acquisition personnel.",
};

export default function ContractingInformationPage() {
  return (
    <>
      <PageHero eyebrow="Contracting Information" title="Registration and procurement details">
        Identifiers and contact information for contracting officers, contract specialists, and acquisition
        personnel evaluating Bridgepoint Contracting LLC.
      </PageHero>

      <section className="section">
        <div className="container two-col" style={{ alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: "1.6rem", marginBottom: 18 }}>Company identification</h2>
            <table className="data-table">
              <tbody>
                <tr><th scope="row">Legal Name</th><td>{COMPANY.legalName}</td></tr>
                <tr><th scope="row">UEI</th><td className="mono">{COMPANY.uei}</td></tr>
                <tr><th scope="row">CAGE Code</th><td className="mono">{COMPANY.cage}</td></tr>
                <tr>
                  <th scope="row">Address</th>
                  <td>{COMPANY.addressLine1}<br />{COMPANY.addressLine2}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2 style={{ fontSize: "1.6rem", marginBottom: 18 }}>SAM.gov registration</h2>
            <table className="data-table">
              <tbody>
                <tr><th scope="row">SAM.gov Status</th><td><span className="status-pill">{COMPANY.samStatus}</span></td></tr>
                <tr><th scope="row">Registration Expiration</th><td className="mono">{COMPANY.samExpiration}</td></tr>
                <tr><th scope="row">Registration Search</th><td>Search UEI <strong>{COMPANY.uei}</strong> at <a href="https://sam.gov" rel="noopener noreferrer" target="_blank">SAM.gov</a></td></tr>
              </tbody>
            </table>
            <h2 style={{ fontSize: "1.6rem", margin: "36px 0 18px" }}>Contact</h2>
            <table className="data-table">
              <tbody>
                <tr><th scope="row">Point of Contact</th><td>Managing Director</td></tr>
                <tr><th scope="row">Email</th><td><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></td></tr>
                <tr><th scope="row">Office</th><td><a href={`tel:${COMPANY.officePhoneHref}`}>{COMPANY.officePhone}</a></td></tr>
                <tr><th scope="row">Website</th><td>{COMPANY.domain}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 12 }}>
            <p className="eyebrow">NAICS Codes</p>
            <h2>Registered NAICS codes</h2>
            <p>Codes below are those registered in its SAM.gov profile, grouped by service relevance.</p>
          </div>
          {NAICS_GROUPS.map((g) => (
            <div className="naics-group" key={g.group}>
              <h3>{g.group}</h3>
              <table className="naics-table" style={{ background: "#fff" }}>
                <tbody>
                  {g.codes.map((c) => (
                    <tr key={c.code}>
                      <td>{c.code}</td>
                      <td>{c.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Additional Information</p>
            <h2 style={{ marginTop: 12 }}>Need more than what’s listed here?</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Agency representatives can request Bridgepoint’s capability statement or additional company
              information through a short request form.
            </p>
          </div>
          <div className="stack">
            <ul className="check-list">
              <li>Capability statement</li>
              <li>Additional company and registration information</li>
              <li>Discussion of a specific requirement or opportunity number</li>
            </ul>
            <div className="btn-row">
              <Link href="/request-capabilities" className="btn btn-primary">Request Capabilities</Link>
              <Link href="/contact" className="btn btn-outline-dark">Contact Bridgepoint</Link>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
