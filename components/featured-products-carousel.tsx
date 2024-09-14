'use client'

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ShoppingCart, View } from "lucide-react"
import ProductData from '@/Product_Data/Data.json';
import Image from "next/image"
import Link from "next/link"

 
interface Iproduct {
  id: string;
  name: string;
  price: number;
  isFeature: boolean;
}



export function FeaturedProductsCarouselComponent() {
  const featuredProducts: Iproduct[]=ProductData.products.filter((product) => product.isFeature === true);

  return (
    <div className="w-[90%] max-w-6xl mx-auto px-4 py-8 ">
      <div className="flex justify-center">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-[90%] justify-center "
      >
        <CarouselContent>
          {featuredProducts.map((product) => (
            <CarouselItem key={product.id} className="basis-11/12 md:basis-1/2 lg:basis-1/3">
              <Link href={`/Product/${product.id}`}>
              <Card className="m-1 h-96">
                <CardContent className="flex flex-col items-center p-6">
                  <Image src='/logo.png' alt={product.name} width={200} height={200} loading="lazy" className="w-full h-48 object-fill mb-4 rounded-md" />
                  <h3 className="font-semibold font-mono text-lg  mb-2">{product.name}</h3>
                  <p className="text-primary font-bold mb-4">${product.price.toFixed(2)}</p>
                  <Button className="w-full">
                    View Product
                  </Button>
                </CardContent>
              </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
    </div>
  )
}