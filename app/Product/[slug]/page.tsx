import ProductView from "@/app/UI_Components/ProductView"

export default function page({params}: {params: {slug: string}}) {
  return (
    <ProductView params={params} />
  )
}