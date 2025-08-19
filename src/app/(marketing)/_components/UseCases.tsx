const useCases = [
  {
    id: 'freelancers',
    title: 'Freelancers',
    description: 'Close gigs fast and look polished with branded emails.',
    documents: ['NDAs', 'Proposals', 'Invoices'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    )
  },
  {
    id: 'small-business',
    title: 'Small Businesses', 
    description: 'Centralize contracts, track status, and automate follow‑ups.',
    documents: ['Contracts', 'HR docs', 'Vendor agreements'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m2.25-18v18m13.5-18v18m2.25-18v18M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.016v.016h-.016v-.016zm0 3h.016v.016h-.016v-.016z" />
      </svg>
    )
  },
  {
    id: 'startups',
    title: 'Startups',
    description: 'Move at product speed—templates for hiring, fundraising, and vendor ops.',
    documents: ['Fundraising', 'Hiring', 'Partner docs'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    )
  }
];

export default function UseCases() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl text-selise-black mb-6">
            Who It&apos;s Built For
          </h2>
          <p className="font-body text-xl text-selise-grey max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re flying solo or scaling fast, SELISE Signature adapts to your workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {useCases.map((useCase) => (
            <div key={useCase.id} className="group text-center">
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg hover:border hover:border-selise-blue/20 transition-all duration-300 h-full">
                <div className="text-selise-blue mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-selise-blue/10 rounded-full flex items-center justify-center group-hover:bg-selise-blue/20 transition-colors">
                    {useCase.icon}
                  </div>
                </div>
                
                <h3 className="font-heading text-xl text-selise-black mb-4">
                  {useCase.title}
                </h3>
                
                <p className="font-body text-selise-grey leading-relaxed mb-6">
                  {useCase.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {useCase.documents.map((doc, index) => (
                    <span key={index} className="px-3 py-1 bg-selise-blue/10 text-selise-blue rounded-full text-sm font-body">
                      {doc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-selise-blue text-selise-white px-8 py-4 rounded-2xl font-subhead text-lg hover:bg-selise-blue-hover transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-selise-blue focus:ring-offset-2 shadow-lg hover:shadow-xl">
            Start Signing for Free
          </button>
        </div>
      </div>
    </section>
  );
}
