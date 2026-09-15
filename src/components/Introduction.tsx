"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { verticals } from "@/config/siteConfig";

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
          We are a federal contracting company.
          <br />
          <span className="text-steel">We offer four services.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-xl text-[17px] leading-relaxed text-steel"
        >
          From identifying a business&apos;s first federal opportunity to
          executing as the prime contractor ourselves, every service
          Bridgepoint offers is built around one standard of execution.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-6 border-t border-lightgray pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {verticals.map((v, i) => (
            <motion.div
              key={v.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-[13px] font-semibold text-electric">{v.num}</span>
              <p className="mt-2 text-[17px] font-semibold leading-snug text-navy">
                {v.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-electric hover:text-navy"
          >
            See how each service works
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
