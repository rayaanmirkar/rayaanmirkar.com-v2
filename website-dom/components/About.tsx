'use client'

export default function About() {
  return (
    <section id="about" className="bg-black py-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              I'm a junior at Central High School interested in biology, computer science, and how they intersect. I love learning new things, building cool stuff, and exploring how technology can solve real problems.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              When I'm not coding or studying, you'll find me experimenting with new ideas, contributing to school projects, or learning something completely random on the internet.
            </p>
          </div>
          <div className="space-y-6">
            <div className="card-dark">
              <h3 className="text-white font-semibold mb-2">I Love</h3>
              <p className="text-slate-400">Biology, Python, Building Things</p>
            </div>
            <div className="card-dark">
              <h3 className="text-white font-semibold mb-2">School</h3>
              <p className="text-slate-400">Central High School, Grade 11</p>
            </div>
            <div className="card-dark">
              <h3 className="text-white font-semibold mb-2">Skills</h3>
              <p className="text-slate-400">Python, Web Dev, Biology Lab Work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
