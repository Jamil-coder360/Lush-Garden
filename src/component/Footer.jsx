"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-[#2b4436]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Info */}
        <div className="md:col-span-1.5 flex flex-col gap-6">
          <Link href="#home">
            <Image
              src="/logo.png"
              alt="Lush Logo"
              width={110}
              height={36}
              className="h-8 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-white/70 text-sm leading-relaxed max-w-sm">
            Bringing nature's serenity into your living and workspaces. We offer
            curated collections of high-quality plants and minimalist planters
            designed to elevate your interior aesthetics.
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {["Facebook", "Instagram", "Pinterest", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-semibold hover:bg-white hover:text-brand-green hover:border-white transition-all duration-300"
                aria-label={social}
              >
                {social[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-col gap-5">
          <h3 className="text-sm font-semibold tracking-wider text-gold uppercase">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              { name: "Home", href: "#home" },
              { name: "About Us", href: "#about" },
              { name: "Planters Collection", href: "#planters" },
              { name: "Contact & Support", href: "#contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Collections */}
        <div className="flex flex-col gap-5">
          <h3 className="text-sm font-semibold tracking-wider text-gold uppercase">
            Collections
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              "Desert Cacti",
              "Lush Succulents",
              "Tropical Monsteras",
              "Minimalist Clay Pots",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#planters"
                  className="text-white/70 hover:text-white text-sm transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col gap-5">
          <h3 className="text-sm font-semibold tracking-wider text-gold uppercase">
            Newsletter
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Subscribe to receive plant care tips, new arrivals, and special
            offers.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full bg-[#1c2e24] text-white text-sm px-4 py-3 rounded-md border border-[#2b4436] focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gold hover:text-white transition-colors"
                aria-label="Subscribe"
              >
                →
              </button>
            </div>
            {isSubmitted && (
              <p className="text-xs text-[#a9bfae] animate-fade-in">
                Thank you! You have successfully subscribed.
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-xs text-center md:text-left">
          &copy; {new Date().getFullYear()} Lush Garden. All rights reserved.
        </p>
        <div className="flex gap-6 text-white/50 text-xs">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;