import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Truck, ChevronDown, MapPin, Clock, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const colors = {
    primary: '#f94735',
    secondary: '#0e1d34', 
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Warehouse', href: '/warehouse' },
    { name: 'Blog', href: '/blog' },
  ];

  const serviceItems = [
    'Freight Forwarding',
    'Express Delivery',
    'Warehousing Solutions',
    'Supply Chain Management',
    'Last Mile Delivery',
    'International Shipping',
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="hidden lg:block text-white text-sm py-2" style={{ backgroundColor: colors.secondary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 0000000000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Pan India Network</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:opacity-80 transition">Track Order</a>
              <a href="#" className="hover:opacity-80 transition">Partner With Us</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg" style={{ backgroundColor: colors.primary }}>
              <Truck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold" style={{ color: colors.secondary }}>
                LOGISTIC
              </h1>
              <p className="text-xs text-gray-500 tracking-wide">SIMPLIFYING LOGISTICS</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="px-3 py-2 font-medium transition duration-300 flex items-center space-x-1"
                    style={{ color: colors.secondary }}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="px-3 py-2 font-medium transition duration-300 hover:opacity-70"
                    style={{ color: colors.secondary }}
                  >
                    {link.name}
                  </a>
                )}
                
                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                    <div className="py-2">
                      {serviceItems.map((service) => (
                        <a
                          key={service}
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-white transition"
                          style={{ hover: { backgroundColor: colors.primary } }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = colors.primary;
                            e.target.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = '#374151';
                          }}
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link to="/contact">
  <button 
    className="text-white px-5 py-2.5 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-md flex items-center space-x-2"
    style={{ backgroundColor: "#0e1d34" }} // Aapka primary blue color
  >
    <Phone className="w-4 h-4" />
    <span>Contact Us</span>
  </button>
</Link>
            <button 
              className="px-5 py-2.5 rounded-lg font-semibold transition duration-300"
              style={{ border: `2px solid ${colors.primary}`, color: colors.primary }}
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {isOpen ? <X className="w-6 h-6" style={{ color: colors.secondary }} /> : <Menu className="w-6 h-6" style={{ color: colors.secondary }} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex justify-between items-center w-full px-3 py-2 font-medium rounded-lg"
                        style={{ color: colors.secondary }}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesOpen && (
                        <div className="pl-6 mt-2 space-y-2">
                          {serviceItems.map((service) => (
                            <a
                              key={service}
                              href="#"
                              className="block px-3 py-2 text-gray-600 rounded-lg"
                              style={{ hover: { backgroundColor: colors.primary, color: 'white' } }}
                            >
                              {service}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="block px-3 py-2 font-medium rounded-lg"
                      style={{ color: colors.secondary }}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col space-y-3 border-t border-gray-100 mt-2">
                <button 
                  className="text-white px-4 py-2.5 rounded-lg font-semibold transition w-full flex items-center justify-center space-x-2"
                  style={{ backgroundColor: colors.primary }}
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact Us</span>
                </button>
                <button 
                  className="px-4 py-2.5 rounded-lg font-semibold transition w-full"
                  style={{ border: `2px solid ${colors.primary}`, color: colors.primary }}
                >
                  Get Quote
                </button>
              </div>
              
              <div className="pt-4 space-y-2 text-sm border-t border-gray-100 mt-2">
                <div className="flex items-center space-x-2" style={{ color: colors.secondary }}>
                  <Phone className="w-4 h-4" />
                  <span>+91 00000000000</span>
                </div>
                <div className="flex items-center space-x-2" style={{ color: colors.secondary }}>
                  <Clock className="w-4 h-4" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2" style={{ color: colors.secondary }}>
                  <MapPin className="w-4 h-4" />
                  <span>Pan India Network</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        /* Hover effect for dropdown items */
        .dropdown-item:hover {
          background-color: #f94735;
          color: white;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;