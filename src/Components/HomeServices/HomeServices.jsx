import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";
import home4 from "../../assets/home4.png";
import home5 from "../../assets/home5.png";
import home6 from "../../assets/home6.png";

const ArrowPattern = ({ color }) => (
  <div className="flex flex-col gap-3">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="flex gap-2 opacity-40">
        <ChevronRight size={24} strokeWidth={3} style={{ color }} />
        <ChevronRight size={24} strokeWidth={3} style={ { color } } />
        <ChevronRight size={24} strokeWidth={3} style={ { color } } />
      </div>
    ))}
  </div>
);

const HomeServices = () => {
  const colors = {
    orange: '#f94735',
    blue: '#0e1d34',
  };

  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800";
  };

  const services = [
  {
    id: 1,
    tag: "SERVICE ONE",
    title: "Air Freight",
   description: "Fast and reliable air cargo solutions for urgent shipments worldwide. We ensure timely delivery with advanced tracking and secure handling.",
    image: home1,   
    path: "/service-air-freight"
  },
  {
    id: 2,
    tag: "SERVICE TWO",
    title: "Sea Freight",
    description: "Cost-effective ocean freight services for large-scale shipments. Ideal for international trade with flexible container options and global reach.",
    image: home2,   
    path: "/service-sea-freight"
  },
  {
    id: 3,
    tag: "SERVICE THREE",
    title: "Warehousing Solutions",
    description: "Secure storage facilities with modern inventory management systems. We help streamline your supply chain with efficient warehousing solutions.",
    image: home3,   
    path: "/service-warehousing-solutions"
  },
  {
    id: 4,
    tag: "SERVICE FOUR",
    title: "Express Delivery",
   description: "Rapid door-to-door delivery services with real-time tracking. Perfect for urgent shipments requiring speed, safety, and reliability.",
    image: home4,   
    path: "/service-express"
  },
 
  {
    id: 6,
    tag: "SERVICE SIX",
    title: "Land Transport",
    description: "Reliable road transportation services for regional and national delivery. Flexible trucking solutions tailored to your business needs.",
    image: home6,   
    path: "/service-transport"
  }
];

  return (
    <section className="relative py-24 px-4 bg-[#fcfdfe] overflow-hidden min-h-screen">
      
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-[0.02]" style={{ backgroundColor: colors.blue }}></div>
      <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
        <ArrowPattern color={colors.orange} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-[2px] w-8" style={{ backgroundColor: colors.orange }}></div>
            <span 
              className="text-xs font-extrabold tracking-[0.3em] uppercase"
              style={{ color: colors.orange }}>
              Logistics Experts
            </span>
            <div className="h-[2px] w-8" style={{ backgroundColor: colors.orange }}></div>
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1]"
            style={{ color: colors.blue }}>
            <span className="relative">
              Wide Range of Logistics Services
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 7C25 2 75 2 100 7" stroke={colors.orange} strokeWidth="3" fill="none" opacity="0.3" />
              </svg>
            </span>
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Optimizing every mile of your supply chain with modern technology and global expertise to ensure your business stays ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(14,29,52,0.05)] flex flex-col h-full">
        
              <div className="group h-60 overflow-hidden relative cursor-pointer">
                <img 
                  src={service.image}
                  alt={service.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d34]/40 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-20"></div>
      
                <div 
                  className="absolute bottom-0 left-8 w-12 h-1 rounded-t-full transition-all duration-500 group-hover:w-24 group-hover:h-1.5"
                  style={{ backgroundColor: colors.orange }}>
                  </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <p 
                  className="text-[10px] font-black tracking-widest mb-3 opacity-80"
                  style={{ color: colors.orange }}>
                  {service.tag}
                </p>

                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: colors.blue }}>
                  {service.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {service.description}
                </p>

                <div className="mt-auto flex justify-between items-center">
                  <a 
                    href={service.path}
                    className="group/link flex items-center gap-3 transition-all">
                    <span 
                      className="text-xs font-black tracking-wider relative overflow-hidden inline-block"
                      style={{ color: colors.blue }}>
                      READ MORE
                      <span 
                        className="absolute bottom-0 left-0 w-full h-[2px] translate-x-[-101%] group-hover/link:translate-x-0 transition-transform duration-300"
                        style={{ backgroundColor: colors.orange }}>
                      </span>
                    </span>
                    
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ backgroundColor: `${colors.orange}10` }}>
                      <ArrowRight 
                        size={18} 
                        className="transition-transform group-hover/link:translate-x-1" 
                        style={{ color: colors.orange }} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return <HomeServices />;
}