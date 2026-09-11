"use client";

import { useState } from "react";
import { NAV_LINKS, SITE } from "../config/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-hairline bg-ink/95 backdrop-blur">
      <div className="shell flex h-20 items-center justify-between">
        {/* Logo — replace this text logotype with an <img> tag once you have
            a real logo file. Drop it in /public/images/logo.svg and swap the
            block below for: <img src="/images/logo.svg" alt={SITE.name} className="h-7" /> */}
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tightest text-white"
        >
          BRIDGEPOINT
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-steel transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-none border border-white px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink md:inline-block"
        >
          Work With Us
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-px w-6 bg-white transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="border-t border-hairline bg-ink px-6 pb-8 pt-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block border border-white px-5 py-3 text-center text-sm font-medium text-white"
          >
            Work With Us
          </a>
        </nav>
      )}
    </header>
  );
}
