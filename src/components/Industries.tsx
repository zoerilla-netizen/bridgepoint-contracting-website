"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { industries } from "@/config/siteConfig";

export default function Industries() {
  return (
    <section className="bg-white px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="label text-[12px] text-electric">Industries</p>
          <h2 className="mt-4 text-[34px] font-bold leading-[1.1] tracking-tight text-navy md:text-[46px]">
            Where we operate today.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-steel">
            Bridgepoint currently focuses on three markets, with the
            architecture to add more as capability grows.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative aspect-[4/5] overflow-hidden bg-navy"
            >
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navyDeep/90 via-navyDeep/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="text-[22px] font-bold text-white">{industry.name}</h3>
                <p className="mt-2 text-[14px] text-white/70">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
