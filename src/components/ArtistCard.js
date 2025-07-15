"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function ArtistCard({ artist }) {
  return (
    <motion.div variants={cardVariants}>
      <Link
        href={artist.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-[350px] h-[350px] cursor-pointer overflow-hidden rounded-xl shadow-md"
        >
          <Image
            src={artist.imageUrl}
            alt={artist.name}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </motion.div>
      </Link>
      <div className="mt-4 max-w-[350px]">
        <p className="text-sm text-white leading-relaxed">
          {artist.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Artists() {
  const artists = [
    {
      name: "Daian Verna",
      imageUrl: "/daian.jpg",
      description:
        "Daian Verna, is an Argentine techno DJ and producer born in 1996. His music blends technology and dystopian themes...",
      instagramUrl: "https://instagram.com/daianvr",
    },
    {
      name: "Lorenzo Mauro",
      imageUrl: "/loren.png",
      description:
        "Lorenzo Mauro, is a Rosario-based DJ and producer. Draws inspiration from minimal ambient and club techno music...",
      instagramUrl: "https://instagram.com/lorenzomaurox",
    },
    {
      name: "Le Nardo",
      imageUrl: "/lenardo.jpeg",
      description:
        "Le Nardo, a Rosario-born artist now based in Miami, is known for his unique sound deeply rooted in minimalism...",
      instagramUrl: "https://instagram.com/lenardo__",
    },
    {
      name: "Rodri & Jota",
      imageUrl: "/rodrijota.png",
      description:
        "Rodri & Jota are a distinguished artist duo known for their signature sound that seamlessly blends techno and house...",
      instagramUrl: "https://instagram.com/rodri__jota",
    },
    {
      name: "Murdott",
      imageUrl: "/murdott2.jpg",
      description:
        "Murdott, a DJ and techno producer, is known for his deep, atmospheric, and melancholic sound, which has earned him a spot in the underground scene...",
      instagramUrl: "https://instagram.com/murdott",
    },
    {
      name: "Ugly & Dirty",
      imageUrl: "/ugly2.jpeg",
      description:
        "Santino is an emerging musician/producer from Buenos Aires, Argentina. In 2017, he began his journey into the world of music...",
      instagramUrl: "https://instagram.com/_uglyanddirty",
    },
    {
      name: "Juxøn",
      imageUrl: "/juve.jpeg",
      description:
        "Juxøn is a young techno producer and DJ from Rosario, Argentina, known for his hypnotic, minimalistic sound...",
      instagramUrl: "https://instagram.com/juxon._",
    },
    {
      name: "Pørtal",
      imageUrl: "/portal.png",
      description:
        "Pørtal is a Sicilian-born Dj and producer. At 21, he moved to Barcelona, drawn by the city’s vibrant electronic music culture...",
      instagramUrl: "https://instagram.com/portal.looped",
    },
    {
      name: "MRDIE",
      imageUrl: "/diego.png",
      description:
        "MRDIE is a seasoned electronic music producer with a deep love for machines and analog gear...",
      instagramUrl: "https://instagram.com/dieferrey",
    },
  ];

  return (
    <section id="our-artists" className="py-20 px-4 bg-black text-white">
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center text-3xl md:text-5xl font-semibold tracking-wide leading-tight mb-16"
      >
        Our Artists
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-start gap-10 max-w-7xl mx-auto"
      >
        {artists.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </motion.div>
    </section>
  );
}
