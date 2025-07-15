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
      </div>
    </motion.nav>
  );
}
