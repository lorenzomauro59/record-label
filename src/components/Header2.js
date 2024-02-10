"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header2() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      className={`bg-white fixed top-0 w-full flex flex-col md:flex-row justify-between items-center z-50 transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="px-2 py-2 m-4 text-black hover:text-gray-400 cursor-pointer transition-transform ease-in-out duration-300 transform hover:scale-110">
          <Link href="/">
            <img
              src="/HolobeatLogo(web02).png"
              alt="Holobeat-Logo"
              className="w-15 h-12 animate-slideInLeft"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
