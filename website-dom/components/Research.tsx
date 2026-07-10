'use client'

export default function Research() {
  const projects = [
    {
      title: 'Biology Simulator',
      description: 'Built a Python simulation to model cell division and growth. Fun way to visualize concepts from AP Bio!',
      tags: ['Python', 'Biology', 'Simulation'],
    },
    {
      title: 'School Web App',
      description: 'Created a web app to help students track assignments and deadlines. Used React and learned a ton.',
      tags: ['React', 'Web Dev', 'JavaScript'],
    },
    {
      title: 'Data Analysis Project',
      description: 'Analyzed school data to find patterns about study habits and test scores. Done for science fair.',
      tags: ['Data Analysis', 'Python', 'Statistics'],
    },
  ]

  return (
    <section id="projects" className="bg-black py-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
        <p className="text-slate-400 mb-12 text-lg">
          Things I've built and learned from
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="card-dark">
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
