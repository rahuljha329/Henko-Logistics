import React, { useState } from "react";
import { Mail, Phone, MapPin, FileText } from "lucide-react";

export default function AirFreightContent() {
  const [open, setOpen] = useState(0);

  const services = [
    "Air Freight",
    "Sea Freight",
    "3PL Logistics ",
    "Clearance",
    "Transport",
  ];

  const faqs = [
    {
      q: "Can i specify a delivery date when ordering?",
      a: "We are committed to providing our customers with exceptional service while offering our employees the best training."
    },
    {
      q: "How can i track my shipments?",
      a: "You can track shipments in real-time using our tracking system."
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
              {services.map((item, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center px-4 py-3 rounded cursor-pointer ${
                    i === 0
                      ? "bg-[#f94735] text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {item}
                  <span>→</span>
                </div>
              ))}
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
            src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=2400&q=80"
            className="w-full h-[520px] object-cover rounded"
            alt="warehouse"
          />

          {/* Title + Text */}
          <div>
            <h2 className="text-2xl font-bold text-[#0e1d34] mb-3">
              Warehousing
            </h2>
            <p className="text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <p className="text-gray-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text...
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded shadow text-center"
              >
                <div className="w-14 h-14 mx-auto border rounded-full flex items-center justify-center text-[#0e1d34] font-bold">
                  {`0${i + 1}`}
                </div>

                <h3 className="font-semibold mt-4">
                  {i === 0
                    ? "Packaging & Storage"
                    : "Safety & Quality"}
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

          {/* Paragraph */}
          <p className="text-gray-500">
            Ut enim ad minim veniam quis nostrud exercitation ullamco laboris...
          </p>

          {/* FAQ */}
          <div className="bg-white rounded shadow">
            {faqs.map((item, i) => (
              <div key={i} className="border-b">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left p-4 flex justify-between items-center"
                >
                  <span className="font-semibold text-[#0e1d34]">
                    {item.q}
                  </span>
                  <span className="text-[#f94735]">
                    {open === i ? "-" : "+"}
                  </span>
                </button>

                {open === i && (
                  <p className="p-4 text-gray-500">{item.a}</p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}