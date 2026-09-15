"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/config/siteConfig";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="bg-navy px-6 py-28 text-center text-white md:px-10 md:py-40">
      <div className="mx-auto max-w-content">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-[36px] font-bold leading-[1.1] tracking-tight md:text-[54px]"
        >
          Let&apos;s build what&apos;s next.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={`mailto:${contactInfo.email}?subject=${encodeURIComponent("Grow Through Federal Contracting")}`}
            className="inline-flex items-center justify-center bg-white px-8 py-4 text-[13px] font-semibold text-navy transition-colors hover:bg-electric hover:text-white"
          >
            Grow Through Federal Contracting
          </a>
          <a
            href={`mailto:${contactInfo.email}?subject=${encodeURIComponent("Team With Bridgepoint")}`}
            className="inline-flex items-center justify-center border border-white/40 px-8 py-4 text-[13px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Team With Bridgepoint
          </a>
        </motion.div>
      </div>
    </section>
  );
}
