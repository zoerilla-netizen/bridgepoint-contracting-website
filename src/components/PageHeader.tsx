"use client";

import { motion } from "framer-motion";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-navy px-6 pb-16 pt-36 text-white md:px-10 md:pb-24 md:pt-44">
      <div className="mx-auto max-w-content">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="label text-[12px] text-electricLight"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-3xl text-[38px] font-bold leading-[1.08] tracking-tight md:text-[54px]"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
