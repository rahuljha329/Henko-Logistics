import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';

const WebsiteResources = () => {
  const [activeResource, setActiveResource] = useState("guide");
  const [formData, setFormData] = useState({
    "guide": {
      title: "Shipping Guide",
      banner: "",
      content: "Complete guide to international shipping."
    },
    "faq": {
      title: "FAQ",
      banner: "",
      content: "Frequently asked questions about our services."
    },
    "tracking": {
      title: "Tracking Information",
      banner: "",
      content: "Learn how to track your shipments."
    },
    "rates": {
      title: "Shipping Rates",
      banner: "",
      content: "Calculate shipping costs."
    },
    "documents": {
      title: "Required Documents",
      banner: "",
      content: "Documents needed for international shipping."
    },
    "insurance": {
      title: "Insurance Policy",
      banner: "",
      content: "Insurance coverage details."
    },
    "terms": {
      title: "Terms & Conditions",
      banner: "",
      content: "Terms and conditions for using our services."
    }
  });

  const [isSaving, setIsSaving] = useState(false);

  const resourcePages = [
    { id: "guide", name: "Shipping Guide" },
    { id: "faq", name: "FAQ" },
    { id: "tracking", name: "Tracking" },
    { id: "rates", name: "Rates" },
    { id: "documents", name: "Documents" },
    { id: "insurance", name: "Insurance" },
    { id: "terms", name: "Terms & Conditions" }
  ];

  useEffect(() => {
    const saved = localStorage.getItem('websiteResources');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      localStorage.setItem('websiteResources', JSON.stringify(formData));
      setIsSaving(false);
      toast.success("Resources saved successfully!");
    }, 500);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          [activeResource]: { ...formData[activeResource], banner: reader.result }
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
          {resourcePages.map(resource => (
            <button
              key={resource.id}
              onClick={() => setActiveResource(resource.id)}
              className={`px-4 py-2 rounded-lg transition-all ${activeResource === resource.id ? 'text-white' : 'bg-gray-200 text-gray-700'}`}
              style={activeResource === resource.id ? { backgroundColor: '#f94735' } : {}}
            >
              {resource.name}
            </button>
          ))}
        </div>
        <button onClick={handleSave} disabled={isSaving} className="px-6 py-2 rounded-lg text-white" style={{ backgroundColor: '#f94735' }}>
          {isSaving ? 'Saving...' : 'Save Resources'}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: '#0e1d34', borderColor: '#f94735' }}>
          Editing: {resourcePages.find(r => r.id === activeResource)?.name}
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Banner Image</label>
            <div className="flex gap-4">
              {formData[activeResource]?.banner && (
                <div className="w-48 h-32 bg-gray-100 rounded border overflow-hidden">
                  <img src={formData[activeResource]?.banner} alt="Banner" className="w-full h-full object-cover" />
                </div>
              )}
              <input type="file" accept="image/*" onChange={handleImageUpload} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Page Title</label>
            <input type="text" value={formData[activeResource]?.title || ''} onChange={(e) => setFormData({ ...formData, [activeResource]: { ...formData[activeResource], title: e.target.value } })} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Content</label>
            <textarea value={formData[activeResource]?.content || ''} onChange={(e) => setFormData({ ...formData, [activeResource]: { ...formData[activeResource], content: e.target.value } })} className="w-full border rounded-lg px-3 py-2" rows="12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteResources;