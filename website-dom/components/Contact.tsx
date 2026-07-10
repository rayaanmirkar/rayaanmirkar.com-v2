'use client'

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-20 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-slate-400 mb-12 text-lg">
          Want to chat about projects, school, or just say hi?
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:alex@example.com"
            className="card-dark hover:bg-slate-800 group"
          >
            <div className="text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
              Email
            </div>
            <p className="text-slate-300 group-hover:text-white transition-colors">
              alex@example.com
            </p>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-dark hover:bg-slate-800 group"
          >
            <div className="text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
              Twitter
            </div>
            <p className="text-slate-300 group-hover:text-white transition-colors">
              @alexcodes
            </p>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-dark hover:bg-slate-800 group"
          >
            <div className="text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
              GitHub
            </div>
            <p className="text-slate-300 group-hover:text-white transition-colors">
              alexchen
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}
