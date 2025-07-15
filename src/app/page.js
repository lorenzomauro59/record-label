import MusicPlayer from "@/components/MusicPlayer";
import ArtistCard from "../components/ArtistCard";
import AboutUs from "@/components/About";
import ContactUs from "@/components/Contact";
import GifContainer from "@/components/Gif";
import Networks from "@/components/Networks";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div>
        <AboutUs />
      </div>
      <MusicPlayer />
      <div className="flex flex-col flex-wrap md:flex-row justify-center items-center">
        <ArtistCard />
      </div>
      <div id="contact-us">
        <ContactUs />
      </div>
      <div className="mt-20">
        <Networks />
      </div>
    </main>
  );
}
