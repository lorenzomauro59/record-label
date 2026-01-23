"use client";

import { useInView } from "react-intersection-observer";

export default function MusicPlayer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const beatportEmbedCode = `<iframe
    title="Holobeat Records – Beatport Release"
    style="border-radius:12px"
    src="https://embed.beatport.com/?id=5769325&type=release"
    width="100%"
    height="352"
    frameborder="0"
    scrolling="no">
  </iframe>`;

  const spotifyEmbedCode = `<iframe
    title="Holobeat Records – Spotify Album"
    style="border-radius:12px"
    src="https://open.spotify.com/embed/album/6dnAujesv0QbPx5vurdjFh?utm_source=generator"
    width="100%"
    height="352"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy">
  </iframe>`;

  return (
    <section
      id="our-music"
      className="w-full bg-white pb-20 px-4"
      aria-labelledby="music-heading"
    >
      {/* SEO H2 */}
      <div className="mb-16 text-center">
        <h2
          id="music-heading"
          className="text-black text-3xl md:text-5xl font-semibold tracking-wide leading-tight animate-fadeInScale"
        >
          Música
        </h2>
      </div>

      {/* Texto SEO oculto */}
      <p className="sr-only">
        Listen to the latest release from Holobeat Records on Beatport and
        Spotify. Discover deep, minimal and hypnotic techno music from
        independent artists.
      </p>

      {/* Embeds */}
      <div
        ref={ref}
        className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto"
      >
        <article
          className={`w-full md:w-1/2 transition-transform duration-700 ease-in-out ${
            inView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <h3 className="sr-only">Beatport release</h3>
          <div dangerouslySetInnerHTML={{ __html: beatportEmbedCode }} />
        </article>

        <article
          className={`w-full md:w-1/2 transition-transform duration-700 ease-in-out ${
            inView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <h3 className="sr-only">Spotify album</h3>
          <div dangerouslySetInnerHTML={{ __html: spotifyEmbedCode }} />
        </article>
      </div>
    </section>
  );
}
