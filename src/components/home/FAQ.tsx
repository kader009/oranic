'use client'
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import Container from '../ui/Container';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is it suitable for all skin types?',
      a: 'Yes, our products are formulated with gentle botanical extracts that work harmoniously with all skin types, including sensitive skin.',
    },
    {
      q: 'How long until I see results?',
      a: 'Most users report a noticeable difference in hydration and glow within 7-14 days of consistent use.',
    },
    {
      q: 'Are your products 100% natural?',
      a: 'We use 98% naturally derived ingredients, with the remaining 2% being safe preservatives to ensure product stability.',
    },
    {
      q: 'Do you offer international shipping?',
      a: 'Yes, we ship to over 50 countries worldwide. Shipping times vary by location.',
    },
  ];

  return (
    <section className="py-20 bg-cream/10">
      <Container className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            We've got the answers you need
          </h2>
          <p className="text-gray-600 mb-10">
            Frequently asked questions about our products and services.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between text-left py-4 group"
                >
                  <span
                    className={`text-lg font-bold transition-colors ${openIndex === i ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}
                  >
                    {faq.q}
                  </span>
                  {openIndex === i ? (
                    <Minus size={20} className="text-primary" />
                  ) : (
                    <Plus size={20} className="text-gray-400" />
                  )}
                </button>
                {openIndex === i && (
                  <div className="pb-4 text-gray-600 leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1556228578-0d8db6709159?auto=format&fit=crop&q=80&w=600"
            alt="FAQ Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
