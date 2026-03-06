import Image from 'next/image';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import Container from '../ui/Container';

const Newsletter = () => {
  return (
    <section className="pt-20 bg-cream">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-6 justify-center mb-[80px]">
          {/* Left Content */}
          <div className="w-full lg:w-[628px] h-[400px] lg:h-[684px] bg-primary rounded-[40px] px-[48px] py-[133px] text-white text-center md:text-left flex flex-col justify-center">
            <p className="text-[24px] font-regular">Expert skin care</p>
            <h1 className="text-[56px] font-bold mb-8">
              Redefine timeless beauty with our care
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
              <button className="bg-white text-primary w-[217px] h-[66px] rounded-[44px] font-medium hover:bg-secondary transition-all active:scale-95 cursor-pointer whitespace-nowrap flex items-center justify-center gap-[10px] text-[28px]">
                Shop Now
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((avatarIndex) => (
                  <div
                    key={avatarIndex}
                    className="w-[61px] h-[61px] rounded-full border-2 border-white overflow-hidden bg-gray-100 shadow-lg"
                  >
                    <Image
                      src={`/assets/images/Ellipse${avatarIndex}.svg`}
                      alt={`User ${avatarIndex}`}
                      width={61}
                      height={61}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-[61px] h-[61px] rounded-full border-2 border-white bg-white flex items-center justify-center shadow-lg text-primary">
                  <ArrowUpRight size={28} strokeWidth={1.5} />
                </div>
              </div>
              <p className="flex flex-col">
                <span className="font-bold text-[40px]">12k+</span>{' '}
                <span className="text-[20px] font-medium">
                  Customers Rating
                </span>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-[628px] h-[400px] lg:h-[684px] rounded-[40px] overflow-hidden">
            <Image
              src="/assets/images/newsimage.svg"
              alt="Newsletter Promo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="py-[40px] flex justify-center gap-6">
          <Image
            src="/assets/images/news1.svg"
            width={302}
            height={337}
            alt="Newsletter Promo"
            className="w-full h-full object-cover rounded-[24px]"
          />
          <Image
            src="/assets/images/news2.svg"
            width={302}
            height={337}
            alt="Newsletter Promo"
            className="w-full h-full object-cover rounded-[24px]"
          />
          <Image
            src="/assets/images/news3.svg"
            width={302}
            height={337}
            alt="Newsletter Promo"
            className="w-full h-full object-cover rounded-[24px]"
          />
          <Image
            src="/assets/images/news4.svg"
            width={302}
            height={337}
            alt="Newsletter Promo"
            className="w-full h-full object-cover rounded-[24px]"
          />
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
