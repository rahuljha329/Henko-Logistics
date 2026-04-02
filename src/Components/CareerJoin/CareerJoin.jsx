// import React from "react";
// import joinImg from "../../assets/career2.png";

// const CareerJoin = () => {
//   return (
//     <section className="w-full bg-gray-100 py-20 px-6 md:px-12 lg:px-24 font-sans">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//         <div>
//           <p className="text-[#f94735] text-xs tracking-widest font-bold uppercase mb-4">
//             Your Career Journey
//           </p>

//           <h2 className="text-4xl md:text-5xl font-bold text-[#0e1d34] mb-8">
//             Why Join Henko Logistics?
//           </h2>

//           <div className="space-y-8">

//             <div>
//               <h3 className="text-xl font-semibold text-[#0e1d34] mb-2">
//                 Growth Opportunities
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 At Henko Logistics, we invest in our people with structured career paths, mentorship programs, 
//                 and leadership development. Whether you're starting out or experienced, 
//                 we provide the tools and support to help you grow in the logistics industry.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold text-[#0e1d34] mb-2">
//                 Diverse & Inclusive Culture
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Our strength lies in diversity. At Henko Logistics, we foster an inclusive workplace where 
//                 individuals from different backgrounds collaborate, innovate, and thrive 
//                 together in a supportive logistics environment.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold text-[#0e1d34] mb-2">
//                 Global Impact
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Every shipment you handle contributes to global trade. At Henko Logistics, 
//                 from supply chain optimization to last-mile delivery, your work directly impacts 
//                 businesses and communities worldwide.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold text-[#0e1d34] mb-2">
//                 Technology-Driven Logistics
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Work with cutting-edge logistics technology at Henko Logistics, including real-time tracking, 
//                 automation systems, and smart warehouse solutions that improve efficiency 
//                 and customer satisfaction.
//               </p>
//             </div>

//           </div>
//         </div>

//         <div className="w-full h-full">
//           <img
//             src={joinImg}
//             alt="Henko Logistics Team"
//             className="w-full h-full object-cover rounded-lg shadow-lg"
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default CareerJoin;



import React from 'react';
import { Shield, Target, Globe, Users, Award, ChevronRight } from 'lucide-react';

/**
 * Reusable Card Component - Subtle shadow hover effect
 */
const ValueCard = ({ icon: Icon, title, description, className = "" }) => (
  <div className={`bg-white border border-gray-100 flex flex-col rounded-sm p-8 transition-shadow duration-300 hover:shadow-lg ${className}`}>
    <div className="mb-5" style={{ color: '#f94735' }}>
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <div className="space-y-3">
      <h3 style={{ color: '#0e1d34' }} className="text-2xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="text-gray-500 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  </div>
);

const CareerJoin = () => {
  const values = [
    {
      id: 1,
      icon: Target,
      title: "Precision",
      description: "Delivering accuracy and reliability with every shipment, ensuring on-time performance across all operations.",
    },
    {
      id: 2,
      icon: Globe,
      title: "Global Network",
      description: "A strong logistics network connecting businesses across 150+ countries efficiently and seamlessly.",
    },
    {
      id: 3,
      icon: Users,
      title: "People First",
      description: "Our employees are our strength. We invest in growth, learning, and career development opportunities.",
    },
    {
      id: 4,
      icon: Award,
      title: "Excellence",
      description: "Recognized globally for maintaining high-quality logistics services and operational excellence.",
    }
  ];

  return (
    <div className="bg-[#fcfcfc] font-sans">
      {/* Full Width Empty Breadcrumbs Section Wrapper */}
      <div className="w-full  border-b border-gray-200 py-4 px-6 min-h-[48px]">
        <div className="max-w-7xl mx-auto flex items-center text-sm text-gray-500">
          {/* Breadcrumb links removed as requested */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6">
        
        {/* Core Values Header */}
        <header className="mb-10 border-l-4 pl-8" style={{ borderColor: '#f94735' }}>
          <p style={{ color: '#f94735' }} className="font-bold text-xs tracking-widest uppercase mb-2">
            Our Core Values
          </p>
          <h2 style={{ color: '#0e1d34' }} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Built on Values That Matter
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
            Join a fast-growing logistics company where innovation meets opportunity. 
            Work on real-world supply chain challenges, collaborate with industry experts, 
            and grow your career in a high-impact global environment.
          </p>
        </header>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Featured Safety First Card */}
          <div className="bg-white border border-gray-100 flex flex-col rounded-sm md:row-span-2 transition-shadow duration-300 hover:shadow-lg">
            <div className="h-48 md:h-64 overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
                alt="Safety Focus" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-8 space-y-5">
              <div style={{ color: '#f94735' }}>
                <Shield size={32} strokeWidth={1.5} />
              </div>
              <div className="space-y-3">
                <h3 style={{ color: '#0e1d34' }} className="text-2xl font-semibold tracking-tight">
                  Safety First
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  We prioritize the safety of our employees, partners, and goods with <br className="hidden md:block" /> strict compliance and zero compromise standards.
                </p>
              </div>
            </div>
          </div>

          {/* Other Value Cards */}
          {values.map((value) => (
            <ValueCard
              key={value.id}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default CareerJoin;