import Image from "next/image";
import { imagePaths } from "@/config/siteConfig";

export default function TwoPathways() {
  return (
    <section aria-label="Choose your path" className="flex flex-col md:h-[520px] md:flex-row">
      <a
        href="/for-contractors"
        className="group relative flex flex-1 flex-col justify-end overflow-hidden bg-navy px-8 py-16 transition-[flex-grow] duration-500 ease-out hover:flex-[1.3] md:px-14 md:py-0"
      >
        <Image
          src={imagePaths.bridgeAccent}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-30 transition-opacity duration-500 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-electric/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative z-10 md:pb-14">
          <p className="label text-[11px] text-electricLight">I&apos;m a contractor</p>
          <h3 className="mt-4 max-w-sm text-[30px] font-bold leading-[1.1] text-white md:text-[38px]">
            I want to grow through federal contracting.
          </h3>
          <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-white/80 transition-colors group-hover:text-white">
            Explore contractor solutions
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </a>

      <a
        href="/government"
        className="group relative flex flex-1 flex-col justify-end overflow-hidden bg-charcoal px-8 py-16 transition-[flex-grow] duration-500 ease-out hover:flex-[1.3] md:px-14 md:py-0"
      >
        <Image
          src={imagePaths.government}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-30 transition-opacity duration-500 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-bl from-electric/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative z-10 md:pb-14">
          <p className="label text-[11px] text-electricLight">I represent a government agency</p>
          <h3 className="mt-4 max-w-sm text-[30px] font-bold leading-[1.1] text-white md:text-[38px]">
            I need capable contract execution.
          </h3>
          <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-white/80 transition-colors group-hover:text-white">
            View government capabilities
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </a>
    </section>
  );
}
