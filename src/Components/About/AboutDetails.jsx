import React from 'react';
import { Network, Scaling, Radio, Play } from 'lucide-react';

const AboutDetails = () => {
  const features = [
    {
      icon: Network,
      title: "Ullamco laboris nisi ut aliquip consequat",
      desc: "Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade"
    },
    {
      icon: Scaling,
      title: "Magnam soluta odio exercitationem reprehenderi",
      desc: "Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi"
    },
    {
      icon: Radio,
      title: "Voluptatem et qui exercitationem",
      desc: "Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-[#0e1d34] mb-4">About Us</h2>
            <p className="text-gray-600 leading-relaxed">
              Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((item, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <item.icon className="w-8 h-8 text-[#0e1d34] group-hover:text-[#f94735] transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0e1d34] mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image/Video Section */}
        <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop" 
            alt="Team" 
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-blue-600/80 rounded-full flex items-center justify-center border-4 border-white/30 group-hover:bg-[#f94735] transition-all duration-300">
              <Play className="text-white fill-white ml-1" size={32} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutDetails;