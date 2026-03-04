'use client';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Container from '../ui/Container';
import { faqs } from '@/src/data/faqsData';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20">
      <Container className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="w-full lg:w-[652px] lg:h-[788px] flex flex-col">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            We've got the answers you need
          </h2>
          <p className="text-gray-600 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`transition-all duration-300 rounded-[12px] w-full lg:w-[652px] ${
                  openIndex === i
                    ? 'min-h-[136px] bg-cream px-6 flex flex-col justify-center mb-4'
                    : 'bg-transparent mb-4'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between text-left py-4 group"
                >
                  <span
                    className={`text-lg font-bold transition-colors ${
                      openIndex === i
                        ? 'text-[#1A1A1A]'
                        : 'text-gray-900 group-hover:text-primary'
                    }`}
                  >
                    {faq.question}
                  </span>
                  {openIndex === i ? (
                    <ChevronUp
                      size={24}
                      className="text-primary"
                      strokeWidth={1.5}
                    />
                  ) : (
                    <ChevronDown
                      size={24}
                      className="text-gray-400"
                      strokeWidth={1.5}
                    />
                  )}
                </button>
                {openIndex === i && (
                  <div className="pb-6 text-gray-600 leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block relative aspect-4/5 rounded-[3rem] overflow-hidden">
          <img
            src="/assets/images/faq.svg"
            alt="FAQ Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
