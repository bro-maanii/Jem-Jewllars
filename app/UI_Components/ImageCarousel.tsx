"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const HeroImage = [
  {
    id: 1,
    image: "/heroOne.jpg",
    text: "Elegant Jewelry Collection - Rings, Earrings & Bracelets",
    alt: "Showcase of elegant jewelry including rings, earrings, and bracelets",
  },
  {
    id: 2,
    image: "/heroTwo.jpg",
    text: "Discover Handcrafted Rings & Earrings",
    alt: "Handcrafted rings and earrings in a beautiful layout",
  },
  {
    id: 3,
    image: "/heroThree.jpg",
    text: "Luxury Bracelets for Every Occasion",
    alt: "Luxury bracelets with intricate designs",
  },
];

export function ImageCarousel() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  return (
    <div className="w-full max-w-6xl mx-auto py-3 pb-6">
      <div className="flex justify-center items-center align-middle">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={() => {
            plugin.current.play();
          }}
          onTouchStart={() => plugin.current.stop()}
          onTouchEnd={() => plugin.current.play()}
          className="w-[90%] "
        >
          <CarouselContent>
            {HeroImage.map((product) => (
              <CarouselItem
                key={product.id}
                className="w-full h-auto md:h-[400px] relative"
              >
                <div className="">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={800}
                    height={400}
                    loading="lazy"
                    className="w-full h-auto object-fill"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                    <h2 className="text-white text-3xl md:text-4xl font-bold text-center px-4">
                      {product.text}
                    </h2>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
