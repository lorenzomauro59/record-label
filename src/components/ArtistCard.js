"use client";
import Image from "next/image";

import { useInView } from "react-intersection-observer";

function ArtistCard({ artist, animationClass }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`p-4 mb-10 transform translate-x-[-100%] opacity-0 ${
        inView ? animationClass : ""
      }`}
    >
      <div className="relative w-[250px] h-[300px] md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[450px] xl:w-[450px] xl:h-[500px]">
        <Image
          src={artist.imageUrl}
          alt={artist.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <p className="mt-2 max-w-full break-words relative w-[200px] md:w-[300px] lg:w-[400px] xl:w-[450px]">
          {artist.description}
        </p>
      </div>
    </div>
  );
}

export default ArtistCard;
