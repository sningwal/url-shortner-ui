import Navbar from '@/components/url/Navbar'
import HeroForm from '@/components/url/HeroForm'
import StatsBar from '@/components/url/StatsBar'
import FeaturesSection from '@/components/url/FeaturesSection'
import Footer from '@/components/Footer'

// Background floating icons — decorative SVG links/arrows
function BgIcon({ style, size = 28 }: { style: React.CSSProperties; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" style={style}
      className="floating-icon text-violet-400 pointer-events-none select-none">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-grid">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">

        {/* Mesh blobs */}
        <div className="mesh-blob w-[500px] h-[500px] -top-40 -left-40 opacity-30"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }} />
        <div className="mesh-blob w-[400px] h-[400px] top-1/3 -right-32 opacity-20"
          style={{ background: 'radial-gradient(circle, #0891b2 0%, transparent 70%)' }} />
        <div className="mesh-blob w-[300px] h-[300px] bottom-0 left-1/4 opacity-15"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />

        {/* Floating bg icons */}
        <BgIcon style={{ top: '15%', left: '8%', animationDelay: '0s' }} size={28} />
        <BgIcon style={{ top: '25%', right: '10%', animationDelay: '1.5s' }} size={22} />
        <BgIcon style={{ top: '60%', left: '5%', animationDelay: '3s' }} size={20} />
        <BgIcon style={{ top: '70%', right: '8%', animationDelay: '4.5s' }} size={26} />
        <BgIcon style={{ top: '40%', left: '15%', animationDelay: '2s' }} size={18} />
        <BgIcon style={{ top: '20%', right: '22%', animationDelay: '5s' }} size={24} />
        <BgIcon style={{ top: '80%', left: '20%', animationDelay: '0.8s' }} size={20} />
        <BgIcon style={{ top: '50%', right: '5%', animationDelay: '3.5s' }} size={16} />

        {/* Hero text */}
        <div className="relative z-10 text-center max-w-3xl mb-10">
          <div className="animate-slide-up-1 inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full mb-6">
            ✦ Smart Link Management
          </div>

          <h1 className="animate-slide-up-2 text-xl sm:text-6xl md:text-4xl font-bold tracking-tight leading-[1.08] mb-5">
            Transform your{' '}
            <span style={{ background: 'linear-gradient(135deg, #a78bfa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              long links
            </span>
            {' '}into<br />powerful URLs
          </h1>

          {/* <p className="animate-slide-up-3 text-lg text-white/45 max-w-lg mx-auto leading-relaxed mb-10">
            Shorten, customize and track your links with advanced analytics. The complete solution to manage your digital campaigns.
          </p> */}

          {/* Form */}
          <div className="animate-slide-up-4 w-full max-w-2xl mx-auto">
            <HeroForm />
          </div>
        </div>

        {/* Trust line */}
        <div className="animate-slide-up-5 text-sm text-white/30 mt-6">
          Join thousands of professionals who trust LinkShort
        </div>

        {/* CTA buttons */}
        <div className="animate-slide-up-5 flex flex-wrap items-center justify-center gap-3 mt-6">
          <a href="#" className="btn-shimmer flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:scale-105 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
            Start Free →
          </a>
          <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all">
            <span className="text-xs font-bold text-violet-400 bg-violet-500/20 px-2 py-0.5 rounded-full">NEW</span>
            Discover Pages →
          </a>
        </div>
      </section>

      {/* Stats */}
      <div className="px-6 max-w-5xl mx-auto">
        <StatsBar />
      </div>

      {/* Features */}
      <FeaturesSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
