import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0b12] text-white">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="relative z-10 border-t border-white/10 bg-[#0a0b12] py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
            <span className="text-sm text-slate-300">© {new Date().getFullYear()} Nebula, Inc.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
