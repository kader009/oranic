import Image from 'next/image';
import Container from '../ui/Container';

const Newsletter = () => {
  return (
    <section className="py-20 bg-cream">
      <Container>
        <div className="bg-primary rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center shadow-2xl">
          {/* Left Content */}
          <div className="flex-1 p-8 md:p-16 text-white text-center md:text-left">
            <span className="text-secondary font-bold uppercase tracking-[.2em] text-sm mb-4 block animate-bounce-slow">
              Special Offer
            </span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Exclusive shadows <br /> beauty with skin care
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-medium"
              />
              <button className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-secondary transition-all active:scale-95 shadow-xl">
                Subscribe
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden bg-gray-200 shadow-lg"
                  >
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/80 font-bold">
                Over 2,500 subscribers already joined us!
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto self-stretch relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1590159763121-7f9fd31219af?auto=format&fit=crop&q=80&w=800"
              alt="Newsletter Promo"
              className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-125"
            />
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent pointer-events-none" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
