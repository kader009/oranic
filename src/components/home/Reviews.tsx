import Image from 'next/image';
import Container from '../ui/Container';

const Reviews = () => {
  return (
    <section className="py-20 px-20 bg-cream">
      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Testimonial */}
        <div className="order-2 lg:order-1 w-[497px] h-[773px] flex flex-col justify-start">
          <h2 className="text-[56px] font-medium mb-[177px] mt-0">
            Customer Reviews!
          </h2>
          <div className="relative">
            <p className="text-[28px] font-regular text-[#1A1A1A] mb-8">
              “I’ve been using this cream for three weeks now, and the results
              are simply amazing. My skin has become more moisturized, supple,
              and radiant. The texture is light, absorbs quickly, and doesn’t
              leave a greasy shine.”
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/assets/images/review2.svg"
                  alt="Reviewer"
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h4 className="font-medium text-[28px] text-[#222222]">Ashley</h4>
                <div className="flex items-center gap-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <p className="text-[28px] text-primary font-medium">5.0</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons from Categories */}
            <div className="flex gap-[10px] mt-[177px]">
              <button className="w-[48px] h-[48px] rounded-[35px] border border-[#E5E5E5] bg-transparent text-[#1A1A1A] flex items-center justify-center cursor-pointer hover:border-primary hover:text-primary transition-all duration-300 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>
              </button>
              <button className="w-[48px] h-[48px] rounded-[35px] border border-[#E5E5E5] bg-transparent text-[#1A1A1A] flex items-center justify-center cursor-pointer hover:border-primary hover:text-primary transition-all duration-300 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="relative order-1 lg:order-2">
          <div className="relative aspect-4/5 rounded-[3rem] overflow-hidden">
            <Image
              src="/assets/images/review1.svg"
              alt="Review Context"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlapping Product Card */}
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-[16px] flex flex-col items-center justify-start w-[281px] h-[382px]">
            <div className="w-[265px] h-[260px] rounded-[12px] relative overflow-hidden mb-[16px]">
              {/* Discount Badge */}
              <div className="absolute top-0 left-0 bg-primary w-[93px] h-[42px] rounded-br-[16px] flex items-center justify-center z-10">
                <span className="text-white font-bold">10%</span>
              </div>
              <Image
                src="/assets/images/popular.svg"
                alt="Review Product"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full mt-auto pb-[16px] px-2">
              <h4 className="font-regular text-[20px] mb-[4px]">
                Cucumber Extract
              </h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[24px]">$24.00</span>
                  <span className="text-[#737373] font-regular text-[16px]">
                    $32.00
                  </span>
                </div>
                <button className="bg-primary text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
