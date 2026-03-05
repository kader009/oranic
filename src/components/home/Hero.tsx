import Image from 'next/image';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import Container from '../ui/Container';

const Hero = () => {
  return (
    <section className="relative h-[960px] w-full overflow-hidden bg-cream">
      {/* Background Image acts as a responsive size block */}
      <Image
        src="/assets/images/banner.svg"
        alt="Natural Beauty"
        fill
        className="object-cover object-[center_80%]"
        priority
      />

      {/* Overlay Content & Product Card */}
      <div className="absolute inset-0 flex items-end pb-[40px]">
        <Container className="relative z-10 w-full flex justify-between items-end">
          {/* Left Side: Text Content */}
          <div className=" text-white">
            <h1 className="text-[80px] font-bold leading-[1.1] mb-[12px]">
              Natural Makeup <br /> For Radiant Skin
            </h1>
            <p className="text-[24px] font-regular mb-[20px]">
              Ponds face wash for women removes all traces of pollution, dirt,
              and <br /> impurities to give you a fresh and clean complexion.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white w-[217px] h-[66px] rounded-[44px] flex items-center justify-center gap-2 transition-all transform hover:scale-105 font-medium text-[28px]">
              Shop Now
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Right Side: Product Card Overlay */}
          <div className="hidden lg:block animate-fade-in-up">
            <div className="bg-white p-[20px] rounded-[16px] w-[340px] h-[388px] flex flex-col shadow-2xl">
              <div className="flex justify-between items-start mb-[20px]">
                <div>
                  <h3 className="text-[#1A1A1A] font-regular text-[24px] mb-1">
                    Cucumber Extract
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[24px] font-bold text-[#1A1A1A]">
                      $24.00
                    </span>
                    <span className="text-[16px] text-[#737373] line-through">
                      $32.00
                    </span>
                  </div>
                </div>
                <button className="w-[48px] h-[48px] rounded-full border border-[#E5E5E5] flex items-center justify-center text-primary hover:bg-primary/5 transition-colors">
                  <ArrowUpRight size={20} />
                </button>
              </div>
              <div className="w-full flex-1 rounded-[12px] overflow-hidden relative border border-[#F5F5F5]">
                <Image
                  src="/assets/images/makeup2.svg"
                  alt="Product"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
