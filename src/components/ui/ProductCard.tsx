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
  image,
}: Omit<ProductCardProps, 'category' | 'rating'>) => {
  return (
    <div className="group bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-cream mb-6">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-primary transition-colors">
          {name}
        </h3>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">{price}</span>
            <del className="text-gray-400 text-sm">$32.00</del>
          </div>
          <button className="px-5 py-2.5 rounded-full border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 text-sm whitespace-nowrap">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
