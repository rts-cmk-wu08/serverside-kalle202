import Link from "next/link";
import { CiUser, CiSearch, CiShoppingCart, CiHeart } from "react-icons/ci";

export default function Nav() {
  return (
    <nav className="grid grid-cols-3 items-center absolute w-full z-50 h-16 text-lg">
      <ul className="grid grid-cols-5 justify-items-center ">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/shop">SHOP</Link>
        </li>
        <li>
          <Link href="/blog">BLOGS*</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT*</Link>
        </li>
      </ul>
      <div className="grid grid-cols-1 justify-items-center">
        <Link href="/">
          <p className="text-4xl">
            SWANKY<span className="text-orange-500">.</span>
          </p>
        </Link>
      </div>
      <ul className="grid grid-cols-4 justify-items-center items-center">
        <li>
          <Link
            href="/login"
            className="flex items-center"
          >
            <CiUser className="w-6 h-6" />
            LOGIN
          </Link>
        </li>
        <li>
          <Link
            href="/search"
            className="flex items-center"
          >
            SEARCH...
            <CiSearch className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link
            href="/favorites"
            className="flex"
          >
            <CiHeart className="w-6 h-6" />
            (0)
          </Link>
        </li>
        <li>
          <Link
            href="/cart"
            className="flex"
          >
            <CiShoppingCart className="w-6 h-6" />
            (0)
          </Link>
        </li>
      </ul>
    </nav>
  );
}

/* <nav className="flex justify-around items-center bg-orange-700 text-white">
      <ul className="flex justify-between gap-16">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/shop">SHOP</Link>
        </li>
        <li>
          <Link href="/blogs">BLOGS</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
      <Link href="/">
        <p className="text-2xl">
          SWANKY<span className="text-orange-500">.</span>
        </p>
      </Link>
      <ul className="flex justify-between gap-16">
        <li>
          <Link href="/login">🙍‍♂️LOGIN</Link>
        </li>
        <li>
          <Link href="/search">SEARCH...🔍</Link>
        </li>
        <li>
          <Link href="/favorites">❤</Link>
        </li>
        <li>
          <Link href="/cart">🛒</Link>
        </li>
      </ul>
    </nav> */
