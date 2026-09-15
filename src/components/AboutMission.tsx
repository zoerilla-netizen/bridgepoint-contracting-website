"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig, imagePaths } from "@/config/siteConfig";

export default function AboutMission() {
  return (
    <section id="about" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-28 md:px-16 md:py-0">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="label text-[12px] text-electric"
          >
            About / Mission
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-md text-[30px] font-bold leading-[1.2] tracking-tight text-navy md:text-[38px]"
          >
            Bridgepoint exists to bridge the gap between opportunity and
            capability.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 text-[17px] font-medium italic text-steel"
          >
            &ldquo;{siteConfig.motto}&rdquo;
          </motion.p>
        </div>

        <div className="relative aspect-[4/3] md:aspect-auto">
          <Image
            src={imagePaths.aboutMissionBg}
            alt="Modern architecture at twilight"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
