import { Link2 } from 'lucide-react'

const links = {
  Product: ['Features', 'Analytics', 'API', 'Integrations', 'Changelog'],
  Solutions: ['Marketing', 'Developers', 'Enterprise', 'Agencies'],
  Company: ['About', 'Blog', 'Careers', 'Press Kit'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #8b5cf6, #22d3ee)' }}>
                <Link2 size={15} className="text-white" />
              </div>
              <span className="logo-gradient font-bold">LinkShort</span>
            </div>
            <p className="text-sm text-white/35 leading-relaxed">
              Smart link management for the modern web.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/45 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-white/5 gap-4">
          <p className="text-xs text-white/25">© 2026 LinkShort, Inc. All rights reserved.</p>
          <div className="flex items-center gap-1 text-xs text-white/25">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
