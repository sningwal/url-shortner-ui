'use client'

import { useState } from 'react'
import { Globe, Moon, ChevronDown, Link2 } from 'lucide-react'

export default function Navbar() {
  const [dark, setDark] = useState(true)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md border-b border-white/5"
      style={{ background: 'rgba(13, 17, 23, 0.85)' }}>
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #22d3ee)' }}>
          <Link2 size={16} className="text-white" strokeWidth={2.5} />
        </div>
        <div>
          <span className="logo-gradient font-bold text-lg tracking-tight">Short.ly</span>
          <div className="text-[9px] text-white/40 tracking-widest uppercase -mt-0.5 font-medium">Smart Links</div>
        </div>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-8">
        {['Platform', 'Solutions', 'Plans', 'Terms'].map(item => (
          <a key={item} href="#" className="text-sm text-white/60 hover:text-white transition-colors font-medium">
            {item}
          </a>
        ))}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <button className="hidden md:flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20">
          <Globe size={13} />
          <span>EN</span>
          <ChevronDown size={12} />
        </button>
        
        <button
          onClick={() => setDark(!dark)}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all"
        >
          <Moon size={15} />
        </button>

        <a href="#" className="text-sm text-white/70 hover:text-white transition-colors font-medium px-3 py-1.5">
          Sign In
        </a>

        <a href="#" className="btn-shimmer text-sm font-semibold px-4 py-2 rounded-xl text-white transition-all hover:scale-105 active:scale-95"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #5b21b6)' }}>
          Start Free
        </a>
      </div>
    </nav>
  )
}
