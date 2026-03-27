import React, { useState } from 'react';
import { Plus, Minus, ChevronLeft, ChevronRight, X, Send, CheckCircle2 } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // ✅ FIX

/**
 * FAQItem Component
 */
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`transition-all duration-300 mb-4 rounded-2xl border ${isOpen ? 'bg-white shadow-xl border-[#f94735]/20' : 'bg-white shadow-sm border-gray-100 hover:border-[#f94735]/30'}`}>
      <button onClick={onClick} className="w-full flex items-center justify-between p-6 text-left">
        <span className={`font-bold text-base md:text-lg ${isOpen ? 'text-[#f94735]' : 'text-[#0e1d34]'}`}>
          {question}
        </span>
        <div className={`ml-4 rounded-xl p-2 ${isOpen ? 'bg-[#f94735] text-white rotate-180' : 'bg-[#0e1d34] text-white'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <div className={`${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-500`}>
        <div className="px-6 pb-6 text-gray-500 text-sm">
          <div className="h-px w-full bg-gray-100 mb-4" />
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [openIndex, setOpenIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [isSent, setIsSent] = useState(false);

const faqs = [
  { question: "What logistics services do you offer?", answer: "We provide transportation via road, air, and sea along with warehousing and supply chain management solutions." },
  { question: "How can I track my shipment?", answer: "You can track your shipment using the tracking ID provided after booking through our tracking system." },
  { question: "Do you offer international shipping?", answer: "Yes, we offer global shipping services with real-time tracking and customs clearance support." },
  { question: "How long does delivery take?", answer: "Delivery time depends on the service selected. Express delivery takes 1–3 days, while standard shipping may take 5–7 days." },
  { question: "Is my shipment insured?", answer: "Yes, we offer optional insurance coverage to protect your goods during transit." },
  { question: "Can I schedule a pickup from my location?", answer: "Yes, you can easily schedule a pickup through our website or customer support." },
  { question: "What items are restricted for shipping?", answer: "Hazardous materials, illegal goods, and improperly packaged items are restricted." },
];

  const handleSendMessage = () => {
    if (!question.trim()) return;
    setIsSent(true);
    setQuestion("");
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-[#0e1d34]">

      {/* Header */}
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          Frequently Ask <span className="text-[#f94735]">Questions</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10">

        {/* FAQ */}
        <div className="lg:col-span-7">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              {...faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Form */}
       <div className="lg:col-span-5 mt-10 lg:mt-20">
          <div className="bg-[#0e1d34] text-white p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Any Question?</h2>

            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your question..."
              className="w-full p-3 rounded mb-4 text-white"
            />

            <button
              onClick={handleSendMessage}
              className="w-full bg-[#f94735] py-3 rounded flex justify-center gap-2 items-center"
            >
              {isSent ? <>Sent <CheckCircle2 size={18} /></> : <>Send <Send size={18} /></>}
            </button>
          </div>
        </div>
      </div>

      {/* Social Sidebar (UI SAME) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-10">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-gray-200 mx-auto" />
        
        {/* ✅ ONLY CHANGE HERE */}
        <a href="#" className="text-gray-300 hover:text-[#f94735] transition-all hover:scale-125">
          <FaFacebook size={22} />
        </a>
        <a href="#" className="text-gray-300 hover:text-[#f94735] transition-all hover:scale-125">
          <FaInstagram size={22} />
        </a>
        <a href="#" className="text-gray-300 hover:text-[#f94735] transition-all hover:scale-125">
          <FaTwitter size={22} />
        </a>

        <div className="w-px h-20 bg-gradient-to-t from-transparent to-gray-200 mx-auto" />
      </div>
    </div>
  );
}