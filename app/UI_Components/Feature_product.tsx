import React from "react";
import ProductData from '../../Product_Data/Data.json'
import Image from "next/image";
 
interface Iproduct {
  id: number;
  name: string;
  price: number;
  isFeature: boolean;
}


function Feature_product() {
  const FeatureItems : Iproduct[]=ProductData.products.filter((product) => product.isFeature === true);
  return (
    <div className="py-4  bg-orange-300">
      <h4 className="text-2xl text-center font-bold">
        Feature Product
      </h4>
      <p className="text-center max-w-3xl mx-auto">
        Discover our featured product of the month, crafted with premium
        materials and designed to offer exceptional comfort and style. Perfect
        for any occasion, it&apos;s a must-have in your collection!
      </p>
      <div>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center">
            {
              FeatureItems.map((product) => (
                <div key={product.id} className="m-2 p-4 px-6 bg-white rounded-md">
                  <Image
                    src="/logo.png"
                    alt="product"
                    width={50}
                    height={50}
                    className="w-28 xs:w-52 xs:h-52 object-cover rounded-lg"
                  />
                  <h4 className="text-lg font-bold text-center">{product.name}</h4>
                  <p className="text-gray-500">Price: ${product.price}</p>
                  <button className="bg-orange-900 text-white py-2 px-4 rounded-md">
                    Add to Cart
                  </button>
                </div>
              ))
            }
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature_product;
