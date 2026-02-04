"use client";

import { useInView } from "react-intersection-observer";

export default function MixSeries() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const youtubeEmbedCode = `<iframe width="100%" height="400" src="https://www.youtube.com/embed/fNKeroBjLLk?si=poC2A_GrSapKlVVf" title="Holobeat Mix Series" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius: 12px;"></iframe>`;

  return (
    <section id="mix-series" className="w-full bg-white pb-20 px-4">
      <div className="mb-16 text-center">
        <h2 className="text-black text-3xl md:text-5xl font-semibold tracking-wide leading-tight animate-fadeInScale">
          Mix Series.
        </h2>
      </div>
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ease-in-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        dangerouslySetInnerHTML={{ __html: youtubeEmbedCode }}
      />
    </section>
  );
}
