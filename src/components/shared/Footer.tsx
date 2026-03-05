import Link from 'next/link';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#5C6D1F] text-white pt-[40px] pb-[40px] pl-[80px] pr-[120px] overflow-hidden relative">
      <div className="max-w-[1240px] flex flex-col mx-auto relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))_374px] gap-[40px] mb-[40px]">
          {/* Link Columns */}
          {[
            {
              title: 'Products',
              links: [
                'Shop all',
                'Skin care',
                'Face care',
                'Body care',
                'Hair care',
              ],
            },
            {
              title: 'Information',
              links: ['About us', 'Blog', 'Contact'],
            },
            {
              title: 'More',
              links: [
                'Privacy policy',
                'Terms of service',
                'Shipping & returns',
              ],
            },
          ].map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className="text-[20px] font-medium mb-[20px]">
                {section.title}
              </h4>
              <ul className="space-y-[20px] text-[16px] font-regular">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="#"
                      className="hover:opacity-70 transition-opacity"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="text-[24px] mb-[12px]">
              Subscribe to our newsletter
            </h4>
            <div className="relative mb-[20px]">
              <div className="bg-white rounded-[999px] pt-[12px] pr-[12px] pb-[12px] pl-[24px] flex items-center justify-between w-[374px] h-[72px]">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-transparent border-none outline-none text-[#5C6D1F] w-[150px] h-[24px] text-[16px] placeholder:text-[#222222]"
                />
                <button className="bg-[#5C6D1F] text-white w-[110px] h-[48px] rounded-[44px] text-[16px] font-medium hover:bg-[#4A5819] transition-colors whitespace-nowrap flex items-center justify-center">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="22" cy="22" r="22" fill="#1877F2" />
                  <path
                    d="M26.5 22h-3.5v12h-5V22h-2.5v-4.5h2.5v-3c0-3.5 1.5-5.5 5.5-5.5h3.5v4.5h-2c-1.5 0-2 .5-2 1.5v2.5h4l-.5 4.5z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110"
              >
                <Instagram size={22} className="text-[#E4405F]" />
              </Link>
              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110"
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="#25D366"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.512-2.96-2.626-.087-.114-.708-.941-.708-1.793s.446-1.275.601-1.441c.155-.166.356-.206.474-.206.12 0 .241.001.345.005.112.005.263-.042.412.316.155.374.524 1.275.568 1.366.044.091.073.197.01.328-.063.13-.092.217-.181.322-.09.104-.187.233-.267.311-.091.09-.186.187-.08.369.105.182.467.771.999 1.242.684.604 1.261.791 1.444.882.183.09.293.076.402-.049.109-.125.467-.544.591-.734.124-.19.248-.158.412-.096l1.034.488c.164.081.272.12.311.19.04.07.04.401-.104.806z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#FF0000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider and Copyright Area */}
        <div>
          <div className="w-full h-px bg-[#E5E5E5]" />
          <div className="text-center">
            <p className="text-[14px] font-regular mt-[40px]">
              Copyright © 2026 Oranic. All Right Reserved
            </p>
          </div>
        </div>

        {/* Huge Logo Watermark */}
        <div className="relative w-full flex justify-center pointer-events-none select-none z-0 h-fit mt-[40px]">
          <h1 className="text-[300px] font-bold bg-[linear-gradient(180deg,#FFFFFF_37.75%,#607315_100%)] bg-clip-text text-transparent leading-[0.85] tracking-[0.001em] whitespace-nowrap scale-x-[1.02] transform origin-center">
            ORANIC
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
