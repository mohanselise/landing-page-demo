'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Is it really free?',
    answer: 'Yes—use core e‑signing free for unlimited documents. Only upgrade if you need advanced or qualified signatures.'
  },
  {
    question: 'Do my signers need an account?',
    answer: 'No—your recipients can review and sign via a secure link sent to their email.'
  },
  {
    question: 'Is it legally valid?',
    answer: 'Yes—our Advanced and Qualified options meet EU eIDAS and Swiss ZertES requirements.'
  },
  {
    question: 'Can I upgrade later?',
    answer: 'Absolutely. Turn on Advanced or Qualified signing whenever your document requires it; your setup stays the same.'
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl text-selise-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-xl text-selise-grey leading-relaxed">
            Everything you need to know about SELISE Signature
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                  aria-expanded={isOpen}
                >
                  <span className="font-subhead text-lg text-selise-black pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-selise-grey transition-transform flex-shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isOpen && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="font-body text-selise-grey leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-selise-grey mb-6">
            Still have questions? We&apos;re here to help.
          </p>
          <button className="bg-selise-blue text-selise-white px-8 py-4 rounded-2xl font-subhead hover:bg-selise-blue-hover transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-selise-blue focus:ring-offset-2 shadow-lg hover:shadow-xl">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
