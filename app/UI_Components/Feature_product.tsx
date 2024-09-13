import React from "react";
import { FeaturedProductsCarouselComponent } from "@/components/featured-products-carousel";


function Feature_product() {
  return (
    <div className="py-4  bg-orange-300">
      <div className="w-full max-w-6xl mx-auto">
      <h4 className="text-2xl text-center font-bold">
        Feature Product
      </h4>
      <p className="text-center max-w-3xl mx-auto">
        Discover our featured product of the month, crafted with premium
        materials and designed to offer exceptional comfort and style. Perfect
        for any occasion, it&apos;s a must-have in your collection!
      </p>
      <FeaturedProductsCarouselComponent />
      </div>
    </div>
  );
}

export default Feature_product;
