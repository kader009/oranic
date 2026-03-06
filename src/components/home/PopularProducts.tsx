import Link from 'next/link';
import Container from '../ui/Container';
import ProductCard from '../ui/ProductCard';
import { products } from '@/src/data/productData';

const PopularProducts = () => {
  const filters = ['Free Care', 'Body Care', 'Hair Care', 'Organic'];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="mb-[40px]">
          <h1 className="text-[56px] font-medium mb-[20px] leading-tight">
            Popular Products
          </h1>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-[10px]">
              {filters.map((filter, filterIndex) => (
                <button
                  key={filterIndex}
                  className={`w-[132px] h-[48px] rounded-[50px] text-[24px] font-medium transition-all cursor-pointer flex items-center justify-center whitespace-nowrap ${
                    filterIndex === 0
                      ? 'bg-primary text-white'
                      : 'bg-[#F7F7F7] text-[#1A1A1A] hover:bg-primary/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <Link
              href="#"
              className="w-[153px] h-[66px] flex items-center justify-center rounded-[44px] border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300 text-[28px]"
            >
              View All
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              showTag={product.id % 2 !== 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularProducts;
