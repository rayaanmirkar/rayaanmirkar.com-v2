'use client'

export default function Publications() {
  const interests = [
    {
      title: 'Computational Biology',
      description: 'How code and biology come together',
    },
    {
      title: 'Web Development',
      description: 'Building things people actually use',
    },
    {
      title: 'Science',
      description: 'Understanding how the world works',
    },
  ]

  return (
    <section id="interests" className="bg-black py-20 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">Interests</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((interest, idx) => (
            <div
              key={idx}
              className="card-dark"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                {interest.title}
              </h3>
              <p className="text-slate-400">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
