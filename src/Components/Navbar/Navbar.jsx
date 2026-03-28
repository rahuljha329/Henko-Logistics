// // components/Navbar.jsx
// import React, { useState } from 'react';
// import { 
//   Menu, X, ChevronDown, MapPin, Clock, Phone, 
//   BookOpen, Scale, Package, Calculator, Anchor, 
//   Truck as TruckIcon, Plane, Ship 
// } from 'lucide-react';
// import { Link } from 'react-router-dom';

// // Import logos from assets folder
// import logoLarge from '../../assets/Henko-logo-large.png';
// import logoMobile from '../../assets/henko-logo-mobile.png';

// const Navbar = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   const [servicesOpen, setServicesOpen] = useState(false);

//   const [resourcesOpen, setResourcesOpen] = useState(false);
//   // Removed trackingOpen state

//   const colors = {
//     primary: '#f94735',
//     secondary: '#0e1d34',
//   };



//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About Us', href: '/about' },
//     { name: 'Services', href: '/services', hasDropdown: true },
    
//     { name: 'Resources', href: '/resources', hasDropdown: true },
//     { name: 'Blog', href: '/blog' },
//   ];

  
//   const serviceItems = [

//     { name: "Air Freight", link: "/service-air-freight", icon: PlaneTakeoff },

//     { name: "Sea Freight", link: "/service-sea-freight", icon: Ship },
//     { name: "Warehousing Solutions", link: "/service-warehousing", icon: Package },
//     { name: "Express Delivery", link: "/service-express", icon: TruckIcon },
//     { name: "Clearance", link: "/service-clearance", icon: Scale },
//     { name: "Transport", link: "/service-transport", icon: TruckIcon },
//   ];

  
//   const trackingItems = [
//     { name: "Air Freight Tracking", link: "/tracking/air-freight", icon: Plane },
//     { name: "Sea Freight Tracking", link: "/tracking/sea-freight", icon: Ship },
//   ];

  
//   const resourceItems = [
//     { name: "Incoterms", link: "/resources/incoterms", icon: BookOpen, description: "International trade terms" },
//     { name: "Metric Conversion", link: "/resources/metric-conversion", icon: Scale, description: "Convert units instantly" },
//     { name: "Container Specifications", link: "/Resources/ContainerSpecifications", icon: Package, description: "Container types & sizes" },
//     { name: "Shipping Glossary", link: "/resources/shipping-glossary", icon: BookOpen, description: "Shipping terms explained" },
//     { name: "Currency Converter", link: "/resources/currency-converter", icon: Calculator, description: "Live exchange rates" },
//     { name: "World Sea Ports", link: "/resources/world-ports", icon: Anchor, description: "Global port directory" },
//     { name: "Truck Types", link: "/resources/truck-types", icon: TruckIcon, description: "Vehicle specifications" },
//   ];



//   const toggleDropdown = (dropdownName) => {
//     if (dropdownName === 'services') {
//       setServicesOpen(!servicesOpen);

//       setResourcesOpen(false);
//     } else if (dropdownName === 'tracking') {
//       // Tracking now directly links to page, no dropdown
//       // Removed tracking open state
//     } else if (dropdownName === 'resources') {
//       setResourcesOpen(!resourcesOpen);

//       setServicesOpen(false);

//     }

//   };



//   return (

//     <nav className="bg-white shadow-lg sticky top-0 z-50">
     
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

     
//       <div className="max-w-7xl mx-auto px-4">

//         <div className="flex justify-between items-center h-20">
//           {/* Logo with imported images */}
//           <Link to="/" className="flex items-center gap-2">
//             {/* Large Display Logo */}
//             <img 
//               src={logoLarge} 
//               alt="Shikhar Logistics" 
//               className="hidden md:block h-12 w-auto object-contain"
//             />
//             {/* Mobile Display Logo */}
//             <img 
//               src={logoMobile} 
//               alt="Shikhar Logistics" 
//               className="block md:hidden h-10 w-auto object-contain"
//             />
//           </Link>

//           {/* Desktop Menu - Increased gap between logo and menu items */}
//           <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
//             {navLinks.map((link) => (

//               <div key={link.name} className="relative">
//                 {link.hasDropdown && link.name === 'Tracking' ? (
//                   // Tracking - Direct link without dropdown
//                   <Link
//                     to="/tracking"
//                     className="font-medium hover:opacity-70 transition-all"
//                     style={{ color: colors.secondary }}
//                   >
//                     {link.name}
//                   </Link>
//                 ) : link.hasDropdown ? (
//                   // Services and Resources with dropdown
//                   <>
//                     <button
//                       onClick={() => {
//                         if (link.name === 'Services') toggleDropdown('services');
//                         else if (link.name === 'Resources') toggleDropdown('resources');
//                       }}
//                       className="flex items-center gap-1 font-medium hover:opacity-70 transition-all"
//                       style={{ color: colors.secondary }}

//                     >

//                       {link.name}
//                       <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
//                         (link.name === 'Services' && servicesOpen) || 
//                         (link.name === 'Resources' && resourcesOpen) 
//                           ? 'rotate-180' 
//                           : ''
//                       }`} />
//                     </button>

//                     {/* Services Dropdown */}
//                     {link.name === 'Services' && servicesOpen && (
//                       <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-lg mt-2 overflow-hidden animate-fadeIn">
//                         <div className="py-2">
//                           {serviceItems.map((item) => (
//                             <Link
//                               key={item.name}
//                               to={item.link}
//                               className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white transition-all duration-200"
//                               onClick={() => setServicesOpen(false)}
//                               onMouseEnter={(e) => {
//                                 e.currentTarget.style.backgroundColor = colors.primary;
//                                 e.currentTarget.style.color = 'white';
//                               }}
//                               onMouseLeave={(e) => {
//                                 e.currentTarget.style.backgroundColor = 'transparent';
//                                 e.currentTarget.style.color = '#374151';
//                               }}
//                             >
//                               <item.icon className="w-5 h-5" />
//                               <div className="font-medium">{item.name}</div>
//                             </Link>
//                           ))}
//                         </div>
//                       </div>

//                     )}



//                     {/* Resources Dropdown */}
//                     {link.name === 'Resources' && resourcesOpen && (
//                       <div className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-lg mt-2 overflow-hidden animate-fadeIn">
//                         <div className="py-2 max-h-96 overflow-y-auto">
//                           {resourceItems.map((item) => (
//                             <Link
//                               key={item.name}
//                               to={item.link}
//                               className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white transition-all duration-200"
//                               onClick={() => setResourcesOpen(false)}
//                               onMouseEnter={(e) => {
//                                 e.currentTarget.style.backgroundColor = colors.primary;
//                                 e.currentTarget.style.color = 'white';
//                               }}
//                               onMouseLeave={(e) => {
//                                 e.currentTarget.style.backgroundColor = 'transparent';
//                                 e.currentTarget.style.color = '#374151';
//                               }}
//                             >
//                               <item.icon className="w-5 h-5 flex-shrink-0" />
//                               <div>
//                                 <div className="font-medium">{item.name}</div>
//                                 <div className="text-xs opacity-75 group-hover:text-white">
//                                   {item.description}
//                                 </div>
//                               </div>

//                             </div>

//                           </Link>

//                         ))}

//                       </div>

//                     )}

//                   </>

//                 ) : (

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
//             <button
//               className="px-5 py-2 rounded-lg transition-all hover:bg-opacity-10"
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

//           <div className="md:hidden py-4 space-y-2">

//             {navLinks.map((link) => (
//               <div key={link.name}>
//                 {link.hasDropdown && link.name === 'Tracking' ? (
//                   // Tracking - Direct link on mobile
//                   <Link
//                     to="/tracking"
//                     className="block px-3 py-2 font-medium rounded-lg hover:bg-gray-50"
//                     style={{ color: colors.secondary }}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {link.name}
//                   </Link>
//                 ) : link.hasDropdown ? (
//                   <>
//                     <button
//                       onClick={() => {
//                         if (link.name === 'Services') toggleDropdown('services');
//                         else if (link.name === 'Resources') toggleDropdown('resources');
//                       }}
//                       className="flex justify-between items-center w-full px-3 py-2 font-medium rounded-lg"
//                       style={{ color: colors.secondary }}
//                     >
//                       {link.name}
//                       <ChevronDown className={`w-4 h-4 transition-transform ${
//                         (link.name === 'Services' && servicesOpen) || 
//                         (link.name === 'Resources' && resourcesOpen) 
//                           ? 'rotate-180' 
//                           : ''
//                       }`} />
//                     </button>

//                     {/* Mobile Services Dropdown */}
//                     {link.name === 'Services' && servicesOpen && (
//                       <div className="pl-4 mt-2 space-y-1">
//                         {serviceItems.map((item) => (
//                           <Link
//                             key={item.name}
//                             to={item.link}
//                             className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all"
//                             onClick={() => {
//                               setIsOpen(false);
//                               setServicesOpen(false);
//                             }}
//                           >
//                             <item.icon className="w-4 h-4" style={{ color: colors.primary }} />
//                             <span style={{ color: colors.secondary }}>{item.name}</span>
//                           </Link>
//                         ))}
//                       </div>
//                     )}

//                     {/* Mobile Resources Dropdown */}
//                     {link.name === 'Resources' && resourcesOpen && (
//                       <div className="pl-4 mt-2 space-y-1">
//                         {resourceItems.map((item) => (
//                           <Link
//                             key={item.name}
//                             to={item.link}
//                             className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all"
//                             onClick={() => {
//                               setIsOpen(false);
//                               setResourcesOpen(false);
//                             }}
//                           >
//                             <item.icon className="w-4 h-4" style={{ color: colors.primary }} />
//                             <div>
//                               <div className="text-sm" style={{ color: colors.secondary }}>{item.name}</div>
//                               <div className="text-xs text-gray-500">{item.description}</div>
//                             </div>
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     to={link.href}
//                     className="block px-3 py-2 font-medium rounded-lg hover:bg-gray-50"
//                     style={{ color: colors.secondary }}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {link.name}
//                   </Link>
//                 )}
//               </div>
//             ))}

//             {/* Mobile Buttons */}
//             <div className="flex flex-col gap-3 pt-4 px-3">
//               <button
//                 className="text-white px-5 py-2 rounded-lg flex items-center justify-center gap-2"
//                 style={{ backgroundColor: colors.primary }}
//               >
//                 <Phone className="w-4 h-4" />
//                 Contact
//               </button>
//               <button
//                 className="px-5 py-2 rounded-lg"
//                 style={{ border: `2px solid ${colors.primary}`, color: colors.primary }}
//               >
//                 Get Quote
//               </button>
//             </div>
//           </div>

//         )}

//       </div>

//     </nav>

//   );

// };



// export default Navbar;

// components/Navbar.jsx
import React, { useState } from 'react';
import { 
  Menu, X, ChevronDown, MapPin, Clock, Phone, 
  BookOpen, Scale, Package, Calculator, Anchor, 
  Truck as TruckIcon, Plane, Ship 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import logos from assets folder
import logoLarge from '../../assets/Henko-logo-large.png';
import logoMobile from '../../assets/henko-logo-mobile.png';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const colors = {
    primary: '#f94735',
    secondary: '#0e1d34',
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Resources', href: '/resources', hasDropdown: true },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }, // Added Contact as menu item
  ];

  const serviceItems = [
    { name: "Air Freight", link: "/service-air-freight", icon: Plane },
    { name: "Sea Freight", link: "/service-sea-freight", icon: Ship },
    { name: "Warehousing Solutions", link: "/service-warehousing-solutions", icon: Package },
    { name: "Express Delivery", link: "/service-express", icon: TruckIcon },
    { name: "Transport", link: "/service-transport", icon: TruckIcon },
  ];

  const resourceItems = [
    { name: "Incoterms", link: "/resources/incoterms", icon: BookOpen, description: "International trade terms" },
    { name: "Metric Conversion", link: "/resources/metric-conversion", icon: Scale, description: "Convert units instantly" },
    { name: "Container Specifications", link: "/Resources/ContainerSpecifications", icon: Package, description: "Container types & sizes" },
    { name: "Shipping Glossary", link: "/resources/shipping-glossary", icon: BookOpen, description: "Shipping terms explained" },
    { name: "Currency Converter", link: "/resources/currency-converter", icon: Calculator, description: "Live exchange rates" },
    { name: "World Sea Ports", link: "/resources/world-ports", icon: Anchor, description: "Global port directory" },
    { name: "Truck Types", link: "/resources/truck-types", icon: TruckIcon, description: "Vehicle specifications" },
  ];

  const toggleDropdown = (dropdownName) => {
    if (dropdownName === 'services') {
      setServicesOpen(!servicesOpen);
      setResourcesOpen(false);
    } else if (dropdownName === 'resources') {
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

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logoLarge} 
              alt="Shikhar Logistics" 
              className="hidden md:block h-12 w-auto object-contain"
            />
            <img 
              src={logoMobile} 
              alt="Shikhar Logistics" 
              className="block md:hidden h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => {
                        if (link.name === 'Services') toggleDropdown('services');
                        else if (link.name === 'Resources') toggleDropdown('resources');
                      }}
                      className="flex items-center gap-1 font-medium hover:opacity-70 transition-all"
                      style={{ color: colors.secondary }}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        (link.name === 'Services' && servicesOpen) || 
                        (link.name === 'Resources' && resourcesOpen) 
                          ? 'rotate-180' 
                          : ''
                      }`} />
                    </button>

                    {/* Services Dropdown */}
                    {link.name === 'Services' && servicesOpen && (
                      <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-lg mt-2 overflow-hidden animate-fadeIn">
                        <div className="py-2">
                          {serviceItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.link}
                              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white transition-all duration-200"
                              onClick={() => setServicesOpen(false)}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = colors.primary;
                                e.currentTarget.style.color = 'white';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = '#374151';
                              }}
                            >
                              <item.icon className="w-5 h-5" />
                              <div className="font-medium">{item.name}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Resources Dropdown */}
                    {link.name === 'Resources' && resourcesOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-lg mt-2 overflow-hidden animate-fadeIn">
                        <div className="py-2 max-h-96 overflow-y-auto">
                          {resourceItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.link}
                              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white transition-all duration-200"
                              onClick={() => setResourcesOpen(false)}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = colors.primary;
                                e.currentTarget.style.color = 'white';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = '#374151';
                              }}
                            >
                              <item.icon className="w-5 h-5 flex-shrink-0" />
                              <div>
                                <div className="font-medium">{item.name}</div>
                                <div className="text-xs opacity-75">{item.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
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

          {/* Buttons - Removed Contact button, only Get Quote remains */}
          <div className="hidden md:flex gap-3">
            <button
              className="px-5 py-2 rounded-lg transition-all hover:bg-opacity-10"
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
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => {
                        if (link.name === 'Services') toggleDropdown('services');
                        else if (link.name === 'Resources') toggleDropdown('resources');
                      }}
                      className="flex justify-between items-center w-full px-3 py-2 font-medium rounded-lg"
                      style={{ color: colors.secondary }}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        (link.name === 'Services' && servicesOpen) || 
                        (link.name === 'Resources' && resourcesOpen) 
                          ? 'rotate-180' 
                          : ''
                      }`} />
                    </button>

                    {/* Mobile Services Dropdown */}
                    {link.name === 'Services' && servicesOpen && (
                      <div className="pl-4 mt-2 space-y-1">
                        {serviceItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.link}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all"
                            onClick={() => {
                              setIsOpen(false);
                              setServicesOpen(false);
                            }}
                          >
                            <item.icon className="w-4 h-4" style={{ color: colors.primary }} />
                            <span style={{ color: colors.secondary }}>{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Mobile Resources Dropdown */}
                    {link.name === 'Resources' && resourcesOpen && (
                      <div className="pl-4 mt-2 space-y-1">
                        {resourceItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.link}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all"
                            onClick={() => {
                              setIsOpen(false);
                              setResourcesOpen(false);
                            }}
                          >
                            <item.icon className="w-4 h-4" style={{ color: colors.primary }} />
                            <div>
                              <div className="text-sm" style={{ color: colors.secondary }}>{item.name}</div>
                              <div className="text-xs text-gray-500">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="block px-3 py-2 font-medium rounded-lg hover:bg-gray-50"
                    style={{ color: colors.secondary }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Buttons - Only Get Quote button remains */}
            <div className="flex flex-col gap-3 pt-4 px-3">
              <button
                className="px-5 py-2 rounded-lg"
                style={{ border: `2px solid ${colors.primary}`, color: colors.primary }}
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;