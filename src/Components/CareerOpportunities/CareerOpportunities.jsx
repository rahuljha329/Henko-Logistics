import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Clock, X, Upload, Search, CheckCircle2, ChevronRight, Home } from 'lucide-react';

const ApplyForm = ({ isOpen, onClose, jobTitle }) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFileName("");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500">
      <div className="absolute inset-0 bg-[#0e1d34]/90 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-in zoom-in-95 duration-300 overflow-hidden flex flex-col max-h-[95vh]">
        {isSuccess && (
          <div className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500">
            <div className="w-20 h-20 bg-[#f94735]/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="text-[#f94735]" size={48} />
            </div>
            <h3 className="text-2xl font-bold text-[#0e1d34] mb-2">Application Sent!</h3>
            <p className="text-gray-500 text-sm">Our recruitment team will contact you shortly.</p>
          </div>
        )}
        <button onClick={onClose} className="absolute right-6 top-6 z-10 text-gray-400 hover:text-[#f94735] transition-all p-2 rounded-full hover:bg-gray-100 group">
          <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>
        <header className="p-8 pb-4 border-b border-gray-50">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f94735] rounded-full text-white text-[10px] font-bold uppercase tracking-widest mb-3">Career Opportunity</div>
          <h2 className="text-xl md:text-2xl font-black text-[#0e1d34] mb-1">Apply for {jobTitle}</h2>
          <p className="text-xs text-gray-500">Please fill in your details carefully.</p>
        </header>
        <div className="flex-1 overflow-y-auto p-8 pt-6 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <form className="space-y-4" id="career-form" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[9px] font-bold text-[#0e1d34]/60 uppercase tracking-widest ml-1">First Name</label>
                <input name="firstName" type="text" placeholder="e.g. John" required className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-[#f94735] focus:bg-white transition-all text-sm outline-none" />
              </div>
              <div className="space-y-1">
                <label className="block text-[9px] font-bold text-[#0e1d34]/60 uppercase tracking-widest ml-1">Last Name</label>
                <input name="lastName" type="text" placeholder="e.g. Doe" required className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-[#f94735] focus:bg-white transition-all text-sm outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[9px] font-bold text-[#0e1d34]/60 uppercase tracking-widest ml-1">Email Address</label>
                <input name="email" type="email" placeholder="john.doe@example.com" required className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-[#f94735] focus:bg-white transition-all text-sm outline-none" />
              </div>
              <div className="space-y-1">
                <label className="block text-[9px] font-bold text-[#0e1d34]/60 uppercase tracking-widest ml-1">Phone Number</label>
                <input name="phone" type="tel" placeholder="+1 (555) 000-0000" required className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-[#f94735] focus:bg-white transition-all text-sm outline-none" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="block text-[9px] font-bold text-[#0e1d34]/60 uppercase tracking-widest ml-1">Resume / CV</label>
              <div onClick={handleUploadClick} className={`group relative border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center transition-all cursor-pointer ${fileName ? 'border-[#f94735] bg-[#f94735]/5' : 'border-gray-100 bg-gray-50 hover:border-[#f94735] hover:bg-white'}`}>
                <Upload size={20} className={fileName ? 'text-[#f94735]' : 'text-gray-300'} />
                <p className="text-xs font-bold text-[#0e1d34] mt-2">{fileName || "Upload Resume (PDF or DOCX)"}</p>
                <input ref={fileInputRef} name="resume" type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.docx"/>
              </div>
            </div>
          </form>
        </div>
        <footer className="p-8 pt-4 border-t border-gray-50 bg-white">
          <button form="career-form" type="submit" disabled={isSubmitting} className="w-full bg-[#0e1d34] text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#f94735] transition-all shadow-lg active:scale-95">
            {isSubmitting ? "Processing..." : "Submit Application"}
          </button>
        </footer>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `.scrollbar-hide::-webkit-scrollbar { display: none; }`}} />
    </div>
  );
};

const JobCard = ({ title, description, location, type, department, onApply }) => {
  return (
    <div className="group relative w-full flex flex-col md:flex-row md:items-center justify-between p-4 md:p-5 mb-3 rounded-2xl border border-gray-100 bg-white hover:border-[#f94735]/40 hover:shadow-[0_10px_30px_rgba(14,29,52,0.05)] transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#f94735] opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 lg:gap-10">
        <div className="md:w-1/3 min-w-[260px]">
          <span className="text-[9px] font-black tracking-widest uppercase py-0.5 px-2 bg-[#0e1d34] rounded text-white mb-1.5 inline-block">
            {department}
          </span>
          <h3 className="text-lg font-black text-[#0e1d34] group-hover:text-[#f94735] transition-colors truncate">
            {title}
          </h3>
        </div>

        {/* Increased font size and removed italic for the middle content */}
        <div className="hidden lg:block flex-1">
          <p className="text-[#0e1d34]/60 text-sm font-medium leading-relaxed line-clamp-1">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-5 text-[#0e1d34]/60 font-bold text-[10px] uppercase tracking-wider">
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <MapPin size={12} className="text-[#f94735]" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <Clock size={12} className="text-[#f94735]" />
            <span>{type}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-0 md:ml-6 flex items-center gap-3">
        <button 
          onClick={() => onApply(title)}
          className="flex-1 md:flex-none bg-[#0e1d34] hover:bg-[#f94735] text-white font-black py-2.5 px-7 rounded-xl text-[10px] uppercase tracking-widest transition-all shadow-sm whitespace-nowrap group/btn flex items-center justify-center gap-2">
          Apply Now
          <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const CareerOpportunities = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const jobs = [
    { id: 1, title: "Fleet Operations Manager", description: "Strategic oversight of daily regional fleet operations, focusing on safety metrics and route efficiency.", location: "Chicago, IL", type: "Full-time", department: "Operations" },
    { id: 2, title: "Warehouse Supervisor", description: "Lead high-performance warehouse teams and ensure flawless execution of inventory cycles.", location: "Los Angeles, CA", type: "Full-time", department: "Warehouse" },
    { id: 3, title: "Logistics Coordinator", description: "The central hub for our supply chain, managing carrier relationships and real-time visibility.", location: "New York, NY", type: "Full-time", department: "Logistics" },
    { id: 4, title: "CDL-A Truck Driver", description: "Join our premier driving team. Competitive per-mile rates and regular home time.", location: "Multiple Locations", type: "Full-time", department: "Transportation" },
    { id: 5, title: "Supply Chain Analyst", description: "Utilize data-driven insights to model network optimizations and drive cost-saving initiatives.", location: "Dallas, TX", type: "Full-time", department: "Analytics" },
    { id: 6, title: "Customer Service Lead", description: "Own the customer journey. Resolve complex shipping challenges with our enterprise clients.", location: "Remote", type: "Full-time", department: "Customer Support" },
    { id: 7, title: "Safety & Compliance Manager", description: "Guardian of our 'Safety First' culture. Ensure rigorous DOT compliance and training.", location: "Atlanta, GA", type: "Full-time", department: "Safety" },
    { id: 8, title: "IT Systems Administrator", description: "Architecture and maintenance of our proprietary TMS and warehouse software.", location: "San Francisco, CA", type: "Full-time", department: "Technology" }
  ];

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative bg-[#FDFDFD] font-sans selection:bg-[#f94735]/20 selection:text-[#f94735]" id="CareerOpportunities">
      <div className="w-full border-b border-gray-100"></div>

      <div className="max-w-[1400px] mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-100 pb-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-8 bg-[#f94735] rounded-full"></span>
                <p className="text-[#f94735] text-[9px] font-black tracking-[0.3em] uppercase">Join Our Fleet</p>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-[#0e1d34] tracking-tight leading-none mb-4">
                Move Forward <span className="text-[#f94735]">With Our Team.</span>
              </h1>
              <p className="text-base text-[#0e1d34]/50 font-medium">
                We are redefining the global logistics landscape. Start your journey with us today.
              </p>
            </div>

            <div className="w-full md:w-72 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0e1d34]/30" size={16} />
              <input 
                type="text"
                placeholder="Search job titles or departments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-gray-100 rounded-xl py-3.5 pl-10 pr-4 focus:outline-none focus:border-[#f94735] focus:ring-1 focus:ring-[#f94735] transition-all shadow-sm text-sm text-[#0e1d34]"/>
            </div>
          </div>
        </header>

        <div className="flex flex-col">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} {...job} onApply={(title) => { setSelectedJob(title); setIsFormOpen(true); }} />
            ))
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <Search className="mx-auto text-[#0e1d34]/10 mb-2" size={32} />
              <p className="text-[#0e1d34]/40 font-bold text-xs uppercase tracking-widest">No matching positions found</p>
              <button onClick={() => setSearchTerm("")} className="mt-4 text-[#f94735] font-bold text-[10px] uppercase tracking-widest hover:underline">Clear Search</button>
            </div>
          )}
        </div>
      </div>

      <ApplyForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} jobTitle={selectedJob} />
    </div>
  );
};

export default function App() {
  return <CareerOpportunities />;
}