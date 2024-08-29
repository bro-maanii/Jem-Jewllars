"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AppDispatch } from "../ReduxTK/store";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../ReduxTK/CartSlice/CartSlice";

// Define the ItemType type
type ItemType = {
  id: string;
  price: number;
};

function CartView() {
  const [items, setItems] = useState<ItemType[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Safe to use `localStorage` now
      const storedItems = JSON.parse(localStorage.getItem("CartData") || "[]");
      setItems(storedItems);
    }
  }, []);

  const handleRemoveToCart = (id: string) => {
    dispatch(removeItemFromCart({ id }));
    window.location.reload();
  };

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle the form submission (e.g., send data to the server)
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-6 grid md:grid-flow-col gap-10">
      <div>
        {items.length === 0 ? (
          <h1 className="text-center font-bold text-4xl">Cart is Empty</h1>
        ) : (
          <>
            {items.map((item: ItemType) => (
              <div
                key={item.id}
                className="grid grid-flow-col h-fit gap-3 justify-center"
              >
                {/* Image */}
                <div className="flex justify-center align-middle">
                  <Image
                    src="/logo.png"
                    alt="hi"
                    width={120}
                    height={200}
                    className="max-w-40"
                  />
                </div>

                {/* Name */}
                <div className="flex flex-col gap-3 w-full align-middle text-start">
                  <p>
                    Product Name: <span>{item.id}</span>
                  </p>
                  <p>
                    Product Price: <span>{item.price}</span>
                  </p>
                  <p>
                    Product Quantity: <span>3</span>
                  </p>
                  <Button
                    className="bg-red-600"
                    onClick={() => handleRemoveToCart(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <form
        className="md:border-l-2 px-5 flex flex-col justify-center gap-y-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-bold text-4xl">Checkout</h1>
        <h2 className="text-center font-semibold text-2xl">
          Shipping Information
        </h2>

        {/* Input fields */}
        <div className="flex flex-col gap-5">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border-2 border-gray-200 rounded-md p-1"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full border-2 border-gray-200 rounded-md p-1"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full border-2 border-gray-200 rounded-md p-1"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="postalCode">Postal Code:</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              className="w-full border-2 border-gray-200 rounded-md p-1"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              className="w-full border-2 border-gray-200 rounded-md p-1"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Payment */}
        <div>
          <h2 className="text-center font-semibold text-2xl pb-5">
            Payment Information
          </h2>
          <div className="text-xl flex flex-col gap-4">
            <p>
              Subtotal: <span className="font-bold float-right">200</span>
            </p>
            <p>
              Shipping: <span className="font-bold float-right">+ 200</span>
            </p>
            <hr />
            <p>
              Total Payment: <span>400</span>
            </p>
          </div>
        </div>
        <Button
          className="flex justify-center bg-blue-600 text-lg"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default CartView;
