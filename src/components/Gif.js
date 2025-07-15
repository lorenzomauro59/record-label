"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const GifContainer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex justify-center items-center mt-10">
      <img
        ref={ref}
        src="/HOLOBEAT[Giflogo03][BANNER].gif"
        alt="Holobeat Banner"
        className={`w-3/4 ${
          inView ? "animate-fadeInScale" : "transform scale-0.8 opacity-1"
        }`}
      />
    </div>
  );
};

export default GifContainer;
