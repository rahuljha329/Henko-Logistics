import React from 'react';
import { ShieldCheck, Clock, Globe, Headphones, Zap, Anchor } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Secure Handling",
      desc: "Hum har package ko apni zimmedari samajhte hain. High-level security aur safety protocols ke saath delivery."
    },
    {
      icon: Globe,
      title: "Worldwide Network",
      desc: "150+ countries mein hamara mazboot network aapke business ko global reach deta hai."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      desc: "Logistics mein waqt hi sab kuch hai. Hamara track record 99% on-time delivery ka hai."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Hamari dedicated support team hamesha taiyar hai aapke sawalon ka jawab dene ke liye."
    },
    {
      icon: Zap,
      title: "Fastest Freight",
      desc: "Air, Sea, ya Road—hum sabse tez raste talash karte hain taaki aapka saman jaldi pahuche."
    },
    {
      icon: Anchor,
      title: "Cost Effective",
      desc: "Behatreen service bina jeb par bhari pade. Hum provide karte hain sabse affordable rates."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#f94735] font-bold uppercase tracking-widest text-sm mb-3">
            Our Features
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#0e1d34] mb-6">
            Why Choose Logis?
          </h3>
          <div className="w-20 h-1.5 bg-[#f94735] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Hum provide karte hain world-class logistics solutions jo fast, secure aur 
            affordable hain. Aapka bharosa hi hamari kamyabi hai.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 border-b-4 border-transparent hover:border-[#f94735] relative overflow-hidden"
            >
              {/* Background Decorative Circle */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-gray-50 rounded-full group-hover:bg-[#0e1d34]/5 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="mb-6 inline-block p-4 bg-[#0e1d34]/5 rounded-lg group-hover:bg-[#0e1d34] transition-all duration-500">
                  <item.icon 
                    size={32} 
                    className="text-[#0e1d34] group-hover:text-[#f94735] transition-colors duration-500" 
                  />
                </div>
                
                <h4 className="text-xl font-bold text-[#0e1d34] mb-4 group-hover:text-[#0e1d34]">
                  {item.title}
                </h4>
                
                <p className="text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <button className="bg-[#0e1d34] hover:bg-[#f94735] text-white font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;