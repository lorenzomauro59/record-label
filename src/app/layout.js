import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScreenSplash from "@/components/ScreenSplash";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Holobeat",
  description: "Techno music record label",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ScreenSplash />
        <div className={inter.className}>
          <Header />
          {children}
          <Footer className="m-8" />
        </div>
      </body>
    </html>
  );
}
