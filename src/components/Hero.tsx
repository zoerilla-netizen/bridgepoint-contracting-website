import Image from "next/image";
import Link from "next/link";
import { imagePaths, siteConfig, GOOGLE_CAPABILITIES_FORM_URL } from "@/config/siteConfig";

export default function Hero() {
  return (
    <section className="border-b border-black/10 pt-20 md:pt-24">
      <div className="mx-auto max-w-content px-6 pt-14 md:px-10 md:pt-20">
        <p className="section-label text-[12px] text-steel">
          {siteConfig.companyName}
        </p>
        <h1 className="mt-5 max-w-3xl text-[40px] font-semibold leading-[1.05] tracking-tight text-black sm:text-[56px] md:text-[68px]">
          {siteConfig.positioning}
        </h1>
        <p className="mt-6 text-[16px] font-medium text-charcoal md:text-[18px]">
          {siteConfig.markets}
        </p>
        <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-graphite">
          Supporting federal requirements from opportunity through execution.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/capabilities"
            className="inline-flex items-center justify-center bg-black px-7 py-4 text-[13px] font-medium tracking-wide text-white transition-opacity hover:opacity-80"
          >
            EXPLORE OUR CAPABILITIES
          </Link>
          <a
            href={GOOGLE_CAPABILITIES_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-black/20 px-7 py-4 text-[13px] font-medium tracking-wide text-charcoal transition-colors hover:border-black"
          >
            REQUEST CAPABILITIES STATEMENT
          </a>
        </div>
      </div>

      {/*
        REPLACE HERO IMAGE HERE:
        Swap /public/images/hero-main.jpg with your own large,
        landscape-orientation architectural / construction / facility
        photo (at least 1920x1280px recommended).
      */}
      <div className="corner-frame relative mt-14 aspect-[16/9] w-full overflow-hidden bg-charcoal text-white md:mt-16 md:aspect-[21/9]">
        <Image
          src={imagePaths.heroMain}
          alt="Bridgepoint Contracting — federal construction, facility maintenance, and real estate"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
