export default function Testimonials() {
  const testimonials = [
    {
      content: "SELISE Signature completely transformed how we handle contracts. What used to take days now takes minutes. The interface is so intuitive that our entire team adopted it immediately.",
      author: {
        name: "Sarah Chen",
        role: "Operations Director",
        company: "TechFlow Solutions",
        image: "/api/placeholder/64/64"
      }
    },
    {
      content: "We switched from DocuSign and couldn't be happier. Same powerful features, better pricing, and the customer support is exceptional. Our clients love how smooth the signing process is.",
      author: {
        name: "Michael Rodriguez",
        role: "Legal Counsel",
        company: "Meridian Group",
        image: "/api/placeholder/64/64"
      }
    },
    {
      content: "The free tier has been perfect for our startup. Three documents per month covers most of our needs, and knowing we can scale seamlessly when we grow gives us peace of mind.",
      author: {
        name: "Emily Watson",
        role: "Co-founder",
        company: "InnovateLab",
        image: "/api/placeholder/64/64"
      }
    },
    {
      content: "As a freelancer, I needed something simple and cost-effective. SELISE Signature delivers professional results without the enterprise complexity. My clients are always impressed.",
      author: {
        name: "David Park",
        role: "Freelance Consultant",
        company: "Park Consulting",
        image: "/api/placeholder/64/64"
      }
    },
    {
      content: "The API integration was seamless. We embedded e-signatures directly into our platform, and our customers haven't looked back. It's become a key differentiator for us.",
      author: {
        name: "Alex Thompson",
        role: "CTO",
        company: "CloudBridge",
        image: "/api/placeholder/64/64"
      }
    },
    {
      content: "Security and compliance were our top concerns. SELISE Signature exceeded our expectations with bank-level encryption and comprehensive audit trails. Highly recommended.",
      author: {
        name: "Jennifer Kim",
        role: "Compliance Officer",
        company: "SecureVault Financial",
        image: "/api/placeholder/64/64"
      }
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-selise-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-lg font-semibold leading-8 tracking-tight text-selise-blue">
            Testimonials
          </h2>
          <p className="mt-2 font-heading text-3xl font-bold tracking-tight text-selise-black sm:text-4xl">
            Trusted by thousands of businesses
          </p>
          <p className="mt-6 font-body text-lg leading-8 text-selise-grey text-comfortable">
            From startups to enterprises, see why teams choose SELISE Signature for their document signing needs.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, testimonialIdx) => (
            <div 
              key={testimonialIdx}
              className="bg-selise-grey-light rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex gap-x-1 text-selise-blue mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>

              <blockquote className="font-body text-lg leading-7 text-selise-black mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              <div className="flex items-center gap-x-4">
                <div className="h-12 w-12 rounded-full bg-selise-blue-light flex items-center justify-center">
                  <span className="font-heading text-lg font-semibold text-selise-blue">
                    {testimonial.author.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-subhead font-semibold text-selise-black">
                    {testimonial.author.name}
                  </div>
                  <div className="font-body text-sm text-selise-grey">
                    {testimonial.author.role}
                  </div>
                  <div className="font-body text-sm text-selise-blue">
                    {testimonial.author.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
