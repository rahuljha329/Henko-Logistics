import React from 'react';
import Aboutdetails from '../../assets/about-details.jpg'; // Local asset image
import { Globe, Truck, Package, Play } from 'lucide-react'; // Better icons for logistics

const AboutDetails = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Supply Chain Network",
      desc: "Humara network duniya bhar mein phaila hua hai, jo aapke cargo ko har kone tak pahunchata hai."
    },
    {
      icon: Truck,
      title: "Efficient Road Transport",
      desc: "Fast and reliable trucking services jo safety aur time-delivery ki guarantee deti hain."
    },
    {
      icon: Package,
      title: "Secure Warehousing & Packaging",
      desc: "Advanced storage solutions aur professional handling taaki aapka saman hamesha safe rahe."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e1d34] mb-4">
              Leading the Way in Global Logistics
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Hum sirf delivery nahi karte, hum solutions provide karte hain. Logistics, supply chain, aur warehousing mein hamari expertise aapke business ko nayi uchaiyon tak pahunchane mein madad karti hai. Hum fast, secure aur reliable transport provide karte hain.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((item, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="flex-shrink-0">
                  {/* Icon color transition set to orange on hover */}
                  <item.icon className="w-10 h-10 text-[#0e1d34] group-hover:text-[#f94735] transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0e1d34] mb-1 group-hover:text-[#f94735] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image/Video Section */}
        <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl">
          <img 
            src={Aboutdetails} // Ab aapka local asset file use ho raha hai
            alt="Logistic Operations" 
            className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Play Button Overlay - Using your colors */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-500">
            <div className="w-20 h-20 bg-[#0e1d34]/90 rounded-full flex items-center justify-center border-4 border-[#f94735] group-hover:scale-125 transition-all shadow-xl">
              <Play className="text-white fill-[#f94735] ml-1" size={32} />
            </div>
          </div>

          {/* Halka sa gradient overlay image ke niche taaki wo professional dikhe */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0e1d34]/60 to-transparent"></div>
        </div>

      </div>
    </section>
  );
};

export default AboutDetails;