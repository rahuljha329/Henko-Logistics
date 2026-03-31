import React, { useState, useEffect } from "react";
import { FaImage, FaSave, FaTruck } from "react-icons/fa";
import { toast } from 'react-toastify';

const WebsiteHome = () => {
  const [formData, setFormData] = useState({
    hero: {
      title: "Global Logistics Solutions",
      subtitle: "Fast, Reliable & Secure Delivery Worldwide",
      buttonText: "Get Quote",
      buttonLink: "/contact",
      bannerImage: ""
    },
    features: [
      { title: "Fast Delivery", description: "24/7 Express Delivery" },
      { title: "Global Reach", description: "Coverage in 150+ Countries" },
      { title: "Secure Shipping", description: "100% Insurance Coverage" },
      { title: "Real-time Tracking", description: "Track your shipment" }
    ],
    banners: [
      { id: 1, image: "", title: "Special Offer", link: "/contact" },
      { id: 2, image: "", title: "Seasonal Discount", link: "/contact" }
    ]
  });

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('websiteHome');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      localStorage.setItem('websiteHome', JSON.stringify(formData));
      setIsSaving(false);
      toast.success("Home page saved successfully!");
    }, 500);
  };

  const updateFormData = (path, value) => {
    const newData = { ...formData };
    const keys = path.split('.');
    let current = newData;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setFormData(newData);
  };

  const handleImageUpload = (e, path) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateFormData(path, reader.result);
        toast.info("Image uploaded! Click Save to confirm.");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end mb-4">
        <button onClick={handleSave} disabled={isSaving} className="px-6 py-2 rounded-lg text-white" style={{ backgroundColor: '#f94735' }}>
          {isSaving ? 'Saving...' : 'Save Home Page'}
        </button>
      </div>

      {/* Hero Banner */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: '#0e1d34', borderColor: '#f94735' }}>
          Hero Banner Section
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Banner Image</label>
            <div className="flex gap-4 items-start">
              {formData.hero.bannerImage && (
                <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden border">
                  <img src={formData.hero.bannerImage} alt="Hero" className="w-full h-full object-cover" />
                </div>
              )}
              <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'hero.bannerImage')} className="text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Hero Title</label>
            <input type="text" value={formData.hero.title} onChange={(e) => updateFormData('hero.title', e.target.value)} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Hero Subtitle</label>
            <input type="text" value={formData.hero.subtitle} onChange={(e) => updateFormData('hero.subtitle', e.target.value)} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Button Text</label>
              <input type="text" value={formData.hero.buttonText} onChange={(e) => updateFormData('hero.buttonText', e.target.value)} className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Button Link</label>
              <input type="text" value={formData.hero.buttonLink} onChange={(e) => updateFormData('hero.buttonLink', e.target.value)} className="w-full border rounded-lg px-3 py-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: '#0e1d34', borderColor: '#f94735' }}>
          Features Section
        </h2>
        {formData.features.map((feature, index) => (
          <div key={index} className="border-b pb-4 mb-4 last:border-0">
            <div className="grid grid-cols-1 gap-4 mb-2">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input type="text" value={feature.title} onChange={(e) => {
                  const newFeatures = [...formData.features];
                  newFeatures[index].title = e.target.value;
                  setFormData({ ...formData, features: newFeatures });
                }} className="w-full border rounded-lg px-3 py-2" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea value={feature.description} onChange={(e) => {
                const newFeatures = [...formData.features];
                newFeatures[index].description = e.target.value;
                setFormData({ ...formData, features: newFeatures });
              }} className="w-full border rounded-lg px-3 py-2" rows="2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteHome;