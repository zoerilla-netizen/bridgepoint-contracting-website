import Image from "next/image";
import { markets } from "@/config/siteConfig";
import SectionLabel from "./SectionLabel";

export default function MarketsSection({
  detailed = false,
  showHeading = true,
}: {
  detailed?: boolean;
  showHeading?: boolean;
}) {
  return (
    <section className="border-b border-black/10 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        {showHeading && (
          <div className="mb-14 max-w-2xl md:mb-20">
            <SectionLabel>Our Markets</SectionLabel>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-tight text-black md:text-[44px]">
              Three markets. One execution standard.
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 md:grid-cols-3">
          {markets.map((market) => (
            <div key={market.slug} className="flex flex-col bg-white">
              {/*
                REPLACE MARKET IMAGE HERE:
                Each market image is set in src/config/siteConfig.js under
                imagePaths — swap the corresponding file in
                /public/images/ (same filename) to update it.
              */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-mist">
                <Image
                  src={market.image}
                  alt={market.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col px-7 py-8">
                <h3 className="text-[20px] font-semibold text-black">{market.name}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-graphite">
                  {market.summary}
                </p>

                {detailed && (
                  <ul className="mt-6 space-y-2 border-t border-black/10 pt-6">
                    {market.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-baseline gap-3 text-[13px] text-charcoal"
                      >
                        <span
                          className="h-1 w-1 shrink-0 translate-y-[-2px] bg-black"
                          aria-hidden="true"
                        />
                        {example}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
