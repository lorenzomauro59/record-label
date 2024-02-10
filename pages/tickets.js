import "../src/app/globals.css";
import Header2 from "@/components/Header2";
import ScreenSplash from "@/components/ScreenSplash";
import ToPay from "@/components/ToPay";
import Footer from "@/components/Footer";
import Networks from "@/components/Networks";

const TicketsPage = () => {
  return (
    <>
      <ScreenSplash />
      <Header2 />
      <div className="pt-24">
        <ToPay />
      </div>
      <div className="mt-4">
        <Networks />
      </div>
      <Footer />
    </>
  );
};

export default TicketsPage;
