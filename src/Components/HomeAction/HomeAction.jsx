import React from 'react';
import actionBg from "../../assets/actionimg.png";

const HomeAction = () => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 py-20">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url(${actionBg})` }}
        aria-hidden="true">
        <div className="absolute inset-0 bg-[#0f172a]/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl px-4 md:px-8 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready to move your business forward with reliable logistics solutions?
        </h2>

        <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-300 mb-10 max-w-4xl mx-auto font-light">
          We ensure fast, secure, and efficient delivery services tailored to your needs.  
          Partner with us today and experience seamless transportation across every mile.
        </p>

        <div className="flex justify-center">
          <a 
            href="/Contact"
            className="inline-block px-10 py-2.5 text-sm md:text-base font-semibold border border-white rounded-md 
                       hover:bg-white hover:text-slate-900 transition-colors duration-300 
                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900">
            Call To Action
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeAction;