import { Search, ShoppingBag, User, ChevronDown } from 'lucide-react';
import Container from '../ui/Container';
import Link from 'next/link';

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
          <Link
            href="#"
            className="group relative cursor-pointer hover:text-primary flex items-center gap-[8px] text-[24px] font-normal"
          >
            Category
            <ChevronDown size={24} />
          </Link>
          <Link
            href="#"
            className="group relative cursor-pointer hover:text-primary flex items-center gap-[8px] text-[24px] font-normal"
          >
            Shop
            <ChevronDown size={24} />
          </Link>
          <Link
            href="#"
            className="group relative cursor-pointer hover:text-primary flex items-center gap-[8px] text-[24px] font-normal"
          >
            Offer
            <ChevronDown size={24} />
          </Link>
          <Link
            href="#"
            className="group relative cursor-pointer hover:text-primary flex items-center gap-[8px] text-[24px] font-normal"
          >
            Pages
            <ChevronDown size={24} />
          </Link>
        </div>

        {/* Icons */}
        <div className="flex-1 flex items-center justify-end gap-[32px]">
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
