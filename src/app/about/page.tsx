import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bridgepoint Contracting is a government contractor that manages requirements, coordinates qualified resources, and remains accountable for contract performance.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Bridgepoint" title="A government contractor built around accountability">
        Bridgepoint Contracting LLC provides HVAC, facility maintenance, and real estate solutions to federal,
        state, and local government agencies.
      </PageHero>

      <section className="section">
        <div className="container two-col">
          <div className="stack">
            <p className="eyebrow">Who We Are</p>
            <h2>The contractor. The accountable party.</h2>
            <p className="lead">
              Bridgepoint is a government contracting firm. We work with agencies to understand contract
              requirements, coordinate qualified resources, manage performance, and deliver in accordance with
              the scope, schedule, and terms of the contract.
            </p>
            <p>
              Our model is deliberately lean. Qualified industry resources perform specialized work where the
              contract permits, and Bridgepoint manages the requirement, the communication, and the
              documentation — and remains responsible for the result.
            </p>
          </div>
          <div className="stack">
            <p className="eyebrow">Leadership Experience</p>
            <h2>Hands-on HVAC field knowledge</h2>
            <p>
              Company leadership brings commercial HVAC field experience involving rooftop units, split
              systems, package units, chillers, boilers, heat pumps, ventilation systems, diagnostics, and
              preventive maintenance, and holds an EPA Section 608 Universal Certification.
            </p>
            <p>That background informs how we review requirements, evaluate resources, and oversee mechanical work.</p>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How We Operate</p>
            <h2>Three working commitments</h2>
          </div>
          <div className="principles">
            <div className="principle">
              <h3>Requirement first</h3>
              <p>We read the full solicitation and contract before committing, and we build the approach around what the document requires.</p>
            </div>
            <div className="principle">
              <h3>One point of accountability</h3>
              <p>Agencies deal with Bridgepoint for scheduling, communication, quality oversight, and corrective action.</p>
            </div>
            <div className="principle">
              <h3>Documented performance</h3>
              <p>We keep the records that let an agency verify what was done, when, and to what standard.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
