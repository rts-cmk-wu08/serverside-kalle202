import Image from "next/image";
import Link from "next/link";
import background from "../public/background.jpg";
import BulletPoints from "./components/BulletPoints";
import WhatsTrending from "./components/WhatsTrending";

export default function Home() {
  return (
    <>
      <header className="scroll-smooth">
        <div className="flex relative justify-center items-center top-0 left-0">
          <Image
            src={background}
            alt="background image"
            className="object-cover h-full"
          />
          <div className="absolute">
            <h1 className="text-6xl text-white pb-8">
              Make Your Fashion Look Swanky
            </h1>
            <div className="flex justify-center">
              <button className="bg-white py-3 px-3 rounded">
                <Link href="/store">SHOP NOW</Link>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <BulletPoints />
        {/* @ts-expect-error Server Component */}
        <WhatsTrending />
      </main>
    </>
  );
}
