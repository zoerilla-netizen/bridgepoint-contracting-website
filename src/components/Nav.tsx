"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, logoPaths, siteConfig, contactInfo } from "@/config/siteConfig";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = scrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        dark ? "bg-white/95 backdrop-blur border-b border-black/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-6 md:px-10">
        <a href="/" className="flex items-center" aria-label={siteConfig.companyName}>
          <Image
            src={dark ? logoPaths.dark : logoPaths.light}
            alt={siteConfig.companyName}
            width={190}
            height={89}
            priority
            className="h-10 w-auto md:h-11"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`label text-[11px] transition-colors ${
                dark ? "text-steel hover:text-navy" : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={`mailto:${contactInfo.email}?subject=${encodeURIComponent("Work With Bridgepoint")}`}
            className={`label inline-flex items-center justify-center px-6 py-3 text-[11px] transition-colors ${
              dark
                ? "bg-navy text-white hover:bg-electric"
                : "bg-white text-navy hover:bg-electric hover:text-white"
            }`}
          >
            Work With Bridgepoint
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="#0B1E3D" strokeWidth="1.5" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="#0B1E3D" strokeWidth="1.5" />
              </>
            ) : (
              <>
                <line x1="2" y1="6" x2="20" y2="6" stroke={dark ? "#0B1E3D" : "#FFFFFF"} strokeWidth="1.5" />
                <line x1="2" y1="16" x2="20" y2="16" stroke={dark ? "#0B1E3D" : "#FFFFFF"} strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col bg-white lg:hidden"
          >
            <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-6" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-black/10 py-5 text-[20px] font-medium text-navy"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="border-t border-black/10 px-6 py-6">
              <a
                href={`mailto:${contactInfo.email}?subject=${encodeURIComponent("Work With Bridgepoint")}`}
                onClick={() => setOpen(false)}
                className="label block w-full bg-navy px-6 py-4 text-center text-[12px] text-white"
              >
                Work With Bridgepoint
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
