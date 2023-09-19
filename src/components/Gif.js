"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const GifContainer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Esto asegura que la animación se ejecute solo una vez
    threshold: 0.1, // Al menos el 10% del elemento debe estar visible para activar el observer
  });

  return (
    <div className="flex justify-center items-center mt-10">
      <img
        ref={ref}
        src="/HOLOBEAT[Giflogo03][BANNER].gif"
        alt="HoloBeat Banner"
        className={`w-3/4 ${
          inView ? "animate-fadeInScale" : "transform scale-0.7 opacity-1"
        }`}
      />
    </div>
  );
};

export default GifContainer;
