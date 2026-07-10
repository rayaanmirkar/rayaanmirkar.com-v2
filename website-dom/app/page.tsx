const navigationItems = [
  { label: 'Home', href: '#home', current: true },
  { label: 'Current', href: '#current' },
  { label: 'Work', href: '#work' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
]

const currentItems = [
  'Building BiLSTM pipelines to classify bacteriophage lifestyle from proteome-scale patterns.',
  'Exploring genome chunking strategies that preserve biological context without making training prohibitively expensive.',
  //'Studying synaptic scaling and homeostasis computationally, with an emphasis on olfactory circuits.',
]

const workItems = [
  {
    title: 'PHAGER: BiLSTM Neural Networks for Bacteriophage Lifestyle Classification',
    href: 'https://github.com/rayaanmirkar/bilstm-classification',
    meta: 'Independent research project',
    description:
      'Sequence modeling work focused on extracting long-range motifs from bacteriophage proteomes and improving contextual lifestyle prediction.',
    stack: 'Python · TensorFlow · Genomics · Deep Learning',
  },
  {
    title: 'Isometric: Research Repository Environment Recreation',
    href: 'https://github.com/rayaanmirkar/isometric',
    meta: 'Developer tooling project',
    description:
      'A CLI for cloning research repositories, inferring dependencies locally, and reconstructing reproducible environments with less manual setup.',
    stack: 'Python · CLI · Local LLM tooling · Reproducibility',
  },
]

const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/rayaanmirkar' },
  { label: 'Email', href: 'mailto:raymirkar@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rayaanmirkar' },
]

export default function Home() {
  return (
    <main className="min-h-screen px-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
        <aside className="border-b border-stone-800 pb-8 lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:pb-10 lg:pr-10 lg:pt-6">
          <div className="flex h-full flex-col justify-between gap-10">
            <div>
              <p className="font-serif text-2xl name">Rayaan Mirkar</p>
              <p className="meta-copy mt-2 max-w-[14rem]">
                Computational neuroscience and machine learning.
              </p>

              <nav className="mt-10 flex flex-wrap gap-x-5 gap-y-3 lg:block lg:space-y-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={item.current ? 'nav-link nav-link-current block' : 'nav-link block'}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex gap-4 text-sm text-stone-500 lg:block lg:space-y-2 lg:gap-0">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="nav-link block hover:text-stone-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </aside>

        <div className="pt-6 lg:pt-12">
          <section id="home" className="max-w-3xl">
            <p className="body-copy text-stone-200">
              Rising sophomore @ the{' '}
              <a
                href="https://ehs.edison.k12.nj.us/o/ehs/page/ehs-stem-academy"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Edison STEM Academy
              </a>
              .
            </p>
            <div className="mt-6 space-y-5">
              <p className="body-copy">
                I use computational methods to study biological systems, especially problems where sequence structure,
                context, and scale make simple models fall short.
              </p>
              <p className="body-copy">
                My current work centers on bacteriophage proteomes, long-range neural sequence models, and efficient
                training pipelines that make biology-heavy machine learning more practical.
              </p>
              <p className="body-copy">
                I also work in computational neuroscience, with a focus on synaptic homeostasis and how
                adaptive mechanisms shape neural circuits.
              </p>
            </div>
          </section>

          <section id="current" className="mt-20 max-w-3xl scroll-mt-24">
            <h2 className="section-title">Current</h2>
            <div className="space-y-5">
              {currentItems.map((item) => (
                <p key={item} className="body-copy">
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section id="work" className="mt-20 max-w-3xl scroll-mt-24">
            <h2 className="section-title">Work</h2>
            <div className="space-y-10">
              {workItems.map((item, index) => (
                <article key={item.title} className={`space-y-3 pb-10 ${index < workItems.length - 1 ? 'border-b border-stone-800/50' : ''}`}>
                  <h3 className="text-xl text-stone-100">
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="card-link">
                      {item.title}
                    </a>
                  </h3>
                  <p className="meta-copy">{item.meta}</p>
                  <p className="body-copy">{item.description}</p>
                  <p className="meta-copy">{item.stack}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="publications" className="mt-20 max-w-3xl scroll-mt-24">
            <h2 className="section-title">Publications</h2>
            <p className="body-copy">
              Formal publications are still in progress. This section will track papers, posters, and research.
            </p>
          </section>

          <section id="contact" className="mt-20 max-w-3xl scroll-mt-24 pb-4">
            <h2 className="section-title">Contact</h2>
            <p className="body-copy">
              The fastest way to reach me is by{' '}
              <a href="mailto:raymirkar@gmail.com" className="card-link">
                email
              </a>
              . You can also find my code on{' '}
              <a
                href="https://github.com/rayaanmirkar"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                GitHub
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
