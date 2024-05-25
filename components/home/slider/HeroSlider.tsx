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

const sliderList = [
  {
    id: 1,
    title: 'Where Hard',
    subTitle: 'work meets success',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perferendis.',
    buttonText: 'Get Started',
  },
  {
    id: 2,
    title: 'GYM',
    subTitle: 'work meets success',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus temporibus.',
    buttonText: 'Get Started',
  },
  {
    id: 3,
    title: 'Branch',
    subTitle: 'work meets success',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus temporibus.',
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
      mousewheel={true}
      speed={700}
    >
      {sliderList.map((slider) => (
        <SwiperSlide key={slider.id}>
          <div className="h-full flex justify-end pt-48">
            <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
              <h1 className="h1 text-center lg:text-left mb-2">
                <span>{slider.title}</span> {slider.subTitle}
              </h1>
              <p className="text-white italic text-center lg:text-left mb-4">
                {slider.description}
              </p>
              <CustomButton
                text={slider.buttonText}
                containerStyles="w-[196px] h-[62px] bg-accent group relative cursor-pointer overflow-hidden bg-accent uppercase"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
