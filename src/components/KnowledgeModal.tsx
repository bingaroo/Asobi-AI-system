'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { BioMedPaper, AMIBOT_MEMBERS } from '@/lib/members';
import CommentSection from './CommentSection';

interface KnowledgeModalProps {
  selectedItem: BioMedPaper | null;
  onClose: () => void;
  lang: 'kr' | 'en';
}

export default function KnowledgeModal({ selectedItem, onClose, lang }: KnowledgeModalProps) {
  return (
    <AnimatePresence>
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-12 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-[40px] saturate-150"
          />
          <motion.div 
            initial={{ scale: 0.8, y: 100, opacity: 0, rotate: -2 }}
            animate={{ scale: 1, y: 0, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.8, y: 100, opacity: 0, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="bg-white/95 w-full max-w-5xl max-h-[90vh] rounded-[5rem] overflow-y-auto relative shadow-[0_0_100px_rgba(0,0,0,0.2)] border-[10px] border-white shadow-rinapink/10 scrollbar-hide"
          >
            <div className="p-16">
              <header className="flex justify-between items-start mb-16">
                <div className="flex items-center gap-10">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-28 h-28 bg-rina-pink/10 rounded-[3rem] relative p-5 border-4 border-rina-pink/20 shadow-xl overflow-hidden"
                  >
                    <Image 
                      src={AMIBOT_MEMBERS.find(m => m.name === selectedItem.managed_by)?.image || '/figure/characters/member_ami.png'} 
                      alt="idol" fill className="object-contain" 
                    />
                  </motion.div>
                  <div>
                    <span className="text-sm font-black text-rina-pink tracking-[0.2em] uppercase mb-3 block opacity-60">AI Knowledge Artifact</span>
                    <h3 className="text-4xl md:text-5xl font-black italic tracking-tightest leading-[1.1] text-gray-900 border-b-8 border-rina-pink/10 pb-4">
                      {selectedItem.title}
                    </h3>
                  </div>
                </div>
                <button 
                  onClick={onClose} 
                  className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-3xl font-black text-gray-300 hover:bg-rina-pink hover:text-white transition-all transform hover:rotate-90"
                >
                  ×
                </button>
              </header>

              <div className="space-y-16">
                {/* Main Link Section [v122 Added] */}
                {selectedItem.link && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center"
                  >
                    <a 
                      href={selectedItem.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative flex items-center gap-6 px-16 py-6 bg-rina-pink text-white rounded-[3rem] font-black text-2xl shadow-[0_20px_40px_rgba(255,107,157,0.3)] hover:shadow-[0_25px_60px_rgba(255,107,157,0.5)] transition-all transform hover:-translate-y-2 active:scale-95 overflow-hidden"
                    >
                      <span className="relative z-10 italic uppercase tracking-tighter">View Original Source ↗</span>
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-15deg]"></div>
                    </a>
                  </motion.div>
                )}

                {/* Detailed Insight Section */}
                <section className="relative">
                  <div className="absolute -left-12 top-0 text-5xl opacity-10 font-black italic text-rina-pink select-none">INSIGHT</div>
                  <h5 className="text-xs font-black text-gray-400 tracking-widest uppercase mb-8 flex items-center gap-4">
                     <span className="w-12 h-[3px] bg-rina-pink"></span> Detailed Analysis by {selectedItem.managed_by}
                  </h5>
                  <div className="bg-white border-4 border-gray-100 rounded-[4rem] p-12 text-xl text-gray-800 font-bold leading-[1.8] whitespace-pre-line shadow-2xl shadow-gray-200/50">
                    {lang === 'kr' ? (selectedItem.detailed_analysis_kr || selectedItem.summary_kr) : (selectedItem.detailed_analysis_en || selectedItem.summary_en)}
                  </div>
                </section>

                {/* References Section */}
                {selectedItem.references && selectedItem.references.length > 0 && (
                  <section>
                    <h5 className="text-xs font-black text-gray-400 tracking-widest uppercase mb-8 flex items-center gap-4">
                       <span className="w-12 h-[3px] bg-gray-200"></span> Expert References
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {selectedItem.references.map((ref, idx) => (
                        <motion.a 
                          key={idx} href={ref.link} target="_blank"
                          whileHover={{ y: -10, scale: 1.02 }}
                          className="flex flex-col justify-between p-8 bg-gray-50/50 border-4 border-transparent hover:border-rina-pink rounded-[3rem] transition-all group"
                        >
                          <div className="mb-4">
                            <p className="text-lg font-black italic text-gray-900 group-hover:text-rina-pink transition-colors">{ref.title}</p>
                            <p className="text-xs text-gray-400 font-bold uppercase mt-3 leading-relaxed">{ref.reason}</p>
                          </div>
                          <span className="text-[10px] font-black text-rina-pink tracking-widest uppercase mt-4">Visit Source ↗</span>
                        </motion.a>
                      ))}
                    </div>
                  </section>
                )}

                {/* Real-time Community Section */}
                <div className="pt-8 border-t-8 border-gray-50">
                  <CommentSection postId={selectedItem.id} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
