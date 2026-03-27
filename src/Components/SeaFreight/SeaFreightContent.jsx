import React, { useState } from "react";
import { Mail, Phone, MapPin, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function SeaFreightContent() {
  const [open, setOpen] = useState(null);
  const location = useLocation();

  const services = [
    { name: "Air Freight", link: "/service-air-freight" },
    { name: "Sea Freight", link: "/service-sea-freight" },
    { name: "Warehousing Solutions", link: "/service-warehousing-solutions" },
    { name: "Express Delivery", link: "/service-express" },
    { name: "Transport", link: "/service-transport" },
  ];

  const faqs = [
    {
      q: "What is sea freight?",
      a: "Sea freight refers to the transportation of goods via cargo ships across oceans and seas."
    },
    {
      q: "What is the difference between FCL and LCL?",
      a: "FCL means full container, LCL means shared container space."
    },
    {
      q: "How long does sea freight take?",
      a: "Usually 15–45 days depending on route."
    },
    {
      q: "Is sea freight cheaper?",
      a: "Yes, it is more cost-effective than air freight."
    }
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-16">
      <div className="grid md:grid-cols-3 gap-8">

        {/* ================= LEFT ================= */}
        <div className="space-y-6">

          {/* Services */}
          <div className="bg-white shadow rounded">
            <h3 className="bg-[#0e1d34] text-white p-4 font-semibold">
              OUR SERVICES
            </h3>

            <div className="p-4 space-y-2">
              {services.map((item, i) => {
                const isActive = location.pathname === item.link;

                return (
                  <Link
                    key={i}
                    to={item.link}
                    className={`flex justify-between items-center px-4 py-3 rounded transition ${
                      isActive
                        ? "bg-[#f94735] text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    {item.name}
                    <span>→</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white shadow rounded">
            <h3 className="bg-[#0e1d34] text-white p-4 font-semibold">
              CONTACT INFO
            </h3>

            <div className="p-4 space-y-4 text-sm">
              <div className="flex gap-3">
                <Mail className="text-[#f94735]" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-500">info@yourdomain.com</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="text-[#f94735]" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-500">(+44) 123 456 789</p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-[#f94735]" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-500">UK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Brochure */}
          <div className="bg-white shadow rounded">
            <h3 className="bg-[#0e1d34] text-white p-4 font-semibold">
              BROCHURES
            </h3>

            <div className="p-4 space-y-3">
              <div className="flex gap-3 border p-3 rounded hover:bg-gray-100 cursor-pointer">
                <FileText className="text-[#f94735]" />
                <span>DOWNLOAD PDF</span>
              </div>
            </div>
          </div>

          {/* Help */}
          <div className="bg-[#0e1d34] text-white p-6 rounded text-center">
            <h3 className="font-bold mb-2">Need Help?</h3>
            <p>(+44) 123 456 789</p>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="md:col-span-2 space-y-8">

          {/* Image */}
          <img
            src="https://images.pexels.com/photos/3848793/pexels-photo-3848793.jpeg"
            className="w-full h-[520px] object-cover rounded"
            alt="sea freight"
          />

          {/* Heading + 3 Paragraphs */}
          <div>
            <h2 className="text-2xl font-bold text-[#0e1d34] mb-3">
              Sea Freight
            </h2>

            <p className="text-gray-500 mb-4">
Sea freight is one of the most reliable and cost-effective methods for transporting large volumes of goods across international borders. It is especially suitable for heavy, bulky, or non-urgent shipments, offering businesses an economical solution without compromising on safety. With access to a vast global network of shipping routes, sea freight enables seamless movement of cargo between major ports worldwide.            </p>

            <p className="text-gray-500 mb-4">
Our sea freight services are designed to provide flexibility and efficiency, whether you require Full Container Load (FCL) or Less than Container Load (LCL) options. We ensure secure handling, proper documentation, and timely delivery of your cargo. Backed by experienced professionals and strong carrier partnerships, we simplify complex shipping processes and keep you informed at every stage of the journey.            </p>

            <p className="text-gray-500">
From customs clearance to final delivery, we offer end-to-end logistics solutions tailored to your business needs. Our commitment to reliability, transparency, and cost efficiency makes us a trusted partner for global sea freight services.            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded shadow text-center">
              <div className="w-14 h-14 mx-auto border rounded-full flex items-center justify-center font-bold text-[#0e1d34]">
                01
              </div>
              <h3 className="mt-4 font-semibold">Packaging & Storage</h3>
              <p className="text-gray-500 text-sm mt-2">
                Safe packaging and storage services.
              </p>
              <p className="text-[#f94735] mt-2 font-semibold">94% SCORE</p>
            </div>

            <div className="bg-white p-8 rounded shadow text-center">
              <div className="w-14 h-14 mx-auto border rounded-full flex items-center justify-center font-bold text-[#0e1d34]">
                02
              </div>
              <h3 className="mt-4 font-semibold">Safety & Quality</h3>
              <p className="text-gray-500 text-sm mt-2">
                Secure and quality delivery guaranteed.
              </p>
              <p className="text-[#f94735] mt-2 font-semibold">96% SCORE</p>
            </div>
          </div>

          {/* Extra Paragraph */}
          <p className="text-gray-500">
Sea freight is a highly efficient and cost-effective solution for transporting large volumes of goods across international waters. Ideal for bulk, heavy, or non-urgent shipments, it offers businesses the advantage of lower shipping costs while ensuring secure and reliable delivery. With access to major global shipping routes and ports, sea freight enables smooth and scalable logistics operations worldwide. Our services include both Full Container Load (FCL) and Less than Container Load (LCL) options, tailored to meet diverse business needs. From proper documentation and customs clearance to safe handling and timely delivery, we manage every step of the process with precision. Backed by strong carrier networks and experienced professionals, we ensure transparency, efficiency, and peace of mind for all your sea freight requirements.          </p>

          {/* FAQ */}
          <h3 className="text-2xl font-bold text-[#0e1d34]">
            Frequently Asked Questions
          </h3>

         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
  {faqs.map((item, i) => {
    const isActive = open === i;

    return (
      <div key={i} className="border-b last:border-none">
        <button
          onClick={() => setOpen(isActive ? null : i)}
          className={`w-full flex justify-between items-center p-5 text-left transition ${
            isActive ? "bg-[#f94735]/10" : "hover:bg-gray-50"
          }`}
        >
          <span
            className={`font-semibold text-base md:text-lg ${
              isActive ? "text-[#f94735]" : "text-[#0e1d34]"
            }`}
          >
            {item.q}
          </span>

          {/* Icon */}
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${
              isActive
                ? "bg-[#f94735] text-white rotate-180"
                : "text-[#0e1d34]"
            }`}
          >
            +
          </div>
        </button>

        {/* Answer with animation */}
        <div
          className={`px-5 overflow-hidden transition-all duration-300 ${
            isActive ? "max-h-40 pb-5" : "max-h-0"
          }`}
        >
          <p className="text-gray-500 leading-relaxed">
            {item.a}
          </p>
        </div>
      </div>
    );
  })}
</div>

        </div>
      </div>
    </div>
  );
}