import BlogCard from "../components/BlogCard";
import { BlogType } from "@/types/BlogType";

async function getPosts() {
  const res = await fetch("https://swanky-api.onrender.com/posts", {
    next: { revalidate: 300 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main>
      <div className="p-16">
        <h1 className="text-center p-8 text-2xl">Blogs</h1>
        <ul className="grid grid-cols-3 gap-8">
          {posts.map((post: BlogType) => (
            <BlogCard
              {...post}
              key={post.id}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
