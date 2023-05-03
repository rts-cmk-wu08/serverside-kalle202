import Image from "next/image";
import { CiDeliveryTruck, CiShop, CiBoxes } from "react-icons/ci";

export default function BulletPoints() {
  return (
    <div className="my-12">
      <ul className="grid grid-cols-3 justify-items-center">
        <li className="grid grid-cols-1 justify-items-center gap-y-2 my-10 py-8 border-y-2 px-12">
          <CiDeliveryTruck className="w-10 h-10 fill-orange-500" />
          <h3 className="font-bold text-xl">Quick Delivery</h3>
          <p className="text-gray-400">Inside City delivery within 5</p>
        </li>
        <li className="grid grid-cols-1 justify-items-center gap-y-2 my-10 py-8 border-y-2 px-12">
          <CiShop className="w-10 h-10 fill-orange-500" />
          <h3 className="font-bold text-xl">Pick Up In Store</h3>
          <p className="text-gray-400">We have option of pick up in store</p>
        </li>
        <li className="grid grid-cols-1 justify-items-center gap-y-2 my-10 py-8 border-y-2 px-12">
          <CiBoxes className="w-10 h-10 fill-orange-500" />
          <h3 className="font-bold text-xl">Special Packaging</h3>
          <p className="text-gray-400">Our packaging is best for products</p>
        </li>
      </ul>
    </div>
  );
}
