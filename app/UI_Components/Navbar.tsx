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
    <div className="bg-black text-white  flex justify-between  items-center px-2 pb-2">
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
        width={60}
        height={20}
        priority
      />
      <div className="flex md:justify-end w-full">
        <button className="hidden md:block "> "Cart" </button>
      </div>
      <div>
        <button onClick={handleNav} className="md:hidden">
          {" "}
          "Menu"{" "}
        </button>
      </div>
      {menu && (
        <>
          <div className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center">
            <div className="absolute top-3 right-6 text-xl" onClick={handleNav}>
              X
            </div>
            <div className="absolute top-3 left-6 text-xl">CART</div>
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
