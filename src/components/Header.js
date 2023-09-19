"use client";

import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="px-2 py-4 m-3 text-black hover:text-gray-400 cursor-pointer transition-transform ease-in-out duration-300 transform hover:scale-110">
          <Link href="/">
            <img
              src="/HolobeatLogo(web02).png"
              alt="Holobeat-Logo"
              className="w-15 h-12 animate-slideIn"
            />
          </Link>
        </div>

        <div
          className="px-2 py-4 m-3 md:hidden px-2 py-1 cursor-pointer transition-transform ease-in-out duration-300 transform hover:scale-110"
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
            className="px-2 py-4 block border-b border-gray-100 md:border-0 text-l font-semibold leading-tight"
            href="#about-us"
          >
            About Us
          </Link>
        </li>
        <li className="text-black hover:text-gray-400 text-l font-semibold leading-tight">
          <Link
            className="px-2 py-4 block border-b border-gray-100 md:border-0"
            href="#our-music"
          >
            Our Music
          </Link>
        </li>
        <li className="text-black hover:text-gray-400 text-l font-semibold leading-tight">
          <Link
            className="px-2 py-4 block border-b border-gray-100 md:border-0"
            href="#our-artists"
          >
            Our Artist
          </Link>
        </li>
        <li className="text-black hover:text-gray-400 text-l font-semibold leading-tight">
          <Link
            className="px-2 py-4 mr-4 block border-b border-gray-100 md:border-0"
            href="#contact-us"
          >
            Contact Us / Demo
          </Link>
        </li>
      </ul>
    </nav>
  );
}
