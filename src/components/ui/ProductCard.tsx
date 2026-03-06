import Image from 'next/image';
import { ProductCardProps } from '@/src/types/productCardProps';

const ProductCard = ({
  name,
  price,
  image,
  showTag,
}: Omit<ProductCardProps, 'category' | 'rating'>) => {
  return (
    <div className="group bg-white rounded-[16px] p-2 pb-4 border border-[#E5E5E5]">
      <div className="relative rounded-[12px] overflow-hidden bg-cream mb-2">
        {showTag && (
          <div className="absolute top-0 left-0 w-[93px] h-[42px] bg-primary z-10 rounded-br-[16px] flex items-center justify-center text-white font-bold">
            10%
          </div>
        )}
        <Image
          src={image}
          alt={name}
          width={286}
          height={260}
          className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="space-y-[4px]">
        <h3 className="text-[20px] font-normal text-[#1A1A1A] group-hover:text-primary transition-colors">
          {name}
        </h3>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-[24px] font-bold text-black">{price}</span>
            <del className="text-[#737373] text-[16px]">$32.00</del>
          </div>
          <button className="w-[109px] h-[48px] rounded-[44px] text-white font-medium bg-primary text-[16px]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
