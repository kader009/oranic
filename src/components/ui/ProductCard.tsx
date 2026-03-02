import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  category: string;
  image: string;
  rating?: number;
}

const ProductCard = ({
  name,
  price,
  category,
  image,
  rating = 5,
}: ProductCardProps) => {
  return (
    <div className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-cream mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white">
          <ShoppingCart size={18} />
        </button>
      </div>

      <div className="px-1">
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">
          {category}
        </p>
        <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
          {name}
        </h3>

        <div className="flex items-center gap-2 my-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < rating ? 'currentColor' : 'none'}
                className={i < rating ? '' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-xs text-gray-400">(4.8)</span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <p className="font-bold text-lg text-primary">{price}</p>
          <button className="text-xs font-bold text-gray-900 border-b border-gray-900 hover:text-primary hover:border-primary transition-all">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
