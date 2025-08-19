export default function UpgradeStrip() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-selise-white via-selise-blue-light/20 to-selise-grey-light/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--selise-blue) 1px, transparent 0)`,
        backgroundSize: '60px 60px'
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Enhanced Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-selise-lime-green/10 border border-selise-lime-green/30 text-selise-poly-green px-4 py-2 rounded-full text-sm font-subhead mb-6 animate-fade-in-up">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No hidden costs, ever</span>
            </div>
            
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-selise-black mb-8 animate-fade-in-up animation-delay-200">
              Free Forever with 
              <span className="block text-selise-blue">Effortless Upgrades</span>
            </h2>
            
            <div className="space-y-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
              <p className="font-body text-xl text-selise-grey leading-relaxed">
                Use core e‑signatures <strong className="text-selise-black">completely free</strong>—no hidden limits, no trial periods.
              </p>
              <p className="font-body text-xl text-selise-grey leading-relaxed">
                When your business needs higher assurance, unlock Advanced or Qualified signatures with a single click:
              </p>
            </div>
          </div>

          {/* Enhanced Upgrade Flow Diagram */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl border border-white/20 max-w-6xl mx-auto mb-12 animate-fade-in-up animation-delay-600">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              
              {/* Free Tier */}
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-selise-lime-green/20 to-selise-lime-green/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-selise-lime-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-selise-lime-green text-white text-xs font-bold px-2 py-1 rounded-full">FREE</div>
                </div>
                <div className="font-subhead text-lg text-selise-black mb-2">Basic e-signatures</div>
                <div className="font-body text-sm text-selise-grey leading-relaxed">Perfect for most documents and contracts</div>
              </div>

              {/* Arrow for desktop */}
              <div className="hidden lg:flex justify-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-selise-blue/10 p-3 rounded-full">
                    <svg className="w-6 h-6 text-selise-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <span className="text-xs text-selise-grey font-subhead">One-click upgrade</span>
                </div>
              </div>

              {/* Advanced Tier */}
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-selise-blue/20 to-selise-blue/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-selise-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-selise-blue text-white text-xs font-bold px-2 py-1 rounded-full">PRO</div>
                </div>
                <div className="font-subhead text-lg text-selise-black mb-2">Advanced e‑signatures</div>
                <div className="font-body text-sm text-selise-grey leading-relaxed">Secure identity verification via SMS or email</div>
              </div>

              {/* Full width QES section */}
              <div className="lg:col-span-3 mt-8 pt-8 border-t border-selise-grey/20">
                <div className="text-center group hover:scale-105 transition-all duration-300 max-w-md mx-auto">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-selise-mauveine/20 to-selise-lavender/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-10 h-10 text-selise-mauveine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497M7.5 8.25v9M15 8.25v9" />
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-selise-mauveine text-white text-xs font-bold px-2 py-1 rounded-full">QES</div>
                  </div>
                  <div className="font-subhead text-lg text-selise-black mb-2">Qualified e‑signatures (QES)</div>
                  <div className="font-body text-sm text-selise-grey leading-relaxed">Highest legal standard for the EU/CH, including EU‑compliant biometric and ID checks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto animate-fade-in-up animation-delay-800">
            <div className="bg-gradient-to-br from-selise-blue/5 to-selise-blue/10 backdrop-blur-sm rounded-2xl p-8 border border-selise-blue/10 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-selise-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-selise-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-subhead text-lg text-selise-black mb-3">Seamless Experience</h3>
                  <p className="font-body text-selise-grey leading-relaxed">
                    Upgrade without disrupting your workflows or losing documents—only the security level changes. Your signers won&rsquo;t even notice the difference.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-selise-lime-green/5 to-selise-lime-green/10 backdrop-blur-sm rounded-2xl p-8 border border-selise-lime-green/10 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-selise-lime-green/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-selise-lime-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189c.422-.134.827-.287 1.2-.476l.775.547A7.5 7.5 0 0111.98 18H12zm-7.478-9.5A6.5 6.5 0 0012 4.5c2.3 0 4.31 1.19 5.478 3h-1.478A5 5 0 0012 6a5 5 0 00-4.478 2.5h-1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-subhead text-lg text-selise-black mb-3">Smart Economics</h3>
                  <p className="font-body text-selise-grey leading-relaxed">
                    Most businesses stick with free for 95% of documents. Pay only when legal requirements demand extra assurance—typically for high-value contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
