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

      {/* Nombre del artista */}
      <h3 className="mt-4 text-lg font-semibold text-white tracking-wide">
        {artist.name}
      </h3>

      <p className="mt-2 text-sm text-white/80 leading-relaxed max-w-[350px]">
        {artist.description}
      </p>
    </motion.div>
  );
}

export default function Artists() {
  const artists = [
    {
      name: "Daian Verna",
      imageUrl: "/daian.jpg",
      description:
        "Daian Verna es un DJ y productor de techno argentino nacido en 1996. Su música combina tecnología y temas distópicos, creando paisajes sonoros inmersivos que fusionan techno con elementos del minimalismo, ambient y experimentación. Su estilo evoca un universo futurista, marcado por tonos oscuros y texturas atmosféricas. También conocido como XVRX, es responsable de dar forma a la identidad visual de Holobeat y otros proyectos creativos.",
      instagramUrl: "https://instagram.com/daianvr",
    },
    {
      name: "Lorenzo Mauro",
      imageUrl: "/loren.png",
      description:
        "Lorenzo Mauro es un DJ y productor nacido en Rosario, Argentina. Se inspira en el minimal ambient y el techno de club. Viene dejando su huella artística en la escena del país desde hace años, lanzando con sellos destacados y contribuyendo activamente al panorama cultural. Siempre creando nuevos horizontes sonoros por explorar.",
      instagramUrl: "https://instagram.com/lorenzomaurox",
    },
    {
      name: "Le Nardo",
      imageUrl: "/lenardo.jpeg",
      description:
        "Le Nardo, artista nacido en Rosario y actualmente radicado en Miami, es conocido por su sonido único profundamente arraigado en el minimalismo. Su pasión por las máquinas impulsa su proceso creativo, dando forma a tracks distintivos que sobresalen en la escena electrónica. Con una extensa trayectoria, Le Nardo ha compartido escenario con artistas como Richie Hawtin, Charlotte de Witte, Joseph Capriati, entre muchos otros.",
      instagramUrl: "https://instagram.com/lenardo__",
    },
    {
      name: "Rodri & Jota",
      imageUrl: "/rodrijota.png",
      description:
        "Rodri & Jota son un dúo de artistas reconocidos por su sonido característico que fusiona de manera fluida el techno y el house. Su música resuena en la escena rave de Rosario, marcando sus años de experimentación e innovación dentro del mundo electrónico. Además de su aporte musical, también son reconocidos tatuadores en la ciudad, llevando su creatividad tanto a la música como al arte visual.",
      instagramUrl: "https://instagram.com/rodri__jota",
    },
    {
      name: "Murdott",
      imageUrl: "/murdott2.jpg",
      description:
        "Murdott es un DJ y productor de techno reconocido por su sonido profundo, atmosférico y melancólico, que le ha valido un lugar en la escena underground. Sus tracks fueron apoyados por artistas como Lindsey Herbert, Cia Rebeck y Josefina Muñoz. Actualmente continúa evolucionando, comprometido cultural y artísticamente con el proyecto audiovisual 'Erosion Frequency'.",
      instagramUrl: "https://instagram.com/murdott",
    },
    {
      name: "UGLYANDDIRTY",
      imageUrl: "/ugly2.jpeg",
      description:
        "Santino es un músico y productor emergente de Buenos Aires, Argentina. En 2017 comenzó su camino en el mundo de la música, enfocándose en la fusión de géneros como el minimal y el techno. Se ha consolidado como un artista distintivo dentro de las escenas rave locales, ofreciendo un sonido único y en constante evolución en cada presentación. Su aka refleja su percepción del techno, identificándolo como 'Ugly and Dirty'.",
      instagramUrl: "https://instagram.com/_uglyanddirty",
    },
    {
      name: "Juxøn",
      imageUrl: "/juve.jpeg",
      description:
        "Juxøn es un joven productor y DJ de techno de Rosario, Argentina, conocido por su sonido hipnótico y minimalista que explora el subconsciente. Su EP debut, 'Juvxøn', fusiona su estilo anterior, Juve, con su enfoque actual, reflejando un viaje hacia el equilibrio personal. Con un enfoque en 'Música y Espiritualidad', busca conectar con los oyentes e inspirar sanación mental mientras continúa evolucionando su sonido.",
      instagramUrl: "https://instagram.com/juxon._",
    },
    {
      name: "Pørtal",
      imageUrl: "/portal.png",
      description:
        "Pørtal es un DJ y productor nacido en Sicilia. A los 21 años se mudó a Barcelona, atraído por la vibrante cultura electrónica de la ciudad. Allí perfeccionó su arte, creando sets y producciones que guían al oyente en un viaje hipnótico a través del sonido.",
      instagramUrl: "https://instagram.com/portal.looped",
    },
    {
      name: "MRDIE",
      imageUrl: "/diego.png",
      description:
        "MRDIE es un productor de música electrónica con una profunda pasión por las máquinas y el equipo analógico. Con una extensa carrera, ha lanzado música en el reconocido sello Minus y ha contribuido significativamente a la cultura techno a nivel global.",
      instagramUrl: "https://instagram.com/dieferrey",
    },
    {
      name: "Rekall.ar",
      imageUrl: "/rekall.jpeg",
      description:
        "Rekall.ar es un productor argentino enfocado en el techno hipnótico y minimalista. Su sonido combina texturas profundas, ritmos hipnóticos y atmósferas envolventes, con un enfoque en la pista de baile y una estética underground.",
      instagramUrl: "https://instagram.com/rekall.ar",
    },
    {
      name: "Zetta JCG",
      imageUrl: "/zetta.jpeg",
      description:
        "Zetta es un DJ y productor de Rosario, Santa Fe, Argentina, cuyo sonido se define por un techno hipnótico, mental y oscuro. Con líneas de bajo grooveras, texturas profundas y un toque agresivo, su música transforma la pista en un espacio de inmersión total.",
      instagramUrl: "https://instagram.com/zetta.jcg",
    },
    {
      name: "Sec Tøm",
      imageUrl: "/sec-tom.jpg",
      description:
        "Sec Tøm es un proyecto groove que navega entre lo raw, el minimal y el minimal moderno, con un solo objetivo: provocar movimiento. Su sonido combina lo hipnótico y lo analógico , sin dejar atrás lo digital, que generan un viaje de pura tensión y energía. El futuro aún incierto, pero en mis manos.",
      instagramUrl: "https://instagram.com/sectom.ghf",
    },
    {
      name: "Lukë.",
      imageUrl: "/luke.png",
      description:
        "Lukë. es un productor y DJ de Buenos Aires cuyo sonido combina groove, profundidad y una estética minimal contemporánea. Con una identidad en pleno desarrollo, se perfila como una de las nuevas promesas del techno argentino.",
      instagramUrl: "https://instagram.com/lucaslukee_",
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
        Artistas.
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-start gap-10 max-w-7xl mx-auto"
      >
        {[...artists].reverse().map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </motion.div>
    </section>
  );
}
