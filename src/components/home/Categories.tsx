import Image from 'next/image';
import Container from '../ui/Container';
import { categories } from '@/src/data/categoryData';

const Categories = () => {
  return (
    <section className="py-20 bg-cream">
      <Container>
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-[56px] font-bold">Choose by category</h1>
          <div className="flex gap-[10px]">
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer relative rounded-[16px] overflow-hidden shadow-sm"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={302}
                height={400}
                className="w-full object-cover transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-60 transition-opacity duration-500" />

              {/* Hover Arrow Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                <div className="w-[88px] h-[88px] rounded-full bg-[#FFFFFF26] border border-white backdrop-blur-[15px] text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>

              {/* Category Name Glassmorphism Box */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                <div className="w-[270px] h-[72px] bg-white/10 backdrop-blur-[25px] rounded-[12px] flex items-center justify-start px-6 text-white">
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest">
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
