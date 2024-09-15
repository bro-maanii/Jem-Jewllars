
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./UI_Components/Navbar";
import Footer from "./UI_Components/Footer";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JemJewllars",
  description: "JemJewllars - Elegant Jewelry Collection - Rings, Earrings & Bracelets - Discover Handcrafted Rings & Earrings - Luxury Bracelets for Every Occasion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.className } bg-gray-50`}>
        <Navbar />
        <Providers>
        {children}
        </Providers>
        <Footer />        
      </body>
      
    </html>
  );
}
