"use client";

import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 900); // ⏱ tiempo en milisegundos

    return () => clearTimeout(timer);
  }, []);

  const closeMenu = () => setIsOpen(false);

  if (!showHeader) return null; // no renderiza hasta que showHeader sea true

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full bg-white z-50 shadow-sm"
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        <Link
          href="/"
          className="flex items-center transition-transform hover:scale-105"
        >
          <img
            src="/HolobeatLogo(web02).png"
            alt="Holobeat Logo"
            className="h-10 w-auto"
          />
        </Link>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={22} color="black" />
        </button>

        <ul className="hidden md:flex space-x-10">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={closeMenu}
                className="text-black text-sm md:text-base font-medium tracking-wide hover:text-gray-500 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col items-start bg-white px-4 py-2 md:hidden">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="w-full py-2 border-b border-gray-100">
              <Link
                href={href}
                onClick={closeMenu}
                className="block text-black text-sm font-medium tracking-wide hover:text-gray-500 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </motion.nav>
  );
}

const navLinks = [
  { href: "#about-us", label: "About Us" },
  { href: "#our-music", label: "Our Music" },
  { href: "#our-artists", label: "Our Artists" },
  { href: "#contact-us", label: "Contact Us / Demo" },
  { href: "#our-networks", label: "Our Networks" },
];
