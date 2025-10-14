import MusicPlayer from "@/components/MusicPlayer";
import ArtistCard from "../components/ArtistCard";
import AboutUs from "@/components/Hero";
import ContactUs from "@/components/Contact";
import Networks from "@/components/Networks";
import MixSeries from "@/components/MixSeries";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div>
        <AboutUs />
      </div>
      <MusicPlayer />
      <div className="flex flex-col flex-wrap md:flex-row justify-center items-center">
        <MixSeries />
        <div className="flex flex-col flex-wrap md:flex-row justify-center items-center"></div>
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
