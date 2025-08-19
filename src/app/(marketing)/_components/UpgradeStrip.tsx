export default function UpgradeStrip() {
  return (
    <section id="pricing" className="py-16 bg-selise-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl sm:text-4xl text-selise-black mb-6">
            Free Forever with Effortless Upgrades
          </h2>
          
          <p className="font-body text-lg text-selise-grey max-w-3xl mx-auto mb-4 leading-relaxed">
            Use core e‑signatures free—no hidden limits.
          </p>
          <p className="font-body text-lg text-selise-grey max-w-3xl mx-auto mb-12 leading-relaxed">
            When your business needs higher assurance, unlock Advanced or Qualified signatures with a single click:
          </p>

          {/* Upgrade Flow Diagram */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-selise-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-selise-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <div className="font-subhead text-sm text-selise-black mb-1">Free</div>
                <div className="font-body text-sm text-selise-grey">Basic e-signatures</div>
              </div>

              <div className="flex items-center">
                <svg className="w-6 h-6 text-selise-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-selise-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-selise-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="font-subhead text-sm text-selise-black mb-1">Advanced e‑signatures</div>
                <div className="font-body text-sm text-selise-grey">Secure identity verification via SMS or email</div>
              </div>

              <div className="flex items-center">
                <svg className="w-6 h-6 text-selise-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-selise-lime-green-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-selise-lime-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497M7.5 8.25v9M15 8.25v9" />
                  </svg>
                </div>
                <div className="font-subhead text-sm text-selise-black mb-1">Qualified e‑signatures (QES)</div>
                <div className="font-body text-sm text-selise-grey">Highest legal standard for the EU/CH, including EU‑compliant biometric and ID checks for signatories</div>
              </div>
            </div>
          </div>

          <div className="bg-selise-blue/5 rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="font-body text-selise-grey leading-relaxed mb-4">
              <strong className="text-selise-black">Seamless experience:</strong> Upgrade without disrupting your workflows or losing documents—only the security level changes.
            </p>
            <p className="font-body text-selise-grey leading-relaxed">
              <strong className="text-selise-black">Tip:</strong> Most businesses stick with free for 95% of documents. Pay only when legal requirements demand extra assurance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
