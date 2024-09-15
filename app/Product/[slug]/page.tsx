"use client";
import ProductView from "@/app/UI_Components/ProductView";
import data from "@/Product_Data/Data.json";

export default function page({ params }: { params: { slug: string } }) {
  const ProductItem = data.products.find(
    (product) => product.id === params.slug
  );
  return (
    <ProductView
      id={ProductItem?.id ?? "null"}
      name={ProductItem?.name ?? "namaa"}
      description="waddasd"
      price={ProductItem?.price ?? 0}
      quantity={1}
    />
  );
}
