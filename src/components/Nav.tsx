"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, logoPaths, siteConfig, GOOGLE_CAPABILITIES_FORM_URL } from "@/config/siteConfig";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-6 md:px-10">
        {/*
          LOGO
          Rendered from /public/images/logo.png via config in
          src/config/siteConfig.js (logoPaths.logoPngPath). Replace that
          file (same filename) to update the logo everywhere on the site.
        */}
        <Link href="/" className="flex items-center" aria-label={siteConfig.companyName}>
          <Image
            src={logoPaths.logoPngPath}
            alt={siteConfig.companyName}
            width={220}
            height={105}
            priority
            className="h-11 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="section-label text-[12px] text-graphite transition-colors hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={GOOGLE_CAPABILITIES_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="section-label inline-flex items-center justify-center bg-black px-6 py-3 text-[12px] font-medium text-white transition-opacity hover:opacity-80"
          >
            Request Capabilities Statement
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="#17181A" strokeWidth="1.5" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="#17181A" strokeWidth="1.5" />
              </>
            ) : (
              <>
                <line x1="2" y1="6" x2="20" y2="6" stroke="#17181A" strokeWidth="1.5" />
                <line x1="2" y1="16" x2="20" y2="16" stroke="#17181A" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col bg-white md:hidden">
          <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-6" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/10 py-5 text-[22px] font-medium text-charcoal"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-black/10 px-6 py-6">
            <a
              href={GOOGLE_CAPABILITIES_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="section-label block w-full bg-black px-6 py-4 text-center text-[12px] font-medium text-white"
            >
              Request Capabilities Statement
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
