import React from 'react';
import { Shield, Target, Globe, Users, Award } from 'lucide-react';

/**
 * Enhanced Card Component
 * Includes subtle group-hover animations and light tinting
 */
const Card = ({ icon: Icon, title, description, className = "", children }) => (
  <div className={`group bg-white border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:bg-red-50/30 hover:border-[#f94735]/20 flex flex-col rounded-sm ${className}`}>
    {children ? (
      children
    ) : (
      <div className="p-8 flex flex-col gap-5">
        <div className="transition-transform duration-500 group-hover:scale-110" style={{ color: '#f94735' }}>
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
    )}
  </div>
);

const CareerAbout = () => {
  const values = [
    {
      id: 2,
      icon: Target,
      title: "Precision",
      description: "Delivering accuracy and reliability with every shipment, ensuring on-time performance across all operations.",
    },
    {
      id: 3,
      icon: Globe,
      title: "Global Network",
      description: "A strong logistics network connecting businesses across 150+ countries efficiently and seamlessly.",
    },
    {
      id: 4,
      icon: Users,
      title: "People First",
      description: "Our employees are our strength. We invest in growth, learning, and career development opportunities.",
    },
    {
      id: 5,
      icon: Award,
      title: "Excellence",
      description: "Recognized globally for maintaining high-quality logistics services and operational excellence.",
    }
  ];

  return (
    <div className="bg-[#fcfcfc] pt-16 pb-8 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Intro Section */}
        <div className="mb-12 max-w-4xl mx-auto text-center">
          <p style={{ color: '#f94735' }} className="font-bold text-[10px] tracking-[0.2em] uppercase mb-3">
            Careers at Our Company
          </p>
          <h2 style={{ color: '#0e1d34' }} className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Grow Your Career in Logistics
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
            Join a dynamic logistics company where innovation, technology, and people come together to create seamless global delivery solutions. <br className="hidden md:block" /> 
            We're building the future of commerce.
          </p>
        </div>

        {/* Why Join Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold" style={{ color: '#0e1d34' }}>
              Why Work With Us?
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe in building a workplace that encourages growth, collaboration, and innovation. 
              Our team works on global logistics challenges, ensuring efficient supply chain solutions 
              for businesses worldwide. 
            </p>
            <ul className="flex flex-wrap gap-4">
              {['Competitive Compensation', 'Global Growth Opportunities', 'Inclusive Culture'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700 font-medium bg-white px-4 py-2 border border-gray-100 rounded-full shadow-sm text-sm">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#f94735' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-sm aspect-video relative overflow-hidden shadow-2xl bg-gray-200">
             <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                alt="Logistics Operations" 
                className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d34]/60 to-transparent flex items-end p-8">
                <span className="text-white font-bold text-xl tracking-wider">LOGISTICS PRO</span>
             </div>
          </div>
        </div>

        {/* ========================================================================
        THE SECTIONS BELOW ARE CURRENTLY COMMENTED OUT AS REQUESTED
        ========================================================================

        <div className="mb-8 text-center max-w-4xl mx-auto py-6 border-y border-gray-100">
          <h2 style={{ color: '#0e1d34' }} className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
            Build Your Future <span style={{ color: '#f94735' }}>in Logistics</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Join a fast-growing logistics company where innovation meets opportunity. <br className="hidden md:block" />
            Work on real-world supply chain challenges, collaborate with industry experts, and grow your career in a high-impact global environment.
          </p>
        </div>

        <header className="mb-10 border-l-4 pl-8" style={{ borderColor: '#f94735' }}>
          <p style={{ color: '#f94735' }} className="font-bold text-xs tracking-widest uppercase mb-2">
            Our Core Values
          </p>
          <h2 style={{ color: '#0e1d34' }} className="text-4xl md:text-5xl font-bold tracking-tight">
            Built on Values That Matter
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          <Card className="md:row-span-2">
            <div className="h-48 md:h-64 overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
                alt="Safety Focus" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-8 space-y-5">
              <div className="transition-transform duration-500 group-hover:scale-110" style={{ color: '#f94735' }}>
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
          </Card>

          {values.map((value) => (
            <Card
              key={value.id}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
        */}

      </div>
    </div>
  );
};

export default CareerAbout;