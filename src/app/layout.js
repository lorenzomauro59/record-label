import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Record Label",
  description: "Techno music record label",
};

export default function RootLayout({ children }) {
  return (
    <>
      <div className={inter.className}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}