import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Container from '../ui/Container';

const Makeup = () => {
  return (
    <section className="relative h-[788px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/images/makeup.svg"
        alt="Natural Makeup"
        fill
        className="object-cover"
        priority
      />

      <Container className="relative h-full flex items-end justify-between pb-[40px]">
        {/* Bottom Left: Product Card and Indicators */}
        <div className="z-20 flex flex-col gap-[20px]">
          <div className="bg-white p-[20px] rounded-[16px] w-[439px] h-[388px] flex flex-col">
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

          <div className="flex gap-3 z-10 w-full">
            <div className="h-[8px] flex-1 bg-primary rounded-full" />
            <div className="h-[8px] flex-1 bg-white rounded-full" />
            <div className="h-[8px] flex-1 bg-white rounded-full" />
            <div className="h-[8px] flex-1 bg-white rounded-full" />
          </div>
        </div>

        {/* Bottom Right: Hero Text */}
        <div className="text-right z-10">
          <h1 className="text-white text-[56px] font-medium leading-[1.1] max-w-[500px]">
            Natural Makeup <br /> For Radiant Skin
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default Makeup;
