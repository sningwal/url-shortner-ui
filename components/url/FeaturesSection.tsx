import { BarChart3, Shield, Zap, Globe, RefreshCw, Bell } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Deep Analytics',
    description: 'Track clicks, referrers, devices, and geo data in real time with beautiful dashboards.',
    color: '#8b5cf6',
  },
  {
    icon: Shield,
    title: 'Link Security',
    description: 'Password-protect links, set expirations, and monitor for abuse with AI-powered detection.',
    color: '#22d3ee',
  },
  {
    icon: Zap,
    title: 'Instant Redirects',
    description: 'Sub-50ms redirect latency globally — powered by edge infrastructure in 60+ regions.',
    color: '#fbbf24',
  },
  {
    icon: Globe,
    title: 'Geo Targeting',
    description: 'Route users to different destinations based on their country, language, or device type.',
    color: '#10b981',
  },
  {
    icon: RefreshCw,
    title: 'A/B Testing',
    description: 'Split traffic between multiple destinations and measure which converts better.',
    color: '#f472b6',
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Get notified when a link hits a click milestone or when traffic spikes unexpectedly.',
    color: '#fb923c',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-violet-400 bg-violet-500/10 border border-violet-500/20 px-4 py-1.5 rounded-full mb-4">
            ✦ Features
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-3">
            Everything you need to<br />
            <span className="logo-gradient">manage smart links</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            A complete platform built for marketers, developers, and enterprises who need powerful link management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, title, description, color }) => (
            <div key={title}
              className="group p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 cursor-default">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300"
                style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                <Icon size={20} style={{ color }} />
              </div>
              <h3 className="font-semibold text-white mb-1.5">{title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
