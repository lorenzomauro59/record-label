import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-gray-700 flex justify-between items-center">
      <div>
        <h1>Logo</h1>
      </div>{" "}
      <ul className="flex">
        <li className="hover:text-gray-400">
          <Link className="px-2 py-1" href="/">
            Artists
          </Link>
          <Link className="px-2 py-1" href="/">
            About Us
          </Link>
        </li>
        <li className="hover:text-gray-400">
          <Link className="px-2 py-1" href="/">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
