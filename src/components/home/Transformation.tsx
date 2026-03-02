import Image from 'next/image';
import Container from '../ui/Container';

const Transformation = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <Container>
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl group">
          <Image
            src="/assets/images/transformation.png"
            alt="Skin Transformation"
            fill
            className="object-cover"
          />

          {/* Overlay Labels */}
          <div className="absolute inset-0 flex justify-between items-center px-8 md:px-20 pointer-events-none">
            <div className="bg-black/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30">
              <span className="text-white font-bold uppercase tracking-widest text-sm">
                Before
              </span>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30">
              <span className="text-white font-bold uppercase tracking-widest text-sm">
                After
              </span>
            </div>
          </div>

          {/* Center Slider Line (Decorative) */}
          <div className="absolute inset-y-0 left-1/2 w-1 bg-white/50 backdrop-blur-sm -translate-x-1/2 flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
              <div className="flex gap-1">
                <span className="w-1 h-3 bg-primary rounded-full"></span>
                <span className="w-1 h-3 bg-primary rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Transformation;
