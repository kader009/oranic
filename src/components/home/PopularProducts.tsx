import Container from '../ui/Container';
import ProductCard from '../ui/ProductCard';

const PopularProducts = () => {
  const products = [
    {
      name: 'Radiance Face Oil',
      price: '$32.00',
      category: 'Skin Care',
      image:
        'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Botanical Cleanser',
      price: '$28.00',
      category: 'Skin Care',
      image:
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Vitamin C Serum',
      price: '$45.00',
      category: 'Skin Care',
      image:
        'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Moisturizing Cream',
      price: '$38.00',
      category: 'Skin Care',
      image:
        'https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Eye Recovery Gel',
      price: '$24.00',
      category: 'Eyes',
      image:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Organic Body Wash',
      price: '$19.00',
      category: 'Body',
      image:
        'https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Rose Water Toner',
      price: '$22.00',
      category: 'Face',
      image:
        'https://images.unsplash.com/photo-1594125354977-11fd675ae931?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Night Repair Balm',
      price: '$52.00',
      category: 'Skin Care',
      image:
        'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=400',
    },
  ];

  const filters = ['All', 'Hair Care', 'Skin Care', 'Oil'];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Popular Products</h2>
          <div className="flex flex-wrap gap-4">
            {filters.map((filter, i) => (
              <button
                key={i}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  i === 0
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-white border-2 border-primary text-primary px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all">
            Load More Products
          </button>
        </div>
      </Container>
    </section>
  );
};

export default PopularProducts;
