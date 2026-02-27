"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/programs", label: "PROGRAMS" },
  { href: "/coaching", label: "COACHING" },
  { href: "/founder", label: "FOUNDER" },
  { href: "/branches", label: "BRANCHES" },
];

const allLinks = [
  { href: "/programs", label: "PROGRAMS" },
  { href: "/coaching", label: "COACHING" },
  { href: "/founder", label: "FOUNDER" },
  { href: "/about", label: "ABOUT" },
  { href: "/branches", label: "BRANCHES" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <nav className="max-w-7xl mx-auto bg-black/30 backdrop-blur-[28px] backdrop-saturate-[1.6] rounded-2xl border border-white/[0.15] shadow-2xl shadow-black/50 ring-1 ring-white/[0.08]">
        <div className="flex items-center h-12 px-5 sm:px-6">
          {/* Logo — left */}
          <Link href="/" className="flex items-center shrink-0 flex-1">
            <Image
              src="/cfs-logo-2048x1152.webp"
              alt="CFS9 — Central Fitness Station"
              width={120}
              height={68}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation — center */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium tracking-[0.12em] text-gray-300 hover:text-white transition-colors duration-200"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: JOIN NOW + Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-5 flex-1 justify-end">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-5 py-1.5 bg-primary hover:bg-primary-dark text-white text-[14px] font-bold tracking-[0.12em] rounded-lg transition-all duration-200 hover:scale-105"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              JOIN NOW
            </Link>
            <button
              className="lg:hidden text-white p-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 mx-auto max-w-7xl bg-black/40 backdrop-blur-[28px] backdrop-saturate-[1.6] rounded-2xl border border-white/[0.15] shadow-2xl shadow-black/50 overflow-hidden"
          >
            <div className="px-6 py-5 space-y-3">
              {allLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium tracking-[0.15em] text-gray-400 hover:text-white transition-colors py-2"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-bold tracking-[0.15em] rounded-lg transition-colors"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  JOIN NOW
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
