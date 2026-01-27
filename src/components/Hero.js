"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(1 - scrollY / 400, 0);
  const scale = Math.max(1 - scrollY / 1000, 0.95);

  return (
    <section id="hero" className="relative w-screen h-screen overflow-hidden">
      {/* SEO */}
      <h1 className="sr-only">
        Holobeat Records – Independent Techno & Minimal Music Label
      </h1>
      <p className="sr-only">
        Holobeat Records is an independent techno label focused on deep, minimal
        and hypnotic electronic music.
      </p>

      {/* VIDEO (NO TRANSFORMS ACÁ) */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover pointer-events-none"
          src="/fondo.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* CONTENIDO (ACÁ sí animamos) */}
      <div
        className="relative z-20 h-full flex items-center justify-center transition-all duration-300"
        style={{
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <div className="max-w-4xl px-6 text-center flex flex-col items-center gap-8">
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
