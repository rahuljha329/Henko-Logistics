// components/Footer.jsx
import { 
  Truck, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  ChevronRight
} from 'lucide-react';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Tracking', href: '/tracking' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Freight Forwarding', href: '#' },
    { name: 'Warehousing', href: '#' },
    { name: 'Supply Chain', href: '#' },
    { name: 'Last Mile Delivery', href: '#' },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Noida, India' },
    { icon: Phone, text: '+91 0000000000' },
    { icon: Mail, text: 'info@logistic.com' },
    { icon: Clock, text: 'Mon-Fri: 9AM - 6PM' },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaLinkedinIn, href: '#' },
    { icon: FaInstagram, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Truck className="text-blue-500" />
              <h2 className="text-white text-xl font-bold">LOGISTIC</h2>
            </div>
            <p className="text-sm">
              Fast & reliable logistics services worldwide.
            </p>

            <div className="flex gap-3 mt-4">
              {socialLinks.map((item, i) => (
                <a key={i} href={item.href} className="hover:text-blue-500">
                  <item.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white mb-3 font-semibold">Quick Links</h3>
            {quickLinks.map((link, i) => (
              <a key={i} href={link.href} className="flex items-center gap-1 hover:text-blue-500 mb-2">
                <ChevronRight size={14} /> {link.name}
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-3 font-semibold">Services</h3>
            {services.map((item, i) => (
              <a key={i} href={item.href} className="flex items-center gap-1 hover:text-blue-500 mb-2">
                <ChevronRight size={14} /> {item.name}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-3 font-semibold">Contact</h3>
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <item.icon size={16} className="text-blue-500" />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between gap-4">
          <p>Subscribe for updates</p>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 bg-gray-800 rounded outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded flex items-center gap-1">
              Send <Send size={14} />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
          © {currentYear} LOGISTIC. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;