'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BioMedPaper, AMIBOT_MEMBERS, BIOMED_CATEGORIES } from '@/lib/members';
import KnowledgeModal from './KnowledgeModal';
import KnowledgeCard from './KnowledgeCard';

interface ArchiveContentProps {
  initialData: BioMedPaper[];
}

export default function ArchiveContent({ initialData }: ArchiveContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<BioMedPaper | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return initialData.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (item.summary_kr || '').includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [initialData, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      {/* Search & Filter Bar */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-3xl border-b border-gray-100 px-8 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex bg-gray-50 p-2 rounded-[2.5rem] overflow-x-auto scrollbar-hide max-w-full border-2 border-gray-100/50">
            {['All', ...BIOMED_CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-8 py-4 rounded-full text-xs font-black tracking-widest transition-all ${
                  selectedCategory === cat 
                  ? 'bg-gray-900 text-white shadow-xl scale-105' 
                  : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-96">
            <input 
              type="text"
              placeholder="SEARCH ARTIFACTS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border-4 border-transparent focus:border-rina-pink/20 focus:bg-white rounded-[2rem] px-10 py-5 text-sm font-bold transition-all outline-none"
            />
            <span className="absolute right-8 top-1/2 -translate-y-1/2 text-xl opacity-20 text-gray-300">🔍</span>
          </div>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 text-center">
            <span className="text-xs font-black text-rina-pink tracking-[0.5em] uppercase mb-4 block">Archive Collection</span>
            <h2 className="text-7xl md:text-8xl font-black italic tracking-tightest leading-none text-gray-900">
              KNOWLEDGE<br/>GOODS SHOP
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {filteredItems.map((item, idx) => (
              <KnowledgeCard 
                key={item.id} 
                item={item} 
                idx={idx} 
                onSelect={(selected) => setSelectedItem(selected)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Unified Premium Detail Modal [v92 INTEGRATION] */}
      <KnowledgeModal 
        selectedItem={selectedItem} 
        onClose={() => setSelectedItem(null)} 
        lang="kr" 
      />
    </div>
  );
}
