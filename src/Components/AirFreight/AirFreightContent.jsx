import React, { useState } from "react";
import { Mail, Phone, MapPin, FileText } from "lucide-react";

export default function AirFreightContent() {
  const [open, setOpen] = useState(0);
  const [activeService, setActiveService] = useState(0); // 👈 NEW

  const services = [
    { name: "Air Freight", link: "/service-air-freight" },
    { name: "Sea Freight", link: "/service-sea-freight" },
    { name: "Warehousing Solutions", link: "/service-warehousing" },
    { name: "Express Delivery", link: "/service-express" },
    { name: "Clearance", link: "/service-clearance" },
    { name: "Transport", link: "/service-transport" },
  ];

  const faqs = [
    {
      q: "Can i specify a delivery date when ordering?",
      a: "We are committed to providing our customers with exceptional service while offering our employees the best training."
    },
    {
      q: "How can i track my shipments?",
      a: "You can track shipments in real-time using our tracking system."
    },
    {
      q: "How long does air freight delivery take?",
      a: "Delivery typically takes 1–5 days depending on destination and service type."
    },
    {
      q: "Is air freight expensive?",
      a: "It is costlier than sea freight but ideal for urgent and high-value shipments."
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
                <a
                  key={i}
                  href={item.link} // 👈 link added
                  onClick={() => setActiveService(i)} // 👈 active change
                  className={`flex justify-between items-center px-4 py-3 rounded cursor-pointer transition ${
                    activeService === i
                      ? "bg-[#f94735] text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {item.name}
                  <span>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* बाकी code same hai ↓ */}

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
             Air freight is the fastest and most reliable way to move goods across long distances, ensuring timely delivery for urgent and high-value shipments. Our air freight services are designed to provide seamless logistics solutions with global coverage, advanced tracking systems, and efficient handling at every stage of the journey.
            </p>
            <p className="text-gray-500 mb-4">
                We work with a strong network of airline partners to offer flexible scheduling, competitive pricing, and priority cargo handling. Whether it’s small parcels or large commercial consignments, we ensure your shipments are delivered safely, securely, and on time. Our team manages everything from documentation and customs clearance to final delivery, giving you a hassle-free experience.
            </p>
            <p className="text-gray-500">
              With a focus on speed, accuracy, and customer satisfaction, our air freight solutions are ideal for businesses that demand efficiency and reliability. We continuously optimize our processes to reduce transit times and ensure your cargo reaches its destination without delays.
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
            We understand the importance of time-sensitive deliveries in today’s fast-paced world. Our air freight services are tailored to meet urgent shipping needs while maintaining the highest standards of safety and quality. From pickup to final delivery, we ensure complete transparency and real-time updates for your peace of mind.
          </p>

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