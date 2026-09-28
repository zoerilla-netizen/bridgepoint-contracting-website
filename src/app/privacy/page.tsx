import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { COMPANY } from "@/config/siteConfig";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="section">
        <div className="container prose">
          <p>
            {COMPANY.legalName} respects your privacy. This policy explains what information we collect through{" "}
            {COMPANY.domain} and how we use it.
          </p>
          <h2>Information we collect</h2>
          <ul>
            <li>Information you submit through our forms or by email, such as name, agency or company, email address, phone number, and the content of your message.</li>
            <li>Basic technical information logged by our hosting provider, such as IP address, browser type, and pages visited, for security and performance.</li>
          </ul>
          <p>We do not use advertising trackers on this site.</p>
          <h2>How we use information</h2>
          <p>We use submitted information to respond to requests, provide capability information, evaluate potential vendor relationships, and operate and secure the site. We do not sell personal information.</p>
          <h2>Sharing</h2>
          <p>We share information only with service providers that help us operate the site or handle submissions, and where required by law.</p>
          <h2>Retention and your choices</h2>
          <p>We keep information as long as reasonably necessary for the purposes above and for our business records. You may contact us to request correction or deletion, subject to legal and recordkeeping needs.</p>
          <h2>Contact</h2>
          <p>{COMPANY.legalName}. Email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
