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
    <section className="py-16 sm:py-24 bg-selise-grey-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-base font-semibold leading-7 text-selise-blue">
            Pricing
          </h2>
          <p className="mt-2 font-heading text-4xl font-bold tracking-tight text-selise-black sm:text-5xl">
            You might never have to upgrade
          </p>
          <p className="mt-6 font-body text-lg leading-8 text-selise-grey text-comfortable mx-auto">
            Start free and scale when you need to. Our pricing is transparent, competitive, and designed to grow with you.
          </p>
        </div>

        <div className="mx-auto mt-18 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3 xl:gap-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-6 lg:p-8 ring-1 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'ring-selise-blue bg-selise-white shadow-xl lg:scale-105'
                  : 'ring-selise-grey bg-selise-white hover:ring-selise-blue hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center rounded-full bg-selise-blue px-4 py-2 text-sm font-medium text-selise-white shadow-lg border-2 border-selise-white opacity-100">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                <h3 className="font-heading text-xl font-bold leading-tight text-selise-black">
                  {plan.name}
                </h3>
                {plan.highlight && (
                  <span className="inline-flex text-xs font-medium text-selise-blue bg-selise-blue-light px-3 py-1.5 rounded-full whitespace-nowrap">
                    {plan.highlight}
                  </span>
                )}
              </div>

              <p className="font-body text-base leading-6 text-selise-grey mb-8">
                {plan.description}
              </p>

              <div className="flex items-baseline gap-x-2 mb-10">
                <span className="font-heading text-5xl lg:text-6xl font-bold tracking-tight text-selise-black">
                  {plan.price}
                </span>
                <span className="font-body text-base font-medium leading-6 text-selise-grey">
                  {plan.period}
                </span>
              </div>

              <Link
                href={plan.ctaHref}
                className={`mb-10 block w-full rounded-lg px-6 py-4 text-center font-subhead text-base font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.popular
                    ? 'bg-selise-blue text-selise-white shadow-md hover:bg-selise-blue-hover hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-selise-blue'
                    : 'bg-selise-white text-selise-blue ring-2 ring-inset ring-selise-blue hover:bg-selise-blue-light hover:ring-selise-blue-hover hover:-translate-y-0.5 focus-visible:outline-selise-blue'
                }`}
              >
                {plan.cta}
              </Link>

              <ul role="list" className="space-y-4 text-base leading-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-4 items-start">
                    <svg className="h-6 w-6 flex-none text-selise-blue mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="font-body text-selise-grey-dark">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-18 text-center">
          <div className="mx-auto max-w-2xl">
            <p className="font-body text-lg text-selise-grey text-comfortable">
              All plans include unlimited revisions, mobile access, and our signature ease-of-use. 
            </p>
            <p className="mt-6 font-body text-lg text-selise-grey">
              Questions about pricing? <Link href="/contact" className="text-selise-blue hover:text-selise-blue-hover font-medium underline decoration-2 underline-offset-4">Talk to Oliver</Link> for personalized guidance, or <Link href="/contact" className="text-selise-blue hover:text-selise-blue-hover font-medium underline decoration-2 underline-offset-4">contact our team</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
