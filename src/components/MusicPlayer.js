"use client";

import { useInView } from "react-intersection-observer";

export default function MusicPlayer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const beatportEmbedCode = `<iframe style="border-radius:12px" src="https://embed.beatport.com/?id=5397813&type=release" width="100%" height="352" frameborder="0" scrolling="no"></iframe>`;

  const spotifyEmbedCode = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2kOIZRmr8XIJ8biUIVKRdX?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;

  return (
    <section id="our-music" className="w-full bg-white pb-20 px-4">
      <div className="mb-16 text-center">
        <h2 className="text-black text-3xl md:text-5xl font-semibold tracking-wide leading-tight animate-fadeInScale">
          Música
        </h2>
      </div>
      <div
        ref={ref}
        className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto"
      >
        <div
          className={`w-full md:w-1/2 transition-transform duration-700 ease-in-out ${
            inView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
          dangerouslySetInnerHTML={{ __html: beatportEmbedCode }}
        />
        <div
          className={`w-full md:w-1/2 transition-transform duration-700 ease-in-out ${
            inView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
          dangerouslySetInnerHTML={{ __html: spotifyEmbedCode }}
        />
      </div>
    </section>
  );
}
