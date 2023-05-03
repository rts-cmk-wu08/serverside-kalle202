import formatPrice from "@/util/PriceFormat";
import { ProductType } from "@/types/ProductType";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("https://swanky-api.onrender.com/products", {
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function WhatsTrending() {
  const products = await getData();
  return (
    <>
      <div className="text-center py-8">
        <h2 className="text-4xl font-semibold">What's Trending</h2>
        <p>These are the products that are trending now</p>
      </div>
      <div className="flex justify-center gap-4 text-center">
        {products.map((product: ProductType) => (
          <div key={product.id}>
            <Image
              className="object-cover h-3/4"
              src={`/products/product${product.id}.jpg`}
              alt={product.name}
              width={250}
              height={250}
            />
            <h3 className="font-bold">{product.name}</h3>
            <p className="text-orange-500">{formatPrice(product.price)}</p>
          </div>
        ))}
      </div>
    </>
  );
}
