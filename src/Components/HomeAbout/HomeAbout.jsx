import React from 'react';
import { ArrowRight, Phone, Check } from 'lucide-react';
import { Link } from "react-router-dom";
import aboutMain from "../../assets/aboutimg.png";
import aboutOverlay from "../../assets/aboutimg2.png"; // 👈 second image

const HomeAbout = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f4f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            
            {/* Tag */}
            <span className="inline-block px-5 py-1.5 bg-[#f94735] text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-md">
              About Us
            </span>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0e1d34] leading-tight">
              We Keep Your Items  
              <br />
              <span className="text-[#f94735]">Safe & Damage Free</span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              We provide advanced logistics solutions with smart tracking and efficient delivery systems.  
              Our technology-driven approach ensures faster, safer, and more reliable transportation worldwide.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6">
              {[
                "Intermodal Shipping",
                "Ocean Freight Shipping",
                "Full-Back Trucking",
                "Container Freight",
                "Railroad Shipping",
                "Warehousing Solutions"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  
                  <div className="w-6 h-6 bg-[#f94735] flex items-center justify-center rounded-md shadow-md group-hover:scale-110 transition">
                    <Check className="text-white w-3 h-3" strokeWidth={4} />
                  </div>

                  <span className="text-[#0e1d34] font-semibold text-sm group-hover:text-[#f94735] transition">
                    {item}
                  </span>

                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-wrap items-center gap-6 pt-10 border-t border-gray-200">
              
              {/* Button */}
              <Link 
                to="/contact"
                className="flex items-center gap-2 bg-[#0e1d34] text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-[#091524] hover:scale-105 transition-all"
              >
                Contact Us <ArrowRight size={18} />
              </Link>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f94735]/10 rounded-full flex items-center justify-center">
                  <Phone className="text-[#f94735]" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-bold uppercase">Have Questions?</p>
                  <p className="text-[#0e1d34] font-extrabold text-lg">+000000000</p>
                </div>
              </div>

            </div>
          </div>

                  {/* Right Images */}
                 <div className="flex-1 relative">
                                  
                      {/* Main Image */}
                      <div className="relative z-10 rounded-tl-[100px] rounded-br-[100px] overflow-hidden border-8 border-white shadow-[0_15px_50px_rgba(0,0,0,0.2)]">
                        <img 
                          src={aboutMain}   // ✅ main image
                          alt="Main"
                          className="w-full h-[400px] object-cover hover:scale-105 transition duration-500"
                        />
                      </div>

                      {/* Overlay Image */}
                      <div className="absolute -bottom-12 right-0 w-2/3 z-20 rounded-tl-[50px] rounded-br-[50px] overflow-hidden border-8 border-white shadow-2xl hidden md:block">
                        <img 
                          src={aboutOverlay}   // ✅ different image
                          alt="Overlay"
                          className="w-full h-[250px] object-cover hover:scale-105 transition duration-500"
                        />
                      </div>

                  {/* Experience Badge */}
                  <div className="absolute bottom-0 left-0 bg-gradient-to-r from-[#f94735] to-[#ff6a4d] text-white p-6 rounded-tr-[50px] z-30 shadow-xl">
                    <p className="text-5xl font-black">20</p>
                    <p className="text-sm font-bold uppercase leading-tight">
                      Years of Experience
                    </p>
                  </div>

                  </div>

                </div>
              </div>
            </section>
          );
        };

        export default HomeAbout;