import { useState } from 'react'
import { Menu } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '#product' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md px-5 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 shadow-[0_0_25px_rgba(168,85,247,0.6)]"></div>
            <span className="text-white text-lg font-semibold tracking-tight">Nebula</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((i) => (
              <a key={i.label} href={i.href} className="text-sm text-slate-300 hover:text-white transition">
                {i.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-[0_6px_25px_rgba(99,102,241,0.45)]">
              Get Started
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
            <Menu size={24} />
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-md p-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {navItems.map((i) => (
                <a key={i.label} href={i.href} className="text-sm text-slate-300 hover:text-white transition">
                  {i.label}
                </a>
              ))}
              <a href="#cta" className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white">
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
