import { BlogType } from "@/types/BlogType";
import Link from "next/link";

export default function BlogCard({ id, title, subtitle, text }: BlogType) {
  return (
    <li>
      <Link
        className="grid grid-cols-1 gap-2"
        href={{
          pathname: `/blog/${id}`,
        }}
      >
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="">{subtitle}</p>
        <button className="bg-orange-500 text-white rounded p-2">
          Read more..
        </button>
      </Link>
    </li>
  );
}
