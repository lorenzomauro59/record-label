import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-white flex justify-between items-center h-16">
      <div className="text-black hover:text-gray-400">
        <Link className="px-2 py-1" href="/">
          Logo
        </Link>
      </div>
      <ul className="flex">
        <li className="text-black hover:text-gray-400">
          <Link className="px-2 py-1" href="/">
            Artists
          </Link>
        </li>
        <li className="text-black hover:text-gray-400">
          <Link className="px-2 py-1" href="/">
            About Us
          </Link>
        </li>
        <li className="text-black hover:text-gray-400">
          <Link className="px-2 py-1" href="/">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
