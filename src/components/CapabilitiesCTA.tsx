import { GOOGLE_CAPABILITIES_FORM_URL } from "@/config/siteConfig";

export default function CapabilitiesCTA() {
  return (
    <section className="border-b border-black/10 bg-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-content px-6 text-center md:px-10">
        <h2 className="mx-auto max-w-xl text-[30px] font-semibold leading-[1.15] tracking-tight md:text-[40px]">
          Get to know Bridgepoint.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-white/60">
          Request our capabilities statement to learn more about Bridgepoint
          Contracting, our operating markets, capabilities, and approach to
          federal contract execution.
        </p>

        <a
          href={GOOGLE_CAPABILITIES_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center bg-white px-8 py-4 text-[13px] font-medium tracking-wide text-black transition-opacity hover:opacity-80"
        >
          REQUEST CAPABILITIES STATEMENT
        </a>
      </div>
    </section>
  );
}
