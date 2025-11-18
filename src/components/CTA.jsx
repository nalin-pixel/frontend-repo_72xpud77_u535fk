function CTA() {
  return (
    <section id="cta" className="relative z-10 bg-[#0a0b12] pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-600/10 to-indigo-600/10 p-8 backdrop-blur">
          <div className="grid items-center gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-white">Ready to experience the future?</h3>
              <p className="mt-2 text-slate-300">Get started in minutes. No credit card required.</p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="inline-flex flex-1 items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_40px_rgba(99,102,241,0.35)]">
                Create an account
              </a>
              <a href="#" className="inline-flex flex-1 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10">
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
