// import React from 'react';
// import bgVideo from '../../assets/bgvideo.mp4';
// import fallbackImg from '../../assets/h1.png';

// const HomeBanner = () => {
//   return (
//     <section className="relative flex h-[750px] w-full items-center justify-center overflow-hidden font-sans">
      
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 h-full w-full object-cover scale-105"
//         poster={fallbackImg}
//       >
//         <source src={bgVideo} type="video/mp4" />
//       </video>

//       {/* Gradient Overlay (🔥 Attractive) */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#0e1d34]/90 via-[#0e1d34]/70 to-[#0e1d34]/90"></div>

//       {/* Content */}
//       <div className="relative z-10 w-full max-w-5xl px-4 text-center">
        
//         {/* Tagline */}
//         <p className="mb-4 text-xl font-semibold tracking-widest text-[#f94735] md:text-3xl">
//           Fast • Secure • Reliable
//         </p>

//         {/* Heading with highlight */}
//         <h1 className="mb-6 text-4xl font-extrabold text-white md:text-6xl leading-tight">
//           Smart <span className="text-[#f94735]">Logistics</span> Solutions  
//           <br /> for a Faster World
//         </h1>

//         {/* Subtext */}
//         <p className="text-lg text-gray-300 md:text-xl max-w-3xl mx-auto">
//           Smart logistics solutions built for speed, safety, and reliability.  
//            Connecting businesses to global markets with efficient delivery services.
//         </p>

//         {/* Input + Button */}
//         <div className="mx-auto mt-12 w-full max-w-[720px] h-[65px] flex rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          
//           <input
//             type="text"
//             placeholder="Enter Email Id..."
//             className="w-[70%] h-full px-6 text-lg text-gray-800 outline-none bg-white"
//           />

//           <button className="w-[30%] h-full bg-[#f94735] text-white font-bold uppercase tracking-widest transition-all hover:bg-[#d83c2d] hover:shadow-lg">
//             Submit
//           </button>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default HomeBanner;



import React, { useState, useEffect } from 'react';
import { Truck, ShieldCheck, Zap, Globe, Package, Search, MapPin, Calendar, Loader2, ArrowLeft } from 'lucide-react';
import bgVideo from "../../assets/bgvideo.mp4";
import posterImg from "../../assets/h1.png"; 


const TrackingCard = () => {
  const [activeTab, setActiveTab] = useState('Shipment Services');
  const [trackingType, setTrackingType] = useState('booking');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setInputValue('');
    setShowResult(false);
  }, [activeTab]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowResult(true);
    }, 1500);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center py-12 text-gray-500">
          <Loader2 className="w-10 h-10 animate-spin text-[#f94735] mb-4" />
          <p className="font-medium text-sm">Fetching latest data...</p>
        </div>
      );
    }

    if (showResult) {
      return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-2 text-green-700 font-bold mb-1 text-sm">
              <Package className="w-4 h-4" />
              {activeTab === 'Shipment Services' ? 'Shipment Found' : activeTab === 'Schedules' ? 'Schedule Found' : 'Location Located'}
            </div>
            <p className="text-[10px] text-green-600 font-mono tracking-wider">ID: {inputValue.toUpperCase()}</p>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#f94735] mt-1.5 shadow-[0_0_0_4px_rgba(249,71,53,0.1)]"></div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Current Status</p>
                <p className="text-sm font-semibold text-gray-700">{activeTab === 'Shipment Services' ? 'In Transit - Port of Singapore' : 'Vessel: Atlantic Star'}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gray-300 mt-1.5"></div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Estimated Arrival</p>
                <p className="text-sm font-semibold text-gray-700">Oct 24, 2023 • 14:00 PM</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setShowResult(false)}
            className="w-full flex items-center justify-center gap-2 text-sm font-bold text-gray-500 hover:text-[#f94735] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
      );
    }

    return (
      <form onSubmit={handleSearch} className="animate-in fade-in duration-300">
        {activeTab === 'Shipment Services' && (
          <div className="space-y-3 mb-6">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input 
                  type="radio" 
                  name="tracking" 
                  className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-[#f94735] transition-all"
                  checked={trackingType === 'container'}
                  onChange={() => setTrackingType('container')}/>
                <div className="absolute w-2.5 h-2.5 rounded-full bg-[#f94735] scale-0 peer-checked:scale-100 transition-transform"></div>
              </div>
              <span className="text-sm font-medium text-gray-200">Container / Bill of Lading Number</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input 
                  type="radio" 
                  name="tracking" 
                  className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-[#f94735] transition-all"
                  checked={trackingType === 'booking'}
                  onChange={() => setTrackingType('booking')}/>
                <div className="absolute w-2.5 h-2.5 rounded-full bg-[#f94735] scale-0 peer-checked:scale-100 transition-transform"></div>
              </div>
              <span className="text-sm font-medium text-gray-200">Booking Number</span>
            </label>
          </div>
        )}

        {activeTab === 'Schedules' && (
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-white uppercase ml-1">Origin</label>
                <select className="w-full p-3 bg-black-50 text-white border border-gray-200 rounded-xl text-sm outline-none cursor-pointer">
                    <option style={{ backgroundColor: "#1f2937", color: "white" }}>New York</option>
                    <option style={{ backgroundColor: "#1f2937", color: "white" }}>London</option>
                    <option style={{ backgroundColor: "#1f2937", color: "white" }}>Singapore</option>
                  </select>
                  </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Destination</label>
                 <select className="w-full p-3 bg-black-50 text-white border border-gray-200 rounded-xl text-sm outline-none cursor-pointer">
                    <option style={{ backgroundColor: "#1f2937", color: "white" }}>Dubai</option>
                    <option style={{ backgroundColor: "#1f2937", color: "white" }}>Dubai</option>
                    <option style={{ backgroundColor: "#1f2937", color: "white" }}>Berlin</option>
                  </select>
            </div>
          </div>
        )}

        <div className="relative mb-6">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {activeTab === 'Shipment Services' ? <Search className="w-5 h-5" /> : activeTab === 'Schedules' ? <Calendar className="w-5 h-5" /> : <MapPin className="w-5 h-5" />}
          </div>
          <input 
            required
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={
              activeTab === 'Shipment Services' ? "Enter Shipment Details" : 
              activeTab === 'Schedules' ? "Enter Vessel Name" : 
              "Enter City or Zip Code"
            }
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#f94735] focus:ring-4 focus:ring-red-50 transition-all text-sm text-gray-800"/>
        </div>

        <button 
          type="submit"
          className="w-full bg-[#f94735] text-white font-bold py-4 rounded-full hover:bg-[#d83c2d] transition-all shadow-lg shadow-red-200 active:scale-[0.98] flex items-center justify-center gap-2">
          {activeTab === 'Shipment Services' ? 'Check Details' : activeTab === 'Schedules' ? 'View Schedule' : 'Find Location'}
        </button>
      </form>
    );
  };

    return (
    <div className="w-full max-w-[440px] bg-white/10 backdrop-blur-md rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] p-8 text-white border border-white/20">     
        <div className="flex justify-between border-b border-white/20 mb-8 overflow-x-auto scrollbar-hide">
      {['Shipment Services', 'Schedules', 'Locations'].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-3 text-[11px] font-black uppercase tracking-wider transition-all px-3 relative whitespace-nowrap ${
            activeTab === tab 
              ? 'text-[#f94735]'
              : 'text-white/70 hover:text-white'
          }`}>
          {tab}
          {activeTab === tab && (
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f94735] rounded-full"></div>
          )}
        </button>
      ))}
    </div>

      {renderContent()}

      {!showResult && !isLoading && (
        <p className="text-center text-[10px] text-gray-400 mt-6 font-bold uppercase tracking-tighter">
          Available 24/7 • Real-time satellite data
        </p>
      )}
    </div>
  );
};

const HomeBanner = () => {
  const videoUrl = bgVideo;
  const posterUrl = posterImg;

  const [email, setEmail] = useState('');
  const [emailMsg, setEmailMsg] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailMsg("Please enter email");
      return;
    }

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      setEmailMsg("Invalid email format");
      return;
    }

    setEmailMsg("Subscribed successfully ✅");
    setEmail('');
  };

      return (
        <section className="relative flex min-h-screen w-full items-center overflow-hidden font-sans">
          <div className="absolute inset-0 h-full w-full overflow-hidden">
          <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute inset-0 h-full w-full object-cover scale-105 pointer-events-none" 
      poster={posterUrl}>
      <source src={videoUrl} type="video/mp4" />
    </video>
    </div>

      <div className="absolute inset-0 bg-[#0e1d34]/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e1d34] via-[#0e1d34]/80 to-transparent"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="text-left py-20 lg:py-0">
          <div className="inline-flex items-center gap-2 mb-6 bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10">
            <Zap className="text-[#f94735] w-4 h-4 fill-[#f94735]" />
            <p className="text-xs font-black tracking-[0.2em] text-[#f94735] uppercase">
              Fast • Secure • Reliable
            </p>
          </div>

          <h1 className="mb-6 text-6xl font-black text-white md:text-8xl leading-[0.9] tracking-tighter">
            Smart <span className="text-[#f94735]">Logistics</span> <br /> 
            Solutions
          </h1>

          <p className="text-lg text-gray-300 md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
            Smart logistics solutions built for speed, safety, and reliability. 
            Connecting businesses to global markets with efficient delivery services 
            across all continents.
          </p>

     <form 
        onSubmit={handleEmailSubmit}
        className="flex w-full max-w-md h-[70px] rounded-2xl overflow-hidden shadow-2xl mb-2 border border-white/10 p-1.5 bg-white/5 backdrop-blur-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email Id..."
          className="flex-1 px-6 text-white outline-none bg-transparent placeholder:text-gray-500 text-lg"/>
        <button 
          type="submit"
          className="px-10 bg-[#f94735] text-white font-black uppercase text-xs tracking-widest rounded-xl hover:bg-[#d83c2d] transition-all active:scale-95 shadow-lg shadow-red-600/20">
          Submit
        </button>
      </form>

          <div className="flex items-center gap-4 md:gap-8 flex-wrap lg:flex-nowrap">
            {[
              { icon: Globe, label: "Global Network" },
              { icon: ShieldCheck, label: "Fully Insured" },
              { icon: Package, label: "Live Shipment Updates" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 md:gap-3 group cursor-default">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#f94735]/10 group-hover:border-[#f94735]/30 transition-all duration-300">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#f94735]" />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-[0.1em] leading-none whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="hover:translate-y-[-8px] transition-transform duration-500">
            <TrackingCard />
          </div>
        </div>

      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0e1d34]">
      <HomeBanner />
    </div>
  );
}



