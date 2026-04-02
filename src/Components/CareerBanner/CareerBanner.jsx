
// import React from 'react';

// /**
//  * CareerBanner Component
//  * Isme sliding marquee aur pill-shaped buttons ke saath clean header layout hai.
//  */
// const CareerBanner = () => {
//   const bgImageUrl = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop";

//   const marqueeItems = [
//     "PRECISION •",
//     "INNOVATION •",
//     "EXCELLENCE •",
//     "GLOBAL NETWORK •",
//     "RELIABLE •",
//     "PRECISION •",
//     "INNOVATION •",
//     "EXCELLENCE •",
//     "GLOBAL NETWORK •",
//     "RELIABLE •"
//   ];

//   return (
//     <div className="relative w-full overflow-hidden font-sans">
//       <section
//         className="relative flex h-[700px] w-full items-center justify-center bg-cover bg-center"
//         style={{ backgroundImage: `url(${bgImageUrl})` }}>
    
//         {/* Background Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0e1d34]/95 via-[#0e1d34]/70 to-[#0e1d34]/95"></div>
        
//         <div className="relative z-10 w-full max-w-5xl px-4 text-center">
//           {/* Top Tagline */}
//           <p className="mb-4 text-lg font-bold tracking-[0.3em] text-[#f94735] uppercase md:text-2xl">
//             Join Our Team
//           </p>

//           {/* Main Heading */}
//           <h1 className="mb-6 text-4xl font-black text-white md:text-7xl leading-[1.1] tracking-tight">
//             Build Your Career <br />
//             <span className="text-[#f94735]">in Logistics</span>
//           </h1>

//           {/* Description Text */}
//           <p className="text-lg text-gray-300 md:text-xl max-w-2xl mx-auto leading-relaxed">
//             Be part of a fast-growing logistics company where innovation meets opportunity.  
//             Grow your career with a team that values speed, safety, and reliability.
//           </p>

//           {/* Action Buttons - Pill Shaped */}
//           <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
//             <button className="px-10 py-4 bg-[#f94735] text-white font-bold rounded-full hover:bg-white hover:text-[#0e1d34] transition-all duration-300 shadow-xl active:scale-95">
//               Apply Now
//             </button>
//             <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0e1d34] transition-all duration-300 active:scale-95">
//               Explore Jobs
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Infinite Sliding Marquee */}
//       <div className="relative w-full bg-black py-6 overflow-hidden border-t border-[#f94735]/30">
//         <div className="flex animate-marquee whitespace-nowrap">
//           {/* Repeating items for seamless loop */}
//           {[...marqueeItems, ...marqueeItems].map((item, index) => (
//             <span 
//               key={index} 
//               className="text-[#f94735] text-xl md:text-2xl font-black px-8 tracking-tighter uppercase"
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>

//       <style dangerouslySetInnerHTML={{ __html: `
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           display: flex;
//           width: fit-content;
//           animation: marquee 25s linear infinite;
//         }
//       `}} />
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <main className="w-full bg-white">
//       <CareerBanner />
//     </main>
//   );
// }
import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import bgImage from "../../assets/careerbg.png";

const CareerBanner = () => {

  const marqueeItems = [
    "GLOBAL CAREERS •",
    "FAST GROWTH •",
    "SMART LOGISTICS •",
    "INNOVATION •",
    "TEAM CULTURE •",
    "CAREER SUCCESS •",
  ];

  return (
    <div className="relative w-full overflow-hidden font-sans">
      
      <section
        className="relative flex min-h-[70vh] md:min-h-[75vh] w-full items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute top-10 left-10 w-56 h-56 bg-[#f94735]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#f94735]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-5xl px-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-5">
            <Zap size={14} className="text-[#f94735]" />
            <span className="text-white text-[10px] font-bold uppercase tracking-widest">
              Careers at Henko Logistics
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5 drop-shadow-lg">
            Grow Your Career <br />
            <span className="text-[#f94735]">With Logistics Experts</span>
          </h1>

          <p className="text-base md:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed mb-8">
            Be part of a fast-moving logistics company where your ideas matter. 
            Build your future with innovation, teamwork, and real-world impact 
            across global supply chains.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#CareerOpportunities"
              className="group px-8 py-3 bg-[#f94735] text-white text-sm font-bold rounded-full flex items-center gap-2 justify-center transition-all duration-300 hover:scale-105 shadow-lg">
              Apply Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#CareerOpportunities"
              className="px-8 py-3 border border-white text-white text-sm font-bold rounded-full hover:bg-white hover:text-[#0e1d34] transition-all duration-300 backdrop-blur-md">
              Explore Jobs
            </a>
          </div>


        </div>
      </section>

      <div className="relative w-full bg-[#f94735] py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={index}
              className="text-[#0e1d34] text-xl md:text-2xl font-black px-8 uppercase italic">
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CareerBanner;