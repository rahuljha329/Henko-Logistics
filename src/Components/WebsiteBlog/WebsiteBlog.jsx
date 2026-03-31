import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';

const WebsiteBlog = () => {
  const [formData, setFormData] = useState({
    banner: ""
  });

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('websiteBlog');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      localStorage.setItem('websiteBlog', JSON.stringify(formData));
      setIsSaving(false);
      toast.success("Blog page saved successfully!");
    }, 500);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ banner: reader.result });
        toast.info("Image uploaded! Click Save to confirm.");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end mb-4">
        <button onClick={handleSave} disabled={isSaving} className="px-6 py-2 rounded-lg text-white" style={{ backgroundColor: '#f94735' }}>
          {isSaving ? 'Saving...' : 'Save Blog Page'}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: '#0e1d34', borderColor: '#f94735' }}>
          Blog Page
        </h2>
        <div>
          <label className="block text-sm font-medium mb-1">Blog Banner Image</label>
          <div className="flex gap-4">
            {formData.banner && (
              <div className="w-48 h-32 bg-gray-100 rounded border overflow-hidden">
                <img src={formData.banner} alt="Banner" className="w-full h-full object-cover" />
              </div>
            )}
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBlog;