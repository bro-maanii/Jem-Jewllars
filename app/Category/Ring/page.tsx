import React from "react";
import ProductData from "@/Product_Data/Data.json";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function page() {
  const RingProducts = ProductData.products.filter(
    (product) => product.Category === "ring"
  );
  return (
    <div className="w-full max-w-6xl mx-auto py-3">
      <h4 className="py-4 text-3xl sm:text-4xl text-center font-bold">Rings</h4>
      <p className="text-center font-mono max-w-3xl mx-auto py-4">
        Discover our featured product of the month, crafted with premium
        materials and designed to offer exceptional comfort and style. Perfect
        for any occasion, it&apos;s a must-have in your collection!
      </p>
      <div>
        {RingProducts.length === 0 ? (
          <h1 className=" text-4xl text-center pt-1 pb-96 text-red-500">
            No Products Found
          </h1>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
            {RingProducts.map((product) => (
              <Link href={`/Product/${product.id}`} key={product.id}>
                <Card className="m-1 h-96">
                  <CardContent className="flex flex-col items-center p-6">
                    <Image
                      src="/logo.png"
                      alt={product.name}
                      width={200}
                      height={200}
                      loading="lazy"
                      className="w-full h-48 object-fill mb-4 rounded-md"
                    />
                    <h3 className="font-semibold font-mono text-lg  mb-2">
                      {product.name}
                    </h3>
                    <p className="text-primary font-bold mb-4">
                      ${product.price.toFixed(2)}
                    </p>
                    <Button className="w-full">View Product</Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default page;
