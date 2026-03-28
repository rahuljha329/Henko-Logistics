import React, { useState } from "react";
import { Mail, Phone, MapPin, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function WareHousingContent() {
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
      q: "What are warehousing solutions?",
      a: "Warehousing solutions refer to services that involve storing, managing, and handling goods in a secure and organized facility before distribution."
    },
    {
      q: "Can I track my inventory in the warehouse?",
      a: "Yes, we use advanced inventory management systems that allow real-time tracking and updates of your stored goods."
    },
    {
      q: "Are goods safe in your warehouse?",
      a: "Absolutely. We follow strict security measures, proper handling procedures, and surveillance systems to ensure complete safety of your inventory."
    },
    {
      q: "Do you provide order fulfillment services?",
      a: "Yes, we handle picking, packing, and shipping to ensure smooth order fulfillment for your business."
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
            src="https://images.pexels.com/photos/36696522/pexels-photo-36696522.jpeg"
            className="w-full h-[520px] object-cover rounded"
            alt="sea freight"
          />

          {/* Heading + 3 Paragraphs */}
          <div>
            <h2 className="text-2xl font-bold text-[#0e1d34] mb-3">
             Ware Housing Solutions
            </h2>

            <p className="text-gray-500 mb-4">
Warehousing solutions play a crucial role in modern supply chain management by ensuring safe storage, efficient handling, and timely distribution of goods. A well-managed warehouse not only protects inventory but also improves operational efficiency, reduces costs, and enhances customer satisfaction. With the growing demand for faster deliveries, businesses rely on advanced warehousing systems to streamline their logistics operations.
           </p> <p className="text-gray-500 mb-4">
Our warehousing services are designed to provide flexible and scalable storage options tailored to your business needs. Whether you require short-term storage or long-term inventory management, we offer customized solutions that adapt to your requirements. Equipped with modern infrastructure and technology-driven systems, our warehouses ensure accurate inventory tracking and seamless order fulfillment.</p>
            <p className="text-gray-500">
We prioritize safety, security, and organization in every aspect of our warehousing operations. From proper packaging and labeling to climate-controlled storage and strict handling procedures, we ensure that your goods remain in perfect condition. Our trained staff and efficient processes minimize risks and maintain high standards of quality and reliability.            </p>
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
In addition to storage, we provide value-added services such as inventory management, order processing, packaging, and distribution. Our end-to-end warehousing solutions are designed to simplify your logistics process, allowing you to focus on growing your business while we handle your storage and distribution needs with precision and care.</p>

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