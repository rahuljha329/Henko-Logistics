import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';

const WebsiteCareer = () => {
  const [formData, setFormData] = useState({
    banner: "",
    title: "Join Our Team",
    subtitle: "Build your career with us"
  });

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('websiteCareer');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      localStorage.setItem('websiteCareer', JSON.stringify(formData));
      setIsSaving(false);
      toast.success("Career page saved successfully!");
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
          {isSaving ? 'Saving...' : 'Save Career Page'}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: '#0e1d34', borderColor: '#f94735' }}>
          Career Page
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
        </div>
      </div>
    </div>
  );
};

export default WebsiteCareer;