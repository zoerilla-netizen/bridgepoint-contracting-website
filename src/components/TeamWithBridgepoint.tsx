"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TeamWithBridgepoint() {
  return (
    <section id="team-with-bridgepoint" className="bg-offwhite px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7"
          >
            <p className="label text-[12px] text-electric">Team with Bridgepoint</p>
            <h2 className="mt-4 text-[32px] font-bold leading-[1.12] tracking-tight text-navy md:text-[44px]">
              You bring the capability.
              <br />
              We help build the opportunity.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-between md:col-span-5"
          >
            <p className="max-w-md text-[16px] leading-relaxed text-steel">
              Bridgepoint identifies federal opportunities and builds
              relationships with companies capable of executing the work —
              through prime/subcontract relationships, teaming agreements,
              and other strategic partnerships.
            </p>
            <Link
              href="/team-with-us"
              className="mt-8 inline-flex w-fit items-center justify-center bg-navy px-7 py-4 text-[13px] font-semibold text-white transition-colors hover:bg-electric"
            >
              Explore Teaming Opportunities
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
