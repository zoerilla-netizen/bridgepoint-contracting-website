"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { verticals } from "@/config/siteConfig";

export default function WhatWeDo({
  showLink = true,
  showHeading = true,
}: {
  showLink?: boolean;
  showHeading?: boolean;
} = {}) {
  return (
    <section id="what-we-do" className="bg-offwhite px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-content">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="label text-[12px] text-electric">What we do</p>
            <h2 className="mt-4 text-[34px] font-bold leading-[1.1] tracking-tight text-navy md:text-[46px]">
              Our four services.
            </h2>
          </motion.div>
        )}

        <div className="mt-20 flex flex-col gap-24 md:mt-28 md:gap-32">
          {verticals.map((v, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={v.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12 ${
                  reversed ? "md:text-right" : ""
                }`}
              >
                <div
                  className={`md:col-span-4 ${reversed ? "md:order-2 md:text-right" : ""}`}
                >
                  <span className="block text-[80px] font-bold leading-none text-lightgray md:text-[120px]">
                    {v.num}
                  </span>
                </div>

                <div className={`md:col-span-8 ${reversed ? "md:order-1" : ""}`}>
                  <h3 className="text-[26px] font-bold leading-tight text-navy md:text-[32px]">
                    {v.name}
                  </h3>

                  {v.tagline && (
                    <p className="mt-2 text-[15px] font-semibold uppercase tracking-wide text-electric">
                      {v.tagline}
                    </p>
                  )}

                  <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-steel">
                    {v.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {showLink && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 md:mt-28"
          >
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-electric hover:text-navy"
            >
              See full solutions
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
