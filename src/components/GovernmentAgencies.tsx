"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { govCredentials, GOOGLE_CAPABILITIES_FORM_URL } from "@/config/siteConfig";

export default function GovernmentAgencies() {
  return (
    <section id="government" className="bg-navyDeep px-6 py-28 text-white md:px-10 md:py-36">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-6"
          >
            <p className="label text-[12px] text-electricLight">Government agencies</p>
            <h2 className="mt-4 text-[34px] font-bold leading-[1.1] tracking-tight md:text-[46px]">
              Capability meets execution.
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/65">
              Bridgepoint pursues and executes federal contracts by combining
              internal contract management with qualified subcontractors,
              suppliers, and industry partners.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/government"
                className="inline-flex items-center justify-center bg-white px-6 py-3.5 text-[13px] font-semibold text-navy transition-colors hover:bg-electric hover:text-white"
              >
                View Government Capabilities
              </Link>
              <a
                href={GOOGLE_CAPABILITIES_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/30 px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:border-white"
              >
                Download Capability Statement
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-6"
          >
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {govCredentials.map((cred) => (
                <div key={cred.label} className="bg-navyDeep px-6 py-6">
                  <p className="label text-[10px] text-white/40">{cred.label}</p>
                  <p className="mt-2 font-mono text-[14px] text-white/80">{cred.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
