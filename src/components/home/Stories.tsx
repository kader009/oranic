import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Container from '../ui/Container';
import { blogs } from '@/src/data/blogsData';

const Stories = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-[56px] font-medium leading-tight text-[#222222]">
            Our Stories
          </h2>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="group cursor-pointer">
              <div className="rounded-[32px] overflow-hidden mb-6">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={410}
                  height={446}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="flex items-center gap-[10px] mb-3">
                <div className="w-3 h-3 bg-[#222222] rounded-full" />
                <span className="text-[16px] font-semibold text-[#222222]">
                  {blog.category}
                </span>
              </div>

              <h3 className="text-[32px] font-regular text-[#222222] group-hover:text-primary transition-colors mb-4 line-clamp-2">
                {blog.title}
              </h3>

              <Link
                href="#"
                className="flex items-center gap-1 text-primary font-medium text-[24px] hover:gap-2 transition-all duration-300"
              >
                Read More
                <ChevronRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stories;
