"use client";

import { motion } from "framer-motion";

const CONCEPTS = ["Opportunity", "Capability", "Partnership", "Execution"];

export default function Introduction() {
  return (
    <section className="bg-white px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-content">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-[32px] font-bold leading-[1.15] tracking-tight text-navy sm:text-[44px] md:text-[56px]"
        >
          Federal contracting is complex.
          <br />
          <span className="text-steel">We make the path forward clearer.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-xl text-[17px] leading-relaxed text-steel"
        >
          Bridgepoint operates at the intersection of four things — the
          opportunity a business is chasing, the capability it brings, the
          partnerships that make execution possible, and the execution
          itself.
        </motion.p>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-6 border-t border-lightgray pt-10">
          {CONCEPTS.map((concept, i) => (
            <motion.span
              key={concept}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-[20px] font-semibold text-navy md:text-[24px]"
            >
              {concept}
              {i < CONCEPTS.length - 1 && (
                <span className="ml-10 hidden text-lightgray md:inline">/</span>
              )}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
