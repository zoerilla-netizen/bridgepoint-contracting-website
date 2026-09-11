"use client";

import { useState } from "react";

// -----------------------------------------------------------------
// IMAGE REPLACEMENT SYSTEM
// -----------------------------------------------------------------
// Every image on the site is loaded through this component. Point
// `src` at a file in /public/images/ (e.g. "/images/hero.jpg").
//
// TO REPLACE AN IMAGE: drop your file in /public/images/ using the
// exact filename already referenced (see each component for its
// filename, e.g. hero.jpg, about.jpg, services.jpg, ai-govcon.jpg)
// and it will appear automatically — no code changes needed.
//
// Until a real file exists at that path, this component shows a
// quiet placeholder panel (on-brand, not a broken-image icon) so
// the site always looks finished.
// -----------------------------------------------------------------
export default function ImageSlot({ src, alt, label, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden border border-hairline bg-charcoal ${className}`}
      >
        <svg
          className="absolute inset-0 h-full w-full opacity-40"
          preserveAspectRatio="none"
          viewBox="0 0 400 300"
          aria-hidden="true"
        >
          <line x1="0" y1="300" x2="400" y2="0" stroke="#3A3A3C" strokeWidth="1" />
        </svg>
        <p className="relative px-6 text-center text-xs text-steel">
          {label || "Add an image at " + src}
        </p>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
