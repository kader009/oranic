import Link from 'next/link';
import { Search, ShoppingCart, User } from 'lucide-react';
import Container from '../ui/Container';

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 py-4 border-b border-gray-100">
      <Container className="flex items-center justify-between px-4 md:px-0">
        {/* Logo */}
        <div className="flex-1 font-bold text-2xl tracking-tighter text-primary">
          ORANIC
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <div className="group relative cursor-pointer hover:text-primary flex items-center gap-1">
            Shop
            <span className="w-1.5 h-1.5 border-r border-b border-black rotate-45 mb-1 opacity-60"></span>
          </div>
          <Link href="/gift" className="hover:text-primary transition-colors">
            Gift
          </Link>
          <div className="group relative cursor-pointer hover:text-primary flex items-center gap-1">
            Page
            <span className="w-1.5 h-1.5 border-r border-b border-black rotate-45 mb-1 opacity-60"></span>
          </div>
        </div>

        {/* Icons */}
        <div className="flex-1 flex items-center justify-end gap-5">
          <button className="text-gray-600 hover:text-primary cursor-pointer">
            <Search size={20} />
          </button>
          <button className="text-gray-600 hover:text-primary cursor-pointer">
            <User size={20} />
          </button>
          <button className="relative text-gray-600 hover:text-primary cursor-pointer">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
              0
            </span>
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
