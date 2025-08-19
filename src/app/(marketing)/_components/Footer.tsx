export default function Footer() {
  return (
    <footer className="bg-selise-oxford text-selise-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="font-heading text-2xl mb-4">SELISE Signature</h3>
              <p className="font-body text-selise-grey mb-6 max-w-md text-comfortable opacity-90">
                Free e-signatures for startups, small businesses & freelancers. 
                Start signing in seconds—upgrade when you need more.
              </p>
              <div className="flex gap-4">
                <button className="text-selise-grey hover:text-selise-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="text-selise-grey hover:text-selise-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-subhead text-lg mb-4">Product</h4>
              <ul className="space-y-3 font-body text-sm">
                <li><a href="#" className="text-selise-grey hover:text-selise-white opacity-90 hover:opacity-100 transition-all">Features</a></li>
                <li><a href="#" className="text-selise-grey hover:text-selise-white opacity-90 hover:opacity-100 transition-all">Pricing</a></li>
                <li><a href="#" className="text-selise-grey hover:text-selise-white opacity-90 hover:opacity-100 transition-all">Security</a></li>
                <li><a href="#" className="text-selise-grey hover:text-selise-white opacity-90 hover:opacity-100 transition-all">Integrations</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-subhead text-lg mb-4">Legal</h4>
              <ul className="space-y-3 font-body text-sm">
                <li><a href="/legal/terms" className="text-selise-grey hover:text-selise-white opacity-90 hover:opacity-100 transition-all">Terms of Service</a></li>
                <li><a href="/legal/privacy" className="text-selise-grey hover:text-selise-white opacity-90 hover:opacity-100 transition-all">Privacy Policy</a></li>
                <li><a href="#" className="text-selise-grey hover:text-selise-white opacity-90 hover:opacity-100 transition-all">GDPR</a></li>
                <li><a href="#" className="text-selise-grey hover:text-selise-white opacity-90 hover:opacity-100 transition-all">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-selise-grey/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-sm text-selise-grey opacity-90 mb-4 md:mb-0">
              © 2025 SELISE. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-selise-grey opacity-90">
                <div className="w-2 h-2 bg-selise-lime-green rounded-full"></div>
                <span>EU eIDAS & Swiss ZertES compliant</span>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="text-selise-grey hover:text-selise-white opacity-90 hover:opacity-100 text-sm transition-all">
                  🇺🇸 English
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
