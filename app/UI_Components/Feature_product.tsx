import React from "react";
import { FeaturedProductsCarouselComponent } from "@/components/featured-products-carousel";

function Feature_product() {
  return (
    <div className="py-4">
      <div className="w-full max-w-6xl mx-auto py-3 md:py-8 border-t-2 border-b-2">
        {/* Optimized heading with keywords */}
        <h2 className="text-4xl font-bold mb-2 text-center text-red-600">
          Featured Jewelry Collection
        </h2>
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">
          Rings , Earrings and Bracelets
        </h2>

        {/* Keyword-rich description */}
        <p className="text-center max-w-3xl mx-auto text-gray-700 px-4">
          Explore our exclusive featured products, handpicked for their
          exquisite craftsmanship. This month&apos;s selection includes elegant{" "}
          <strong>rings</strong>, stylish <strong>earrings</strong>, and luxurious{" "}
          <strong>bracelets</strong>, perfect for any occasion. Designed with
          premium materials to bring sophistication to your style, these pieces
          are a must-have in your jewelry collection.
        </p>

        <FeaturedProductsCarouselComponent />
      </div>
    </div>
  );
}

export default Feature_product;
