import MusicPlayer from "@/components/MusicPlayer";
import ArtistCard from "../components/ArtistCard";
import AboutUs from "@/components/About";
import ContactUs from "@/components/Contact";
import GifContainer from "@/components/Gif";

export default function Home() {
  const soundCloudEmbedCode = `
  <iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=420316729/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/" seamless><a href="https://tnrmedia.bandcamp.com/album/peers">Peers de Lorenzo Mauro</a></iframe>`;

  const SpotifyEmbedCode = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3Gb8VJ7tOfKQIohOcuh4bz?utm_source=generator&theme=0" width= "350px" height="468" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;

  const artists = [
    {
      name: "Daian Verna",
      imageUrl: "/unnamed.jpg",
      description:
        "Hailing from Charlone in Buenos Aires, Daian crafts pulsating rhythms that resonate with the urban heartbeat of his hometown. Marrying intricate synths with deep basslines, he has become a rising star, pushing the boundaries of techno with every track.",
    },
    {
      name: "Lorenzo Mauro",
      imageUrl: "/unnamed2.jpg",
      description:
        "Born in the vibrant city of Rosario, Santa Fe, Lorenzo is a techno maestro whose soundscapes transport listeners to otherworldly dimensions. With a knack for blending hypnotic beats with ethereal overtones, he's gained recognition as a pioneer in the Argentinian techno scene.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <AboutUs />
      </div>
      <MusicPlayer
        embedCode={soundCloudEmbedCode}
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
    </main>
  );
}
