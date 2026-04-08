'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BioMedPaper, AMIBOT_MEMBERS } from '@/lib/members';

interface KnowledgeCardProps {
  item: BioMedPaper;
  idx: number;
  onSelect: (item: BioMedPaper) => void;
}

export default function KnowledgeCard({ item, idx, onSelect }: KnowledgeCardProps) {
  const member = AMIBOT_MEMBERS.find(m => m.name === item.managed_by) || AMIBOT_MEMBERS[0];
  
  // Map member colors [v105 Unified]
  const memberColors: Record<string, string> = {
    'Ami': '#A78BFA',
    'Rina': '#FB7185',
    'Dina': '#34D399',
    'Prota': '#38BDF8',
    'Techa': '#FBBF24',
    'Opti': '#60A5FA',
    'Trenda': '#F87171',
    'Basic': '#FB923C'
  };
  const accentColor = memberColors[member.name] || '#FF69B4';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05 }}
      className="group kitsch-card p-4 transition-all duration-300 relative overflow-hidden"
      style={{ 
        borderColor: `${accentColor}40`,
        boxShadow: `0 20px 40px -20px ${accentColor}40`
      }}
    >
      {/* Member Badge Overlay */}
      <div className="absolute top-2 left-2 z-30 flex items-center gap-2 bg-white/90 backdrop-blur-md pl-1 pr-4 py-1 rounded-full shadow-lg border border-gray-100">
        <div className="w-8 h-8 rounded-full relative overflow-hidden bg-gray-50 border-2" style={{ borderColor: accentColor }}>
          <Image src={member.image} alt={member.name} fill className="object-contain" />
        </div>
        <span className="text-[9px] font-black tracking-tighter" style={{ color: accentColor }}>{member.name} CHOICE</span>
      </div>

      {/* Thumbnail */}
      <div className="relative w-full aspect-[4/5] rounded-[3.5rem] overflow-hidden mb-6 shadow-2xl">
        <Image 
          src={item.thumbnail || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'} 
          alt="thumb" fill className="object-cover transition-transform duration-1000 group-hover:scale-125" 
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Detailed Access Button */}
        <button 
          onClick={() => onSelect(item)}
          className="absolute top-6 right-6 w-14 h-14 bg-white/95 rounded-full shadow-2xl flex items-center justify-center text-3xl font-black opacity-0 group-hover:opacity-100 transition-all transform hover:rotate-180 z-20"
          style={{ color: accentColor }}
        >
          +
        </button>
        
        <div className="absolute left-6 bottom-6 right-6 flex justify-between items-center bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl">
           <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">{item.category}</span>
           <span className="text-[10px] font-black opacity-40" style={{ color: accentColor }}>#{item.id.slice(0, 4)}</span>
        </div>
      </div>

      <div className="px-4 pb-4 text-left">
        <h3 className="text-2xl font-black italic tracking-tightest leading-[1.1] mb-4 text-gray-900 group-hover:underline decoration-4" style={{ textDecorationColor: `${accentColor}60` }}>
          {item.title}
        </h3>
        <p className="text-xs text-gray-400 font-bold leading-relaxed line-clamp-2">
          {item.summary_kr || ''}
        </p>
      </div>
    </motion.div>
  );
}
