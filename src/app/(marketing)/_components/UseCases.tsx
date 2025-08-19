const useCases = [
  {
    id: 'freelancers',
    title: 'Freelancers',
    description: 'Close gigs fast and look polished with branded emails.',
    documents: ['NDAs', 'Proposals', 'Invoices'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
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
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
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
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    )
  }
];

export default function UseCases() {
  return (
    <section className="py-24 bg-gradient-to-br from-selise-grey-light/30 via-selise-white to-selise-blue-light/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--selise-blue) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-selise-blue/10 border border-selise-blue/30 text-selise-blue px-4 py-2 rounded-full text-sm font-subhead mb-6 animate-fade-in-up">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Built for every workflow</span>
          </div>
          
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-selise-black mb-8 animate-fade-in-up animation-delay-200">
            Who It&rsquo;s <span className="text-selise-blue">Built For</span>
          </h2>
          
          <p className="font-body text-xl sm:text-2xl text-selise-grey max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Whether you&rsquo;re flying solo or scaling fast, SELISE Signature adapts to your workflow with zero learning curve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {useCases.map((useCase, index) => {
            // Define colors for each use case
            const colorMap = {
              'freelancers': {
                iconBg: 'bg-selise-lime-green/10 group-hover:bg-selise-lime-green/20',
                iconText: 'text-selise-lime-green',
                badge: 'bg-selise-lime-green/10 text-selise-lime-green border-selise-lime-green/20',
                gradient: 'from-selise-lime-green/5 to-selise-lime-green/10',
                hoverBorder: 'group-hover:border-selise-lime-green/30'
              },
              'small-business': {
                iconBg: 'bg-selise-blue/10 group-hover:bg-selise-blue/20',
                iconText: 'text-selise-blue',
                badge: 'bg-selise-blue/10 text-selise-blue border-selise-blue/20',
                gradient: 'from-selise-blue/5 to-selise-blue/10',
                hoverBorder: 'group-hover:border-selise-blue/30'
              },
              'startups': {
                iconBg: 'bg-selise-mauveine/10 group-hover:bg-selise-mauveine/20',
                iconText: 'text-selise-mauveine',
                badge: 'bg-selise-mauveine/10 text-selise-mauveine border-selise-mauveine/20',
                gradient: 'from-selise-mauveine/5 to-selise-mauveine/10',
                hoverBorder: 'group-hover:border-selise-mauveine/30'
              }
            };
            
            const colors = colorMap[useCase.id as keyof typeof colorMap] || colorMap['small-business'];
            
            return (
              <div key={useCase.id} className={`group animate-fade-in-up`} style={{ animationDelay: `${600 + index * 200}ms` }}>
                <div className={`bg-gradient-to-br ${colors.gradient} backdrop-blur-sm rounded-3xl p-8 hover:bg-white/90 hover:shadow-2xl border border-white/40 ${colors.hoverBorder} transition-all duration-500 h-full hover:scale-[1.02]`}>
                  {/* Icon */}
                  <div className="flex justify-center mb-8">
                    <div className={`w-20 h-20 ${colors.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg ${colors.iconText}`}>
                      {useCase.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center space-y-6">
                    <h3 className="font-heading text-2xl text-selise-black group-hover:text-selise-blue transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    
                    <p className="font-body text-selise-grey leading-relaxed text-lg min-h-[4rem] flex items-center justify-center">
                      {useCase.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                      {useCase.documents.map((doc, docIndex) => (
                        <span key={docIndex} className={`px-4 py-2 ${colors.badge} rounded-xl text-sm font-subhead border backdrop-blur-sm whitespace-nowrap`}>
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 border border-white/40 max-w-2xl mx-auto animate-fade-in-up animation-delay-1200 shadow-xl">
            <h3 className="font-heading text-2xl sm:text-3xl text-selise-black mb-4">
              Ready to streamline your workflow?
            </h3>
            <p className="font-body text-lg text-selise-grey mb-8 leading-relaxed">
              Join thousands who&rsquo;ve already eliminated the paperwork hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-selise-blue to-selise-blue-dark text-selise-white px-10 py-4 rounded-2xl font-subhead text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-selise-blue focus:ring-offset-2 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-selise-blue-dark to-selise-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Start Signing for Free
                </span>
              </button>
              <div className="flex items-center text-selise-grey font-body opacity-70 hover:opacity-100 transition-all duration-300">
                <span>No credit card required</span>
                <svg className="w-4 h-4 ml-2 text-selise-lime-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
