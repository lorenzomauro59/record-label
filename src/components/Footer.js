import Link from "next/link";
import { FaBandcamp, FaSoundcloud, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <nav>
        <ul className="flex justify-center items-center pt-16 mt-20 border-t border-gray-100">
          <li className="m-8">
            <Link href="http://www.soundcloud.com">
              <FaSoundcloud size={32} />
            </Link>
          </li>
          <li className="m-8">
            <Link href="https://www.instagram.com/holobeatrecords/">
              <FaInstagram size={32} />
            </Link>
          </li>
          <li className="m-8">
            <Link href="http://www.bandcamp.com">
              <FaBandcamp size={32} />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center mb-16">
        <p>HoloBeat</p>
      </div>
    </>
  );
}
