"use client";

import { useEffect, useState } from "react";

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculamos opacidad y escala en base al scroll
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
      {/* Fondo video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/fondo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Contenido */}
      <div className="relative z-20 max-w-3xl px-6 text-white text-center flex flex-col gap-8">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-wide leading-tight animate-fadeInScale mt-4">
          Sobre Nosotros
        </h2>
        <p className="mt-4 text-white text-base md:text-lg font-normal leading-relaxed md:leading-loose backdrop-blur-sm bg-black/30 px-4 py-2 rounded-md animate-fadeInScale delay-200">
          Holobeat es la fusión entre tecnología y emoción — un sello
          discográfico donde la música electrónica se transforma en una
          experiencia multisensorial. Combinamos la esencia intangible y
          futurista de “Holo” con la energía rítmica de “Beat”, creando un
          espacio donde el sonido, lo visual y la innovación se entrelazan. Más
          que un sello, somos una plataforma de exploración digital y conexión
          humana a través del techno, el minimal y la estética sci-fi.
        </p>
      </div>
    </section>
  );
}
