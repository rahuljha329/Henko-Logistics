import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

// ✅ Correct: Data array alag rakho
const testimonialsData = [
  {
    id: 1,
    name: "Saul Goodman",
    role: "Ceo & Founder",
    rating: 5,
    quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 2,
    name: "Sara Wilsson",
    role: "Designer",
    rating: 5,
    quote: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 3,
    name: "Jena Karlis",
    role: "Store Owner",
    rating: 5,
    quote: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 4,
    name: "Matt Brandon",
    role: "Freelancer",
    rating: 5,
    quote: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 5,
    name: "John Larson",
    role: "Entrepreneur",
    rating: 5,
    quote: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

// ✅ Component ka naam HOMEourclient kar diya gaya hai
export default function HOMEourclient() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonialsData[activeIndex];

  return (
    /* Wrapper div settings: width full and no extra padding/bg */
    <div className="w-full font-sans">
      <div 
        className="relative w-full h-[480px] overflow-hidden flex items-center justify-center text-center bg-cover bg-center shadow-none border-none"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000')` 
        }}>
        {/* Overlay uses the new blue color: #0e1d34 */}
        <div className="absolute inset-0 bg-[#0e1d34]/90"></div>

        <div className="relative z-10 px-8 md:px-24 w-full max-w-4xl">
          
          {/* Avatar */}
          <div className="mb-4 flex justify-center">
            <div className="w-24 h-24 rounded-full border-[6px] border-white/10 overflow-hidden">
              <img 
                src={current.image} 
                alt={current.name}
                className="w-full h-full object-cover rounded-full transition-all duration-500"/>
            </div>
          </div>

          {/* Name */}
          <h3 className="text-white text-xl font-bold">
            {current.name}
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            {current.role}
          </p>

          {/* Stars use the new orange color: #f94735 */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#f94735] text-[#f94735]" />
            ))}
          </div>

          {/* Quote */}
          <div className="relative flex justify-center min-h-[80px]">
            <Quote className="absolute -top-3 left-2 w-5 h-5 text-white/40 rotate-180" />
            <p className="text-white italic max-w-2xl px-6">
              {current.quote}
            </p>
            <Quote className="absolute -bottom-3 right-2 w-5 h-5 text-white/40" />
          </div>

          {/* Dots use the new orange color for active state */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'w-8 bg-[#f94735]' : 'w-3 bg-white/30 hover:bg-white/50'
                }`}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}