import Link from "next/link";
import { FaBandcamp, FaSoundcloud, FaInstagram } from "react-icons/fa";

export default function Networks() {
  return (
    <>
      <div id="our-networks" className="flex justify-center pt-20">
        <h2 className="text-xl text-white font-semibold leading-tight">
          Our Networks
        </h2>
      </div>
      <ul className="flex flex-col md:flex-row justify-center items-center pt-16 pb-24">
        <li className="m-8 md:m-12 lg:m-16">
          <Link href="http://www.soundcloud.com">
            <FaSoundcloud size={96} />
          </Link>
        </li>
        <li className="m-8 md:m-12 lg:m-16">
          <Link href="https://www.instagram.com/holobeatrecords/">
            <FaInstagram size={96} />
          </Link>
        </li>
        <li className="m-8 md:m-12 lg:m-16">
          <Link href="http://www.bandcamp.com">
            <FaBandcamp size={96} />
          </Link>
        </li>
      </ul>
    </>
  );
}
