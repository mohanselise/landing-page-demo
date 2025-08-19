import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-selise-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/signature-black.svg"
              alt="SELISE Signature"
              width={160}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="font-body text-selise-grey hover:text-selise-blue transition-colors"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="font-body text-selise-grey hover:text-selise-blue transition-colors"
            >
              Pricing
            </a>
            <a 
              href="/legal/privacy" 
              className="font-body text-selise-grey hover:text-selise-blue transition-colors"
            >
              Privacy
            </a>
            <button className="bg-selise-blue text-selise-white px-6 py-2 rounded-xl font-subhead text-sm hover:bg-selise-blue-hover transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-selise-blue focus:ring-offset-2 border border-selise-blue-dark hover:border-selise-blue-hover shadow-lg hover:shadow-xl">
              Start Signing
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="bg-selise-blue text-selise-white px-4 py-2 rounded-xl font-subhead text-sm hover:bg-selise-blue-hover transition-all duration-200 border border-selise-blue-dark hover:border-selise-blue-hover shadow-lg hover:shadow-xl">
              Start Signing
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
