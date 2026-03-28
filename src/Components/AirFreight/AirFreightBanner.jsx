import React from "react";
import { ShoppingCart, Layers } from "lucide-react";

export default function AirFreightBanner() {
  return (
    <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
      
    
      <img
        src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=2400&q=80"
        alt="Air Freight"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />

     
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e1d34]/85 via-[#0e1d34]/60 to-transparent"></div>

     
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16">
        
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Air Freight
        </h1>

        <div className="flex items-center gap-3 mt-4 text-sm md:text-base">
          <span className="text-white font-semibold cursor-pointer">
            Home
          </span>

          <span className="text-[#f94735]">—</span>

          <span className="text-gray-300">
            Air Freight
          </span>
        </div>
      </div>

      
      <div className="absolute right-4 top-1/3 flex flex-col gap-3 z-20">
        
        <button className="bg-[#f94735] hover:bg-[#d93c2c] p-3 rounded shadow-lg text-white transition">
          <ShoppingCart size={18} />
        </button>

        <button className="bg-[#0e1d34] hover:bg-[#162a4a] p-3 rounded shadow-lg text-white transition">
          <Layers size={18} />
        </button>

      </div>
    </div>
  );
}