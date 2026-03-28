import React, { useState } from "react";
import { Plus, Minus, Send, CheckCircle2, X, ChevronLeft, ChevronRight } from "lucide-react";

const HomeFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const allFaqs = [
    {
      question: "What is Feedback?",
      answer: "Feedback is information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement and growth."
    },
    {
      question: "Why should your organization use Feedback Application?",
      answer: "It streamlines data collection, provides real-time analytics, and helps in making data-driven decisions to improve overall performance."
    },
    {
      question: "How to Contact Us?",
      answer: "You can reach us via our 24/7 support hotline, email at support@feedbackapp.com, or through the contact form on this page."
    },
    {
      question: "Trust Level of Feedback Application?",
      answer: "We use bank-grade encryption and strictly follow GDPR guidelines to ensure your data remains 100% private and secure."
    },
    {
      question: "How does the analytics dashboard work?",
      answer: "Our AI-powered dashboard processes raw feedback into visual charts, sentiment analysis, and actionable insights in real-time."
    },
   
    {
      question: "How can I track my logistic shipment?",
      answer: "You can track your shipment in real-time using our specialized logistics dashboard by entering your unique tracking ID."
    },
    {
      question: "What are the shipping delivery timelines?",
      answer: "Standard delivery takes 3-5 business days, while express logistics can deliver within 24-48 hours depending on the location."
    },
    {
      question: "Can I customize my feedback forms?",
      answer: "Yes, our drag-and-drop builder allows you to create fully customized surveys tailored to your specific organizational needs."
    },
    {
      question: "Are there any hidden costs or setup fees?",
      answer: "No, we believe in transparent pricing. There are no hidden setup fees, and all features included in your chosen plan are available immediately."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, our platform is fully responsive and we offer dedicated apps for both iOS and Android for on-the-go management."
    }
  ];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(allFaqs.length / itemsPerPage);
  
  const currentFaqs = allFaqs.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleNext = () => {
    setOpenIndex(null); 
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setOpenIndex(null);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;
    setIsSent(true);
    setUserInput("");
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <section className="py-20 bg-[#fcfcfd] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] text-[#f94735] font-black uppercase">
            Support Center
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-[#0e1d34] mt-4 tracking-tight">
            Frequently Ask <span className="text-[#f94735]">Questions</span>
          </h2>

          <p className="text-gray-400 text-sm mt-4 font-semibold">
             Still have questions about your shipment{" "}
            <span className="text-[#f94735] cursor-pointer hover:underline border-b-2 border-[#f94735]/20 pb-1 transition-all">
             Contact Our Support
            </span>
          </p>
        </div>
  

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* FAQ Accordion Side */}
          <div className="lg:col-span-7 space-y-4 min-h-[550px]">
            {currentFaqs.map((item, index) => (
              <div
                key={`${currentPage}-${index}`}
                className={`bg-white border rounded-2xl transition-all duration-300 ${
                  openIndex === index 
                  ? 'border-[#f94735]/30 shadow-xl shadow-[#f94735]/5' 
                  : 'border-gray-100 shadow-sm hover:border-[#f94735]/20'
                }`}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left">
                  <span className={`font-bold text-sm md:text-base transition-colors duration-300 ${
                    openIndex === index ? 'text-[#f94735]' : 'text-[#0e1d34]'
                  }`}>
                    {item.question}
                  </span>

                  <div className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-500 transform ${
                    openIndex === index 
                    ? 'bg-[#f94735] text-white rotate-180 shadow-lg shadow-[#f94735]/40' 
                    : 'bg-[#0e1d34] text-white shadow-md shadow-[#0e1d34]/10'
                  }`}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent mb-4" />
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

      
          <div className="lg:col-span-5">
            <div className="bg-[#0e1d34] rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
              
              <h3 className="text-3xl font-bold mb-4 tracking-tight mt-2">Any Question?</h3>
              <p className="text-gray-400 text-sm mb-10 leading-relaxed">
                Can't find what you're looking for? Reach out and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black mb-3 ml-1">
                    Let me know
                  </p>

                  <div className="relative group">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your question..."
                      className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#f94735] focus:bg-white/10 transition-all placeholder:text-gray-600"/>
                    {userInput && (
                      <X 
                        size={18} 
                        onClick={() => setUserInput("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#f94735] cursor-pointer transition-colors" />
                    )}
                  </div>
                </div>

                <button 
                  onClick={handleSendMessage}
                  disabled={isSent || !userInput.trim()}
                  className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSent 
                    ? 'bg-green-600 shadow-green-900/20' 
                    : 'bg-[#f94735] shadow-[#f94735]/20 hover:bg-[#d83a2a] hover:-translate-y-1 active:scale-95 disabled:opacity-50'
                  }`}>
                  {isSent ? (
                    <>SENT SUCCESSFULLY <CheckCircle2 size={18} className="animate-bounce" /></>
                  ) : (
                    <>SEND MESSAGE <Send size={16} /></>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-gray-500 mt-12 text-center font-medium italic opacity-60">
                * Your privacy is our top priority. No data is shared.
              </p>
            </div>
          </div>
        </div>


        <div className="flex justify-center items-center gap-6 mt-16">
          <button 
            onClick={handlePrev}
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 
            bg-[#0e1d34]/5 text-[#0e1d34]/40 border border-[#0e1d34]/10
            hover:bg-[#0e1d34] hover:text-white hover:shadow-2xl hover:shadow-[#0e1d34]/30 hover:-translate-y-1 active:scale-90">
            <ChevronLeft size={24} strokeWidth={3} />
          </button>
          
          <button 
            onClick={handleNext}
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500
            bg-[#f94735]/5 text-[#f94735]/40 border border-[#f94735]/10
            hover:bg-[#f94735] hover:text-white hover:shadow-2xl hover:shadow-[#f94735]/30 hover:-translate-y-1 active:scale-90">
            <ChevronRight size={24} strokeWidth={3} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default HomeFaq;