import Link from 'next/link';
import { Search, ShoppingBag, User } from 'lucide-react';
import Container from '../ui/Container';

const Navbar = () => {
  return (
    <nav className="">
      <Container className="flex items-center justify-between px-4 md:px-0">
        {/* Logo */}
        <div className="flex-1 font-medium text-[48px] tracking-tighter text-primary">
          ORANIC
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700">
          <div className="group relative cursor-pointer hover:text-primary flex items-center gap-1 text-[24px] font-normal">
            Category
            <span className="w-1.5 h-1.5 border-r border-b border-black rotate-45 mb-1 opacity-60"></span>
          </div>
          <div className="group relative cursor-pointer hover:text-primary flex items-center gap-1 text-[24px] font-normal">
            Shop
            <span className="w-1.5 h-1.5 border-r border-b border-black rotate-45 mb-1 opacity-60"></span>
          </div>
          <div className="group relative cursor-pointer hover:text-primary flex items-center gap-1 text-[24px] font-normal">
            Offer
            <span className="w-1.5 h-1.5 border-r border-b border-black rotate-45 mb-1 opacity-60"></span>
          </div>
          <div className="group relative cursor-pointer hover:text-primary flex items-center gap-1 text-[24px] font-normal">
            Pages
            <span className="w-1.5 h-1.5 border-r border-b border-black rotate-45 mb-1 opacity-60"></span>
          </div>
        </div>

        {/* Icons */}
        <div className="flex-1 flex items-center justify-end gap-5">
          <button className="text-gray-600 hover:text-primary cursor-pointer">
            <Search size={24} />
          </button>

          <button className="relative text-gray-600 hover:text-primary cursor-pointer">
            <ShoppingBag size={24} />
          </button>

          <button className="text-gray-600 hover:text-primary cursor-pointer">
            <User size={24} />
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
