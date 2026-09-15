import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { siteConfig, contactInfo } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.companyName}.`,
};

const EFFECTIVE_DATE = "September 15, 2026";

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        intro={`Effective ${EFFECTIVE_DATE}`}
      />

      <section className="bg-white px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl space-y-10 text-[16px] leading-relaxed text-steel">
          <p>
            {siteConfig.companyName} (&quot;Bridgepoint,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) respects your privacy. This
            policy explains what information we collect through{" "}
            {siteConfig.domain} (the &quot;Site&quot;), how we use it, and
            the choices you have. It applies to visitors of the Site and
            does not cover information we collect outside of it, such as
            over the phone or by mail.
          </p>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Information we collect</h2>
            <p className="mt-3">We collect information in the following ways:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold text-navy">Information you provide directly.</span>{" "}
                When you email us, request our capabilities statement, or
                otherwise contact us, we receive whatever information you
                choose to include — typically your name, company name,
                email address, phone number, and the content of your
                message.
              </li>
              <li>
                <span className="font-semibold text-navy">Capability statement requests.</span>{" "}
                Requests submitted through our capabilities statement form
                are collected and processed by Google Forms. Your
                information is subject to Google&apos;s own privacy policy
                in addition to this one.
              </li>
              <li>
                <span className="font-semibold text-navy">Automatically collected information.</span>{" "}
                Like most websites, our hosting provider may log basic
                technical information such as IP address, browser type,
                device type, and pages visited, for security and
                performance purposes. We do not currently use cookies or
                third-party advertising trackers on this Site.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">How we use information</h2>
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to inquiries and requests, including capabilities statement requests</li>
              <li>Evaluate potential contracting, teaming, or partnership relationships</li>
              <li>Communicate with you about our services</li>
              <li>Maintain the security and proper functioning of the Site</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information, and we do not share
              it with third parties for their own marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Sharing of information</h2>
            <p className="mt-3">
              We may share information with service providers who help us
              operate the Site or process requests on our behalf (for
              example, Google Forms for capabilities statement requests, or
              our email and hosting providers), and only to the extent
              necessary for them to perform that function. We may also
              disclose information if required to do so by law, or to
              protect the rights, property, or safety of Bridgepoint, our
              partners, or others.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Data retention</h2>
            <p className="mt-3">
              We retain the information you send us for as long as
              reasonably necessary to respond to your inquiry, maintain our
              business records, and comply with legal or contractual
              obligations.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Your choices</h2>
            <p className="mt-3">
              You may contact us at any time to ask what information we
              hold about you, to request a correction, or to request that
              we delete it, subject to our legitimate business and legal
              recordkeeping needs. See the contact information below.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Children&apos;s privacy</h2>
            <p className="mt-3">
              This Site is intended for business audiences and is not
              directed at children under 13. We do not knowingly collect
              information from children.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Changes to this policy</h2>
            <p className="mt-3">
              We may update this policy from time to time. The &quot;Effective&quot;
              date above reflects the most recent revision. Continued use of
              the Site after a change constitutes acceptance of the updated
              policy.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Contact us</h2>
            <p className="mt-3">
              If you have questions about this policy or how we handle your
              information, contact us at:
            </p>
            <p className="mt-4 text-navy">
              {siteConfig.companyName}
              <br />
              {contactInfo.addressLine1}
              <br />
              {contactInfo.addressLine2}
              <br />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-electric">
                {contactInfo.email}
              </a>
              <br />
              <a href={`tel:${contactInfo.phoneHref}`} className="hover:text-electric">
                {contactInfo.phone}
              </a>
            </p>
          </div>

          <p className="border-t border-lightgray pt-6 text-[13px] text-steel/80">
            This is a general privacy policy template and is not a
            substitute for legal advice. Bridgepoint Contracting LLC should
            have this policy reviewed by an attorney to confirm it fits its
            actual data practices and any applicable state or federal law
            before relying on it.
          </p>
        </div>
      </section>
    </main>
  );
}
