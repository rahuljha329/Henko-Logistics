import React, { useState } from "react";
import { Mail, Phone, MapPin, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function TransportContent() {
  const [open, setOpen] = useState(0);
  const location = useLocation(); // ✅ added

  const services = [
    { name: "Air Freight", link: "/service-air-freight" },
    { name: "Sea Freight", link: "/service-sea-freight" },
    { name: "Warehousing Solutions", link: "/service-warehousing-solutions" },
    { name: "Express Delivery", link: "/service-express" },
    { name: "Transport", link: "/service-transport" },
  ];

  const faqs = [
    {
      q: "What types of transport services do you offer?",
      a: "We offer road transport services including full truckload (FTL), part truckload (PTL), and last-mile delivery."
    },
    {
      q: "How can i track my shipments?",
      a: "You can track shipments in real-time using our tracking system."
    },
    {
      q: "Is your transport service available nationwide?",
      a: "Yes, we have a strong network that covers multiple cities and regions across the country."
    },
    {
      q: "Are goods insured during transport?",
      a: "Yes, we ensure proper safety measures and can provide insurance options for shipments."
    }
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-16">
      <div className="grid md:grid-cols-3 gap-8">

        {/* ================= LEFT SIDEBAR ================= */}
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

          {/* Contact Info */}
          <div className="bg-white shadow rounded">
            <h3 className="bg-[#0e1d34] text-white p-4 font-semibold">
              CONTACT INFO
            </h3>

            <div className="p-4 space-y-4 text-sm">
              <div className="flex gap-3 items-start">
                <Mail className="text-[#f94735]" />
                <div>
                  <p className="font-semibold">Email Address</p>
                  <p className="text-gray-500">info@yourdomain.com</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Phone className="text-[#f94735]" />
                <div>
                  <p className="font-semibold">Phone Number</p>
                  <p className="text-gray-500">(+44) 123 456 789</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <MapPin className="text-[#f94735]" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-500">Guild Street 512B, UK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Brochures */}
          <div className="bg-white shadow rounded">
            <h3 className="bg-[#0e1d34] text-white p-4 font-semibold">
              BROCHURES
            </h3>

            <div className="p-4 space-y-3">
              <div className="flex items-center gap-3 border p-3 rounded cursor-pointer hover:bg-gray-100">
                <FileText className="text-[#f94735]" />
                <span>DOWNLOAD .PDF</span>
              </div>

              <div className="flex items-center gap-3 border p-3 rounded cursor-pointer hover:bg-gray-100">
                <FileText className="text-[#f94735]" />
                <span>DOWNLOAD .TXT</span>
              </div>
            </div>
          </div>

          {/* Help Box */}
          <div className="bg-[#0e1d34] text-white p-6 rounded text-center">
            <h3 className="text-lg font-bold mb-4">How Can We Help?</h3>
            <p className="text-sm mb-2">📞 (+44) 123 456 789</p>
            <p className="text-sm">✉ addyouremailhere</p>
          </div>

        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="md:col-span-2 space-y-8">

          {/* Image */}
          <img
            src="https://images.pexels.com/photos/1606957/pexels-photo-1606957.jpeg"
            className="w-full h-[520px] object-cover rounded"
            alt="warehouse"
          />

          {/* Title + Text */}
          <div>
            <h2 className="text-2xl font-bold text-[#0e1d34] mb-3">
              Transport
            </h2>

            <p className="text-gray-500 mb-4">
              Transport services are a vital part of the logistics chain, ensuring the smooth movement of goods from one location to another.
            </p>

            <p className="text-gray-500 mb-4">
              Our transport services are designed to provide reliable and flexible solutions for all types of cargo.
            </p>

            <p className="text-gray-500">
              We focus on safety, efficiency, and timely delivery in every operation.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded shadow text-center">
                <div className="w-14 h-14 mx-auto border rounded-full flex items-center justify-center text-[#0e1d34] font-bold">
                  {`0${i + 1}`}
                </div>

                <h3 className="font-semibold mt-4">
                  {i === 0 ? "Packaging & Storage" : "Safety & Quality"}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  We understand the importance of timely delivery.
                </p>

                <p className="text-[#f94735] mt-3 font-semibold">
                  {i === 0 ? "94% SCORE" : "96% SCORE"}
                </p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h3 className="text-2xl font-bold text-[#0e1d34] mb-4">
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
                      className={`font-semibold ${
                        isActive ? "text-[#f94735]" : "text-[#0e1d34]"
                      }`}
                    >
                      {item.q}
                    </span>

                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                        isActive
                          ? "bg-[#f94735] text-white rotate-180"
                          : ""
                      }`}
                    >
                      +
                    </div>
                  </button>

                  <div
                    className={`px-5 overflow-hidden transition-all ${
                      isActive ? "max-h-40 pb-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-500">{item.a}</p>
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