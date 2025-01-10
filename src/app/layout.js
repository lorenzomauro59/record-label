import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScreenSplash from "@/components/ScreenSplash";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Holobeat",
  description: "Techno Record Label",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
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
