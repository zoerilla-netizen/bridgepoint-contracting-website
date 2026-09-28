import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LeadForm, { Field } from "@/components/LeadForm";
import { COMPANY } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Vendor Network",
  description:
    "HVAC, facility maintenance, real estate, and other qualified companies interested in working with Bridgepoint Contracting on government requirements.",
};

const FIELDS: Field[] = [
  { name: "company", label: "Company name", required: true, autoComplete: "organization" },
  { name: "contact", label: "Contact name", required: true, autoComplete: "name" },
  { name: "email", label: "Business email", type: "email", required: true, autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" },
  { name: "website", label: "Website", type: "url" },
  { name: "service", label: "Primary service", type: "select", required: true,
    options: ["HVAC & Mechanical", "Facility Maintenance", "Real Estate", "Other"] },
  { name: "area", label: "Service area (states / regions)", full: true },
  { name: "credentials", label: "Licenses, certifications, and SAM.gov registration status", full: true },
  { name: "description", label: "Describe your capabilities", type: "textarea", required: true },
];

export default function VendorNetworkPage() {
  return (
    <>
      <PageHero eyebrow="Vendor Network" title="Work with Bridgepoint">
        Bridgepoint is the government contractor. We maintain a network of qualified companies that can support
        the requirements we pursue and perform.
      </PageHero>
      <section className="section">
        <div className="container two-col" style={{ alignItems: "start" }}>
          <div className="stack">
            <p className="eyebrow">Join Our Vendor Network</p>
            <h2>Tell us what you do and where you do it.</h2>
            <p>
              We welcome HVAC, facility maintenance, real estate, and other qualified companies interested in
              supporting government requirements. Submitting your information does not guarantee work; companies
              are considered as requirements arise.
            </p>
            <div className="aside-card">
              <h3>What we look at</h3>
              <ul className="check-list" style={{ marginTop: 12 }}>
                <li>Trade capability and relevant experience</li>
                <li>Geographic coverage</li>
                <li>Licensing, certifications, and insurance</li>
                <li>Capacity to perform and to meet contract requirements</li>
                <li>SAM.gov registration status, where applicable</li>
              </ul>
            </div>
            <p className="form-note">
              Questions? Email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
            </p>
          </div>
          <div>
            <LeadForm
              fields={FIELDS}
              submitLabel="Join Our Vendor Network"
              subject="Vendor Network Submission"
              subjectField="company"
              successMessage="Thank you. Your information has been received."
            />
          </div>
        </div>
      </section>
    </>
  );
}
