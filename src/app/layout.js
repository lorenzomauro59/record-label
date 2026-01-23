import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScreenSplash from "@/components/ScreenSplash";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Holobeat | Techno Label",
  description:
    "Holobeat is an independent techno label focused on deep, minimal and hypnotic electronic music.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Holobeat",
    description:
      "Independent techno label focused on deep, minimal and hypnotic electronic music.",
    url: "https://holobeat.com.ar", // cambiá por el dominio real
    siteName: "Holobeat",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Holobeat",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Holobeat",
    description:
      "Independent techno label focused on deep, minimal and hypnotic electronic music.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScreenSplash />
        <Header />
        {children}
        <Footer className="m-8" />
      </body>
    </html>
  );
}
