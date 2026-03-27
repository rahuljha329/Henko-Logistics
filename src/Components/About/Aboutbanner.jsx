import React from 'react';
import aboutBanner from '../../assets/about-us.jpg';
const Aboutbanner = () => {
  return (
    <div className="relative h-[300px] md:h-[400px] flex items-center justify-center text-white overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${aboutBanner})`,
        }}
      >
        <div className="absolute inset-0 bg-[#0e1d34]/80"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About</h1>
        <p className="max-w-2xl mx-auto text-gray-300 mb-6">
          Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.
        </p>
        <nav className="text-sm font-medium">
          <span className="text-[#f94735]">Home</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-white/70">About</span>
        </nav>
      </div>
    </div>
  );
};

export default Aboutbanner;