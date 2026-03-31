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

// Logos
import largeLogo from "../../assets/Henko-logo-large.png";
import mobileLogo from "../../assets/henko-logo-mobile.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Tracking', href: '/tracking' },
    { name: 'Contact', href: '/contact' },
     { name: 'Blog', href: '/blog' }
  ];

  const services = [
    { name: 'Freight Forwarding', href: '/services/freight-forwarding' },
    { name: 'Warehousing', href: '/services/warehousing' },
    { name: 'Supply Chain Solutions', href: '/services/supply-chain' },
    { name: 'Last Mile Delivery', href: '/services/last-mile' },
    { name: 'Customs Clearance', href: '/services/customs-clearance' },
    { name: 'International Air Freight', href: '/services/air-freight' },
    { name: 'International Sea Freight', href: '/services/sea-freight' },
  ];

  const socialLinks = [




    
    { icon: FaFacebookF, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaLinkedinIn, href: '#' },
    { icon: FaInstagram, href: '#' },
  ];

  return (
    <footer className="bg-[#1c1c1c] text-gray-300 relative overflow-hidden">
      {/* Background Globe Image */}
      <div className="absolute inset-0 opacity-10 bg-[url('/world-map.png')] bg-no-repeat bg-right bg-contain"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        
        {/* Top Section - 4 Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* COLUMN 1 - ABOUT */}
          <div>
            <div className="mb-4">
              <img src={largeLogo} alt="logo" className="hidden md:block w-52" />
              <img src={mobileLogo} alt="logo" className="block md:hidden w-32" />
            </div>

            <p className="text-sm leading-6">
              Henko Logistics has been established in 2018 having corporate office in Noida India. 
              We are specialised in handling of various activities of Exim Solutions. We offer 
              International sea freight, International air freight, Customs Clearance, Warehousing, 
              Transportation. Our Shipping Services Solutions are intended according to Customer 
              need and demand.
            </p>

            <div className="flex gap-3 mt-4">
              {socialLinks.map((item, i) => (
                <a key={i} href={item.href} className="hover:text-orange-500 transition-colors">
                  <item.icon />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2 - QUICK LINKS */}
          <div>
            <h3 className="text-white mb-4 font-semibold tracking-wide">QUICK LINKS</h3>
            {quickLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                className="flex items-center gap-1 hover:text-orange-500 mb-2 transition-colors"
              >
                <ChevronRight size={14} /> {link.name}
              </a>
            ))}
          </div>

          {/* COLUMN 3 - SERVICES */}
          <div>
            <h3 className="text-white mb-4 font-semibold tracking-wide">SERVICES</h3>
            <div className="space-y-2">
              {services.slice(0, 4).map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  className="flex items-center gap-1 hover:text-orange-500 transition-colors"
                >
                  <ChevronRight size={14} /> {item.name}
                </a>
              ))}
            </div>
            <div className="mt-2 space-y-2">
              {services.slice(4).map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  className="flex items-center gap-1 hover:text-orange-500 transition-colors"
                >
                  <ChevronRight size={14} /> {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 4 - REGISTERED OFFICE & CONTACT */}
          <div>
            <h3 className="text-white mb-4 font-semibold tracking-wide">REGISTERED OFFICE</h3>
            
            <p className="text-sm mb-3 leading-6">
              <strong>Registered Office:-</strong><br />
              Office No. 1010, Supernova Tower – Astralis, Sector – 94,<br />
              Opp- Okhla Bird Century Metro,<br />
              Noida, U.P, India-201301
            </p>

            <div className="flex items-center gap-2 mb-2">
              <Phone size={16} className="text-orange-500" />
              <span className="text-sm">+91-0120-4280999</span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <Mail size={16} className="text-orange-500" />
              <span className="text-sm">info@henkologistics.com</span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <Clock size={16} className="text-orange-500" />
              <span className="text-sm">Mon-Fri: 9AM - 6PM</span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <MapPin size={16} className="text-orange-500" />
              <span className="text-sm">Noida, India</span>
            </div>

            <p className="text-sm mb-3 leading-6 mt-4">
              <strong>Branch Office :-</strong><br />
              Office No.522, 5th Floor, 89- Hemkunt Chamber,<br />
              Nehru Place, New Delhi -110019
            </p>

            <p className="text-sm mb-3 leading-6">
              <strong>China Co-ordination Office:-</strong><br />
              Guangzhou. A 01, 23rd Floor, Pacific Insurance Tower,<br />
              559, Tianhe North street, Tianhe, Guangzhou
            </p>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-orange-500" />
              <span className="text-sm">+86-020-2881-3950</span>
            </div>
          </div>
        </div>

        {/* SUBSCRIBE SECTION - Spanning across first 3 columns, aligned with contact info */}
        <div className="grid md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-gray-700">
          {/* Subscribe - Takes first 3 columns */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h3 className="text-white mb-3 font-semibold tracking-wide">SUBSCRIBE</h3>
                <p className="text-xs leading-5">
                  Don't miss Henko Logistics latest news and events. Subscribe to our newsletter channel and be informed
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="flex w-full">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-gray-800 outline-none text-sm rounded-l focus:ring-1 focus:ring-orange-500"
                  />
                  <button className="bg-orange-500 px-6 py-3 text-white text-sm font-semibold rounded-r hover:bg-orange-600 transition-colors flex items-center gap-2 whitespace-nowrap">
                    SUBSCRIBE <Send size={14} />
                  </button>
                </div>
                <div className="mt-3">
                  <p className="text-xs text-gray-400">Total views : 62099</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Empty div to maintain 4th column alignment with contact info */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm mt-8 pt-6 border-t border-gray-700">
          © {currentYear} HENKO LOGISTICS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// // Logos
// import largeLogo from "../../assets/Henko-logo-large.png";
// import mobileLogo from "../../assets/henko-logo-mobile.png";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-[#1c1c1c] text-gray-300 relative overflow-hidden">

//       {/* Background Globe Image */}
//       <div className="absolute inset-0 opacity-10 bg-[url('/world-map.png')] bg-no-repeat bg-right bg-contain"></div>

//       <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

//           {/* LEFT - ABOUT */}
//           <div>
//             <div className="mb-4">
//               <img src={largeLogo} alt="logo" className="hidden md:block w-52" />
//               <img src={mobileLogo} alt="logo" className="block md:hidden w-32" />
//             </div>

//             <p className="text-sm leading-6">
//               Henko Logistics has been established in 2018 having corporate office in Noida India. We are specialised in handling of various activities of Exim Solutions. We offer International sea freight, International air freight, Customs Clearance, Warehousing, Transportation. Our Shipping Services Solutions are intended according to Customer need and demand.
//             </p>

//             <div className="flex gap-3 mt-4">
//               {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
//                 <a key={i} href="#" className="hover:text-orange-500">
//                   <Icon />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* MIDDLE - REGISTERED OFFICE */}
//           <div>
//             <h3 className="text-white mb-4 font-semibold tracking-wide">REGISTERED OFFICE</h3>

//             <p className="text-sm mb-3 leading-6">
//               <strong>Registered Office:-</strong><br />
//               Office No. 1010, Supernova Tower – Astralis, Sector – 94,<br />
//               Opp- Okhla Bird Century Metro,<br />
//               Noida, U.P, India-201301
//             </p>

//             <p className="text-sm mb-3">
//               Phone No. +91-0120-4280999
//             </p>

//             <p className="text-sm mb-3 leading-6">
//               <strong>Branch Office :-</strong><br />
//               Office No.522, 5th Floor, 89- Hemkunt Chamber,
//               Nehru Place, New Delhi -110019
//             </p>

//             <p className="text-sm mb-3 leading-6">
//               <strong>China Co-ordination Office:-</strong><br />
//               Guangzhou. A 01, 23rd Floor, Pacific Insurance Tower,
//               559, Tianhe North street, Tianhe, Guangzhou
//             </p>

//             <p className="text-sm">
//               Phone: +86-020-2881-3950
//             </p>
//           </div>

//           {/* RIGHT - SUBSCRIBE */}
//           <div>
//             <h3 className="text-white mb-4 font-semibold tracking-wide">SUBSCRIBE</h3>

//             <p className="text-sm mb-4 leading-6">
//               Don’t miss Henko Logistics latest news and events. Subscribe to our newsletter channel and be informed
//             </p>

//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 className="flex-1 px-3 py-3 bg-gray-800 outline-none text-sm"
//               />
//               <button className="bg-orange-500 px-5 py-3 text-white text-sm font-semibold">
//                 SUBSCRIBE
//               </button>
//             </div>

//             {/* Visitor Counter (static UI) */}
//             <div className="mt-6">
//               <p className="text-xs text-gray-400">Total views : 62099</p>
//             </div>
//           </div>

//         </div>

//         {/* Bottom */}
//         <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
//           © {currentYear} HENKO LOGISTICS. All rights reserved.
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
