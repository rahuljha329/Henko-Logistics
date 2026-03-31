import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';

const WebsiteContact = () => {
  const [formData, setFormData] = useState({
    banner: "",
    title: "Get In Touch",
    subtitle: "We'd love to hear from you",
    address: "123 Logistics Park, Mumbai, India - 400001",
    phone: "+91 98765 43210",
    email: "info@logistics.com",
    workingHours: "Monday to Saturday: 9:00 AM - 9:00 PM"
  });

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('websiteContact');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      localStorage.setItem('websiteContact', JSON.stringify(formData));
      setIsSaving(false);
      toast.success("Contact page saved successfully!");
    }, 500);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, banner: reader.result });
        toast.info("Image uploaded! Click Save to confirm.");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end mb-4">
        <button onClick={handleSave} disabled={isSaving} className="px-6 py-2 rounded-lg text-white" style={{ backgroundColor: '#f94735' }}>
          {isSaving ? 'Saving...' : 'Save Contact Page'}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: '#0e1d34', borderColor: '#f94735' }}>
          Contact Information
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Banner Image</label>
            <div className="flex gap-4">
              {formData.banner && (
                <div className="w-48 h-32 bg-gray-100 rounded border overflow-hidden">
                  <img src={formData.banner} alt="Banner" className="w-full h-full object-cover" />
                </div>
              )}
              <input type="file" accept="image/*" onChange={handleImageUpload} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Page Title</label>
            <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Subtitle</label>
            <input type="text" value={formData.subtitle} onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full border rounded-lg px-3 py-2" rows="3" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input type="text" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border rounded-lg px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Working Hours</label>
            <input type="text" value={formData.workingHours} onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })} className="w-full border rounded-lg px-3 py-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteContact;