import { useState } from "react";
import Link from "next/link"; // Import Next.js Link component

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`bg-white text-black p-4 sticky top-0 z-10 shadow-md transition-all duration-300 ${
        menuOpen ? "h-auto" : "h-16"
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">ReliPro</Link>
        </h1>

        {/* Hamburger / X Menu for small screens */}
        <button
          className="lg:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strstrokeLinejoin="round"
                strookeLinecap="round"
                keWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-10">
          <Link href="/" passHref>
            <span className="text-black hover:text-teal-300">Home</span>
          </Link>
          <Link href="/about" passHref>
            <span className="text-black hover:text-teal-300">About</span>
          </Link>
          <Link href="/features" passHref>
            <span className="text-black hover:text-teal-300">Features</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="text-black hover:text-teal-300">Contact</span>
          </Link>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden absolute top-16 right-0 w-48 bg-white shadow-md transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <nav className="flex flex-col items-stretch py-4 border-t border-b">
            <Link href="/" passHref>
              <span className="py-3 px-4 text-black hover:text-teal-300 border-b">
                Home
              </span>
            </Link>
            <Link href="/about" passHref>
              <span className="py-3 px-4 text-black hover:text-teal-300 border-b">
                About
              </span>
            </Link>
            <Link href="/features" passHref>
              <span className="py-3 px-4 text-black hover:text-teal-300 border-b">
                Features
              </span>
            </Link>
            <Link href="/contact" passHref>
              <span className="py-3 px-4 text-black hover:text-teal-300">
                Contact
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
