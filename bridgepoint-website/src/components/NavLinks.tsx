"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/config/siteConfig";

// Closes the mobile menu (a CSS checkbox in Header.tsx) after a link is tapped.
function closeMenu() {
  const box = document.getElementById("nav-toggle") as HTMLInputElement | null;
  if (box) box.checked = false;
}

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      <ul>
        {NAV_LINKS.map((link) => {
          const active =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className="navlink"
                aria-current={active ? "page" : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href="/request-capabilities" className="btn btn-primary" onClick={closeMenu}>
        Request Capabilities
      </Link>
    </>
  );
}
