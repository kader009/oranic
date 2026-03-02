import Link from 'next/link';
import Container from '../ui/Container';

const Stories = () => {
  const blogs = [
    {
      title: 'The morning routine for glowing skin',
      date: 'Oct 23, 2024',
      image:
        'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=400',
    },
    {
      title: 'Natural oils vs synthetic serums',
      date: 'Oct 20, 2024',
      image:
        'https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=400',
    },
    {
      title: 'Choosing the right cleanser for you',
      date: 'Oct 15, 2024',
      image:
        'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Stories</h2>
          <Link
            href="/blogs"
            className="text-primary font-bold border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity"
          >
            Read More
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-gray-900 shadow-lg">
                  New
                </div>
              </div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">
                {blog.date}
              </p>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight mb-4">
                {blog.title}
              </h3>
              <Link
                href="#"
                className="text-sm font-bold border-b border-gray-900 hover:text-primary hover:border-primary transition-all inline-block mt-2"
              >
                Read Article
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stories;
