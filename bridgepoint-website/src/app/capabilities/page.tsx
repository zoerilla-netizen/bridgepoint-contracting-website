import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { SERVICES } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "HVAC & mechanical, facility maintenance, and real estate solutions for federal, state, and local government agencies.",
};

const SHORT: Record<string, string> = {
  "hvac-mechanical":
    "A specialty within facility maintenance: heating, cooling, and mechanical support for commercial and government facilities, from scheduled maintenance to equipment replacement and emergency service.",
  "facility-maintenance":
    "Preventive and corrective maintenance across building systems and trades, delivered through scheduled programs and multi-site facility services.",
  "real-estate-solutions":
    "Property sourcing, lease and occupancy support, and market research that help agencies meet facility and location requirements.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero eyebrow="Capabilities" title="Mission-critical solutions in facility maintenance and real estate">
        Bridgepoint is the contractor and the accountable party. We manage the contract, coordinate qualified
        industry resources, and deliver in accordance with the scope, schedule, and terms of the requirement.
      </PageHero>

      <div className="container">
        {SERVICES.map((s) => (
          <section className="cap-block" id={s.slug} key={s.slug}>
            <div className="cap-media">
              <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width: 960px) 100vw, 45vw" />
              {s.badge && <span className="badge">{s.badge}</span>}
            </div>
            <div className="cap-text">
              <p className="eyebrow">{s.parent ?? "Service Area"}</p>
              <h2>{s.name}</h2>
              <p>{SHORT[s.slug]}</p>
              <ul className="cap-list">
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
              <Link href="/request-capabilities" className="btn btn-primary">Request Capabilities</Link>
            </div>
          </section>
        ))}

        <section style={{ padding: "72px 0" }}>
          <div className="note-box">
            <strong>How Bridgepoint delivers.</strong> Bridgepoint reviews each requirement, coordinates qualified
            resources, manages performance, and remains responsible for contract execution. Specialized work is
            performed by qualified industry resources where the contract permits, under Bridgepoint’s management
            and accountability. Licensing, insurance, and other requirements are verified against the terms of each
            solicitation before work begins.
          </div>
        </section>
      </div>

      <CtaBand title="Have a requirement in one of these areas?" />
    </>
  );
}
