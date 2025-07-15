import Link from "next/link";
import { FaSoundcloud, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Networks() {
  return (
    <section className="w-full bg-black text-white py-12">
      <div id="our-networks" className="flex justify-center w-full">
        <h2 className="text-center text-3xl md:text-5xl font-semibold tracking-wide leading-tight animate-fadeInScale">
          Our Networks
        </h2>
      </div>

      <ul className="flex flex-col md:flex-row justify-center items-center pt-16 w-full">
        <li className="m-8 md:m-12 lg:m-16">
          <Link
            href="http://www.soundcloud.com/holo-beat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSoundcloud
              size={96}
              className="hover:opacity-80  transition-colors"
            />
          </Link>
        </li>
        <li className="m-8 md:m-12 lg:m-16">
          <Link
            href="https://www.instagram.com/holobeat.rec/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={96}
              className="hover:opacity-80  transition-colors"
            />
          </Link>
        </li>
        <li className="m-8 md:m-12 lg:m-16">
          <Link
            href="https://www.beatport.com/es/label/holobeat/119140"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/beatport.png"
              alt="Beatport"
              width={96}
              height={96}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
}
