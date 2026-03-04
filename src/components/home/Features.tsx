import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: '🌿',
      title: 'Clean Ingredients',
      desc: 'No parabens, sulfates, or harsh chemicals',
    },
    {
      icon: '🔬',
      title: 'Science-Backed',
      desc: 'Clinically tested & dermatologist approved',
    },
    {
      icon: '♻️',
      title: 'Sustainable',
      desc: 'Eco-conscious packaging & sourcing',
    },
    {
      icon: '🐰',
      title: 'Cruelty-Free',
      desc: 'Never tested on animals',
    },
  ];

  return (
    <section className="bg-white overflow-hidden">
      <div className="flex justify-end items-center gap-[40px]">
        {/* Left Side: Content */}
        <div className="w-[628px] h-[894px] flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
            Rooted in science.
            <br />
            Inspired by nature.
          </h2>

          <div className="grid sm:grid-cols-2 gap-y-10 gap-x-8">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-[52px] h-[54px] bg-cream flex items-center justify-center rounded-[8px]">
                  <span className="w-[28px] h-[34px] flex justify-center items-center">
                    {f.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-8">
            <button className="bg-primary text-white w-fit px-10 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95">
              Learn More
            </button>

            <div className="flex items-center">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-[50px] h-[50px] rounded-full border-2 border-white overflow-hidden bg-gray-100 shadow-sm"
                  >
                    <Image
                      src={`/assets/images/Ellipse${i}.svg`}
                      alt={`User ${i}`}
                      width={50}
                      height={50}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-[50px] h-[50px] rounded-full border-2 border-white bg-primary flex items-center justify-center shadow-sm text-white">
                  <ArrowUpRight size={20} strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative w-[692px] h-[894px] overflow-hidden shrink-0">
          <Image
            src="/assets/images/feature.svg"
            alt="Inspired by Nature"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
