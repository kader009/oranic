import Link from 'next/link';
import Container from '../ui/Container';
import { categories } from '@/src/data/categoryData';

const Categories = () => {
  return (
    <section className="py-20 bg-cream/30">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Choose by category</h2>
          <Link
            href="/shop"
            className="text-primary font-bold border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group cursor-pointer relative aspect-3/4 rounded-3xl overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
