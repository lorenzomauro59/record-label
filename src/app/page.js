import MusicPlayer from "@/components/MusicPlayer";
import ArtistCard from "../components/ArtistCard";
import AboutUs from "@/components/About";
import ContactUs from "@/components/Contact";
import GifContainer from "@/components/Gif";
import Networks from "@/components/Networks";

export default function Home() {
  const beatportEmbedCode = `<iframe style="border-radius:12px" src="https://embed.beatport.com/?id=4936412&type=release" width="350" height="468" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>`;

  const SpotifyEmbedCode = `  <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3QFyfvNQkJddmuPjauZHGZ?utm_source=generator" width="350px" height="468" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  `;

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
        "Santino is an emerging musician/producer from Buenos Aires, Argentina. In 2017, he began his journey into the world of music, focusing on blending genres such as minimal and techno. He has established himself as a distinctive artist within local rave scenes, delivering a unique and evolving sound at each performance. His aka reflects his perception of Techno Music, identifying it as 'Ugly and Dirty'.",
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
  ];

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <div>
        <AboutUs />
      </div>
      <MusicPlayer
        embedCode={beatportEmbedCode}
        spotifyEmbedCode={SpotifyEmbedCode}
      />
      <div id="our-artists" className="mt-10">
        <h2 className="text-xl font-semibold leading-tight">Our Artists</h2>
      </div>
      <div className="flex flex-col flex-wrap md:flex-row justify-center items-center mt-20">
        {artists.map((artist, index) => (
          <ArtistCard
            key={index}
            artist={artist}
            animationClass={
              index === 1 ? "animate-slideInDelayed" : "animate-slideIn"
            }
          />
        ))}
      </div>
      <div>
        <GifContainer />
      </div>
      <div id="contact-us">
        <h2 className="text-xl font-semibold leading-tight">
          Contact Us / Demo
        </h2>
      </div>
      <div className="mt-10">
        <ContactUs />
      </div>
      <div className="mt-10">
        <Networks />
      </div>
    </main>
  );
}
