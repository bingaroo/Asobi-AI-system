import React from 'react';

interface AdSlotProps {
  type: 'leaderboard' | 'rectangle';
  className?: string;
}

const AdSlot: React.FC<AdSlotProps> = ({ type, className = '' }) => {
  const isLeaderboard = type === 'leaderboard';
  
  return (
    <div className={`w-full flex flex-col items-center gap-2 my-8 ${className}`}>
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">
        <span className="w-4 h-px bg-foreground/20"></span>
        Featured Partner
        <span className="w-4 h-px bg-foreground/20"></span>
      </div>
      <div className={`relative group overflow-hidden rounded-3xl border-2 border-dashed border-primary/30 bg-primary/5 flex items-center justify-center transition-all hover:border-primary/60 hover:bg-primary/10 ${
        isLeaderboard ? 'max-w-[728px] h-[90px] w-full' : 'w-[300px] h-[250px]'
      }`}>
        <div className="text-center flex flex-col gap-1 p-4">
          <span className="text-2xl opacity-40 group-hover:scale-110 transition-transform">💎</span>
          <p className="text-[10px] font-bold text-foreground/40 italic">Ad Space for Rent</p>
          <p className="text-[8px] text-foreground/20 leading-tight">수익 창출을 위한 명당 자리입니다.<br/>애드센스 코드를 여기에 삽입하세요!</p>
        </div>
        
        {/* Decorative corner accents */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-primary/20"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-primary/20"></div>
      </div>
    </div>
  );
};

export default AdSlot;
