"use client";

import { SearchParamsType } from "@/types/SearchParamsTypes";

async function getBlogData(id: SearchParamsType) {
  const res = await fetch(`https://swanky-api.onrender.com/posts/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Blog({ params: { id } }: SearchParamsType) {
  const post = await getBlogData(id);
  return (
    <main className="">
      <div className="p-16 w-1/2 grid grid-cols-1 gap-4">
        <h1 className="font-bold text-2xl">{post.title}</h1>
        <h2 className="">{post.subtitle}</h2>
        <p className="">{post.text}</p>
      </div>
    </main>
  );
}
