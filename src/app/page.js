import MusicPlayer from "@/components/MusicPlayer";
import ArtistCard from "../components/ArtistCard";
import AboutUs from "@/components/About";
import ContactUs from "@/components/Contact";
import GifContainer from "@/components/Gif";
import Networks from "@/components/Networks";

export default function Home() {
  const soundCloudEmbedCode = `
  <iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=420316729/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/" seamless><a href="https://tnrmedia.bandcamp.com/album/peers">Peers de Lorenzo Mauro</a></iframe>`;

  const SpotifyEmbedCode = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3Gb8VJ7tOfKQIohOcuh4bz?utm_source=generator&theme=0" width= "350px" height="468" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;

  const artists = [
    {
      name: "Daian Verna",
      imageUrl: "/daian.png",
      description:
        "Driven by innate talent and a bold vision, Daian Verna embodies the future of techno music. His ability to experiment and craft immersive atmospheres perfectly aligns with Holobeat's mission to promote groundbreaking music. Daian not only captures the essence of modern techno but stands as a living testament to Holobeat's support for emerging artists.",
    },
    {
      name: "Lorenzo Mauro",
      imageUrl: "/unnamed2.jpg",
      description:
        "A trailblazer in the techno scene, Lorenzo Mauro harbors an unmatched passion for avant-garde music. His knack for blending innovative sounds with powerful rhythms has cemented him as one of Holobeat's crown jewels. With every production, Lorenzo showcases his commitment to creativity and excellence, echoing Holobeat's pioneering spirit.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
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
      <div className="mt-10">
        <Networks />
      </div>
    </main>
  );
}
