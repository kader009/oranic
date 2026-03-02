import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-cream">
      {/* Background Image */}
      <Image
        src="/assets/images/banner.svg"
        alt="Natural Beauty"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/10 flex items-center">
        <Container className="relative z-10">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 drop-shadow-lg">
              Natural Makeup <br /> For Radiant Skin
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-md drop-shadow-md">
              Discover our botanical-infused collection designed to enhance your
              natural glow with pure ingredients.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
              Shop Now
              <ArrowRight size={20} />
            </button>
          </div>
        </Container>
      </div>

      {/* Product Card Overlay (Bottom Right-ish) */}
      <div className="absolute right-[10%] bottom-[15%] hidden lg:block animate-fade-in-up">
        <div className="bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-[280px]">
          <div className="w-20 h-20 bg-cream rounded-xl overflow-hidden relative">
            <Image
              src="/assets/images/product.png"
              alt="Featured Product"
              fill
              className="object-contain p-2"
            />
          </div>
          <div>
            <p className="text-xs text-primary font-bold tracking-widest uppercase mb-1">
              New Release
            </p>
            <h3 className="font-bold text-gray-900 leading-tight">
              Hydrating Glow Serum
            </h3>
            <p className="text-primary font-bold mt-1">$45.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
