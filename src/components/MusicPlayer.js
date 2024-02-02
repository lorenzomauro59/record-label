"use client";
import { useInView } from "react-intersection-observer";

export default function MusicPlayer({ embedCode, spotifyEmbedCode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white w-screen">
      <div id="our-music" className="flex justify-center pt-32">
        <h2 className="text-xl text-black font-semibold leading-tight">
          Our Music
        </h2>
      </div>
      <div
        ref={ref}
        className="flex flex-col mb-20 md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
      >
        <div
          className={`flex justify-center w-full md:w-1/2 transform translate-x-[-100%] opacity-0 ${
            inView ? "animate-slideInLeft" : ""
          }`}
          dangerouslySetInnerHTML={{ __html: embedCode }}
        />
        <div
          className={`flex justify-center w-full md:w-1/2 transform translate-x-[100%] opacity-0 ${
            inView ? "animate-slideInRight" : ""
          }`}
          dangerouslySetInnerHTML={{ __html: spotifyEmbedCode }}
        />
      </div>
    </div>
  );
}
