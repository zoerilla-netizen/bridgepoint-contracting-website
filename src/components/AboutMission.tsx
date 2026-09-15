"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

export default function AboutMission() {
  return (
    <section id="about" className="bg-white px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-content text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="label mx-auto text-[12px] text-electric"
        >
          About / Mission
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-[30px] font-bold leading-[1.25] tracking-tight text-navy md:text-[40px]"
        >
          Bridgepoint exists to bridge the gap between opportunity and
          capability.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-[18px] font-medium italic text-steel"
        >
          &ldquo;{siteConfig.motto}&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
