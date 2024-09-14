import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className=" flex flex-col-reverse sm:flex-row justify-center w-full md:max-h-96 max-w-6xl mx-auto p-3 gap-3">
      <div className="flex flex-col justify-center gap-2 text-center w-full">
        <h1 className="text-2xl md:text-4xl font-extrabold text-center ">
          Discovery The World Of Jewelry
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
          perferendis excepturi quo delectus veniam. Excepturi molestiae quasi
          quibusdam mollitia aut officia optio aliquid sed repudiandae beatae
          fugiat vero atque labore incidunt.
        </p>
        
        <Button className="relative overflow-hidden bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none" >
          <Link href="/All-Products">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-900 transform -translate-x-full transition-transform duration-500 ease-out hover:translate-x-0"></span>
            <span className="relative">Shop Now</span> 
          </Link>   
        </Button>
        
      </div>
      <div className="w-full">
        <Image
          src="/heroImage.png"
          alt="Hero Image"
          width={1000}
          height={1000}
          className="w-full h-72 md:h-80 object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}

export default Hero;
