"use client";
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { addItemToCart } from "../ReduxTK/CartSlice/CartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../ReduxTK/store";
import { useRouter } from "next/navigation";


// ProductView Component interface
interface ProductViewProps {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export default function ProductView(props: ProductViewProps) {
  const router = useRouter();
  const [activeImg, setActiveImg] = useState("/placeholder-user.jpg")
  const dispatch = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addItemToCart( {id: props.id, name: props.name, price: props.price, quantity: quantity} ));
    router.push("/Cart");
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto py-8 px-4">
      <div className="grid mx-auto gap-4">
        <div className="border-4">
          <Image
            src={activeImg}
            alt="Product Image"
            width={800} 
            height={600}
            className="w-full h-[400px] md:h-[600px] object-cover "
            style={{ aspectRatio: "800/600", objectFit: "cover" }}
          />
        </div>
        <div className="grid grid-cols-3 w-4/5 gap-2">
          <div onClick={()=>setActiveImg("/placeholder-user.jpg")} className="border w-4/5  rounded-lg overflow-hidden">
            <Image
              src="/placeholder-user.jpg"
              alt="Product Thumbnail"
              width={500}
              height={500}
              className="w-full h-[100px] object-cover"
              style={{ aspectRatio: "150/150", objectFit: "cover" }}
            />
          </div>
          < div onClick={()=>setActiveImg("/heroImage.png")} className="border w-4/5 rounded-lg overflow-hidden">
            <Image
              src="/heroImage.png"
              alt="Product Thumbnail"
              width={500}
              height={500}
              className="w-full h-[100px] object-cover"
              style={{ aspectRatio: "150/150", objectFit: "cover" }}
            />
          </div>
          <div onClick={()=>{setActiveImg("/placeholder-user.jpg")}} className="border  w-4/5  rounded-lg overflow-hidden">
            <Image
              src="/placeholder-user.jpg"
              alt="Product Thumbnail"
              width={500}
              height={500}
              className="w-full h-[100px] object-cover"
              style={{ aspectRatio: "150/150", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4 mx-auto">
        <h1 className="text-2xl font-bold">Name: {props.name}</h1>
        <div className="text-xl font-bold">Product Price: ${props.price}</div>
        <p className="font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ducimus. Id, rem, ad quia magni earum odio quisquam quaerat cum provident maxime ullam! Nobis quia vel obcaecati ex inventore debitis.</p>
            <div className="grid gap-2">
            <Label htmlFor="quantity" className="text-base">
              Quantity
            </Label>
            <Select defaultValue="1" onValueChange={(value) => setQuantity(parseInt(value))}>
              <SelectTrigger className="w-24">
              <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
            </div>
          <Button size="lg" onClick={handleAddToCart}>Add to cart</Button>
        
      </div>
    </div>
  )
}
