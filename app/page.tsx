import Image from "next/image";
import Navbar from "./UI_Components/Navbar";
import Hero from "./UI_Components/Hero";
import Feature_product from "./UI_Components/Feature_product";
import { Testinomials } from "./UI_Components/testinomials";

export default function Home() {
  return (
      <>
        <Navbar />
        <Hero />
        <Feature_product  />
        <Testinomials />
      </>
        

  );
}
