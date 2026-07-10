'use client'

export default function Hero() {
  return (
    <section className="bg-black pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Alex Chen</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            High school student passionate about biology, coding, and solving real-world problems.
          </p>
          <div className="flex gap-4 pt-8">
            <a href="#projects" className="btn-primary">
              My Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
