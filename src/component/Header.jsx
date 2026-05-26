"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple intersection observer logic for active section styling
      const sections = ["home", "about", "planters", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Planters", href: "#planters", id: "planters" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#1e2e25]/90 backdrop-blur-md shadow-md py-3 border-b border-[#2b4436]/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 relative z-50">
          <Image
            src="/logo.png"
            alt="Lush Logo"
            width={120}
            height={40}
            className="h-9 w-auto object-contain brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`relative py-1 text-sm font-medium tracking-wide transition-all duration-300 ${
                activeSection === link.id
                  ? "text-white"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-full animate-fade-in" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:block">
          <Link
            href="tel:+1234567890"
            className="inline-flex items-center justify-center px-6 py-2.5 border border-white/65 hover:border-white rounded-md text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-brand-green shadow-sm"
          >
            Call Us
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-50 p-2 text-white hover:text-white/80 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-left ${
                isMobileMenuOpen ? "rotate-45 translate-x-1" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-left ${
                isMobileMenuOpen ? "-rotate-45 translate-x-1" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-brand-dark/95 z-40 md:hidden flex flex-col justify-center items-center gap-8 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-medium tracking-wide transition-colors ${
                activeSection === link.id
                  ? "text-gold"
                  : "text-white hover:text-gold"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="tel:+1234567890"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 border border-white/40 text-white rounded-md text-lg font-medium hover:bg-white hover:text-brand-green transition-all"
          >
            Call Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;