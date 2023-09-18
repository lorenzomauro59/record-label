import BandcampPlayer from "@/components/BandcampPlayer";
import ArtistCard from "../components/ArtistCard";
import AboutUs from "@/components/About";
import ContactUs from "@/components/Contact";
import GifContainer from "@/components/Gif";

export default function Home() {
  const soundCloudEmbedCode = `
  <iframe style="border: 0; width: 400px; height: 274px;" src="https://bandcamp.com/EmbeddedPlayer/album=420316729/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/" seamless><a href="https://tnrmedia.bandcamp.com/album/peers">Peers de Lorenzo Mauro</a></iframe>`;

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
    <main className="flex min-h-screen flex-col items-center p-12">
      <div>
        <GifContainer />
      </div>
      <div id="about-us">
        <h2 className="text-xl font-semibold leading-tight">About Us</h2>
      </div>
      <div className="mt-20">
        <AboutUs />
      </div>

      <div id="our-music" className="mt-20">
        <h2 className="text-xl font-semibold leading-tight">Our Music</h2>
      </div>
      <BandcampPlayer embedCode={soundCloudEmbedCode} />
      <div id="our-artists" className="mt-20">
        <h2 className="text-xl font-semibold leading-tight">Our Artists</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-20">
        {artists.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </div>
      <div id="contact-us" className="mt-10">
        <h2 className="text-xl font-semibold leading-tight">
          Contact Us/ Demo
        </h2>
      </div>
      <div className="mt-20">
        <ContactUs />
      </div>
    </main>
  );
}
