'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    const initial = saved || 'dark'
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 flex items-center gap-1 px-3 py-2 rounded-full dark:bg-stone-800 bg-stone-200 transition-colors opacity-60 hover:opacity-100"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div
        className={`w-4 h-4 rounded-full transition-all ${
          theme === 'dark' ? 'bg-stone-950 translate-x-0' : 'bg-white translate-x-4'
        }`}
      />
    </button>
  )
}
