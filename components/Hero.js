import { GOOGLE_FORM_URL, SITE } from "../config/site";
import ImageSlot from "./ImageSlot";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pb-32">
      {/* Bridge line — the one signature graphic element, drawn once, boldly */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
        aria-hidden="true"
      >
        <line
          x1="1440"
          y1="0"
          x2="500"
          y2="900"
          stroke="#2A2A2C"
          strokeWidth="1"
        />
      </svg>

      <div className="shell relative grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="hero-rise md:col-span-7">
          <p className="mb-6 text-sm text-steel">{SITE.legalName}</p>

          <h1 className="font-display text-[13vw] font-bold leading-[0.95] tracking-tightest text-white sm:text-6xl md:text-7xl">
            Unlocking
            <br />
            opportunities,
            <br />
            securing success.
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-steel">
            Federal contracting and business development support for
            companies ready to serve the government.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="border border-white bg-white px-7 py-3.5 text-center text-sm font-medium text-ink transition-colors hover:bg-transparent hover:text-white"
            >
              Work With Us
            </a>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-graphite px-7 py-3.5 text-center text-sm font-medium text-white transition-colors hover:border-white"
            >
              Request Capabilities Statement
            </a>
          </div>
        </div>

        <div className="hero-rise md:col-span-5" style={{ animationDelay: "0.12s" }}>
          {/* Place a real photo at /public/images/hero.jpg to replace this panel */}
          <ImageSlot
            src="/images/hero.jpg"
            alt="Bridgepoint Contracting"
            label="Drop hero.jpg in /public/images/"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
