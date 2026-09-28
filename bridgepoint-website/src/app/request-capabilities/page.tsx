import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LeadForm, { Field } from "@/components/LeadForm";
import { COMPANY, SERVICE_OPTIONS } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Request Capabilities",
  description:
    "Agency representatives can request Bridgepoint Contracting’s capability statement or additional company information.",
};

const FIELDS: Field[] = [
  { name: "name", label: "Name", required: true, autoComplete: "name" },
  { name: "agency", label: "Agency / Organization", required: true, autoComplete: "organization" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "opportunity", label: "Requirement / Opportunity Number", full: true },
  { name: "service", label: "Service needed", type: "select", required: true, options: SERVICE_OPTIONS, full: true },
  { name: "message", label: "Message / Requirement description", type: "textarea", required: true },
];

export default function RequestCapabilitiesPage() {
  return (
    <>
      <PageHero eyebrow="Request Capabilities" title="Request Bridgepoint’s capabilities">
        Request our capability statement or additional company information. The form is short.
      </PageHero>
      <section className="section">
        <div className="container two-col" style={{ alignItems: "start" }}>
          <LeadForm
            fields={FIELDS}
            submitLabel="Request Capabilities"
            subject="Capabilities Request"
            subjectField="agency"
            successMessage="Thank you. Your request has been received."
          />
          <aside className="aside-card">
            <h3>What to include</h3>
            <p>
              Tell us the service area and, if you have one, the requirement or opportunity number, so we can
              respond with relevant information.
            </p>
            <h3 style={{ marginTop: 24 }}>Prefer to reach us directly?</h3>
            <dl className="contact-lines">
              <dt>Email</dt>
              <dd><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></dd>
              <dt>Office</dt>
              <dd><a href={`tel:${COMPANY.officePhoneHref}`}>{COMPANY.officePhone}</a></dd>
            </dl>
            <p style={{ marginTop: 22 }}>
              UEI <strong>{COMPANY.uei}</strong><br />CAGE <strong>{COMPANY.cage}</strong>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
