import React, { useState, useEffect, useRef } from 'react';
import { Users, Briefcase, Globe, Award, CheckCircle2 } from 'lucide-react';

// Custom Counter Component for the stats
const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const endValue = parseInt(end.replace(/,/g, ''));

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={countRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const HomeWhyChooseUs = () => {
  // Stats data for the bottom cards
  const stats = [
    {
      id: 1,
      icon: <Users className="text-[#0e1d34] group-hover:text-white transition-colors" size={28} />,
      value: "5000",
      suffix: "+",
      label: "Happy Clients",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      icon: <Briefcase className="text-[#f94735] group-hover:text-white transition-colors" size={28} />,
      value: "12000",
      suffix: "+",
      label: "Deliveries Completed",
      bgColor: "bg-orange-50"
    },
    {
      id: 3,
      icon: <Globe className="text-[#0e1d34] group-hover:text-white transition-colors" size={28} />,
      value: "150",
      suffix: "+",
      label: "Global Locations",
      bgColor: "bg-blue-50"
    },
    {
      id: 4,
      icon: <Award className="text-[#f94735] group-hover:text-white transition-colors" size={28} />,
      value: "99",
      suffix: "%",
      label: "Client Satisfaction",
      bgColor: "bg-orange-50"
    }
  ];

  const cargoShipImg = "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=800";

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#f94735] opacity-[0.03] rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0e1d34] opacity-[0.03] rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24">
          
          {/* Image Side */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] aspect-[4/5]">
              <div className="w-full h-full overflow-hidden rounded-3xl shadow-2xl border-8 border-white relative z-10 group">
                <img 
                  src={cargoShipImg}
                  alt="Global Logistics Shipping"
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d34]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-[#f94735] rounded-tl-3xl z-0"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 bg-orange-50 border border-orange-100 rounded-full">
              <span className="text-[#f94735] text-sm font-bold tracking-wider uppercase">Why Choose Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0e1d34] leading-[1.1]">
              We Shape The Perfect <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f94735] to-[#d83626]">
                Logistics Solution
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              From sea freight to global distribution, we provide robust and reliable transport solutions. Our logistics network ensures your cargo moves across borders with maximum efficiency and safety.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 mt-6">
              {['Express Shipping', 'Secure Warehousing', 'Real-time Tracking', 'Global Coverage'].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#f94735] group-hover:bg-[#f94735] group-hover:text-white transition-all duration-300">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-[#0e1d34] font-bold text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* Bottom CTA Area Removed as per request */}
          </div>
        </div>

        {/* Stats Section with Counter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-gray-100">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="group relative overflow-hidden bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              
              <div 
                className={`absolute inset-0 ${stat.id % 2 === 0 ? 'bg-[#f94735]' : 'bg-[#0e1d34]'} translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out`}
              ></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 ${stat.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300`}>
                  {stat.icon}
                </div>

                <div className="text-3xl font-black text-[#0e1d34] group-hover:text-white transition-colors duration-300">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-gray-500 group-hover:text-white/80 mt-2 font-black uppercase tracking-widest transition-colors duration-300">
                  {stat.label}
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
  return (
    <div className="min-h-screen bg-gray-50">
      <HomeWhyChooseUs />
    </div>
  );
}