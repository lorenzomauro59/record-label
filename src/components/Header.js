"use client";

import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white fixed top-0 w-full flex flex-col md:flex-row justify-between items-center z-50">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="px-2 py-2 m-3 text-black hover:text-gray-400 cursor-pointer transition-transform ease-in-out duration-300 transform hover:scale-110">
          <Link href="/">
            <img
              src="/HolobeatLogo(web02).png"
              alt="Holobeat-Logo"
              className="w-15 h-12 animate-slideInLeft"
            />
          </Link>
        </div>

        <div
          className="px-2 py-4 m-3 animate-slideInRight md:hidden px-2 py-1 cursor-pointer transition-transform ease-in-out duration-300 transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={24} color="black" />
        </div>
      </div>
      <ul
        className={`${
          isOpen
            ? "flex flex-col space-y-2 md:space-x-2 w-full md:w-auto"
            : "hidden md:flex md:space-x-16"
        }`}
      >
        <li className="text-black hover:text-gray-400">
          <Link
            className="px-2 py-4 block border-b border-gray-100 md:border-0 text-l font-semibold leading-tight animate-slideInRight"
            href="#about-us"
            onClick={closeMenu}
          >
            About Us
          </Link>
        </li>
        <li className="text-black hover:text-gray-400 text-l font-semibold leading-tight">
          <Link
            className="px-2 py-4 block border-b border-gray-100 md:border-0 animate-slideInRight"
            href="#our-music"
            onClick={closeMenu}
          >
            Our Music
          </Link>
        </li>
        <li className="text-black hover:text-gray-400 text-l font-semibold leading-tight">
          <Link
            className="px-2 py-4 block border-b border-gray-100 md:border-0 animate-slideInRight"
            href="#our-artists"
            onClick={closeMenu}
          >
            Our Artist
          </Link>
        </li>
        <li className="text-black hover:text-gray-400 text-l font-semibold leading-tight">
          <Link
            className="px-2 py-4 mr-4 block border-b border-gray-100 md:border-0 animate-slideInRight"
            href="#contact-us"
            onClick={closeMenu}
          >
            Contact Us / Demo
          </Link>
        </li>
        <li className="text-black hover:text-gray-400 text-l font-semibold leading-tight">
          <Link
            className="px-2 py-4 mr-4 block border-b border-gray-100 md:border-0 animate-slideInRight"
            href="#our-networks"
            onClick={closeMenu}
          >
            Our Networks
          </Link>
        </li>
      </ul>
    </nav>
  );
}
