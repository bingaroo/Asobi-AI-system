import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#FFF5F8] py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border-4 border-rina-pink">
        <Link href="/" className="inline-block mb-12 text-rina-pink font-black uppercase tracking-widest hover:translate-x-2 transition-transform">
          ← Back to Stage
        </Link>
        
        <h1 className="text-5xl font-black text-gray-900 mb-10 tracking-tighter">Privacy Policy 🧬</h1>
        <div className="space-y-8 text-gray-600 leading-relaxed font-medium">
          <section>
            <h2 className="text-2xl font-black text-rina-pink mb-4 uppercase tracking-tighter italic">1. Introduction</h2>
            <p>Welcome to Asobi-AI Link. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-rina-pink mb-4 uppercase tracking-tighter italic">2. Data We Collect</h2>
            <p>We do not collect any personally identifiable information (PII) unless you voluntarily provide it. Our autonomous agents curate public knowledge from sources like ArXiv and Semantic Scholar.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-rina-pink mb-4 uppercase tracking-tighter italic">3. How We Use Your Data</h2>
            <p>Any data collected is used solely to improve the curation experience and provide higher-quality AI & Bio-knowledge archives.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-rina-pink mb-4 uppercase tracking-tighter italic">4. Cookies</h2>
            <p>We may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.</p>
          </section>

          <section className="pt-10 border-t-4 border-gray-50">
            <p className="text-sm font-black uppercase text-gray-300 tracking-[0.3em]">Last Updated: April 5, 2026 • Ami-Bots Legal Team</p>
          </section>
        </div>
      </div>
    </main>
  );
}
