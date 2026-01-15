"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Opacidad y escala en base al scroll
  const opacity = Math.max(1 - scrollY / 400, 0);
  const scale = Math.max(1 - scrollY / 1000, 0.95);

  return (
    <section
      id="about-us"
      className="relative w-screen h-screen flex items-center justify-center overflow-hidden transition-all duration-300"
      style={{
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/fondo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Contenido */}
      <div className="relative z-20 max-w-4xl px-6 text-center flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-wide leading-tight animate-fadeInScale mt-4"></h2>

        <div className="animate-fadeInScale delay-200">
          <Image
            src="/frase-holo.png"
            alt="Holobeat statement"
            width={900}
            height={300}
            className="w-full max-w-3xl object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
