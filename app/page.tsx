import About from '@/components/home/About';
import Blog from '@/components/home/Blog';
import Brands from '@/components/home/Brands';
import Classes from '@/components/home/Classes';
import Hero from '@/components/home/Hero';
import Location from '@/components/home/Location';
import Membership from '@/components/home/Membership';
import Team from '@/components/home/Team';
import Testimonial from '@/components/home/Testimonial';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      <Team />
      <Membership />
      <Testimonial />
      <Blog />
      <Brands />
      <Location />
      {/* temporary div */}
      {/* <div className="h-[3000px]"></div> */}
    </main>
  );
}
