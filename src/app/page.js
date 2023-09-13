import BandcampPlayer from "@/components/BandcampPlayer";
import ArtistCard from "../components/ArtistCard";
import AboutUs from "@/components/About";
import ContactUs from "@/components/Contact";

export default function Home() {
  const soundCloudEmbedCode = `
  <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=178173473/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://diffusereality.bandcamp.com/album/lorenzo-mauro-behind-space">Lorenzo Mauro - Behind Space de Diffuse Reality Records</a></iframe>
  `;

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
        <h1>About Us</h1>
      </div>
      <div className="mt-20">
        <AboutUs />
      </div>
      <div className="mt-20">
        <h1>Our Music</h1>
      </div>
      <BandcampPlayer embedCode={soundCloudEmbedCode} />
      <div className="mt-20">
        <h1>Our Artists</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-20">
        {artists.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </div>
      <div className="mt-10">
        <h1>Contact Us/ Demo</h1>
      </div>
      <div className="mt-20">
        <ContactUs />
      </div>
    </main>
  );
}
