"use client"
import { useState } from "react";
import Image from 'next/image';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., send data to an API)
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg m-7">
        <div className="flex justify-center">
          <Image src="/logo.png" alt="ContactUS" width={500} height={500} className="w-80 h-64 flex " />
        </div>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Us</h2>
        <p className="mt-4 text-muted-foreground text-center pb-3">
            We value your feedback. Please fill out the form below, and we will get back to you as soon as possible.
        </p>
        {isSubmitted ? (
          <div className="text-center text-green-500 text-lg">Thank you for your message!</div>
        ) : (
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="mb-4 ">
              <label htmlFor="name" className="text-center text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <label htmlFor="email" className=" text-center text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className=" text-sm font-medium text-gray-700">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1  w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="w-fit mx-auto bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
