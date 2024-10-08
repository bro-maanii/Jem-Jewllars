"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-black text-white p-2">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        <div className="hidden md:flex w-full">
          <ul className="hidden md:flex md:gap-x-2 lg:gap-6">
            <li
              className={`text-base ${
                pathname === "/"
                  ? "underline decoration-4 decoration-blue-400 font-semibold  "
                  : ""
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`text-base ${
                pathname === "/All-Products"
                  ? "font-semibold underline decoration-4 decoration-blue-400"
                  : ""
              }`}
            >
              <Link href="/All-Products" onClick={() => setMenuOpen(false)}>
                All Products
              </Link>
            </li>
            <li
              className={`text-base cursor-pointer relative ${
                pathname === "/Category/Ring" ||
                pathname === "/Category/EarRing" ||
                pathname === "/Category/Barcelets"
                  ? "underline decoration-4 font-semibold  decoration-blue-400"
                  : ""
              }`}
              onClick={handleDropdownToggle}
            >
              Category
              <ul
                className={`absolute w-40 text-black bg-white p-2 mt-2 transform transition-all duration-300 ease-in-out ${
                  dropdownOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
              >
                <li className="text-lg">
                  <Link href="/Category/Ring">Rings</Link>
                </li>
                <li className="text-lg">
                  <Link href="/Category/EarRing">Earrings</Link>
                </li>
                <li className="text-lg">
                  <Link href="/Category/Barcelets">Bracelets</Link>
                </li>
              </ul>
            </li>
            <li
              className={`text-base ${
                pathname === "/Contact-us"
                  ? "underline decoration-4 decoration-blue-400 font-semibold "
                  : ""
              }`}
            >
              <Link href="/Contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Image
          src="/logo.png"
          alt="Logo"
          className={`${
            menuOpen
              ? "hidden"
              : "opacity-100 dark:invert bg-white shadow-lg rounded-full"
          }`}
          width={70}
          height={20}
          priority
        />
        {/* Cart */}
        <div className="hidden md:flex justify-end w-full">
          <Link href="/Cart">
            <svg
              width="40px"
              height="40px"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#ffffff"
                strokeWidth="0.048"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                  stroke="#ffffff"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </Link>
        </div>

        {/* Menu */}
        <div
          onClick={handleNavToggle}
          className={`${menuOpen ? "hidden" : "md:hidden"}`}
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#ffffff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>

        {menuOpen && (
          <div className="top-0 left-0 w-full h-screen bg-black flex flex-col justify-center pl-6">
            <div
              className="absolute top-8 right-6 text-3xl cursor-pointer"
              onClick={handleNavToggle}
            >
              X
            </div>
            {/* Cart */}
            <div className="absolute top-8 left-6 text-xl">
              <Link href="/Cart" onClick={() => setMenuOpen(false)}>
                <svg
                  width="40px"
                  height="40px"
                  viewBox="-2.4 -2.4 28.80 28.80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#ffffff"
                    strokeWidth="0.048"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                      stroke="#ffffff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </Link>
            </div>

            <ul className="flex flex-col gap-5">
              <li
                className={`text-2xl ${
                  pathname === "/"
                    ? "font-semibold underline decoration-4 decoration-blue-400"
                    : ""
                }`}
              >
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li
                className={`text-2xl ${
                  pathname === "/All-Products"
                    ? "font-semibold underline decoration-4 decoration-blue-400"
                    : ""
                }`}
              >
                <Link href="/All-Products" onClick={() => setMenuOpen(false)}>
                  All Products
                </Link>
              </li>
              <li
                className={`text-2xl  relative cursor-pointer ${
                  pathname === "/Category/Ring" ||
                  pathname === "/Category/EarRing" ||
                  pathname === "/Category/Barcelets"
                    ? "font-semibold underline decoration-4 decoration-blue-400"
                    : ""
                }`}
                onClick={handleDropdownToggle}
              >
                Category
                <ul
                  className={`absolute w-40 text-black bg-white p-2 mt-2 transform transition-all duration-300 ease-in-out ${
                    dropdownOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4 pointer-events-none"
                  }`}
                >
                  <li className="text-xl pb-3">
                    <Link
                      href="/Category/Ring"
                      onClick={() => setMenuOpen(false)}
                    >
                      Rings
                    </Link>
                  </li>
                  <li className="text-xl pb-3">
                    <Link
                      href="/Category/EarRing"
                      onClick={() => setMenuOpen(false)}
                    >
                      Earrings
                    </Link>
                  </li>
                  <li className="text-xl pb-3">
                    <Link
                      href="/Category/Barcelets"
                      onClick={() => setMenuOpen(false)}
                    >
                      Bracelets
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`text-2xl ${
                  pathname === "/Contact-us"
                    ? "font-semibold underline decoration-4 decoration-blue-400"
                    : ""
                }`}
              >
                <Link href="/Contact-us" onClick={() => setMenuOpen(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
