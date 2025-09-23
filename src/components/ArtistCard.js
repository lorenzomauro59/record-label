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
        "Daian Verna, is an Argentine techno DJ and producer born in 1996. His music blends technology and dystopian themes, crafting immersive soundscapes that fuse techno with elements of minimalism, ambient, and experimentation. Daian's style evokes a futuristic universe, marked by dark tones and atmospheric textures. Also known as XVRX is responsible for shaping the visual identity of Holobeat and other creative projects.",
      instagramUrl: "https://instagram.com/daianvr",
    },
    {
      name: "Lorenzo Mauro",
      imageUrl: "/loren.png",
      description:
        "Lorenzo Mauro, is a Rosario-based DJ and producer. Draws inspiration from minimal ambient and club techno music. He's carving out his artistic mark in the country's scene for years, releasing with prominent labels and actively contributing to the cultural landscape. Always creating sound horizons to explore.",
      instagramUrl: "https://instagram.com/lorenzomaurox",
    },
    {
      name: "Le Nardo",
      imageUrl: "/lenardo.jpeg",
      description:
        "Le Nardo, a Rosario-born artist now based in Miami, is known for his unique sound deeply rooted in minimalism. His passion for machines drives his creative process, crafting distinctive tracks that stand out in the electronic music scene. With an extensive career, Le Nardo has shared the stage with top artists such as Richie Hawtin, Charlotte de Witte, Joseph Capriati, and many others.",
      instagramUrl: "https://instagram.com/lenardo__",
    },
    {
      name: "Rodri & Jota",
      imageUrl: "/rodrijota.png",
      description:
        "Rodri & Jota are a distinguished artist duo known for their signature sound that seamlessly blends techno and house. Their music resonates within the rave scene of Rosario, marking their years of experimentation and innovation in the electronic music world. In addition to their musical contributions, they are also renowned tattoo artists in the city, bringing their creative skills to both music and visual art.",
      instagramUrl: "https://instagram.com/rodri__jota",
    },
    {
      name: "Murdott",
      imageUrl: "/murdott2.jpg",
      description:
        "Murdott, a DJ and techno producer, is known for his deep, atmospheric, and melancholic sound, which has earned him a spot in the underground scene. His tracks have been played by artists such as Lindsey Herbert, Cia Rebeck, and Josefina Muñoz. Currently, he continues to evolve, culturally and artistically committed to the audiovisual project 'Erosion Frequency'.",
      instagramUrl: "https://instagram.com/murdott",
    },
    {
      name: "Ugly & Dirty",
      imageUrl: "/ugly2.jpeg",
      description:
        "Santino is an emerging musician/producer from Buenos Aires, Argentina. In  2017, he began his journey into the world of music, focusing on blending genres such as minimal and techno. He has established himself as a distinctive artist within local rave scenes, delivering a unique and evolving sound at each performance. His aka reflects his perception of Techno Music, identifying it as 'Ugly and Dirty'.",
      instagramUrl: "https://instagram.com/_uglyanddirty",
    },
    {
      name: "Juxøn",
      imageUrl: "/juve.jpeg",
      description:
        "Juxøn is a young techno producer and DJ from Rosario, Argentina, known for his hypnotic, minimalistic sound that explores the subconscious. His debut EP, Juvxøn, blends his previous style, Juve, with his current approach, reflecting a journey of personal balance. With a focus on 'Music and Spirituality', he aims to connect with listeners and inspire mental healing while continuing to evolve his sound.",
      instagramUrl: "https://instagram.com/juxon._",
    },
    {
      name: "Pørtal",
      imageUrl: "/portal.png",
      description:
        "Pørtal is a Sicilian-born Dj and producer. At 21, he moved to Barcelona, drawn by the city’s vibrant electronic music culture. Here, he honed his craft, creating sets and productions that guide listeners on a mesmerizing journey through hypnotic sounds. ",
      instagramUrl: "https://instagram.com/portal.looped",
    },
    {
      name: "MRDIE",
      imageUrl: "/diego.png",
      description:
        "MRDIE is a seasoned electronic music producer with a deep love for machines and analog gear. With a long-standing career, he has released on the renowned Minus label and contributed significantly to the global techno culture. ",
      instagramUrl: "https://instagram.com/dieferrey",
    },
    {
      name: "Rekall.ar",
      imageUrl: "/rekall.jpeg",
      description:
        "Rekall.ar is an Argentine producer focused on hypnotic and minimal techno. His sound combines deep textures, hypnotic rhythms, and immersive atmospheres, with a focus on the dance floor and an underground aesthetic.",
      instagramUrl: "https://instagram.com/rekall.ar",
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
