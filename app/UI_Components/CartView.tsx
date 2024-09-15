"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AppDispatch } from "../ReduxTK/store";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../ReduxTK/CartSlice/CartSlice";

// Define the ItemType type
interface ItemType {
  id: string;
  price: number;
  quantity: number;
}

function CartView() {
  const [items, setItems] = useState<ItemType[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const subTotal: number = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    contact: "",
    email: "",
    product: [] as ItemType[],
    total: 0,
  });
  // const total :number = subTotal + ((subTotal>1000)? 0 : 100);]

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Safe to use `localStorage` now
      const storedItems = JSON.parse(localStorage.getItem("CartData") || "[]");
      setItems(storedItems);
    }
  }, [formData]);

  const handleRemoveToCart = (id: string) => {
    dispatch(removeItemFromCart({ id }));
    if (typeof window !== "undefined") {
      // Safe to use `localStorage` now
      const storedItems = JSON.parse(localStorage.getItem("CartData") || "[]");
      setItems(storedItems);
    }
    // router.refresh();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      product: items,
      total: subTotal + (subTotal > 1000 ? 0 : 100),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Make sure this is called first to prevent default form behavior
    try {
      await axios.post("/api/orderSubmission", formData); // Send form data to the server
      // Clear cart data in local storage and reset the items state
      localStorage.removeItem("CartData"); // Clear only CartData instead of clearing all localStorage
      setItems([]); // Reset the cart items state
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {items.length === 0 ? (
        <>
          <h1 className="flex justify-center items-center text-center font-bold text-4xl min-h-screen">
            Cart is Empty
          </h1>
        </>
      ) : (
        <div className="w-full max-w-6xl mx-auto py-6 grid md:grid-flow-col gap-10">
          <div>
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
                    width={500}
                    height={500}
                    loading="lazy"
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
                    Product Quantity: <span>{item.quantity}</span>
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
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border-2 border-gray-200 rounded-md p-1"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact">Contact Number:</label>
                <input
                  type="number"
                  id="contact"
                  name="contact"
                  className="w-full border-2 border-gray-200 rounded-md p-1"
                  value={formData.contact}
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
            </div>

            {/* Payment */}
            <div>
              <h2 className="text-center font-semibold text-2xl pb-5">
                Payment Information
              </h2>
              <div className="text-xl flex flex-col gap-4">
                <p>
                  Subtotal:{" "}
                  <span className="font-bold float-right">{subTotal}</span>
                </p>
                <p>
                  Shipping:{" "}
                  <span className="font-bold float-right">
                    {subTotal > 1000 ? 0 : 100}
                  </span>
                </p>
                <hr />
                <p>
                  Total Payment:{" "}
                  <span>{subTotal + (subTotal > 1000 ? 0 : 100)}</span>
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
      )}
    </>
  );
}

export default CartView;
