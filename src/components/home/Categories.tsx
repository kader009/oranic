import Link from 'next/link';
import Container from '../ui/Container';

const Categories = () => {
  const categories = [
    {
      name: 'Face',
      image:
        'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=400',
      count: '24 Products',
    },
    {
      name: 'Body',
      image:
        'https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=400',
      count: '18 Products',
    },
    {
      name: 'Eyes',
      image:
        'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400',
      count: '12 Products',
    },
    {
      name: 'Lip',
      image:
        'https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&q=80&w=400',
      count: '15 Products',
    },
  ];

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
              className="group cursor-pointer relative aspect-[3/4] rounded-3xl overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{cat.name}</h3>
                <p className="text-sm opacity-80">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
