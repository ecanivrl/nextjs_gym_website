import HeroSlider from './slider/HeroSlider';

const Hero = () => {
  return (
    <section
      className="h-[80vh] lg:h-[912px] bg-barbell bg-cover bg-center bg-no-repeat"
      id="home"
    >
      <div className="container mx-auto h-full">
        {/* Slider */}
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;

//
