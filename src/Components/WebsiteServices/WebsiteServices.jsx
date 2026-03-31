import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';

const WebsiteServices = () => {
  const [activeService, setActiveService] = useState("air-freight");
  const [formData, setFormData] = useState({
    "air-freight": {
      title: "Air Freight Services",
      banner: "",
      description: "Fast and secure air cargo services worldwide.",
      pricing: "Starting from $5/kg",
      deliveryTime: "2-5 Business Days",
      features: ["Express Delivery", "Custom Clearance", "Door to Door"]
    },
    "sea-freight": {
      title: "Sea Freight Services",
      banner: "",
      description: "Cost-effective ocean freight solutions.",
      pricing: "Starting from $500/container",
      deliveryTime: "15-30 Business Days",
      features: ["FCL & LCL", "Port to Port", "Container Tracking"]
    },
    "warehousing": {
      title: "Warehousing Services",
      banner: "",
      description: "Modern storage facilities with advanced security.",
      pricing: "Contact for quote",
      deliveryTime: "Flexible Storage",
      features: ["Climate Controlled", "24/7 Security", "Inventory Management"]
    },
    "express-delivery": {
      title: "Express Delivery",
      banner: "",
      description: "Same day and next day delivery services.",
      pricing: "Starting from $10",
      deliveryTime: "Same Day / Next Day",
      features: ["Same Day Delivery", "Next Day Delivery", "Real-time Tracking"]
    },
    "transport": {
      title: "Transport Services",
      banner: "",
      description: "Ground transportation across the country.",
      pricing: "Contact for quote",
      deliveryTime: "2-7 Business Days",
      features: ["Full Truck Load", "Temperature Controlled"]
    }
  });

  const [isSaving, setIsSaving] = useState(false);

  const servicePages = [
    { id: "air-freight", name: "Air Freight" },
    { id: "sea-freight", name: "Sea Freight" },
    { id: "warehousing", name: "Warehousing" },
    { id: "express-delivery", name: "Express Delivery" },
    { id: "transport", name: "Transport" }
  ];

  useEffect(() => {
    const saved = localStorage.getItem('websiteServices');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      localStorage.setItem('websiteServices', JSON.stringify(formData));
      setIsSaving(false);
      toast.success("Services saved successfully!");
    }, 500);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          [activeService]: { ...formData[activeService], banner: reader.result }
        });
        toast.info("Image uploaded! Click Save to confirm.");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 flex-wrap">
          {servicePages.map(service => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`px-4 py-2 rounded-lg transition-all ${activeService === service.id ? 'text-white' : 'bg-gray-200 text-gray-700'}`}
              style={activeService === service.id ? { backgroundColor: '#f94735' } : {}}
            >
              {service.name}
            </button>
          ))}
        </div>
        <button onClick={handleSave} disabled={isSaving} className="px-6 py-2 rounded-lg text-white" style={{ backgroundColor: '#f94735' }}>
          {isSaving ? 'Saving...' : 'Save Services'}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: '#0e1d34', borderColor: '#f94735' }}>
          Editing: {servicePages.find(s => s.id === activeService)?.name}
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Service Banner</label>
            <div className="flex gap-4">
              {formData[activeService]?.banner && (
                <div className="w-48 h-32 bg-gray-100 rounded border overflow-hidden">
                  <img src={formData[activeService]?.banner} alt="Banner" className="w-full h-full object-cover" />
                </div>
              )}
              <input type="file" accept="image/*" onChange={handleImageUpload} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Service Title</label>
            <input type="text" value={formData[activeService]?.title || ''} onChange={(e) => setFormData({ ...formData, [activeService]: { ...formData[activeService], title: e.target.value } })} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea value={formData[activeService]?.description || ''} onChange={(e) => setFormData({ ...formData, [activeService]: { ...formData[activeService], description: e.target.value } })} className="w-full border rounded-lg px-3 py-2" rows="5" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Pricing</label>
              <input type="text" value={formData[activeService]?.pricing || ''} onChange={(e) => setFormData({ ...formData, [activeService]: { ...formData[activeService], pricing: e.target.value } })} className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Delivery Time</label>
              <input type="text" value={formData[activeService]?.deliveryTime || ''} onChange={(e) => setFormData({ ...formData, [activeService]: { ...formData[activeService], deliveryTime: e.target.value } })} className="w-full border rounded-lg px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Features (comma separated)</label>
            <input type="text" value={formData[activeService]?.features?.join(', ') || ''} onChange={(e) => setFormData({ ...formData, [activeService]: { ...formData[activeService], features: e.target.value.split(',').map(f => f.trim()) } })} className="w-full border rounded-lg px-3 py-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteServices;