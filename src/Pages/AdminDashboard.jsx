// import React, { useState, useEffect } from "react";
// import {
//   FaHome, FaInfoCircle, FaTruck, FaEnvelope, FaBriefcase, 
//   FaBlog, FaDatabase, FaImage, FaSave, FaEdit, FaEye,
//   FaPlane, FaShip, FaWarehouse, FaRocket, FaRoad, FaPhone,
//   FaMapMarkerAlt, FaClock, FaUserTie, FaNewspaper, FaBook,
//   FaSignOutAlt, FaUpload, FaPlus, FaTimes, FaCheckCircle,
//   FaFileAlt, FaQuestionCircle, FaDollarSign, FaShieldAlt,
//   FaFileContract, FaChartLine
// } from "react-icons/fa";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AdminDashboard = () => {
//   const [activePage, setActivePage] = useState("home");
//   const [activeService, setActiveService] = useState("air-freight");
//   const [activeResource, setActiveResource] = useState("guide");
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [isSaving, setIsSaving] = useState(false);
  
//   const [formData, setFormData] = useState({});

//   const [websiteContent, setWebsiteContent] = useState({
//     home: {
//       hero: {
//         title: "Global Logistics Solutions",
//         subtitle: "Fast, Reliable & Secure Delivery Worldwide",
//         buttonText: "Get Quote",
//         buttonLink: "/contact",
//         bannerImage: ""
//       },
//       features: [
//         { title: "Fast Delivery", description: "24/7 Express Delivery" },
//         { title: "Global Reach", description: "Coverage in 150+ Countries" },
//         { title: "Secure Shipping", description: "100% Insurance Coverage" },
//         { title: "Real-time Tracking", description: "Track your shipment" }
//       ],
//       banners: [
//         { id: 1, image: "", title: "Special Offer", link: "/contact" },
//         { id: 2, image: "", title: "Seasonal Discount", link: "/contact" }
//       ]
//     },
//     about: {
//       heroBanner: "",
//       title: "About Our Company",
//       description: "We are leading logistics provider since 2010, committed to delivering excellence in supply chain management.",
//       mission: "To provide seamless logistics solutions worldwide with innovation and reliability.",
//       vision: "To become the world's most trusted and preferred logistics partner."
//     },
//     services: {
//       "air-freight": {
//         title: "Air Freight Services",
//         banner: "",
//         description: "Fast and secure air cargo services worldwide. Perfect for urgent deliveries.",
//         features: ["Express Delivery", "Custom Clearance", "Door to Door"],
//         pricing: "Starting from $5/kg",
//         deliveryTime: "2-5 Business Days"
//       },
//       "sea-freight": {
//         title: "Sea Freight Services",
//         banner: "",
//         description: "Cost-effective ocean freight solutions for bulk shipments.",
//         features: ["FCL & LCL", "Port to Port", "Container Tracking"],
//         pricing: "Starting from $500/container",
//         deliveryTime: "15-30 Business Days"
//       },
//       "warehousing": {
//         title: "Warehousing Services",
//         banner: "",
//         description: "Modern storage facilities with advanced security.",
//         features: ["Climate Controlled", "24/7 Security", "Inventory Management"],
//         pricing: "Contact for quote",
//         deliveryTime: "Flexible Storage"
//       },
//       "express-delivery": {
//         title: "Express Delivery",
//         banner: "",
//         description: "Same day and next day delivery services for urgent packages.",
//         features: ["Same Day Delivery", "Next Day Delivery", "Real-time Tracking"],
//         pricing: "Starting from $10",
//         deliveryTime: "Same Day / Next Day"
//       },
//       "transport": {
//         title: "Transport Services",
//         banner: "",
//         description: "Ground transportation across the country with modern vehicles.",
//         features: ["Full Truck Load", "Temperature Controlled"],
//         pricing: "Contact for quote",
//         deliveryTime: "2-7 Business Days"
//       }
//     },
//     contact: {
//       banner: "",
//       title: "Get In Touch",
//       subtitle: "We'd love to hear from you",
//       address: "123 Logistics Park, Mumbai, India - 400001",
//       phone: "+91 98765 43210",
//       email: "info@logistics.com",
//       workingHours: "Monday to Saturday: 9:00 AM - 9:00 PM"
//     },
//     career: {
//       banner: "",
//       title: "Join Our Team",
//       subtitle: "Build your career with us"
//     },
//     blog: {
//       banner: ""
//     },
//     resources: {
//       "guide": {
//         title: "Shipping Guide",
//         banner: "",
//         content: "Complete guide to international shipping."
//       },
//       "faq": {
//         title: "FAQ",
//         banner: "",
//         content: "Frequently asked questions about our services."
//       },
//       "tracking": {
//         title: "Tracking Information",
//         banner: "",
//         content: "Learn how to track your shipments."
//       },
//       "rates": {
//         title: "Shipping Rates",
//         banner: "",
//         content: "Calculate shipping costs."
//       },
//       "documents": {
//         title: "Required Documents",
//         banner: "",
//         content: "Documents needed for international shipping."
//       },
//       "insurance": {
//         title: "Insurance Policy",
//         banner: "",
//         content: "Insurance coverage details."
//       },
//       "terms": {
//         title: "Terms & Conditions",
//         banner: "",
//         content: "Terms and conditions for using our services."
//       }
//     }
//   });

//   useEffect(() => {
//     const saved = localStorage.getItem('websiteContent');
//     if (saved) {
//       setWebsiteContent(JSON.parse(saved));
//     }
//     initializeFormData();
//   }, []);

//   const initializeFormData = () => {
//     setFormData(JSON.parse(JSON.stringify(websiteContent)));
//   };

//   const handleSave = () => {
//     setIsSaving(true);
//     setTimeout(() => {
//       setWebsiteContent(JSON.parse(JSON.stringify(formData)));
//       localStorage.setItem('websiteContent', JSON.stringify(formData));
//       setIsSaving(false);
//       toast.success("All changes saved successfully!");
//     }, 500);
//   };

//   const updateFormData = (path, value) => {
//     const newData = { ...formData };
//     const keys = path.split('.');
//     let current = newData;
//     for (let i = 0; i < keys.length - 1; i++) {
//       current = current[keys[i]];
//     }
//     current[keys[keys.length - 1]] = value;
//     setFormData(newData);
//   };

//   const handleImageUpload = (e, path) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         updateFormData(path, reader.result);
//         toast.info("Image uploaded! Click Save to confirm.");
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const resourcePages = [
//     { id: "guide", name: "Shipping Guide" },
//     { id: "faq", name: "FAQ" },
//     { id: "tracking", name: "Tracking" },
//     { id: "rates", name: "Rates" },
//     { id: "documents", name: "Documents" },
//     { id: "insurance", name: "Insurance" },
//     { id: "terms", name: "Terms & Conditions" }
//   ];

//   const servicePages = [
//     { id: "air-freight", name: "Air Freight" },
//     { id: "sea-freight", name: "Sea Freight" },
//     { id: "warehousing", name: "Warehousing" },
//     { id: "express-delivery", name: "Express Delivery" },
//     { id: "transport", name: "Transport" }
//   ];

//   return (
//     <div className="flex min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
//       <ToastContainer position="top-right" autoClose={3000} />
      
//       {/* Sidebar */}
//       <aside className={`${sidebarCollapsed ? 'w-20' : 'w-72'} transition-all duration-300 flex flex-col`} style={{ backgroundColor: '#0e1d34' }}>
//         <div className="p-4 border-b flex justify-between items-center" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
//           {!sidebarCollapsed && <div className="text-xl font-bold text-white">Admin Panel</div>}
//           <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="text-white">
//             {sidebarCollapsed ? '→' : '←'}
//           </button>
//         </div>
        
//         <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
//           <NavButton text="Home" active={activePage === "home"} onClick={() => setActivePage("home")} collapsed={sidebarCollapsed} />
//           <NavButton text="About Us" active={activePage === "about"} onClick={() => setActivePage("about")} collapsed={sidebarCollapsed} />
          
//           {/* Services with Submenu */}
//           <div className="space-y-1">
//             <NavButton text="Services" active={activePage === "services"} onClick={() => setActivePage("services")} collapsed={sidebarCollapsed} />
//             {activePage === "services" && !sidebarCollapsed && (
//               <div className="ml-6 space-y-1 mt-2">
//                 {servicePages.map(service => (
//                   <button
//                     key={service.id}
//                     onClick={() => setActiveService(service.id)}
//                     className={`flex items-center w-full px-3 py-2 text-sm rounded-lg transition-all ${activeService === service.id ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
//                     style={activeService === service.id ? { backgroundColor: '#f94735' } : {}}
//                   >
//                     {service.name}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
          
//           <NavButton text="Contact" active={activePage === "contact"} onClick={() => setActivePage("contact")} collapsed={sidebarCollapsed} />
//           <NavButton text="Career" active={activePage === "career"} onClick={() => setActivePage("career")} collapsed={sidebarCollapsed} />
//           <NavButton text="Blog" active={activePage === "blog"} onClick={() => setActivePage("blog")} collapsed={sidebarCollapsed} />
          
//           {/* Resources with Submenu */}
//           <div className="space-y-1">
//             <NavButton text="Resources" active={activePage === "resources"} onClick={() => setActivePage("resources")} collapsed={sidebarCollapsed} />
//             {activePage === "resources" && !sidebarCollapsed && (
//               <div className="ml-6 space-y-1 mt-2">
//                 {resourcePages.map(resource => (
//                   <button
//                     key={resource.id}
//                     onClick={() => setActiveResource(resource.id)}
//                     className={`flex items-center w-full px-3 py-2 text-sm rounded-lg transition-all ${activeResource === resource.id ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
//                     style={activeResource === resource.id ? { backgroundColor: '#f94735' } : {}}
//                   >
//                     {resource.name}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
          
//           <div className="pt-4 mt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
//             <NavButton text="Logout" onClick={() => toast.info("Logged out!")} collapsed={sidebarCollapsed} danger />
//           </div>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-10">
//           <div>
//             <h1 className="text-2xl font-bold" style={{ color: '#0e1d34' }}>
//               Edit: {activePage === "services" ? `Services - ${servicePages.find(s => s.id === activeService)?.name}` : 
//                        activePage === "resources" ? `Resources - ${resourcePages.find(r => r.id === activeResource)?.name}` :
//                        activePage.charAt(0).toUpperCase() + activePage.slice(1)}
//             </h1>
//             <p className="text-sm text-gray-500 mt-1">Make changes and click SAVE button to update website</p>
//           </div>
//           <div className="flex gap-3">
//             <button onClick={() => window.open("/", "_blank")} className="px-4 py-2 rounded-lg text-white" style={{ backgroundColor: '#0e1d34' }}>
//               View Website
//             </button>
//             <button onClick={handleSave} disabled={isSaving} className="px-6 py-2 rounded-lg text-white" style={{ backgroundColor: '#f94735' }}>
//               {isSaving ? 'Saving...' : 'Save All Changes'}
//             </button>
//           </div>
//         </header>

//         <main className="flex-1 overflow-y-auto p-6">
//           {/* Home Page Editor */}
//           {activePage === "home" && (
//             <div className="space-y-6">
//               <div className="bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: '#0e1d34', borderColor: '#f94735' }}>
//                   Hero Banner Section
//                 </h2>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Banner Image</label>
//                     <div className="flex gap-4 items-start">
//                       {formData.home?.hero?.bannerImage && (
//                         <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden border">
//                           <img src={formData.home?.hero?.bannerImage} alt="Hero" className="w-full h-full object-cover" />
//                         </div>
//                       )}
//                       <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'home.hero.bannerImage')} className="text-sm" />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Hero Title</label>
//                     <input type="text" value={formData.home?.hero?.title || ''} onChange={(e) => updateFormData('home.hero.title', e.target.value)} className="w-full border rounded-lg px-3 py-2" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Hero Subtitle</label>
//                     <input type="text" value={formData.home?.hero?.subtitle || ''} onChange={(e) => updateFormData('home.hero.subtitle', e.target.value)} className="w-full border rounded-lg px-3 py-2" />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium mb-1">Button Text</label>
//                       <input type="text" value={formData.home?.hero?.buttonText || ''} onChange={(e) => updateFormData('home.hero.buttonText', e.target.value)} className="w-full border rounded-lg px-3 py-2" />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1">Button Link</label>
//                       <input type="text" value={formData.home?.hero?.buttonLink || ''} onChange={(e) => updateFormData('home.hero.buttonLink', e.target.value)} className="w-full border rounded-lg px-3 py-2" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: '#0e1d34', borderColor: '#f94735' }}>
//                   Features Section
//                 </h2>
//                 {formData.home?.features?.map((feature, index) => (
//                   <div key={index} className="border-b pb-4 mb-4 last:border-0">
//                     <div className="grid grid-cols-1 gap-4 mb-2">
//                       <div>
//                         <label className="block text-sm font-medium mb-1">Title</label>
//                         <input type="text" value={feature.title} onChange={(e) => {
//                           const newFeatures = [...formData.home.features];
//                           newFeatures[index].title = e.target.value;
//                           updateFormData('home.features', newFeatures);
//                         }} className="w-full border rounded-lg px-3 py-2" />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1">Description</label>
//                       <textarea value={feature.description} onChange={(e) => {
//                         const newFeatures = [...formData.home.features];
//                         newFeatures[index].description = e.target.value;
//                         updateFormData('home.features', newFeatures);
//                       }} className="w-full border rounded-lg px-3 py-2" rows="2" />
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: '#0e1d34', borderColor: '#f94735' }}>
//                   Promotional Banners
//                 </h2>
//                 {formData.home?.banners?.map((banner, index) => (
//                   <div key={banner.id} className="border-b pb-4 mb-4 last:border-0">
//                     <div className="flex gap-4">
//                       {banner.image && (
//                         <div className="w-32 h-24 bg-gray-100 rounded border overflow-hidden">
//                           <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
//                         </div>
//                       )}
//                       <div className="flex-1 space-y-2">
//                         <input type="text" value={banner.title} onChange={(e) => {
//                           const newBanners = [...formData.home.banners];
//                           newBanners[index].title = e.target.value;
//                           updateFormData('home.banners', newBanners);
//                         }} className="w-full border rounded-lg px-3 py-2" placeholder="Banner Title" />
//                         <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, `home.banners[${index}].image`)} className="text-sm" />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* About Page Editor */}
//           {activePage === "about" && (
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: '#0e1d34', borderColor: '#f94735' }}>
//                 About Page Content
//               </h2>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Banner Image</label>
//                   <div className="flex gap-4">
//                     {formData.about?.heroBanner && (
//                       <div className="w-48 h-32 bg-gray-100 rounded border overflow-hidden">
//                         <img src={formData.about?.heroBanner} alt="Banner" className="w-full h-full object-cover" />
//                       </div>
//                     )}
//                     <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'about.heroBanner')} />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Page Title</label>
//                   <input type="text" value={formData.about?.title || ''} onChange={(e) => updateFormData('about.title', e.target.value)} className="w-full border rounded-lg px-3 py-2" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Description</label>
//                   <textarea value={formData.about?.description || ''} onChange={(e) => updateFormData('about.description', e.target.value)} className="w-full border rounded-lg px-3 py-2" rows="5" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Mission</label>
//                   <textarea value={formData.about?.mission || ''} onChange={(e) => updateFormData('about.mission', e.target.value)} className="w-full border rounded-lg px-3 py-2" rows="3" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Vision</label>
//                   <textarea value={formData.about?.vision || ''} onChange={(e) => updateFormData('about.vision', e.target.value)} className="w-full border rounded-lg px-3 py-2" rows="3" />
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Services Page Editor */}
//           {activePage === "services" && (
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: '#0e1d34', borderColor: '#f94735' }}>
//                 Editing: {servicePages.find(s => s.id === activeService)?.name}
//               </h2>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Service Banner</label>
//                   <div className="flex gap-4">
//                     {formData.services?.[activeService]?.banner && (
//                       <div className="w-48 h-32 bg-gray-100 rounded border overflow-hidden">
//                         <img src={formData.services?.[activeService]?.banner} alt="Banner" className="w-full h-full object-cover" />
//                       </div>
//                     )}
//                     <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, `services.${activeService}.banner`)} />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Service Title</label>
//                   <input type="text" value={formData.services?.[activeService]?.title || ''} onChange={(e) => updateFormData(`services.${activeService}.title`, e.target.value)} className="w-full border rounded-lg px-3 py-2" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Description</label>
//                   <textarea value={formData.services?.[activeService]?.description || ''} onChange={(e) => updateFormData(`services.${activeService}.description`, e.target.value)} className="w-full border rounded-lg px-3 py-2" rows="5" />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Pricing</label>
//                     <input type="text" value={formData.services?.[activeService]?.pricing || ''} onChange={(e) => updateFormData(`services.${activeService}.pricing`, e.target.value)} className="w-full border rounded-lg px-3 py-2" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Delivery Time</label>
//                     <input type="text" value={formData.services?.[activeService]?.deliveryTime || ''} onChange={(e) => updateFormData(`services.${activeService}.deliveryTime`, e.target.value)} className="w-full border rounded-lg px-3 py-2" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Features (comma separated)</label>
//                   <input type="text" value={formData.services?.[activeService]?.features?.join(', ') || ''} onChange={(e) => updateFormData(`services.${activeService}.features`, e.target.value.split(',').map(f => f.trim()))} className="w-full border rounded-lg px-3 py-2" />
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Contact Page Editor */}
//           {activePage === "contact" && (
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: '#0e1d34', borderColor: '#f94735' }}>
//                 Contact Information
//               </h2>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Banner Image</label>
//                   <div className="flex gap-4">
//                     {formData.contact?.banner && (
//                       <div className="w-48 h-32 bg-gray-100 rounded border overflow-hidden">
//                         <img src={formData.contact?.banner} alt="Banner" className="w-full h-full object-cover" />
//                       </div>
//                     )}
//                     <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'contact.banner')} />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Page Title</label>
//                   <input type="text" value={formData.contact?.title || ''} onChange={(e) => updateFormData('contact.title', e.target.value)} className="w-full border rounded-lg px-3 py-2" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Subtitle</label>
//                   <input type="text" value={formData.contact?.subtitle || ''} onChange={(e) => updateFormData('contact.subtitle', e.target.value)} className="w-full border rounded-lg px-3 py-2" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Address</label>
//                   <textarea value={formData.contact?.address || ''} onChange={(e) => updateFormData('contact.address', e.target.value)} className="w-full border rounded-lg px-3 py-2" rows="3" />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Phone Number</label>
//                     <input type="text" value={formData.contact?.phone || ''} onChange={(e) => updateFormData('contact.phone', e.target.value)} className="w-full border rounded-lg px-3 py-2" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Email Address</label>
//                     <input type="email" value={formData.contact?.email || ''} onChange={(e) => updateFormData('contact.email', e.target.value)} className="w-full border rounded-lg px-3 py-2" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Working Hours</label>
//                   <input type="text" value={formData.contact?.workingHours || ''} onChange={(e) => updateFormData('contact.workingHours', e.target.value)} className="w-full border rounded-lg px-3 py-2" />
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Career Page Editor */}
//           {activePage === "career" && (
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: '#0e1d34', borderColor: '#f94735' }}>
//                 Career Page
//               </h2>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Banner Image</label>
//                   <div className="flex gap-4">
//                     {formData.career?.banner && (
//                       <div className="w-48 h-32 bg-gray-100 rounded border overflow-hidden">
//                         <img src={formData.career?.banner} alt="Banner" className="w-full h-full object-cover" />
//                       </div>
//                     )}
//                     <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'career.banner')} />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Page Title</label>
//                   <input type="text" value={formData.career?.title || ''} onChange={(e) => updateFormData('career.title', e.target.value)} className="w-full border rounded-lg px-3 py-2" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Subtitle</label>
//                   <input type="text" value={formData.career?.subtitle || ''} onChange={(e) => updateFormData('career.subtitle', e.target.value)} className="w-full border rounded-lg px-3 py-2" />
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Blog Page Editor */}
//           {activePage === "blog" && (
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: '#0e1d34', borderColor: '#f94735' }}>
//                 Blog Page
//               </h2>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Blog Banner Image</label>
//                 <div className="flex gap-4">
//                   {formData.blog?.banner && (
//                     <div className="w-48 h-32 bg-gray-100 rounded border overflow-hidden">
//                       <img src={formData.blog?.banner} alt="Banner" className="w-full h-full object-cover" />
//                     </div>
//                   )}
//                   <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'blog.banner')} />
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Resources Page Editor */}
//           {activePage === "resources" && (
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: '#0e1d34', borderColor: '#f94735' }}>
//                 Editing: {resourcePages.find(r => r.id === activeResource)?.name}
//               </h2>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Banner Image</label>
//                   <div className="flex gap-4">
//                     {formData.resources?.[activeResource]?.banner && (
//                       <div className="w-48 h-32 bg-gray-100 rounded border overflow-hidden">
//                         <img src={formData.resources?.[activeResource]?.banner} alt="Banner" className="w-full h-full object-cover" />
//                       </div>
//                     )}
//                     <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, `resources.${activeResource}.banner`)} />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Page Title</label>
//                   <input type="text" value={formData.resources?.[activeResource]?.title || ''} onChange={(e) => updateFormData(`resources.${activeResource}.title`, e.target.value)} className="w-full border rounded-lg px-3 py-2" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Content</label>
//                   <textarea value={formData.resources?.[activeResource]?.content || ''} onChange={(e) => updateFormData(`resources.${activeResource}.content`, e.target.value)} className="w-full border rounded-lg px-3 py-2" rows="12" />
//                 </div>
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// const NavButton = ({ text, active, onClick, collapsed, danger }) => (
//   <button
//     onClick={onClick}
//     className={`flex items-center w-full px-4 py-3 rounded-lg transition-all ${
//       active ? 'text-white' : danger ? 'hover:bg-red-600 text-gray-400 hover:text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
//     } ${collapsed ? 'justify-center' : ''}`}
//     style={active ? { backgroundColor: '#f94735' } : {}}
//   >
//     {!collapsed && <span>{text}</span>}
//     {collapsed && <span className="text-sm">{text?.charAt(0)}</span>}
//   </button>
// );

// export default AdminDashboard;

import React, { useState, useEffect } from "react";
import {
  FaHome, FaInfoCircle, FaTruck, FaEnvelope, FaBriefcase, 
  FaBlog, FaDatabase, FaSignOutAlt, FaEye
} from "react-icons/fa";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WebsiteHome from "../Components/WebsiteHome/WebsiteHome";
import WebsiteAbout from "../Components/WebsiteAbout/WebsiteAbout";
import WebsiteServices from "../Components/WebsiteServices/WebsiteServices";
import WebsiteContact from "../Components/WebsiteContact/WebsiteContact";
import WebsiteCareer from "../Components/WebsiteCareer/WebsiteCareer";
import WebsiteBlog from "../Components/WebsiteBlog/WebsiteBlog";
import WebsiteResources from "../Components/WebsiteResources/WebsiteResources";



const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("home");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
      <ToastContainer position="top-right" autoClose={3000} />
      
      {/* Sidebar */}
      <aside className={`${sidebarCollapsed ? 'w-20' : 'w-72'} transition-all duration-300 flex flex-col`} style={{ backgroundColor: '#0e1d34' }}>
        <div className="p-4 border-b flex justify-between items-center" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          {!sidebarCollapsed && <div className="text-xl font-bold text-white">Admin Panel</div>}
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="text-white">
            {sidebarCollapsed ? '→' : '←'}
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <NavButton text="Home" active={activePage === "home"} onClick={() => setActivePage("home")} collapsed={sidebarCollapsed} />
          <NavButton text="About Us" active={activePage === "about"} onClick={() => setActivePage("about")} collapsed={sidebarCollapsed} />
          <NavButton text="Services" active={activePage === "services"} onClick={() => setActivePage("services")} collapsed={sidebarCollapsed} />
          <NavButton text="Contact" active={activePage === "contact"} onClick={() => setActivePage("contact")} collapsed={sidebarCollapsed} />
          <NavButton text="Career" active={activePage === "career"} onClick={() => setActivePage("career")} collapsed={sidebarCollapsed} />
          <NavButton text="Blog" active={activePage === "blog"} onClick={() => setActivePage("blog")} collapsed={sidebarCollapsed} />
          <NavButton text="Resources" active={activePage === "resources"} onClick={() => setActivePage("resources")} collapsed={sidebarCollapsed} />
          
          <div className="pt-4 mt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <NavButton text="Logout" onClick={() => alert("Logged out!")} collapsed={sidebarCollapsed} danger />
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-10">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: '#0e1d34' }}>
              {activePage === "home" && "Home Page"}
              {activePage === "about" && "About Us"}
              {activePage === "services" && "Services"}
              {activePage === "contact" && "Contact"}
              {activePage === "career" && "Career"}
              {activePage === "blog" && "Blog"}
              {activePage === "resources" && "Resources"}
            </h1>
            <p className="text-sm text-gray-500 mt-1">Make changes and click SAVE button to update website</p>
          </div>
          <button onClick={() => window.open("/", "_blank")} className="px-4 py-2 rounded-lg flex items-center gap-2 text-white" style={{ backgroundColor: '#0e1d34' }}>
            <FaEye /> View Website
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {activePage === "home" && <WebsiteHome />}
          {activePage === "about" && <WebsiteAbout />}
          {activePage === "services" && <WebsiteServices />}
          {activePage === "contact" && <WebsiteContact />}
          {activePage === "career" && <WebsiteCareer />}
          {activePage === "blog" && <WebsiteBlog />}
          {activePage === "resources" && <WebsiteResources />}
        </main>
      </div>
    </div>
  );
};

const NavButton = ({ text, active, onClick, collapsed, danger }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full px-4 py-3 rounded-lg transition-all ${
      active ? 'text-white' : danger ? 'hover:bg-red-600 text-gray-400 hover:text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
    } ${collapsed ? 'justify-center' : ''}`}
    style={active ? { backgroundColor: '#f94735' } : {}}
  >
    {!collapsed && <span>{text}</span>}
    {collapsed && <span className="text-sm">{text?.charAt(0)}</span>}
  </button>
);

export default AdminDashboard;