import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#0a0b12] pt-24">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient overlay to blend with content without blocking scene interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0b12]/40 via-[#0a0b12]/50 to-[#0a0b12]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
            Live demo • Cybernetic UI
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            A futuristic SaaS for the next internet
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Build, deploy, and scale with an AI-native platform. Experience an immersive interface where creativity meets automation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_40px_rgba(99,102,241,0.35)]">
              Start free trial
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10">
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
