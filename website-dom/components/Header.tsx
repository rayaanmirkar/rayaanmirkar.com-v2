'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-white">
        </Link>
        <nav className="flex gap-8">
          <a href="#about" className="text-slate-300 hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="text-slate-300 hover:text-white transition-colors">
            Projects
          </a>
          <a href="#interests" className="text-slate-300 hover:text-white transition-colors">
            Interests
          </a>
          <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
