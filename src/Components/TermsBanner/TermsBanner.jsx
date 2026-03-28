import React from 'react';

const TermsBanner = () => {
  return (
    <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">

      <img
        src="/terms.png"
        alt="Terms and Conditions"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#0e1d34]/70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        
        <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wide">
          Terms & Conditions
        </h1>

        <p className="text-gray-200 mt-3 max-w-xl text-sm md:text-lg">
          Please read our terms carefully before using our services
        </p>

        <div className="mt-4 text-sm">
          <span className="text-gray-300">Home</span>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-[#f94735]">Terms & Conditions</span>
        </div>

      </div>

    </div>
  );
};

export default TermsBanner;