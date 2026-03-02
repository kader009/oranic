import Image from 'next/image';
import Container from '../ui/Container';

const Reviews = () => {
  return (
    <section className="py-20 bg-cream/20">
      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Testimonial */}
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Customer Reviews
          </h2>
          <div className="relative">
            <p className="text-2xl md:text-3xl font-medium text-gray-800 italic leading-relaxed mb-8">
              "The clarity, the smoothness and the scent - I love it! Since
              using this product, my skin looks and feels more healthy and
              hydrated. Highly recommend to everyone!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
                  alt="Reviewer"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Jane Doe</h4>
                <p className="text-sm text-gray-500">Verified Customer</p>
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="flex gap-2 mt-12">
              <div className="w-8 h-1 bg-primary rounded-full"></div>
              <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
              <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="relative order-1 lg:order-2">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="/assets/images/review_bg.png"
              alt="Review Context"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlapping Product Card */}
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-3xl shadow-2xl flex flex-col gap-3 w-48 animate-bounce-slow">
            <div className="aspect-square rounded-2xl bg-cream flex items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/review_prod.png"
                alt="Review Product"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-sm">Face Bright Serum</h4>
              <button className="mt-2 bg-primary text-white text-[10px] font-bold px-4 py-2 rounded-full w-full">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
