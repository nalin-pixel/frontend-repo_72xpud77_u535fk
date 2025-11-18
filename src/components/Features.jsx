import { Sparkles, Shield, Zap, Gauge } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]">
      <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 p-3">
        <Icon className="h-5 w-5 text-fuchsia-400" />
      </div>
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{desc}</p>
    </div>
  )
}

function Features() {
  const items = [
    {
      icon: Sparkles,
      title: 'AI-native workflows',
      desc: 'Automate the mundane and compose complex pipelines with natural language.',
    },
    {
      icon: Shield,
      title: 'Enterprise-grade security',
      desc: 'SOC2-ready controls, granular roles, and encrypted-by-default data.',
    },
    {
      icon: Zap,
      title: 'Instant deployments',
      desc: 'Push to prod in seconds with zero-downtime rollouts and preview envs.',
    },
    {
      icon: Gauge,
      title: 'Observability built-in',
      desc: 'Realtime metrics, traces, and alerts to keep your stack humming.',
    },
  ]

  return (
    <section id="features" className="relative z-10 bg-[#0a0b12] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Designed for speed and scale</h2>
          <p className="mt-3 text-slate-300">Everything you need to build resilient products and move fast.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f) => (
            <Feature key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
