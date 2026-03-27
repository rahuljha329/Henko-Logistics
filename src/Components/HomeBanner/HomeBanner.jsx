import React from 'react';
import bgVideo from '../../assets/bgvideo.mp4';
import fallbackImg from '../../assets/h1.png';

const HomeBanner = () => {
  return (
    <section className="relative flex h-[750px] w-full items-center justify-center overflow-hidden font-sans">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-105"
        poster={fallbackImg}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Gradient Overlay (🔥 Attractive) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e1d34]/90 via-[#0e1d34]/70 to-[#0e1d34]/90"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 text-center">
        
        {/* Tagline */}
        <p className="mb-4 text-xl font-semibold tracking-widest text-[#f94735] md:text-3xl">
          Fast • Secure • Reliable
        </p>

        {/* Heading with highlight */}
        <h1 className="mb-6 text-4xl font-extrabold text-white md:text-6xl leading-tight">
          Smart <span className="text-[#f94735]">Logistics</span> Solutions  
          <br /> for a Faster World
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-300 md:text-xl max-w-3xl mx-auto">
          Smart logistics solutions built for speed, safety, and reliability.  
           Connecting businesses to global markets with efficient delivery services.
        </p>

        {/* Input + Button */}
        <div className="mx-auto mt-12 w-full max-w-[720px] h-[65px] flex rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          
          <input
            type="text"
            placeholder="Enter Email Id..."
            className="w-[70%] h-full px-6 text-lg text-gray-800 outline-none bg-white"
          />

          <button className="w-[30%] h-full bg-[#f94735] text-white font-bold uppercase tracking-widest transition-all hover:bg-[#d83c2d] hover:shadow-lg">
            Submit
          </button>

        </div>

      </div>
    </section>
  );
};

export default HomeBanner;