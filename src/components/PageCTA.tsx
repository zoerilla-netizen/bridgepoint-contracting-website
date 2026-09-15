"use client";

import { motion } from "framer-motion";

export default function PageCTA({
  title,
  buttons,
}: {
  title: string;
  buttons: { label: string; href: string; primary?: boolean; external?: boolean }[];
}) {
  return (
    <section className="bg-offwhite px-6 py-24 text-center md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-xl text-[28px] font-bold leading-[1.2] tracking-tight text-navy md:text-[36px]"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          {buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target={btn.external ? "_blank" : undefined}
              rel={btn.external ? "noopener noreferrer" : undefined}
              className={
                btn.primary
                  ? "inline-flex items-center justify-center bg-navy px-7 py-4 text-[13px] font-semibold text-white transition-colors hover:bg-electric"
                  : "inline-flex items-center justify-center border border-navy/20 px-7 py-4 text-[13px] font-semibold text-navy transition-colors hover:border-navy"
              }
            >
              {btn.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
