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
      className={`p-6 mb-5 transform translate-x-[-100%] opacity-0 ${
        inView ? animationClass : ""
      }`}
    >
      {/* Imagen */}
      <div className="relative w-[250px] h-[300px] md:w-[300px] md:h-[350px] lg:w-[300px] lg:h-[350px] xl:w-[350px] xl:h-[350px]">
        <Image
          src={artist.imageUrl}
          alt={artist.name}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Contenedor del Texto con Altura Responsiva */}
      <div className="mt-2 w-[250px] md:w-[300px] lg:w-[300px] xl:w-[350px]">
        <p className="break-words min-h-[200px] max-h-[300px] sm:max-h-[300px] lg:max-h-[250px] xl:max-h-[300px] md:min-h-[300px]">
          {artist.description}
        </p>
      </div>
    </div>
  );
}

export default ArtistCard;
