import Link from "next/link";
import { FaSoundcloud, FaInstagram } from "react-icons/fa";

export default function Networks() {
  return (
    <>
      <div id="our-networks" className="flex justify-center pt-40">
        <h2 className="text-xl text-white font-semibold leading-tight">
          Our Networks
        </h2>
      </div>
      <ul className="flex flex-col md:flex-row justify-center items-center pt-16 pb-24">
        <li className="m-8 md:m-12 lg:m-16">
          <Link href="http://www.soundcloud.com/holo-beat">
            <FaSoundcloud size={96} />
          </Link>
        </li>
        <li className="m-8 md:m-12 lg:m-16">
          <Link href="https://www.instagram.com/holobeat.rec/">
            <FaInstagram size={96} />
          </Link>
        </li>
        <li className="m-8 md:m-12 lg:m-16">
          <Link href="https://www.beatport.com/es/label/holobeat/119140">
            <img src="/beatport.svg" alt="Beatport" width={96} height={96} />
          </Link>
        </li>
      </ul>
    </>
  );
}
