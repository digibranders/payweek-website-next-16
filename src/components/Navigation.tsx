"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact Us", href: "#contact" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full border-b border-neutral-100 transition-colors duration-200"
        style={{ background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.80)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-[3.125rem] md:h-[3.75rem] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="PayWeek Logo"
              width={120}
              height={34}
              className="h-8 md:h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[0.875rem] font-medium text-neutral-600 hover:text-[#0fd46b] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-[0.875rem] font-medium text-neutral-600 hover:text-[#0fd46b] transition-colors duration-150"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-2 text-[0.875rem] font-medium text-white bg-[#0fd46b] hover:bg-[#0ec062] active:scale-[0.97] rounded-[0.425rem] transition-all duration-200 shadow-sm"
            >
              Get started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-neutral-600 cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay — matches Figma 120:2375 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            {/* Top bar with logo and close button */}
            <div className="flex items-center justify-between h-[3.0625rem] px-6 shrink-0">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="PayWeek Logo"
                  width={120}
                  height={34}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                className="p-2 -mr-2 text-neutral-600 cursor-pointer"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                {/* 14×14 close icon */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L13 13M13 1L1 13" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Nav links container */}
            <div className="flex flex-col px-6 pt-4 border-t border-[#e5e5e5]">
              {/* Navigation links */}
              <nav className="flex flex-col gap-1 mb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="h-[2.5rem] flex items-center px-3 rounded-[0.425rem] text-[0.875rem] font-medium text-[#404040] hover:bg-neutral-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Auth buttons */}
              <div className="flex flex-col gap-2 pt-4 border-t border-[#e5e5e5]">
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center h-[2.625rem] border border-[#d4d4d4] rounded-[0.425rem] text-[0.875rem] font-medium text-[#404040] hover:bg-neutral-50 transition-colors"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center h-[2.5rem] bg-[#0fd46b] rounded-[0.425rem] text-[0.875rem] font-medium text-white hover:bg-[#0ec062] transition-colors"
                >
                  Get started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
