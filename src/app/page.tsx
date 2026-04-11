'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BioMedPaper, AMIBOT_MEMBERS } from '@/lib/members';
import curatedData from '@/data/asobi_link_curated.json';
import KnowledgeModal from '@/components/KnowledgeModal';
import KnowledgeCard from '@/components/KnowledgeCard';

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<BioMedPaper | null>(null);
  const [items, setItems] = useState<BioMedPaper[]>([]);

  useEffect(() => {
    setItems((curatedData as BioMedPaper[]).slice(0, 8));
  }, []);

  return (
    <main className="min-h-screen bg-transparent font-sans text-gray-900 overflow-x-hidden relative">
      {/* Sticky Navbar [v94] */}
      <nav className="fixed top-8 inset-x-8 z-[80] flex justify-between items-center px-10 py-5 glass-card border-white/50 shadow-[0_15px_50px_rgba(255,105,180,0.15)]">
        <Link href="/" className="relative w-48 h-12 hover:scale-110 transition-transform">
          <Image 
            src="/figure/logos/asobi_ai_text_logo.png" 
            alt="ASOBI Logo" fill className="object-contain sticker-shadow" 
          />
        </Link>
        <div className="flex items-center gap-10">
          <Link href="/archive" className="text-[10px] font-black tracking-widest text-gray-900 hover:text-rina-pink transition-colors">ARCHIVE</Link>
          <div className="w-10 h-10 bg-rina-pink rounded-full flex items-center justify-center text-white text-xl animate-kitsch-heartbeat">💖</div>
        </div>
      </nav>

      {/* Official Floating Stickers [v103 BLENDED] */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-[15%] left-[5%] w-32 h-32 opacity-20 sticker-shadow mix-blend-multiply">
          <Image src="/figure/icons_split/icon_1.png" alt="icon" fill className="object-contain" />
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute top-[25%] right-[8%] w-28 h-28 opacity-20 sticker-shadow mix-blend-multiply">
          <Image src="/figure/icons_split/icon_2.png" alt="icon" fill className="object-contain" />
        </motion.div>
        <motion.div animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-[25%] left-[10%] w-36 h-36 opacity-20 sticker-shadow mix-blend-multiply">
          <Image src="/figure/icons_split/icon_3.png" alt="icon" fill className="object-contain" />
        </motion.div>
        <motion.div animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-[15%] right-[5%] w-40 h-40 opacity-20 sticker-shadow mix-blend-multiply">
          <Image src="/figure/icons_split/icon_4.png" alt="icon" fill className="object-contain" />
        </motion.div>
        
        {/* Science Prop Background [v103 BLENDED] */}
        <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] opacity-[0.03] grayscale rotate-12 mix-blend-multiply">
           <Image src="/figure/deco/science_props.png" alt="science" fill className="object-contain" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-8 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="px-10 py-4 bg-gradient-to-r from-rina-pink to-ami-purple text-white rounded-full text-sm font-black tracking-widest uppercase mb-12 shadow-[0_15px_40px_rgba(255,105,180,0.4)]"
          >
            ★ ASOBI-AI AGENT COMPLETE ★
          </motion.div>
          
          <h1 className="text-8xl md:text-[14rem] font-black italic tracking-tightest leading-[0.75] mb-16 kitsch-gradient-text">
            ASOBI-AI<br/>
            <span className="text-gray-900 not-italic uppercase tracking-tighter">PORTAL</span>
          </h1>

          {/* Grand Masterpiece Style-Matched Group Photo [v102 NO-CROP] */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative w-full max-w-4xl aspect-square rounded-[5rem] overflow-hidden border-[20px] border-white shadow-[0_40px_120px_rgba(255,105,180,0.3)] mb-24 group bg-white/40 backdrop-blur-3xl"
          >
            <Image 
              src="/figure/logos/asobi_group_v99.png" 
              alt="ASOBI 8 IDOLS GROUP" fill className="object-contain p-2 transition-transform duration-1000 group-hover:scale-105" 
            />
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </motion.div>
          
          <div className="relative">
            <p className="text-2xl md:text-4xl font-black text-gray-400 max-w-4xl mb-16 leading-[1.1] uppercase italic tracking-tighter">
              The World's Most <span className="text-rina-pink">Premium</span><br/>
              AI Knowledge <span className="text-ami-purple">Archive</span> Center
            </p>
          </div>
        </div>
      </section>

      {/* Latest Artifacts Grid [Kitsch Remastered v93] */}
      <section className="py-32 px-8 z-10 relative">
        <div className="max-w-8xl mx-auto">
          <header className="flex flex-col md:flex-row justify-between items-center mb-24 px-4 gap-8">
            <div className="text-center md:text-left flex items-center gap-8">
              <div className="w-24 h-24 relative opacity-40 animate-kitsch-spin-slow">
                <Image src="/figure/icons_split/icon_1.png" alt="deco" fill className="object-contain" />
              </div>
              <div>
                <span className="text-rina-pink font-black tracking-[0.4em] uppercase mb-4 block">★ THE CURATED CHOICE ★</span>
                <h2 className="text-6xl md:text-9xl font-black italic tracking-tightest leading-none">HOT ITEMS</h2>
              </div>
            </div>
            <Link href="/archive" className="group relative px-12 py-6 bg-gray-900 text-white rounded-full text-sm font-black tracking-widest transition-all hover:bg-rina-pink shadow-2xl">
              GO TO ARCHIVE AREA ↗
            </Link>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {items.map((item, idx) => (
              <KnowledgeCard 
                key={item.id} 
                idx={idx} 
                item={item} 
                onSelect={(selected) => setSelectedItem(selected)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Retro Marquee Section [v93] */}
      <section className="py-20 bg-rina-pink text-white overflow-hidden border-y-8 border-white">
        <div className="flex whitespace-nowrap animate-spin-slow">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-4xl font-black italic tracking-widest mx-10">
              💖 ASOBI AI PORTAL ✨ AGENTIC WORLD 🎀 KITSCH MASTER 💖
            </span>
          ))}
        </div>
      </section>

      {/* Member Selection Section */}
      <section className="py-32 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative pt-24">
            <h3 className="text-[18rem] md:text-[24rem] font-black italic tracking-tightest opacity-[0.03] absolute -top-16 left-0 select-none kitsch-gradient-text">8IDOLS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {AMIBOT_MEMBERS.map((member) => (
                <Link key={member.id} href="/archive" className="group flex flex-col items-center">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="relative w-full aspect-square bg-white rounded-[3rem] p-4 mb-6 shadow-2xl border-4 border-white group-hover:border-rina-pink transition-all"
                  >
                    <Image src={member.image} alt={member.name} fill className="object-contain p-2" />
                  </motion.div>
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 group-hover:text-rina-pink transition-colors">{member.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="py-24 px-8 text-center bg-gray-50/50">
        <div className="text-5xl mb-8">✨🎀💖💎🧬⭐</div>
        <section className="mt-20 py-12 border-t-4 border-black text-center">
          <p className="text-xl font-black italic mb-2">Asobi-AI Link Portal Remastered</p>
          <div className="flex justify-center items-center gap-4">
            <span className="px-3 py-1 bg-black text-white font-bold rounded">ver 1.35 LIVE</span>
            <span className="text-sm font-bold opacity-50">© 2026 Ami-Ent AI Team. All Rights Reserved.</span>
          </div>
        </section>
        <p className="text-[10px] font-black tracking-[0.8em] text-rina-pink uppercase">
          © 2026 ASOBI-AI LINK PORTAL. LOVELY & POWERFUL.
        </p>
      </footer>

      {/* Unified Premium Detail Modal */}
      <KnowledgeModal 
        selectedItem={selectedItem} 
        onClose={() => setSelectedItem(null)} 
        lang="kr" 
      />
    </main>
  );
}
