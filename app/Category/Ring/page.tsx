import React from "react";
import ProductData from '@/Product_Data/Data.json'
import Image from "next/image";

function page() {
    const RingProducts=ProductData.products.filter((product)=>product.Category==='ring')
  return (
    <div className='w-full max-w-6xl mx-auto py-3'>
        <h4 className="text-3xl sm:text-6xl text-center font-bold">
          Ring
        </h4>
        <p className="text-center max-w-3xl mx-auto">
          Discover our featured product of the month, crafted with premium
          materials and designed to offer exceptional comfort and style. Perfect
          for any occasion, it&apos;s a must-have in your collection!
        </p>
        <div>
          
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
              {
                RingProducts.map((product) => (
                  <div key={product.id} className="m-2 p-4 px-6 text-white rounded-md bg-black">
                    <Image
                      src="/logo.png"
                      alt="product"
                      width={50}
                      height={50}
                      className="w-36 h-32 sm:w-52 sm:h-52 mx-auto object-cover rounded-lg"
                    />
                    <h4 className="text-lg font-bold text-center">{product.name}</h4>
                    <p className="text-gray-500">Price: ${product.price}</p>
                    <button className="bg-orange-900 text-white py-1 px-2 sm:py-2 sm:px-4 rounded-md">
                      Add to Cart
                    </button>
                  </div>
                ))
              }
            </div>
          </div>
        
    </div>
  )
}

export default page