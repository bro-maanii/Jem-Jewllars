
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./UI_Components/Navbar";
import Footer from "./UI_Components/Footer";
import { store } from "./ReduxTK/store";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
