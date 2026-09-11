import { GOOGLE_FORM_URL } from "../config/site";

export default function Capabilities() {
  return (
    <section className="py-24 md:py-32">
      <div className="shell flex flex-col items-start border border-graphite px-8 py-14 md:px-16 md:py-20">
        <h2 className="font-display text-3xl font-bold tracking-tightest text-white md:text-4xl">
          Request our capabilities statement.
        </h2>
        <p className="mt-4 max-w-lg text-lg leading-relaxed text-steel">
          Get an overview of Bridgepoint Contracting's services, past
          performance, and federal certifications.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 border border-white bg-white px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-transparent hover:text-white"
        >
          Request Capabilities Statement
        </a>
      </div>
    </section>
  );
}
