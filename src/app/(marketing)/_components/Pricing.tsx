import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for personal use and small projects',
      features: [
        '3 documents per month',
        'Basic e-signature functionality',
        'Email notifications',
        'Mobile app access',
        'Standard templates',
        '24/7 customer support'
      ],
      cta: 'Start Free',
      ctaHref: '/start',
      popular: false,
      highlight: 'Most users never need to upgrade'
    },
    {
      name: 'Professional',
      price: '$25',
      period: 'per month',
      description: 'For growing businesses and teams',
      features: [
        'Unlimited documents',
        'Advanced workflow automation',
        'Custom branding',
        'Team collaboration',
        'Advanced templates',
        'API access',
        'Priority support',
        'Bulk send operations',
        'Advanced analytics'
      ],
      cta: 'Start Professional',
      ctaHref: '/start',
      popular: true,
      highlight: 'Same price as DocuSign'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations with specific needs',
      features: [
        'Everything in Professional',
        'Custom integrations',
        'Dedicated account manager',
        'On-premise deployment',
        'Advanced security features',
        'Custom SLA',
        'Training and onboarding',
        'White-label solutions'
      ],
      cta: 'Talk to Oliver',
      ctaHref: '/contact',
      popular: false,
      highlight: 'We\'ve got your back when you scale'
    }
  ];

  return (
    <section className="py-24 bg-selise-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-selise-black mb-6">
            Simple, transparent pricing
          </h2>
          <p className="font-body text-xl text-selise-grey-dark leading-relaxed">
            You might never have to upgrade, but we&apos;ve got your back when you scale.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'border-selise-blue bg-selise-blue-light shadow-lg scale-105'
                  : 'border-selise-grey-light bg-selise-white hover:border-selise-blue hover:shadow-lg'
              }`}
            >

              {/* Plan Name & Highlight */}
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold text-selise-black mb-3">
                  {plan.name}
                </h3>
                {plan.highlight && (
                  <p className="text-sm text-selise-blue font-semibold bg-selise-blue-light px-3 py-1 rounded-full inline-block">
                    {plan.highlight}
                  </p>
                )}
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline mb-3">
                  <span className="font-heading text-5xl lg:text-6xl font-bold text-selise-black">
                    {plan.price}
                  </span>
                  <span className="ml-3 text-lg font-medium text-selise-grey-dark">
                    {plan.period}
                  </span>
                </div>
                <p className="text-selise-grey-dark leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href={plan.ctaHref}
                className={`block w-full text-center py-4 px-6 rounded-xl font-subhead text-base font-semibold transition-all duration-200 mb-8 ${
                  plan.popular
                    ? 'bg-selise-blue text-selise-white hover:bg-selise-blue-hover shadow-md hover:shadow-lg'
                    : 'bg-selise-black text-selise-white hover:bg-selise-grey-dark'
                }`}
              >
                {plan.cta}
              </Link>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-selise-blue mt-1 mr-4 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-selise-black font-medium leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="bg-selise-grey-light rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-selise-black font-medium text-lg mb-4">
              All plans include unlimited revisions, mobile access, and our signature ease-of-use.
            </p>
            <p className="text-selise-grey-dark">
              Questions about pricing? {' '}
              <Link
                href="/contact"
                className="text-selise-blue hover:text-selise-blue-hover font-semibold underline decoration-2 underline-offset-4"
              >
                Talk to Oliver
              </Link>
              {' '} for personalized guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
