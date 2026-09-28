import Link from "next/link";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import { COMPANY, SERVICES } from "@/config/siteConfig";

const STEPS = [
  { t: "Understand the requirement", d: "We review the solicitation or contract — scope, clauses, schedule, deliverables, and terms — before we commit." },
  { t: "Coordinate qualified resources", d: "We identify and coordinate qualified industry resources matched to the trade, location, and requirement." },
  { t: "Manage performance", d: "We manage scheduling, communication, and quality oversight against the scope and schedule of the contract." },
  { t: "Document the work", d: "Performance records, reporting, and invoicing are maintained to support agency review and acceptance." },
  { t: "Close out", d: "We confirm required deliverables are complete and support closeout in accordance with the contract." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Government Contracting</p>
            <h1>Mission Critical Solutions</h1>
            <p className="hero-tags">HVAC &nbsp;|&nbsp; Facility Maintenance &nbsp;|&nbsp; Real Estate</p>
            <p className="hero-sub">
              Bridgepoint Contracting delivers HVAC, facility maintenance, and real estate solutions to
              federal, state, and local government agencies.
            </p>
            <p className="hero-sub">
              We combine responsive contract management, qualified industry resources, and disciplined
              execution to support agency requirements from award through completion.
            </p>
            <p className="hero-values">Compliance. Integrity. Execution.</p>
            <div className="btn-row">
              <Link href="/request-capabilities" className="btn btn-primary">Request Capabilities</Link>
              <Link href="/contact" className="btn btn-outline">Contact Bridgepoint</Link>
            </div>
          </div>
          <div className="hero-media">
            <Image src="/images/hero-hvac.jpg" alt="Rooftop cooling tower and mechanical piping" fill priority sizes="(max-width: 960px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="idstrip" aria-label="Government contracting identifiers">
        <div className="container">
          <div className="idcell"><div className="k">UEI</div><div className="v">{COMPANY.uei}</div></div>
          <div className="idcell"><div className="k">CAGE</div><div className="v">{COMPANY.cage}</div></div>
          <div className="idcell"><div className="k">SAM.gov</div><div className="v">{COMPANY.samStatus}</div></div>
          <Link href="/contracting-information" className="idlink">Contracting information →</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What Agencies Can Contract With Us For</p>
            <h2>Facility maintenance, HVAC, and real estate. One accountable contractor.</h2>
            <p>
              Bridgepoint Contracting is a government contracting firm providing mission-critical solutions
              in facility maintenance and real estate. HVAC &amp; mechanical work sits within facility
              maintenance; we feature it because we are EPA 608 Universal Certified. We work with agencies to understand
              contract requirements, coordinate qualified resources, manage performance, and deliver in
              accordance with the scope, schedule, and terms of the contract.
            </p>
          </div>
          <div className="cards">
            {SERVICES.map((s) => (
              <article className="card" key={s.slug}>
                <div className="card-img">
                  <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width: 960px) 100vw, 33vw" />
                  {s.badge && <span className="badge">{s.badge}</span>}
                </div>
                <div className="card-body">
                  {s.parent && <p className="eyebrow">{s.parent}</p>}
                  <h3>{s.name}</h3>
                  <p>{s.summary}</p>
                  <ul>{s.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                  <Link href={`/capabilities#${s.slug}`} className="card-link">
                    View {s.name} services →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section compliance">
        <div className="container">
          <p className="eyebrow">Compliance</p>
          <h2>Compliance at Every Step.</h2>
          <p className="intro">
            Government contracting demands more than completing the work. Bridgepoint approaches every
            contract with a commitment to compliance, accountability, documentation, transparency, and
            integrity. From solicitation review and subcontractor coordination through performance
            management and contract closeout, Bridgepoint maintains responsibility for contract execution.
          </p>
          <p className="statement">
            Perform what we promised. Document what we performed. Deliver what the agency contracted for.
          </p>
          <div className="pillars">
            <div className="pillar">
              <h3>Compliance</h3>
              <p>The contract governs. We track its requirements, clauses, and deliverables from solicitation through closeout.</p>
            </div>
            <div className="pillar">
              <h3>Integrity</h3>
              <p>We state our role and experience accurately, and we commit only to what we can perform.</p>
            </div>
            <div className="pillar">
              <h3>Execution</h3>
              <p>Qualified resources, scheduled work, and documented results — managed under one point of accountability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How We Support a Requirement</p>
            <h2>From award through completion.</h2>
            <p>Every engagement follows the same disciplined path, so the agency always knows who is accountable and what comes next.</p>
          </div>
          <div className="steps">
            {STEPS.map((s, i) => (
              <div className="step" key={s.t}>
                <div className="n">{String(i + 1).padStart(2, "0")}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container two-col">
          <div>
            <p className="eyebrow">For Contracting Officers</p>
            <h2 style={{ marginTop: 12 }}>Registration and procurement details, in one place.</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              UEI, CAGE, SAM.gov status, NAICS codes, and contact information are organized
              on a single page for acquisition personnel.
            </p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <Link href="/contracting-information" className="btn btn-navy">Contracting Information</Link>
              <Link href="/request-capabilities" className="btn btn-outline-dark">Request Capabilities</Link>
            </div>
          </div>
          <table className="data-table">
            <tbody>
              <tr><th scope="row">Legal Name</th><td>{COMPANY.legalName}</td></tr>
              <tr><th scope="row">UEI</th><td className="mono">{COMPANY.uei}</td></tr>
              <tr><th scope="row">CAGE</th><td className="mono">{COMPANY.cage}</td></tr>
              <tr><th scope="row">SAM.gov</th><td><span className="status-pill">{COMPANY.samStatus}</span></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
