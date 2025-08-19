'use client'

import { Users, Building, Rocket, CheckCircle, Star, Zap } from 'lucide-react'

const useCases = [
  {
    id: 'freelancers',
    title: 'Freelancers',
    description: 'Close gigs fast and look polished with branded emails.',
    documents: ['NDAs', 'Proposals', 'Invoices'],
    icon: Users,
    colorMap: {
      iconBg: 'bg-selise-lime-green/10 group-hover:bg-selise-lime-green/20',
      iconText: 'text-selise-lime-green',
      badge: 'bg-selise-lime-green/10 text-selise-lime-green border-selise-lime-green/20',
      gradient: 'from-selise-lime-green/5 to-selise-lime-green/10',
      hoverBorder: 'group-hover:border-selise-lime-green/30'
    }
  },
  {
    id: 'small-business',
    title: 'Small Businesses', 
    description: 'Centralize contracts, track status, and automate follow‑ups.',
    documents: ['Contracts', 'HR docs', 'Vendor agreements'],
    icon: Building,
    colorMap: {
      iconBg: 'bg-selise-blue/10 group-hover:bg-selise-blue/20',
      iconText: 'text-selise-blue',
      badge: 'bg-selise-blue/10 text-selise-blue border-selise-blue/20',
      gradient: 'from-selise-blue/5 to-selise-blue/10',
      hoverBorder: 'group-hover:border-selise-blue/30'
    }
  },
  {
    id: 'startups',
    title: 'Startups',
    description: 'Move at product speed—templates for hiring, fundraising, and vendor ops.',
    documents: ['Fundraising', 'Hiring', 'Partner docs'],
    icon: Rocket,
    colorMap: {
      iconBg: 'bg-selise-mauveine/10 group-hover:bg-selise-mauveine/20',
      iconText: 'text-selise-mauveine',
      badge: 'bg-selise-mauveine/10 text-selise-mauveine border-selise-mauveine/20',
      gradient: 'from-selise-mauveine/5 to-selise-mauveine/10',
      hoverBorder: 'group-hover:border-selise-mauveine/30'
    }
  }
];

export default function UseCases() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-selise-grey-light/30 via-selise-white to-selise-blue-light/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--selise-blue) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-selise-blue/10 border border-selise-blue/30 text-selise-blue px-3 sm:px-4 py-2 rounded-full text-sm font-subhead mb-4 sm:mb-6 animate-fade-in-up">
            <CheckCircle className="w-4 h-4" />
            <span>Built for every workflow</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-selise-black mb-6 sm:mb-8 animate-fade-in-up animation-delay-200">
            Who It&rsquo;s <span className="text-selise-blue">Built For</span>
          </h2>
          
          <p className="font-body text-lg sm:text-xl lg:text-2xl text-selise-grey max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Whether you&rsquo;re flying solo or scaling fast, SELISE Signature adapts to your workflow with zero learning curve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            const colors = useCase.colorMap;
            
            return (
              <div key={useCase.id} className={`group animate-fade-in-up`} style={{ animationDelay: `${600 + index * 200}ms` }}>
                <div className={`bg-gradient-to-br ${colors.gradient} backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/90 hover:shadow-2xl border border-white/40 ${colors.hoverBorder} transition-all duration-500 h-full hover:scale-[1.02]`}>
                  {/* Icon */}
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 ${colors.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg ${colors.iconText}`}>
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center space-y-4 sm:space-y-6">
                    <h3 className="font-heading text-xl sm:text-2xl text-selise-black group-hover:text-selise-blue transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    
                    <p className="font-body text-selise-grey leading-relaxed text-base sm:text-lg min-h-[3rem] sm:min-h-[4rem] flex items-center justify-center">
                      {useCase.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2">
                      {useCase.documents.map((doc, docIndex) => (
                        <span key={docIndex} className={`px-3 sm:px-4 py-1.5 sm:py-2 ${colors.badge} rounded-lg sm:rounded-xl text-xs sm:text-sm font-subhead border backdrop-blur-sm whitespace-nowrap`}>
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
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/40 max-w-2xl mx-auto animate-fade-in-up animation-delay-1200 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-4 sm:mb-6">
              <div className="flex items-center gap-1 sm:gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-selise-lime-green fill-current" />
                ))}
              </div>
              <span className="font-subhead text-sm sm:text-base text-selise-black">Trusted by 10,000+ professionals</span>
            </div>
            
            <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl text-selise-black mb-3 sm:mb-4">
              Ready to streamline your workflow?
            </h3>
            <p className="font-body text-base sm:text-lg text-selise-grey mb-6 sm:mb-8 leading-relaxed">
              Join thousands who&rsquo;ve already eliminated the paperwork hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-selise-blue to-selise-blue-dark text-selise-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-subhead text-base sm:text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-selise-blue focus:ring-offset-2 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 overflow-hidden relative w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-selise-blue-dark to-selise-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Start Signing for Free
                </span>
              </button>
              <div className="flex items-center text-selise-grey font-body opacity-70 hover:opacity-100 transition-all duration-300 text-sm sm:text-base">
                <span>No credit card required</span>
                <CheckCircle className="w-4 h-4 ml-2 text-selise-lime-green" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
