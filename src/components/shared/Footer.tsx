import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  PinIcon as Pinterest,
} from 'lucide-react';
import Container from '../ui/Container';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      <Container>
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8 tracking-tighter">ORANIC</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs">
              Natural skin care products made with pure organic ingredients for
              your radiant beauty and wellness.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-primary transition-all flex items-center justify-center border border-white/20"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-primary transition-all flex items-center justify-center border border-white/20"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-primary transition-all flex items-center justify-center border border-white/20"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-primary transition-all flex items-center justify-center border border-white/20"
              >
                <Pinterest size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-secondary">
              Shop
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Face Care
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Body Care
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Eye Care
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-secondary">
              About
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Ingredients
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-secondary">
              Legal
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Huge Logo Watermark */}
        <div className="relative text-center select-none pointer-events-none mb-12">
          <h1 className="text-[12vw] font-bold leading-none opacity-[0.03] tracking-tighter">
            ORANIC
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs font-medium">
            © 2024 Oranic Skincare. All rights reserved. Built with ❤️ for
            Radiant Skin.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/40">
            <Link href="#" className="hover:text-white transition-colors">
              Sitemap
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
