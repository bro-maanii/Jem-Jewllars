import React from "react";
import { FeaturedProductsCarouselComponent } from "@/components/featured-products-carousel";


function Feature_product() {
  return (
    <div className="py-4 bg-blue-300 bg-grid-pattern bg-[length:20px_20px]">
      <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
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
