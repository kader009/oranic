import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { features } from '@/src/data/featureData';
import Container from '../ui/Container';

const Features = () => {
  return (
    <section className="bg-white relative w-full overflow-hidden h-auto xl:h-[894px] flex items-center">
      <Container className="h-full flex items-center justify-start z-10 relative py-[80px] xl:py-0">
        {/* Left Side: Content */}
        <div className="w-full xl:w-[628px] xl:h-[894px] flex flex-col justify-center shrink-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
            Rooted in science.
            <br />
            Inspired by nature.
          </h1>

          <div className="grid sm:grid-cols-2 gap-[24px]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="w-[302px] h-[212px] bg-white rounded-[12px] p-[16px] flex flex-col justify-between"
              >
                <div className="w-[52px] h-[54px] bg-cream flex items-center justify-center rounded-[8px]">
                  <span className="w-[28px] h-[38px] flex justify-center items-center text-[28px] leading-none">
                    {feature.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-[28px] mb-[8px]">
                    {feature.title}
                  </h3>
                  <p className="text-[#737373] text-[20px] leading-relaxed whitespace-pre-line font-regular">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-[32px]">
            <button className="bg-primary text-white w-[192px] h-[66px] rounded-[44px] flex justify-center items-center font-medium text-[28px] hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95 cursor-pointer">
              Learn more
            </button>

            <div className="flex items-center">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((itemIndex) => (
                  <div
                    key={itemIndex}
                    className="w-[50px] h-[50px] rounded-full border-2 border-primary overflow-hidden"
                  >
                    <Image
                      src={`/assets/images/top${itemIndex}.svg`}
                      alt={`User ${itemIndex}`}
                      width={50}
                      height={50}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-[50px] h-[50px] rounded-full border-2 border-primary bg-primary flex items-center justify-center text-white">
                  <ArrowUpRight size={20} strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Right Side: Image */}
      <div className="hidden xl:block absolute right-0 top-0 w-[692px] h-[894px] overflow-hidden pointer-events-none">
        <Image
          src="/assets/images/feature.svg"
          alt="Inspired by Nature"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Features;
