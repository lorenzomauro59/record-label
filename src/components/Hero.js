"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
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
      id="hero"
      className="relative w-screen h-screen flex items-center justify-center overflow-hidden transition-all duration-300"
      style={{
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      {/* SEO H1 + texto oculto */}
      <h1 className="sr-only">
        Holobeat Records – Independent Techno & Minimal Music Label
      </h1>

      <p className="sr-only">
        Holobeat Records is an independent techno label focused on deep, minimal
        and hypnotic electronic music, showcasing artists and releases from
        Argentina and the global underground scene.
      </p>

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

      {/* Contenido visible */}
      <div className="relative z-20 max-w-4xl px-6 text-center flex flex-col items-center gap-8">
        <div className="animate-fadeInScale delay-200">
          <Image
            src="/frase-holo.png"
            alt="Holobeat Records statement"
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
