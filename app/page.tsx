import Navbar from '@/src/components/shared/Navbar';
import Hero from '@/src/components/home/Hero';
import Marquee from '@/src/components/home/Marquee';
import Features from '@/src/components/home/Features';
import Categories from '@/src/components/home/Categories';
import PopularProducts from '@/src/components/home/PopularProducts';
import Makeup from '@/src/components/home/Makeup';
import Reviews from '@/src/components/home/Reviews';
import Transformation from '@/src/components/home/Transformation';
import FAQ from '@/src/components/home/FAQ';
import Stories from '@/src/components/home/Stories';
import Newsletter from '@/src/components/home/Newsletter';
import Footer from '@/src/components/shared/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Categories />
      <PopularProducts />
      <Makeup />
      <Reviews />
      <Transformation />
      <FAQ />
      <Stories />
      <Newsletter />
      <Footer />
    </main>
  );
}
