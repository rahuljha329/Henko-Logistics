import React from 'react';
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Shield,
  Truck,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const features = [
    {
      icon: <Truck size={24} />,
      title: 'Free Shipping',
      description: 'Free delivery for orders above $50'
    },
    {
      icon: <CreditCard size={24} />,
      title: 'Secure Payment',
      description: '100% secure payment processing'
    },
    {
      icon: <Shield size={24} />,
      title: 'Quality Guarantee',
      description: '30-day return policy'
    },
    {
      icon: <Phone size={24} />,
      title: '24/7 Support',
      description: 'Dedicated customer support'
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    
  ];

  return (
    <footer className="bg-gray-900 text-white">

      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-red-500">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                ECOMMERCE <span className="text-red-500">.</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Your ultimate fashion destination. Discover the latest trends and express your unique style with our curated collection.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-red-500 transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/aboutus' },
                { label: 'Careers', path: '/careers' },
                { label: 'Gift Cards', path: '/gift-cards' }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/shipping-policy"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Shipping Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/return-policy"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Return Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/size-guide"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Size Guide
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  to="/track-order"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Track Order
                </Link>
              </li>
            </ul>
          </div>



          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>


            <div className="mb-6">
              <p className="text-gray-400 mb-4">
                Subscribe to get special offers, free giveaways, and exclusive deals.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-red-500 text-white rounded-r-lg hover:bg-red-600 transition-colors duration-200 font-medium">
                  <Mail size={18} />
                </button>
              </div>
            </div>


            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} />
                <span>support@ecommerce.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>123 Fashion Street, Style City, SC 12345</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            <div className="text-gray-400 text-sm">
              © {currentYear} ECommerce.com. All rights reserved.
            </div>


            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </Link>
              <Link
                to="/accessibility"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Accessibility
              </Link>
            </div>


            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm mr-2">We accept:</span>
              <div className="flex space-x-2">
                {['Visa', 'Mastercard', 'PayPal', 'Apple Pay'].map((method) => (
                  <div
                    key={method}
                    className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="text-center mt-4 pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-sm flex items-center justify-center">
              Made with <Heart size={14} className="mx-1 text-red-500" /> by the ECommerce  <span className="text-red-500"> .</span> team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;