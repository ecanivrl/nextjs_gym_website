'use client';
import CustomButton from '@/components/common/CustomButton';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/mousewheel';

// Import Swiper core and required modules
import { Autoplay, FreeMode, Mousewheel } from 'swiper/modules';
import SliderNavButtons from './SliderNavButtons';

// framer-motion
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const sliderList = [
  {
    id: 1,
    title: 'Where Hard',
    subTitle: 'work meets success',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus',
    buttonText: 'Get Started',
  },
  {
    id: 2,
    title: 'GYM',
    subTitle: 'work meets success',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribu',
    buttonText: 'Get Started',
  },
  {
    id: 3,
    title: 'Branch',
    subTitle: 'work meets success',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribu',
    buttonText: 'Get Started',
  },
  {
    id: 4,
    title: 'Set',
    subTitle: 'work  success',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus temporibus.',
    buttonText: 'Get Started',
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Mousewheel, FreeMode]}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      freeMode={true}
      loop={false}
      mousewheel={false}
      speed={700}
      className="h-full relative"
    >
      {sliderList.map((slider) => (
        <SwiperSlide key={slider.id}>
          <div className="h-full flex justify-end sm:pt-48 pt-36">
            <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
              <motion.h1
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.2 }}
                className="h1 text-center lg:text-left mb-2"
              >
                <span>{slider.title}</span> {slider.subTitle}
              </motion.h1>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.2 }}
                className="text-white italic text-center lg:text-left mb-4"
              >
                {slider.description}
              </motion.p>
              <motion.div
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.2 }}
              >
                <CustomButton
                  text={slider.buttonText}
                  containerStyles="w-[196px] h-[62px] bg-accent group relative cursor-pointer overflow-hidden bg-accent uppercase"
                />
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* slider nav buttons */}
      <SliderNavButtons
        containerStyles="relative lg:bottom-[280px] bottom-16 flex lg:justify-end justify-center w-full gap-2 z-50"
        buttonStyles="border border-accent text-white w-[56px] h-[56px] hover:bg-accent transition-all duration-300 flex justify-center items-center"
        iconStyles="text-white text-2xl"
      />
    </Swiper>
  );
};

export default HeroSlider;
