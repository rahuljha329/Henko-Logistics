import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="w-full h-[400px] mb-12 rounded-xl overflow-hidden shadow-lg border border-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d112143.90715665747!2d77.313412!3d28.554832!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x390ce77e7352986d%3A0xf4f8800ea7deb9ad!2sThe%20Bharat%20Homes%2C%20Shop%20no%208%20B%2C%20Lotus%20300%20Club%2C%20Sector%20107%2C%20Noida%2C%20Uttar%20Pradesh%20201304!3m2!1d28.544107099999998!2d77.37518469999999!4m5!1s0x390ce3c55fcb6929%3A0xc1915416d869c7ed!2sHemkunt%20Chambers%2C%20Nehru%20Pl%20Market%20Rd%2C%20Nehru%20Place%2C%20New%20Delhi%2C%20Delhi%20110019!3m2!1d28.5476618!2d77.2522895!5e0!3m2!1sen!2sin!4v1774606658673!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Address Card */}
            <div className="flex gap-4 p-6 bg-gray-50 rounded-lg border-l-4 border-[#f94735]">
              <div className="bg-[#0e1d34] p-3 rounded-lg h-fit text-white">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0e1d34] mb-2">Our Locations</h4>
                <div className="text-sm text-gray-600 space-y-4">
                  <p>
                    <strong className="text-[#f94735]">Registered Office:</strong><br />
                    1010, Supernova, Tower – Astralis, Sector – 94, Noida, U.P, India-201301
                  </p>
                  <p>
                    <strong className="text-[#f94735]">Branch Office:</strong><br />
                    Office No.522, 5th Floor, 89-Hemkunth Chamber, Nehru Place, New Delhi-110019
                  </p>
                  <p>
                    <strong className="text-[#f94735]">China Office:</strong><br />
                    A 01, 23rd Floor, Pacific Insurance Tower, 559, Tianhe North street, Guangzhou
                  </p>
                </div>
              </div>
            </div>

            {/* Call Us Card */}
            <div className="flex gap-4 p-6 bg-gray-50 rounded-lg border-l-4 border-[#f94735]">
              <div className="bg-[#0e1d34] p-3 rounded-lg h-fit text-white">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0e1d34] mb-1">Call Us</h4>
                <p className="text-gray-600 font-medium">+91-0120-4280999</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex gap-4 p-6 bg-gray-50 rounded-lg border-l-4 border-[#f94735]">
              <div className="bg-[#0e1d34] p-3 rounded-lg h-fit text-white">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0e1d34] mb-1">Email Us</h4>
                <p className="text-gray-600 font-medium">sales@henkologistics.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 border border-gray-200 rounded focus:border-[#f94735] focus:ring-1 focus:ring-[#f94735] outline-none transition-all"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 border border-gray-200 rounded focus:border-[#f94735] focus:ring-1 focus:ring-[#f94735] outline-none transition-all"
              />
              <div className="md:col-span-2">
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full p-3 border border-gray-200 rounded focus:border-[#f94735] focus:ring-1 focus:ring-[#f94735] outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <textarea 
                  rows="5" 
                  placeholder="Message" 
                  className="w-full p-3 border border-gray-200 rounded focus:border-[#f94735] focus:ring-1 focus:ring-[#f94735] outline-none transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button 
                  type="submit" 
                  className="bg-[#0e1d34] hover:bg-[#f94735] text-white px-10 py-3 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
                >
                  Send Message <Send size={18} />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;