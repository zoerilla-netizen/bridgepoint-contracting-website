import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import LeadForm, { Field } from "@/components/LeadForm";
import { COMPANY } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Bridgepoint Contracting LLC about a government requirement.",
};

const FIELDS: Field[] = [
  { name: "name", label: "Name", required: true, autoComplete: "name" },
  { name: "agency", label: "Agency / Organization", required: true, autoComplete: "organization" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "message", label: "Message", type: "textarea", required: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Contact Bridgepoint">
        Contracting officers, program managers, and facility managers can reach us directly or send a message below.
      </PageHero>
      <section className="section">
        <div className="container two-col" style={{ alignItems: "start" }}>
          <div>
            <dl className="contact-lines">
              <dt>Company</dt>
              <dd>{COMPANY.legalName}</dd>
              <dt>Email</dt>
              <dd><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></dd>
              <dt>Office</dt>
              <dd><a href={`tel:${COMPANY.officePhoneHref}`}>{COMPANY.officePhone}</a></dd>
              <dt>Address</dt>
              <dd>{COMPANY.addressLine1}<br />{COMPANY.addressLine2}</dd>
              <dt>Website</dt>
              <dd>{COMPANY.domain}</dd>
            </dl>
            <div className="aside-card" style={{ marginTop: 34 }}>
              <h3>Looking for our capability statement?</h3>
              <p>Use the short request form and we will follow up with the information you need.</p>
              <p><Link href="/request-capabilities" className="btn btn-primary" style={{ marginTop: 6 }}>Request Capabilities</Link></p>
            </div>
          </div>
          <LeadForm
            fields={FIELDS}
            submitLabel="Send Message"
            subject="Website Inquiry"
            subjectField="agency"
            successMessage="Thank you. Your message has been received."
          />
        </div>
      </section>
    </>
  );
}
