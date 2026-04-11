'use client';

import React, { useState } from 'react';

const SubmitKnowledgeModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    type: 'paper',
    reason: ''
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-white border-4 border-black p-8 w-full max-w-md shadow-[8px_8px_0px_0px_rgba(255,105,180,1)] relative overflow-hidden">
        {/* Kitsch Decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-pink-100 rotate-45 translate-x-12 -translate-y-12 border-b-4 border-black" />
        
        <h2 className="text-3xl font-black italic mb-6">Drop Your Knowledge! 💎</h2>
        
        <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-black mb-1">Title / Topic Name</label>
            <input 
              type="text" 
              className="w-full border-4 border-black p-2 font-bold focus:outline-none focus:bg-pink-50"
              placeholder="e.g. Mamba-2 Architecture"
            />
          </div>
          
          <div>
            <label className="block text-sm font-black mb-1">ArXiv or YouTube Link</label>
            <input 
              type="text" 
              className="w-full border-4 border-black p-2 font-bold focus:outline-none focus:bg-pink-50"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="block text-sm font-black mb-1">Content Type</label>
            <select className="w-full border-4 border-black p-2 font-bold focus:outline-none">
              <option value="paper">Scientific Paper (ArXiv)</option>
              <option value="video">Trend Video (YouTube)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-black mb-1">Why suggest this?</label>
            <textarea 
              className="w-full border-4 border-black p-2 font-bold focus:outline-none focus:bg-pink-50 min-h-[100px]"
              placeholder="Brief summary for our AI Idols..."
            />
          </div>

          <div className="flex gap-2 pt-4">
            <button 
              type="submit"
              className="flex-1 bg-black text-white font-black py-3 border-2 border-black hover:bg-pink-500 transition-colors"
            >
              SUBMIT TO COMMANDER 👔
            </button>
            <button 
              onClick={onClose}
              className="px-6 border-4 border-black font-black hover:bg-gray-100"
            >
              CLOSE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitKnowledgeModal;
