// components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  X,
  Truck,
  ChevronDown,
  MapPin,
  Clock,
  Phone,
  PlaneTakeoff,
  Ship,
  Package,
  Scale,
  BookOpen,
  Calculator,
  Anchor,
} from "lucide-react";

// logo import (apne path ke hisaab se adjust karo)
import logoLarge from "../../assets/Henko-logo-large.png";
import logoMobile from "../../assets/henko-logo-mobile.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const colors = {
    primary: "#f94735",
    secondary: "#0e1d34",
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Resources", href: "/resources", hasDropdown: true },
    { name: "Blog", href: "/blog" },
  ];

  const serviceItems = [
    { name: "Air Freight", link: "/service-air-freight", icon: PlaneTakeoff },
    { name: "Sea Freight", link: "/service-sea-freight", icon: Ship },
    { name: "Warehousing", link: "/service-warehousing", icon: Package },
    { name: "Express Delivery", link: "/service-express", icon: Truck },
    { name: "Clearance", link: "/service-clearance", icon: Scale },
    { name: "Transport", link: "/service-transport", icon: Truck },
  ];

  const resourceItems = [
    { name: "Incoterms", link: "/resources/incoterms", icon: BookOpen, description: "Trade terms" },
    { name: "Metric Conversion", link: "/resources/metric", icon: Scale, description: "Convert units" },
    { name: "Container Specs", link: "/resources/container", icon: Package, description: "Sizes & types" },
    { name: "Glossary", link: "/resources/glossary", icon: BookOpen, description: "Shipping terms" },
    { name: "Currency", link: "/resources/currency", icon: Calculator, description: "Exchange rates" },
    { name: "Sea Ports", link: "/resources/ports", icon: Anchor, description: "Global ports" },
    { name: "Truck Types", link: "/resources/trucks", icon: Truck, description: "Vehicle info" },
  ];

  const toggleDropdown = (type) => {
    if (type === "services") {
      setServicesOpen(!servicesOpen);
      setResourcesOpen(false);
    } else {
      setResourcesOpen(!resourcesOpen);
      setServicesOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      
      {/* Top Bar */}
      <div className="hidden lg:block text-white text-sm py-2" style={{ backgroundColor: colors.secondary }}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between">
          <div className="flex space-x-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 1800 123 4567
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              24/7 Support
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Pan India Network
            </div>
          </div>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logoLarge} className="hidden md:block h-12" />
            <img src={logoMobile} className="md:hidden h-10" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">

                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() =>
                        link.name === "Services"
                          ? toggleDropdown("services")
                          : toggleDropdown("resources")
                      }
                      className="flex items-center gap-1 font-medium"
                      style={{ color: colors.secondary }}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Services */}
                    {link.name === "Services" && servicesOpen && (
                      <div className="absolute w-64 bg-white shadow-lg mt-2 rounded">
                        {serviceItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.link}
                            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                            onClick={() => setServicesOpen(false)}
                          >
                            <item.icon className="w-5 h-5 text-red-500" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Resources */}
                    {link.name === "Resources" && resourcesOpen && (
                      <div className="absolute w-72 bg-white shadow-lg mt-2 rounded">
                        {resourceItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.link}
                            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                            onClick={() => setResourcesOpen(false)}
                          >
                            <item.icon className="w-5 h-5 text-red-500" />
                            <div>
                              <div>{item.name}</div>
                              <div className="text-xs text-gray-500">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={link.href} style={{ color: colors.secondary }}>
                    {link.name}
                  </Link>
                )}

              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex gap-3">
            <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Contact
            </button>
            <button className="border border-red-500 text-red-500 px-4 py-2 rounded">
              Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;