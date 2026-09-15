"use client";

import { motion } from "framer-motion";
import { modelSteps } from "@/config/siteConfig";

export default function BridgepointModel() {
  return (
    <section className="bg-navy px-6 py-28 text-white md:px-10 md:py-36">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="label text-[12px] text-electricLight">The Bridgepoint model</p>
          <h2 className="mt-4 max-w-xl text-[34px] font-bold leading-[1.1] tracking-tight md:text-[46px]">
            From identify to grow.
          </h2>
        </motion.div>

        <div className="relative mt-20 md:mt-28">
          <div className="absolute left-0 right-0 top-[15px] hidden h-px bg-white/15 md:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-[15px] hidden h-px bg-electricLight md:block"
          />

          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 md:grid-cols-7 md:gap-x-4">
            {modelSteps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-start md:items-center"
              >
                <span className="relative z-10 mb-4 hidden h-[8px] w-[8px] rounded-full bg-electricLight md:block" />
                <span className="text-[13px] text-white/40 md:hidden">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 text-[17px] font-semibold md:mt-0 md:text-center">
                  {step}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
