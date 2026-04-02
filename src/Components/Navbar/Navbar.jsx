// import React, { useState } from 'react';
// import { Menu, X, Truck, ChevronDown, MapPin, Clock, Phone } from 'lucide-react';
// import { Link } from 'react-router-dom'; // ✅ React Router
// // components/Navbar.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import {
//   Menu,
//   X,
//   Truck,
//   ChevronDown,
//   MapPin,
//   Clock,
//   Phone,
//   PlaneTakeoff,
//   Ship,
//   Package,
//   Scale,
//   BookOpen,
//   Calculator,
//   Anchor,
// } from "lucide-react";

// // logo import (apne path ke hisaab se adjust karo)
// import logoLarge from "../../assets/Henko-logo-large.png";
// import logoMobile from "../../assets/henko-logo-mobile.png";

// const Navbar = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   const [servicesOpen, setServicesOpen] = useState(false);

//   const [resourcesOpen, setResourcesOpen] = useState(false);

//   const colors = {
//     primary: "#f94735",
//     secondary: "#0e1d34",
//   };

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About Us', href: '/about' },
//     { name: 'Services', href: '/services', hasDropdown: true },
//     { name: 'Resource', href: '/resource' },
//     { name: 'Blog', href: '/blog' },
//   ];

//   // ✅ UPDATED (with links)
//   const serviceItems = [
//    { name: "Air Freight", link: "/service-air-freight" },
//     { name: "Sea Freight", link: "/service-sea-freight" },
//     { name: "Warehousing Solutions", link: "/service-warehousing-solutions" },
//     { name: "Express Delivery", link: "/service-express" },
   
//     { name: "Transport", link: "/service-transport" },
//   ];

//   return (
//     <nav className="bg-white shadow-lg sticky top-0 z-50">

//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Services", href: "/services", hasDropdown: true },
//     { name: "Resources", href: "/resources", hasDropdown: true },
//     { name: "Blog", href: "/blog" },
//   ];

//   const serviceItems = [

//     { name: "Air Freight", link: "/service-air-freight", icon: PlaneTakeoff },

//     { name: "Sea Freight", link: "/service-sea-freight", icon: Ship },
//     { name: "Warehousing", link: "/service-warehousing", icon: Package },
//     { name: "Express Delivery", link: "/service-express", icon: Truck },
//     { name: "Clearance", link: "/service-clearance", icon: Scale },
//     { name: "Transport", link: "/service-transport", icon: Truck },
//   ];

//   const resourceItems = [
//     { name: "Incoterms", link: "/resources/incoterms", icon: BookOpen, description: "Trade terms" },
//     { name: "Metric Conversion", link: "/resources/metric", icon: Scale, description: "Convert units" },
//     { name: "Container Specs", link: "/resources/container", icon: Package, description: "Sizes & types" },
//     { name: "Glossary", link: "/resources/glossary", icon: BookOpen, description: "Shipping terms" },
//     { name: "Currency", link: "/resources/currency", icon: Calculator, description: "Exchange rates" },
//     { name: "Sea Ports", link: "/resources/ports", icon: Anchor, description: "Global ports" },
//     { name: "Truck Types", link: "/resources/trucks", icon: Truck, description: "Vehicle info" },
//   ];



//   const toggleDropdown = (type) => {
//     if (type === "services") {
//       setServicesOpen(!servicesOpen);

//       setResourcesOpen(false);
//     } else {
//       setResourcesOpen(!resourcesOpen);

//       setServicesOpen(false);

//     }

//   };



//   return (

//     <nav className="bg-white shadow-lg sticky top-0 z-50">
      
//       {/* Top Bar */}
//       <div className="hidden lg:block text-white text-sm py-2" style={{ backgroundColor: colors.secondary }}>

//         <div className="max-w-7xl mx-auto px-4 flex justify-between">

//           <div className="flex space-x-6">

//             <div className="flex items-center gap-2">

//               <Phone className="w-4 h-4" />

//               +91 1800 123 4567

//             </div>

//             <div className="flex items-center gap-2">

//               <Clock className="w-4 h-4" />

//               24/7 Support

//             </div>

//             <div className="flex items-center gap-2">

//               <MapPin className="w-4 h-4" />

//               Pan India Network

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* Main Navbar */}
//       <div className="max-w-7xl mx-auto px-4">

//         <div className="flex justify-between items-center h-20">

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2">
//             <div className="p-2 rounded-lg" style={{ backgroundColor: colors.primary }}>
//               <Truck className="w-7 h-7 text-white" />
//             </div>
//             <h1 className="text-2xl font-bold" style={{ color: colors.secondary }}>
//               SHIKHAR
//             </h1>
//           </Link>

//           {/* Desktop Menu */}
//          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">

//             <img src={logoLarge} className="hidden md:block h-12" />
//             <img src={logoMobile} className="md:hidden h-10" />
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (

//               <div key={link.name} className="relative">

//                 {link.hasDropdown ? (
//                   <>

//                     <button
//                       onClick={() => setServicesOpen(!servicesOpen)}
//                       onClick={() =>
//                         link.name === "Services"
//                           ? toggleDropdown("services")
//                           : toggleDropdown("resources")
//                       }
//                       className="flex items-center gap-1 font-medium"
//                       style={{ color: colors.secondary }}

//                     >
//                       {link.name}
//                       <ChevronDown className={`w-4 h-4 transition ${servicesOpen ? 'rotate-180' : ''}`} />
//                     </button>

//                     {/* Dropdown */}
//                     {servicesOpen && (
//                       <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg mt-2 ">
//                         {serviceItems.map((item) => (
//                           <Link
//                             key={item.name}
//                             to={item.link}
//                             className="block px-4 py-2 text-gray-700 hover:text-white"
//                             onClick={() => setServicesOpen(false)}
//                             onMouseEnter={(e) => {
//                               e.target.style.backgroundColor = colors.primary;
//                               e.target.style.color = 'white';
//                             }}
//                             onMouseLeave={(e) => {
//                               e.target.style.backgroundColor = 'transparent';
//                               e.target.style.color = '#374151';
//                             }}
//                           >
//                             {item.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     to={link.href}
//                     className="font-medium hover:opacity-70"
//                     style={{ color: colors.secondary }}
//                   >
//                     {link.name}
//                   </Link>
//                 )}

//               </div>
//             ))}

//           </div>

//           {/* Buttons */}
//           <div className="hidden md:flex gap-3">
//             <button
//               className="text-white px-5 py-2 rounded-lg flex items-center gap-2"
//               style={{ backgroundColor: colors.primary }}
//             >
//               <Phone className="w-4 h-4" />
//               Contact
//             </button>
//             <button
//               className="px-5 py-2 rounded-lg"
//               style={{ border: `2px solid ${colors.primary}`, color: colors.primary }}
//             >
//               Get Quote
//             </button>
//           </div>

//           {/* Mobile Toggle */}
//           <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
//             {isOpen ? <X /> : <Menu />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden py-4 space-y-3">

//             {navLinks.map((link) => (
//               <div key={link.name}>

//                 {link.hasDropdown ? (
//                   <>
//                     <button
//                       onClick={() => setServicesOpen(!servicesOpen)}
//                       className="flex justify-between w-full px-3 py-2"
//                     >
//                       {link.name}
//                       <ChevronDown className={`${servicesOpen ? 'rotate-180' : ''}`} />
//                     </button>

//                     {servicesOpen && (
//                       <div className="pl-4">
//                       <ChevronDown className="w-4 h-4" />
//                     </button>

//                     {/* Services */}
//                     {link.name === "Services" && servicesOpen && (
//                       <div className="absolute w-64 bg-white shadow-lg mt-2 rounded">
//                         {serviceItems.map((item) => (

//                           <Link

//                             key={item.name}

//                             to={item.link}
//                             className="block py-2 text-gray-600"
//                             onClick={() => setIsOpen(false)}
//                           >
//                             {item.name}
//                             className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
//                             onClick={() => setServicesOpen(false)}
//                           >
//                             <item.icon className="w-5 h-5 text-red-500" />
//                             {item.name}
//                           </Link>

//                         ))}

//                       </div>

//                     )}



//                     {/* Resources */}
//                     {link.name === "Resources" && resourcesOpen && (
//                       <div className="absolute w-72 bg-white shadow-lg mt-2 rounded">
//                         {resourceItems.map((item) => (

//                           <Link

//                             key={item.name}

//                             to={item.link}
//                             className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
//                             onClick={() => setResourcesOpen(false)}
//                           >
//                             <item.icon className="w-5 h-5 text-red-500" />
//                             <div>
//                               <div>{item.name}</div>
//                               <div className="text-xs text-gray-500">
//                                 {item.description}
//                               </div>
//                             </div>

//                           </Link>

//                         ))}

//                       </div>

//                     )}

//                   </>

//                 ) : (
//                   <Link
//                     to={link.href}
//                     className="block px-3 py-2"
//                     onClick={() => setIsOpen(false)}
//                   >
//                   <Link to={link.href} style={{ color: colors.secondary }}>
//                     {link.name}

//                   </Link>

//                 )}

//               </div>

//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="hidden md:flex gap-3">
//             <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2">
//               <Phone className="w-4 h-4" />
//               Contact
//             </button>
//             <button className="border border-red-500 text-red-500 px-4 py-2 rounded">
//               Quote
//             </button>
//           </div>

//           {/* Mobile Toggle */}
//           <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X /> : <Menu />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden py-4 space-y-2">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.href}
//                 className="block px-3 py-2"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//         )}

//       </div>

//     </nav>

//   );

// };



// export default Navbar;


// components/Navbar.jsx

import React, { useState, useEffect } from "react";
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
  Home,
  Info,
  Mail,
  Briefcase,
  Newspaper,
  Database,
  ChevronRight
} from "lucide-react";

import logoLarge from "../../assets/Henko-logo-large.png";
import logoMobile from "../../assets/henko-logo-mobile.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const colors = {
    primary: "#f94735",
    secondary: "#0e1d34",
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setServicesOpen(false);
        setResourcesOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navLinks = [

    { name: "Home", href: "/" },

    { name: "About Us", href: "/about" },

    { name: "Services", href: "/services", hasDropdown: true },

    { name: "Resources", href: "/resources", hasDropdown: true },

    { name: "Blog", href: "/blog" },
    { name:"Career" , href:"/CareerBanner"},
     { name:"Contact" , href:"/contact"},

   

  ];

  const serviceItems = [
    { name: "Air Freight", link: "/service-air-freight", icon: PlaneTakeoff },
    { name: "Sea Freight", link: "/service-sea-freight", icon: Ship },
    { name: "Warehousing", link: "/service-warehousing-solutions", icon: Package },
    { name: "Express Delivery", link: "/service-express", icon: Truck },
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

  const toggleDropdown = (type, e) => {
    e.stopPropagation();
    if (type === "services") {
      setServicesOpen(!servicesOpen);
      setResourcesOpen(false);
    } else {
      setResourcesOpen(!resourcesOpen);
      setServicesOpen(false);
    }
  };

  const toggleMobileDropdown = (type) => {
    if (type === "services") {
      setMobileServicesOpen(!mobileServicesOpen);
      setMobileResourcesOpen(false);
    } else {
      setMobileResourcesOpen(!mobileResourcesOpen);
      setMobileServicesOpen(false);
    }
  };

  const closeAll = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileResourcesOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'} bg-white`}>
      {/* Top Bar - Hidden on mobile */}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img src={logoLarge} className="hidden md:block h-10 lg:h-12 w-auto" alt="Logo" />
            <img src={logoMobile} className="md:hidden h-8 w-auto" alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative dropdown-container">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={(e) => toggleDropdown(link.name === "Services" ? "services" : "resources", e)}
                      className="flex items-center gap-1 font-medium hover:text-[#f94735] transition-colors duration-200 py-2"
                      style={{ color: colors.secondary }}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${(link.name === "Services" ? servicesOpen : resourcesOpen) ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Services Dropdown */}
                    {link.name === "Services" && servicesOpen && (
                      <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                        <div className="py-2">
                          {serviceItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.link}
                              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150"
                              onClick={() => setServicesOpen(false)}
                            >
                              <item.icon className="w-5 h-5" style={{ color: colors.primary }} />
                              <span className="text-gray-700">{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Resources Dropdown */}
                    {link.name === "Resources" && resourcesOpen && (
                      <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                        <div className="py-2">
                          {resourceItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.link}
                              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150"
                              onClick={() => setResourcesOpen(false)}
                            >
                              <item.icon className="w-5 h-5" style={{ color: colors.primary }} />
                              <div>
                                <div className="text-gray-700 font-medium">{item.name}</div>
                                <div className="text-xs text-gray-400">{item.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="font-medium hover:text-[#f94735] transition-colors duration-200 py-2"
                    style={{ color: colors.secondary }}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3">
  <Link to="/LoginPage">
    <button
      className="px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
      style={{ border: `1px solid ${colors.primary}`, color: colors.primary }}
    >
     Login
    </button>
  </Link>
</div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: colors.secondary }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-2 border-t border-gray-100">
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
        </div>
      </div>

      {/* Add animation styles */}
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
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;