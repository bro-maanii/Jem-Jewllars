import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center w-full md:h-[500px] max-w-6xl mx-auto p-3 gap-3">
      <div className="flex flex-col justify-center gap-4 text-center w-full">
        {/* Optimized heading with relevant keywords */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-center">
          Discover the World of Exquisite Jewelry
        </h1>

        {/* Keyword-rich description */}
        <p className="text-gray-700">
          Explore our stunning collection of handcrafted jewelry, including{" "}
          <strong>rings</strong>, <strong>earrings</strong>, and{" "}
          <strong>bracelets</strong>. Designed with precision and passion, each
          piece reflects timeless elegance. Shop now to elevate your style with
          exclusive, luxurious jewelry perfect for any occasion.
        </p>

        <Button className="relative overflow-hidden bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none">
          <Link href="/All-Products">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-900 transform -translate-x-full transition-transform duration-500 ease-out hover:translate-x-0"></span>
            <span className="relative">Shop Now</span>
          </Link>
        </Button>
      </div>

      <div className="w-full flex items-center">
        <Image
          src="/heroImage.png"
          alt="Exquisite Jewelry Collection – Rings, Earrings, Bracelets"
          width={1000}
          height={1000}
          className="w-full h-72 md:h-80 object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}

export default Hero;
