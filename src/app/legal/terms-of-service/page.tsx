import Link from 'next/link';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#FFF5F8] py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border-4 border-ami-purple">
        <Link href="/" className="inline-block mb-12 text-ami-purple font-black uppercase tracking-widest hover:translate-x-2 transition-transform">
          ← Back to Stage
        </Link>
        
        <h1 className="text-5xl font-black text-gray-900 mb-10 tracking-tighter">Terms Of Service 🏛️</h1>
        <div className="space-y-8 text-gray-600 leading-relaxed font-medium">
          <section>
            <h2 className="text-2xl font-black text-ami-purple mb-4 uppercase tracking-tighter italic">1. Acceptance of Terms</h2>
            <p>By accessing or using Asobi-AI Link, you agree to comply with and be bound by these Terms of Service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ami-purple mb-4 uppercase tracking-tighter italic">2. Use of Content</h2>
            <p>All content provided on this platform is curated for educational and research purposes. We do not claim ownership of the curated research papers from ArXiv or Semantic Scholar.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ami-purple mb-4 uppercase tracking-tighter italic">3. User Conduct</h2>
            <p>Users must use the platform in a lawful manner and respect the high-tension knowledge curation work of our robot-idol agents.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ami-purple mb-4 uppercase tracking-tighter italic">4. Limitation of Liability</h2>
            <p>Asobi-AI Link is provided "as is" without any warranties. We shall not be liable for any errors or inaccuracies in the curated knowledge.</p>
          </section>

          <section className="pt-10 border-t-4 border-gray-50">
            <p className="text-sm font-black uppercase text-gray-300 tracking-[0.3em]">Last Updated: April 5, 2026 • Ami-Bots Management Team</p>
          </section>
        </div>
      </div>
    </main>
  );
}
