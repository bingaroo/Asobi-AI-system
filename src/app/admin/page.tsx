'use client';

import React, { useState } from 'react';
import curatedData from '@/data/asobi_link_curated.json';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('live'); // 'live' or 'requests'
  const [items, setItems] = useState(curatedData);

  const handleDelete = (id: string) => {
    if (confirm('정말로 이 지식을 쇼룸에서 영구 삭제하시겠습니까?')) {
      setItems(items.filter(item => item.id !== id));
      alert('쇼룸에서 삭제되었습니다. (데이터베이스 반영은 최종 승인 필요)');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 bg-black text-white p-8 border-b-8 border-pink-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter">ASOBI-AI COMMAND CENTER 👔</h1>
            <p className="font-bold opacity-70 mt-2">Welcome back, Commander. Manage your knowledge empire here.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-pink-500 text-black px-6 py-2 font-black hover:bg-white transition-colors">LOGOUT</button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('live')}
            className={`px-8 py-3 font-black border-4 border-black transition-all ${activeTab === 'live' ? 'bg-black text-white -translate-y-1' : 'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}
          >
            LIVE SHOWROOM ({items.length})
          </button>
          <button 
            onClick={() => setActiveTab('requests')}
            className={`px-8 py-3 font-black border-4 border-black transition-all ${activeTab === 'requests' ? 'bg-pink-500 text-black -translate-y-1' : 'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}
          >
            USER REQUESTS (0)
          </button>
        </div>

        {/* Knowledge Table */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-4 font-black border-b-4 border-black">CONTENT</th>
                <th className="p-4 font-black border-b-4 border-black">AGENT</th>
                <th className="p-4 font-black border-b-4 border-black">TYPE</th>
                <th className="p-4 font-black border-b-4 border-black text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-pink-50 transition-colors border-b-2 border-gray-100">
                  <td className="p-4">
                    <p className="font-black text-lg">{item.title}</p>
                    <p className="text-sm text-gray-500 truncate max-w-md">{item.summary}</p>
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-gray-100 border-2 border-black font-bold text-xs">
                      {item.managed_by}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 font-black text-[10px] uppercase border ${item.type === 'video' ? 'bg-red-100 text-red-600 border-red-600' : 'bg-blue-100 text-blue-600 border-blue-600'}`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="p-4 text-right flex gap-2 justify-end">
                    <button className="px-4 py-2 bg-black text-white font-black text-xs hover:bg-gray-800">EDIT</button>
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="px-4 py-2 border-2 border-red-500 text-red-500 font-black text-xs hover:bg-red-500 hover:text-white transition-colors"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
