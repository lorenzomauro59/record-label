import Link from "next/link";

export default function Footer() {
  return (
    <nav className="flex justify-center items-center p-24">
      <ul>
        <li>
          <Link href="http://www.soundcloud.com">Soundcloud</Link>
        </li>
        <li>
          <Link href="http://www.instagram.com">Instagram</Link>
        </li>
        <li>
          <Link href="http://www.twitter.com">Twitter</Link>
        </li>
      </ul>
    </nav>
  );
}
