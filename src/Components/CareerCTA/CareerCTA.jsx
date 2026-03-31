import React from "react";
import { ArrowRight } from "lucide-react";

const CareerCTA = () => {
  return (
    <section className="w-full py-12">
      <div className="w-full bg-gradient-to-r from-[#0e1d34] to-[#122a4d] px-6 md:px-16 lg:px-24 py-14 flex flex-row items-center justify-center gap-8 text-center">

        <div>
          <h2 className="text-white text-xl md:text-2xl font-semibold">
            Ready to move with us?
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Explore our current openings and find where you can make your mark on the global stage.
          </p>
        </div>

          <a href="#CareerOpportunities"
           className="group px-8 py-3 bg-[#f94735] text-white text-sm font-bold rounded-full flex items-center gap-2 justify-center transition-all duration-300 hover:scale-105 shadow-lg">
                Explore Open Positions
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></a>

      </div>
    </section>
  );
};

export default CareerCTA;