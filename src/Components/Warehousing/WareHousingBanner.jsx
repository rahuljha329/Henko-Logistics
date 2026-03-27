import React from "react";
import { ShoppingCart, Layers } from "lucide-react";

export default function WarwHousingBanner() {
  return (
    <div className="relative w-full h-[320px] md:h-[400px] overflow-hidden">
      
      {/* Background Image */}
      <img
        src="https://www.noatumlogistics.com/wp-content/uploads/2021/08/storage-solutions-web.jpg"
        alt="Air Freight"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2f2f]/90 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16">
        
        {/* Title */}
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Warehousing
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mt-4 text-sm md:text-base">
          <span className="text-white font-semibold cursor-pointer">
            Home
          </span>

          <span className="text-red-500">—</span>

          <span className="text-gray-300">
            Warehousing
          </span>
        </div>
      </div>

      {/* Right Floating Icons */}
      <div className="absolute right-4 top-1/3 flex flex-col gap-3 z-20">
        
        <button className="bg-red-500 hover:bg-red-600 p-3 rounded shadow-lg text-white transition">
          <ShoppingCart size={18} />
        </button>

        <button className="bg-[#0f2f2f] hover:bg-[#123b3b] p-3 rounded shadow-lg text-white transition">
          <Layers size={18} />
        </button>

      </div>
    </div>
  );
}