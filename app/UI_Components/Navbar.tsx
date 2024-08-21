"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleNav = () => {
    setMenu(!menu);
  };

  return (
    <div className="bg-black text-white  flex justify-between  items-center p-2 ">
      <div className=" hidden md:flex w-full">
        <ul className="hidden md:flex  sm:gap-x-7 ">
          <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold  ">
            <Link href="/">Home</Link>
          </li>
          <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold ">
            <Link href="/menu">Menu</Link>
          </li>

          <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold  ">
            <Link href="/About-me">About Me</Link>
          </li>
        </ul>
      </div>
      <Image
        src="/logo.png"
        alt="Logo"
        className="dark:invert bg-white shadow-lg rounded-full"
        width={70}
        height={20}
        priority
      />
      {/* cart */}
      <div className="hidden md:flex justify-end w-full">
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
            &quot;{"{"}&quot;{"}"}
            <path
              d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
              stroke="#ffffff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            &quot;{"{"}&quot;{"}"}
          </g>
        </svg>
      </div>

      {/* Menu */}
      <div onClick={handleNav} className="md:hidden">
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
            &quot;{"{"}&quot;{"}"}
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#ffffff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            &quot;{"{"}&quot;{"}"}
          </g>
        </svg>
      </div>

      {menu && (
        <>
          <div className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center">
            <div
              className="absolute top-3 right-6 text-3xl "
              onClick={handleNav}
            >
              X
            </div>
            {/* Cart */}
            <div className="absolute top-3 left-6 text-xl">
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
                  &quot;{"{"}&quot;{"}"}
                  <path
                    d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                    stroke="#ffffff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  &quot;{"{"}&quot;{"}"}
                </g>
              </svg>
            </div>

            <ul className="flex flex-col gap-5">
              <li className="text-2xl hover:delay-100 hover:scale-110 hover:font-bold ">
                <Link href="/">Home</Link>
              </li>
              <li className="text-2xl hover:delay-100 hover:scale-110 hover:font-bold ">
                <Link href="/menu">Menu</Link>
              </li>
              <li className="text-2xl hover:delay-100 hover:scale-110 hover:font-bold ">
                <Link href="/Favourites">My Favourites</Link>
              </li>
              <li className="text-2xl hover:delay-100 hover:scale-110 hover:font-bold ">
                <Link href="/Random-Meal">Random Meal</Link>
              </li>
              <li className="text-2xl hover:delay-100 hover:scale-110 hover:font-bold ">
                <Link href="/About-me">About Me</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
