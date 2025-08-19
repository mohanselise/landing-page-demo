const valueProps = [
  {
    title: 'Fast onboarding',
    description: 'Upload, add recipients, place fields, and send—all in minutes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'No account needed for signers',
    description: 'Your clients sign with one click from their email.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: 'Polished & professional',
    description: 'Your contracts and emails look sharp and on‑brand every time.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function ValueProps() {
  return (
    <section className="py-24 bg-selise-grey-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-18">
          <h2 className="font-heading text-3xl sm:text-4xl text-selise-black mb-6">
            Why SELISE Signature?
          </h2>
          <p className="font-body text-xl text-selise-grey max-w-3xl mx-auto text-comfortable">
            Everything you need to move at startup speed:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {valueProps.map((prop, index) => (
            <div key={index} className="group text-center">
              <div className="bg-selise-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-selise-blue/20 transition-all duration-300 h-full">
                <div className="text-selise-blue mb-6 flex justify-center">
                  <div className="w-12 h-12 bg-selise-blue-light rounded-full flex items-center justify-center group-hover:bg-selise-blue/20 transition-colors">
                    {prop.icon}
                  </div>
                </div>
                <h3 className="font-subhead text-xl text-selise-black mb-4">
                  {prop.title}
                </h3>
                <p className="font-body text-selise-grey text-comfortable">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
