"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { imagePaths } from "@/config/siteConfig";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.8]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-navyDeep">
      <motion.div style={{ y }} className="absolute inset-0 h-[124%] w-full">
        <Image
          src={imagePaths.hero}
          alt="Construction crew working at a federal project site"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-navyDeep via-navy/70 to-navyDeep/40"
      />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto w-full max-w-content">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="label text-[12px] text-electricLight"
          >
            Federal Contracting. Built for Execution.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 max-w-3xl text-[13vw] font-bold leading-[0.98] tracking-tight text-white sm:text-[64px] md:text-[76px] lg:text-[88px]"
          >
            Unlocking opportunities.
            <br />
            Securing success.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-7 max-w-lg text-[17px] leading-relaxed text-white/75"
          >
            Bridgepoint connects capable businesses with federal opportunities
            and brings together the people, partnerships, and resources
            required to execute.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#what-we-do"
              className="inline-flex items-center justify-center bg-white px-7 py-4 text-[13px] font-semibold text-navy transition-colors hover:bg-electric hover:text-white"
            >
              Explore Bridgepoint
            </a>
            <a
              href="#team-with-bridgepoint"
              className="inline-flex items-center justify-center border border-white/40 px-7 py-4 text-[13px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Work With Us
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-[1px] bg-white/40"
        />
      </motion.div>
    </section>
  );
}
