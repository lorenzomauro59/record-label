import MusicPlayer from "@/components/MusicPlayer";
import ArtistCard from "../components/ArtistCard";
import AboutUs from "@/components/About";
import ContactUs from "@/components/Contact";
import GifContainer from "@/components/Gif";
import Networks from "@/components/Networks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <AboutUs />
      </div>
      <MusicPlayer />
      <div className="flex flex-col flex-wrap md:flex-row justify-center items-center mt-20">
        <ArtistCard />
      </div>
      <div>
        <GifContainer />
      </div>
      <div className="mt-10" id="contact-us">
        <ContactUs />
      </div>
      <div className="mt-10">
        <Networks />
      </div>
    </main>
  );
}
