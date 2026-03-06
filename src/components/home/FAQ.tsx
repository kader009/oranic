'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import { faqs } from '@/src/data/faqsData';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="py-[118px]">
      <Container className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="w-full lg:w-[652px] lg:h-[788px] flex flex-col">
          <h1 className="text-[56px] font-medium mb-[8px] text-[#222222] leading-tight">
            We&apos;ve got the answers you need
          </h1>
          <p className="text-[#737373] text-[24px] mb-[40px] font-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="flex flex-col gap-[16px]">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`transition-all duration-300 rounded-[12px] w-full lg:w-[652px] ${
                  openIndex === faq.id
                    ? 'min-h-[136px] bg-cream px-6 flex flex-col justify-center'
                    : 'bg-transparent px-6'
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === faq.id ? null : faq.id)
                  }
                  className="w-full flex items-center justify-between text-left py-4 group"
                >
                  <span
                    className={`text-[24px] font-medium transition-colors ${
                      openIndex === faq.id
                        ? 'text-[#222222]'
                        : 'text-[#222222] group-hover:text-primary'
                    }`}
                  >
                    {faq.question}
                  </span>
                  {openIndex === faq.id ? (
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
                {openIndex === faq.id && (
                  <div className="pb-6 text-[#737373] text-[16px] font-regular leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block w-[588px] h-[788px] rounded-[40px] overflow-hidden shrink-0 relative">
          <Image
            src="/assets/images/faq.svg"
            alt="FAQ Illustration"
            fill
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
