import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-selise-blue">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-selise-white sm:text-4xl">
            Ready to transform your document workflow?
          </h2>
          <p className="mt-6 font-body text-lg leading-8 text-selise-blue-light text-comfortable">
            Join thousands of businesses who&apos;ve made the switch to faster, simpler e-signatures. 
            Start free today and see why most users never need to upgrade.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/start"
              className="rounded-md bg-selise-white px-6 py-3 text-base font-semibold text-selise-blue shadow-sm hover:bg-selise-grey-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-selise-white"
            >
              Start Free Account
            </Link>
            <Link
              href="/contact"
              className="font-body text-base font-semibold leading-6 text-selise-white hover:text-selise-blue-light"
            >
              Talk to Oliver <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-x-8 text-selise-blue-light">
            <div className="flex items-center gap-x-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              <span className="font-body text-sm">No credit card required</span>
            </div>
            <div className="flex items-center gap-x-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              <span className="font-body text-sm">Setup in under 60 seconds</span>
            </div>
            <div className="flex items-center gap-x-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              <span className="font-body text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
