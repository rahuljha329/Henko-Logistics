import React from 'react';
import aboutBanner from '../../assets/about-us.jpg';

const Aboutbanner = () => {
  return (
    <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden bg-[#0e1d34]">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img 
          src={aboutBanner} 
          alt="Global Logistics Operations" 
          className="w-full h-full object-cover object-center contrast-[1.05] brightness-[1.05]"
        />
        {/* Transparent Overlay for Clarity */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1d34]/30 via-[#0e1d34]/50 to-[#0e1d34]/80"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-2xl tracking-tight">
          Reliable Logistics Solutions
        </h1>
        
        <p className="max-w-2xl mx-auto text-gray-100 text-base md:text-xl font-medium leading-relaxed drop-shadow-lg">
          Connecting the world through seamless supply chain management, real-time tracking, 
          and efficient freight delivery across every continent.
        </p>

        {/* Breadcrumb */}
        <nav className="mt-8 flex items-center space-x-3 text-sm md:text-base font-bold uppercase tracking-widest">
          <span className="text-[#f94735] hover:text-white transition-colors cursor-pointer">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-white border-b-2 border-[#f94735] pb-1">About Our Fleet</span>
        </nav>
      </div>
    </div>
  );
};

export default Aboutbanner;