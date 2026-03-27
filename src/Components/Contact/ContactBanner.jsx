import React from 'react';
import contactBanner from '../../assets/about-us.jpg';

const ContactBanner = () => {
  return (
    <div className="relative h-[250px] md:h-[350px] w-full overflow-hidden bg-[#0e1d34]">
      <div className="absolute inset-0">
        <img src={contactBanner}  alt="Contact Us"  className="w-full h-full object-cover object-center contrast-[1.05] brightness-[1.10]"/>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1d34]/40 via-[#0e1d34]/60 to-[#0e1d34]/80"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white drop-shadow-2xl uppercase tracking-wider">
          Contact Us
        </h1>
        
        <p className="max-w-xl mx-auto text-gray-200 text-sm md:text-lg font-medium drop-shadow-md">
          We are here to help with all your global logistics and supply chain needs.
        </p>

        <nav className="mt-6 flex items-center space-x-2 text-xs md:text-sm font-bold uppercase tracking-widest">
          <span className="text-[#f94735]">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-white border-b border-[#f94735] pb-0.5">Contact</span>
        </nav>
      </div>
    </div>
  );
};

export default ContactBanner;