import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className=" flex flex-col-reverse sm:flex-row justify-center w-full max-w-6xl mx-auto p-3">
      <div className="flex flex-col justify-center gap-2 text-center w-full">
        <h1 className="text-4xl font-bold text-center text-orange-900">
          Discovery The World Of Jewelry
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
          perferendis excepturi quo delectus veniam. Excepturi molestiae quasi
          quibusdam mollitia aut officia optio aliquid sed repudiandae beatae
          fugiat vero atque labore incidunt.
        </p>
        <button className="relative overflow-hidden bg-amber-800 text-white font-bold py-2 px-4 rounded focus:outline-none">
          <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-900 transform -translate-x-full transition-transform duration-500 ease-out hover:translate-x-0"></span>
          <span className="relative">Hover Me</span>
        </button>
      </div>
      <div className="w-full">
        <Image
          src="/heroImage.png"
          alt="Hero Image"
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default Hero;
