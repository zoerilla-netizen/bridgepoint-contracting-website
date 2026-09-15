"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { imagePaths } from "@/config/siteConfig";

export default function TeamWithBridgepoint() {
  return (
    <section id="team-with-bridgepoint" className="bg-offwhite">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="relative order-2 aspect-[4/3] md:order-1 md:col-span-5 md:aspect-auto">
          <Image
            src={imagePaths.teamSectionBg}
            alt="A network of professionals against a city skyline"
            fill
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-cover object-bottom"
          />
        </div>

        <div className="order-1 flex flex-col justify-center px-6 py-20 md:order-2 md:col-span-7 md:px-16 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="label text-[12px] text-electric">Team with Bridgepoint</p>
            <h2 className="mt-4 max-w-md text-[32px] font-bold leading-[1.12] tracking-tight text-navy md:text-[44px]">
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
          >
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-steel">
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
