import Image from 'next/image';
import { Leaf, Award, FlaskConical, ShieldCheck } from 'lucide-react';
import Container from '../ui/Container';

const Features = () => {
  const features = [
    {
      icon: <Leaf className="text-primary" size={24} />,
      title: 'Cruelty-free',
      desc: 'Our products are never tested on animals.',
    },
    {
      icon: <Award className="text-primary" size={24} />,
      title: 'Name-brand',
      desc: 'Trust in our award winning formulations.',
    },
    {
      icon: <FlaskConical className="text-primary" size={24} />,
      title: 'Formula',
      desc: 'Scientifically backed botanical extracts.',
    },
    {
      icon: <ShieldCheck className="text-primary" size={24} />,
      title: 'Non-toxic',
      desc: 'Safe for you and the planet.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
            Real ingredients, <br /> inspired by nature.
          </h2>

          <div className="grid sm:grid-cols-2 gap-y-10 gap-x-8">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-xl">
                  {f.icon}
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

          <button className="mt-12 bg-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95">
            Learn More
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
          <Image
            src="/assets/images/woman_nature.png"
            alt="Inspired by Nature"
            fill
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default Features;
