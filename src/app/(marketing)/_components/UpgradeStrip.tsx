'use client'

import { Check, PenTool, Shield, ChevronRight, Zap, Target, Award } from 'lucide-react'

export default function UpgradeStrip() {
  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-selise-white via-selise-blue-light/20 to-selise-grey-light/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--selise-blue) 1px, transparent 0)`,
        backgroundSize: '60px 60px'
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Enhanced Header */}
          <div className="mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-selise-lime-green/10 border border-selise-lime-green/30 text-selise-poly-green px-3 sm:px-4 py-2 rounded-full text-sm font-subhead mb-4 sm:mb-6 animate-fade-in-up">
              <Check className="w-4 h-4" />
              <span>No hidden costs, ever</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-selise-black mb-6 sm:mb-8 animate-fade-in-up animation-delay-200">
              Free Forever with 
              <span className="block text-selise-blue">Effortless Upgrades</span>
            </h2>
            
            <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
              <p className="font-body text-lg sm:text-xl text-selise-grey leading-relaxed">
                Use core e‑signatures <strong className="text-selise-black">completely free</strong>—no hidden limits, no trial periods.
              </p>
              <p className="font-body text-lg sm:text-xl text-selise-grey leading-relaxed">
                When your business needs higher assurance, unlock Advanced or Qualified signatures with a single click:
              </p>
            </div>
          </div>

          {/* Enhanced Upgrade Flow Diagram */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-white/20 max-w-6xl mx-auto mb-8 sm:mb-12 animate-fade-in-up animation-delay-600">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
              
              {/* Free Tier */}
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-selise-lime-green/20 to-selise-lime-green/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <PenTool className="w-8 h-8 sm:w-10 sm:h-10 text-selise-lime-green group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-selise-lime-green text-white text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">FREE</div>
                </div>
                <div className="font-subhead text-base sm:text-lg text-selise-black mb-2">Basic e-signatures</div>
                <div className="font-body text-sm text-selise-grey leading-relaxed">Perfect for most documents and contracts</div>
              </div>

              {/* Arrow for desktop */}
              <div className="hidden lg:flex justify-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-selise-blue/10 p-3 rounded-full">
                    <ChevronRight className="w-6 h-6 text-selise-blue" />
                  </div>
                  <span className="text-xs text-selise-grey font-subhead">One-click upgrade</span>
                </div>
              </div>

              {/* Advanced Tier */}
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-selise-blue/20 to-selise-blue/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-selise-blue group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-selise-blue text-white text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">PRO</div>
                </div>
                <div className="font-subhead text-base sm:text-lg text-selise-black mb-2">Advanced e‑signatures</div>
                <div className="font-body text-sm text-selise-grey leading-relaxed">Secure identity verification via SMS or email</div>
              </div>

              {/* Full width QES section */}
              <div className="lg:col-span-3 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-selise-grey/20">
                <div className="text-center group hover:scale-105 transition-all duration-300 max-w-md mx-auto">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-selise-mauveine/20 to-selise-lavender/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Award className="w-8 h-8 sm:w-10 sm:h-10 text-selise-mauveine group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-selise-mauveine text-white text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">QES</div>
                  </div>
                  <div className="font-subhead text-base sm:text-lg text-selise-black mb-2">Qualified e‑signatures (QES)</div>
                  <div className="font-body text-sm text-selise-grey leading-relaxed">Highest legal standard for the EU/CH, including EU‑compliant biometric and ID checks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto animate-fade-in-up animation-delay-800">
            <div className="bg-gradient-to-br from-selise-blue/5 to-selise-blue/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-selise-blue/10 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-selise-blue/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-selise-blue group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="font-subhead text-base sm:text-lg text-selise-black mb-2 sm:mb-3">Seamless Experience</h3>
                  <p className="font-body text-sm sm:text-base text-selise-grey leading-relaxed">
                    Upgrade without disrupting your workflows or losing documents—only the security level changes. Your signers won&rsquo;t even notice the difference.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-selise-lime-green/5 to-selise-lime-green/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-selise-lime-green/10 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-selise-lime-green/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-selise-lime-green group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="font-subhead text-base sm:text-lg text-selise-black mb-2 sm:mb-3">Smart Economics</h3>
                  <p className="font-body text-sm sm:text-base text-selise-grey leading-relaxed">
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
