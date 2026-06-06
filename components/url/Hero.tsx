'use client'

import { useState } from 'react'
import { X, CheckCircle2, Link2, ShieldCheck, Clock, QrCode, Sparkles } from 'lucide-react'

const features = [
  { id: 'custom',   icon: Link2,       label: 'Custom Link',         color: '#8b5cf6', bg: 'rgba(139,92,246,0.15)' },
  { id: 'password', icon: ShieldCheck, label: 'Password Protection',  color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
  { id: 'expiry',   icon: Clock,       label: 'Set Expiration',       color: '#c084fc', bg: 'rgba(192,132,252,0.1)' },
  { id: 'qr',       icon: QrCode,      label: 'Generate QR Code',     color: '#fbbf24', bg: 'rgba(251,191,36,0.15)' },
]

function isValidUrl(str: string) {
  try { new URL(str); return true } catch { return false }
}

export default function HeroForm() {
  const [url, setUrl] = useState('https://www.urlshort.dev')
  const [customSlug, setCustomSlug] = useState('')
  const [activeFeature, setActiveFeature] = useState<string | null>('custom')
  const [shortened, setShortened] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const valid = isValidUrl(url)

  const handleShorten = async () => {
    if (!valid) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    const slug = customSlug || Math.random().toString(36).slice(2, 8)
    setShortened(`lnk.sh/${slug}`)
    setLoading(false)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Card */}
      <div className="rounded-2xl border border-white/10 p-6"
        style={{ background: 'rgba(22, 27, 34, 0.85)', backdropFilter: 'blur(20px)' }}>

        {/* URL input row */}
        <div className="flex gap-3 mb-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={url}
              onChange={e => { setUrl(e.target.value); setShortened(null) }}
              placeholder="Paste your long URL here..."
              className="input-glow w-full bg-black/30 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-cyan-400/60"
            />
            {url && (
              <button onClick={() => { setUrl(''); setShortened(null) }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors">
                <X size={15} />
              </button>
            )}
          </div>

          <button
            onClick={handleShorten}
            disabled={!valid || loading}
            className="btn-shimmer flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' }}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Shortening...
              </>
            ) : (
              <>
                <Sparkles size={15} />
                Shorten Now
              </>
            )}
          </button>
        </div>

        {/* Validation */}
        {url && (
          <div className={`flex items-center gap-1.5 text-xs mb-4 ${valid ? 'text-emerald-400' : 'text-rose-400'}`}>
            <CheckCircle2 size={13} className={valid ? 'valid-pulse' : ''} />
            {valid ? 'Valid URL' : 'Please enter a valid URL'}
          </div>
        )}

        {/* Custom link input */}
        {activeFeature === 'custom' && (
          <div className="mb-4 animate-slide-up-1">
            <div className="flex items-center gap-1.5 text-xs text-white/40 mb-2">
              <Link2 size={12} />
              Custom Link
            </div>
            <div className="flex items-center border border-white/10 rounded-xl overflow-hidden bg-black/20">
              <span className="px-4 py-3 text-sm text-white/30 border-r border-white/10 bg-white/5 whitespace-nowrap">
                lnk.sh/
              </span>
              <input
                type="text"
                value={customSlug}
                onChange={e => setCustomSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                placeholder="my-custom-link"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none"
              />
            </div>
          </div>
        )}

        {/* Feature toggles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {features.map(({ id, icon: Icon, label, color, bg }) => (
            <button
              key={id}
              onClick={() => setActiveFeature(activeFeature === id ? null : id)}
              className="feature-card flex flex-col items-center gap-2 py-4 px-2 rounded-xl border text-center transition-all"
              style={{
                borderColor: activeFeature === id ? color : 'rgba(255,255,255,0.08)',
                background: activeFeature === id ? bg : 'rgba(255,255,255,0.03)',
              }}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: bg, border: `1px solid ${color}30` }}>
                <Icon size={17} style={{ color }} />
              </div>
              <span className="text-xs font-medium leading-tight"
                style={{ color: activeFeature === id ? color : 'rgba(255,255,255,0.55)' }}>
                {label}
              </span>
            </button>
          ))}
        </div>

        {/* Result */}
        {shortened && (
          <div className="mt-4 flex items-center justify-between px-4 py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/5 animate-slide-up-1">
            <div>
              <div className="text-xs text-white/40 mb-0.5">Your short link is ready!</div>
              <a href={`https://${shortened}`} target="_blank" rel="noopener noreferrer"
                className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                {shortened}
              </a>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(shortened)}
              className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors font-medium"
            >
              Copy
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
