const stats = [
  { value: '2.4B+', label: 'Links Shortened' },
  { value: '180+', label: 'Countries' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '< 50ms', label: 'Redirect Latency' },
]

export default function StatsBar() {
  return (
    <div className="flex flex-wrap justify-center gap-12 py-12 border-t border-b border-white/5">
      {stats.map(({ value, label }) => (
        <div key={label} className="text-center">
          <div className="stat-gradient text-3xl font-bold tracking-tight">{value}</div>
          <div className="text-sm text-white/40 mt-0.5 font-medium">{label}</div>
        </div>
      ))}
    </div>
  )
}
