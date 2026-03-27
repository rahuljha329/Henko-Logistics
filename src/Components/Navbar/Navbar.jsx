import React, { useState } from 'react';
import { Menu, X, Truck, ChevronDown, MapPin, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ React Router

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const colors = {
    primary: '#f94735',
    secondary: '#0e1d34',
  };

  const navLinks = [
    { name: 'Home', href: '/Home' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Resource', href: '/resource' },
    { name: 'Blog', href: '/blog' },
  ];

  // ✅ UPDATED (with links)
  const serviceItems = [
   { name: "Air Freight", link: "/service-air-freight" },
    { name: "Sea Freight", link: "/service-sea-freight" },
    { name: "Warehousing Solutions", link: "/service-warehousing" },
    { name: "Express Delivery", link: "/service-express" },
    { name: "Clearance", link: "/service-clearance" },
    { name: "Transport", link: "/service-transport" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">

      {/* Top Bar */}
      <div className="hidden lg:block text-white text-sm py-2" style={{ backgroundColor: colors.secondary }}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between">
          <div className="flex space-x-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 1800 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Pan India Network</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 rounded-lg" style={{ backgroundColor: colors.primary }}>
              <Truck className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl font-bold" style={{ color: colors.secondary }}>
              SHIKHAR
            </h1>
          </Link>

          {/* Desktop Menu */}
         <div className="hidden md:flex items-center space-x-8 lg:space-x-10">

            {navLinks.map((link) => (
              <div key={link.name} className="relative">

                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center gap-1 font-medium"
                      style={{ color: colors.secondary }}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown */}
                    {servicesOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg mt-2 ">
                        {serviceItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.link}
                            className="block px-4 py-2 text-gray-700 hover:text-white"
                            onClick={() => setServicesOpen(false)}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = colors.primary;
                              e.target.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = 'transparent';
                              e.target.style.color = '#374151';
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="font-medium hover:opacity-70"
                    style={{ color: colors.secondary }}
                  >
                    {link.name}
                  </Link>
                )}

              </div>
            ))}

          </div>

          {/* Buttons */}
          <div className="hidden md:flex gap-3">
            <button
              className="text-white px-5 py-2 rounded-lg flex items-center gap-2"
              style={{ backgroundColor: colors.primary }}
            >
              <Phone className="w-4 h-4" />
              Contact
            </button>
            <button
              className="px-5 py-2 rounded-lg"
              style={{ border: `2px solid ${colors.primary}`, color: colors.primary }}
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">

            {navLinks.map((link) => (
              <div key={link.name}>

                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex justify-between w-full px-3 py-2"
                    >
                      {link.name}
                      <ChevronDown className={`${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {servicesOpen && (
                      <div className="pl-4">
                        {serviceItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.link}
                            className="block py-2 text-gray-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="block px-3 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}

              </div>
            ))}

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;