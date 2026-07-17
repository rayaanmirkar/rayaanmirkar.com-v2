'use client'

export default function About() {
  return (
    <section id="about" className="bg-black py-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
            </p>
          </div>
          <div className="space-y-6">
            <div className="card-dark">
              <h3 className="text-white font-semibold mb-2">I Love</h3>
            </div>
            <div className="card-dark">
              <h3 className="text-white font-semibold mb-2">School</h3>
            </div>
            <div className="card-dark">
              <h3 className="text-white font-semibold mb-2">Skills</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
