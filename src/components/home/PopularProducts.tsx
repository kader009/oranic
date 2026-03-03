import Link from 'next/link';
import Container from '../ui/Container';
import ProductCard from '../ui/ProductCard';
import { products } from '@/src/data/productData';

const PopularProducts = () => {
  const filters = ['Free care', 'Body Care', 'Hair Care', 'Organic'];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="mb-12">
          <h2 className="text-[48px] md:text-[56px] font-bold mb-8 leading-tight">
            Popular Products
          </h2>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-4">
              {filters.map((filter, i) => (
                <button
                  key={i}
                  className={`px-8 py-3 rounded-full text-base font-bold transition-all cursor-pointer ${
                    i === 0
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white border border-[#E5E5E5] text-[#1A1A1A] hover:border-primary hover:text-primary'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <Link
              href="/shop"
              className="text-primary font-bold border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity w-fit"
            >
              View All
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularProducts;
