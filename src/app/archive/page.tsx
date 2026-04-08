import { getAllItems } from "@/lib/data";
import AdSlot from "@/components/AdSlot";
import Image from "next/image";
import ArchiveContent from "@/components/ArchiveContent";

export default async function Archive() {
  const allItems = await getAllItems();

  return (
    <div className="min-h-screen bg-[#FFF5F8] font-sans selection:bg-rina-pink selection:text-white">
      {/* --- Archive Navigation --- */}
      <nav className="sticky top-0 z-50 px-6 py-4 bg-white/60 backdrop-blur-xl border-b-4 border-black/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-4 group">
            <div className="w-10 h-10 bg-white rounded-xl shadow-bubbly border-2 border-rina-pink p-1 rotate-[-10deg] group-hover:rotate-0 transition-transform">
              <Image src="/figure/characters/mini_mascots.png" alt="logo" width={40} height={40} />
            </div>
            <h1 className="text-2xl font-black italic tracking-tighter text-gray-900">ARCHIVE <span className="text-rina-pink">SHOP</span></h1>
          </a>
          <a href="/" className="px-8 py-2 bg-white hover:bg-rina-pink hover:text-white transition-all rounded-full font-black border-2 border-gray-100 text-xs shadow-sm shadow-rina-pink/10">
            BACK TO STAGE ←
          </a>
        </div>
      </nav>

      <main className="relative">
        {/* Decorative Props */}
        <div className="absolute top-20 -right-20 opacity-20 animate-float pointer-events-none">
          <Image src="/figure/deco/science_props.png" alt="deco" width={300} height={300} />
        </div>

        {/* Dynamic Content Section */}
        <ArchiveContent initialData={allItems} />

        {/* AdSlot Footer */}
        <div className="max-w-7xl mx-auto px-6 mb-32">
          <AdSlot type="leaderboard" />
        </div>
      </main>

      {/* --- Decorative Footer --- */}
      <div className="py-20 flex justify-center opacity-10 grayscale pointer-events-none">
        <Image src="/figure/characters/ami_bots_master.png" alt="footer" width={300} height={300} />
      </div>
    </div>
  );
}
