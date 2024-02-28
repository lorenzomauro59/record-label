import MusicPlayer from "@/components/MusicPlayer";
import ArtistCard from "../components/ArtistCard";
import AboutUs from "@/components/About";
import ContactUs from "@/components/Contact";
import GifContainer from "@/components/Gif";
import Networks from "@/components/Networks";

export default function Home() {
  const beatportEmbedCode = `
  <iframe style="border: 0; border-radius:12px; width: 350px; height: 470px;" src="https://embed.beatport.com/?id=4435373&type=release" seamless><a href="https://www.beatport.com/es/release/holo/4435373">HOLO</a></iframe>`;

  const SpotifyEmbedCode = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/7pMdHEnD6jnHIJgteFXif3?utm_source=generator&theme=0" width="350px" height="468" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> `;

  const artists = [
    {
      name: "Daian Verna",
      imageUrl: "/daian.png",
      description:
        "Daian Verna, aka XVRX, is an Argentine techno DJ and producer born in 1996. His music blends technology and dystopian themes, crafting immersive soundscapes that fuse techno with elements of minimalism, ambient, and experimentation. XVRX's style evokes a futuristic universe, marked by dark tones and atmospheric textures.",
    },
    {
      name: "Lorenzo Mauro",
      imageUrl: "/unnamed2.jpg",
      description:
        "Lorenzo Mauro, is a Rosario-based DJ and producer. Draws inspiration from minimal ambient and club techno music. He's carving out his artistic mark in the country's scene for years, releasing with prominent labels and actively contributing to the cultural landscape. Always creating sound horizons to explore.",
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
      <div className="flex flex-col md:flex-row justify-center items-center mt-20">
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
