import React, { useState, useEffect } from 'react';
import { Truck, ShieldCheck, Zap, Globe, Package, Search, MapPin, Calendar, Loader2, ArrowLeft, Send, User, Mail, MessageSquare } from 'lucide-react';

import bgVideo from "../../assets/bgvideo.mp4";
import posterImg from "../../assets/h1.png";

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-[500px] min-h-[480px] bg-white/5 backdrop-blur-xl rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] p-10 text-white border border-white/10 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
          <Send className="w-10 h-10 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">Message Sent!</h3>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
          Thank you for reaching out. Our logistics team will contact you within 24 hours.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-black uppercase tracking-widest transition-all">
          Send Another
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[500px] min-h-[480px] bg-white/5 backdrop-blur-xl rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] p-10 text-white border border-white/10 flex flex-col items-center justify-center">
      <div className="w-full text-left mb-8">
        <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">Get a <span className="text-[#f94735]">Quote</span></h3>
        <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Connect with our global network</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div className="relative group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#f94735] transition-colors">
            <User className="w-5 h-5" />
          </div>
          <input 
            required
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="Name"
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-[#f94735] focus:ring-1 focus:ring-[#f94735]/20 transition-all text-sm text-white placeholder:text-white/20"/>
        </div>

        <div className="relative group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#f94735] transition-colors">
            <Mail className="w-5 h-5" />
          </div>
          <input 
            required
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="Email Address"
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-[#f94735] focus:ring-1 focus:ring-[#f94735]/20 transition-all text-sm text-white placeholder:text-white/20"/>
        </div>

        <div className="relative group">
          <div className="absolute left-4 top-5 text-white/20 group-focus-within:text-[#f94735] transition-colors">
            <MessageSquare className="w-5 h-5" />
          </div>
          <textarea 
            required
            rows="3"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            placeholder="Message..."
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-[#f94735] focus:ring-1 focus:ring-[#f94735]/20 transition-all text-sm text-white placeholder:text-white/20 resize-none"/>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#f94735] text-white font-black py-5 rounded-2xl hover:bg-[#d83c2d] transition-all shadow-xl shadow-red-900/20 active:scale-[0.98] flex items-center justify-center gap-3 uppercase tracking-widest text-xs disabled:opacity-50 disabled:cursor-not-allowed">
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Send Inquiry
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

const HomeBanner = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden font-sans bg-[#0e1d34]">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
          <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute inset-0 h-full w-full object-cover scale-105 pointer-events-none opacity-40 lg:opacity-50" 
      poster={posterImg}>
      <source src={bgVideo} type="video/mp4" />
    </video>
          </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#0e1d34]/60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e1d34] via-[#0e1d34]/80 to-transparent"></div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-left py-20 lg:py-0 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="inline-flex items-center gap-2 mb-8 bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10">
            <Zap className="text-[#f94735] w-4 h-4 fill-[#f94735]" />
            <p className="text-[10px] font-black tracking-[0.3em] text-white uppercase">
              Fast • Secure • Reliable
            </p>
          </div>

          <h1 className="mb-6 text-6xl font-black text-white md:text-8xl leading-[0.85] tracking-tighter">
            Smart <span className="text-[#f94735]">Logistics</span> <br /> 
            Solutions
          </h1>

          <p className="text-lg text-white/50 md:text-xl max-w-md mb-12 leading-relaxed font-medium">
            Next-generation supply chain solutions built for speed and global scale. 
            Connecting your business to the world through intelligent distribution.
          </p>

          <div className="flex items-center gap-4 md:gap-8 flex-wrap lg:flex-nowrap">
            {[
              { icon: Globe, label: "Global Network" },
              { icon: ShieldCheck, label: "Fully Insured" },
              { icon: Package, label: "Live Updates" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#f94735]/20 group-hover:border-[#f94735]/40 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-[#f94735]" />
                </div>
                <span className="text-[10px] font-black text-white/60 uppercase tracking-widest whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Area */}
        <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000">
          <div className="hover:translate-y-[-8px] transition-transform duration-500 w-full flex justify-center">
            <ContactCard />
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