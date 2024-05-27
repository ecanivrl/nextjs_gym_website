'use client';

import Image from 'next/image';
import { MdClose } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';

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
import { Autoplay, FreeMode, Mousewheel, Pagination } from 'swiper/modules';

// framer-motion
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const membershipData = [
  {
    title: 'Standard',
    price: 30,
    benefits: [
      {
        icon: <FaCheck />,
        text: 'Includes membership',
      },
      {
        icon: <FaCheck />,
        text: 'Access to all gym facilities',
      },
      {
        icon: <MdClose />,
        text: 'Diet plan included',
      },
      {
        icon: <FaCheck />,
        text: 'Health and fitness tips',
      },
      {
        icon: <MdClose />,
        text: 'Monday-Friday gym access',
      },
      {
        icon: <MdClose />,
        text: 'Full access to everything',
      },
      {
        icon: <MdClose />,
        text: 'No additional amenities',
      },
    ],
  },
  {
    title: 'Ultimate',
    price: 45,
    benefits: [
      {
        icon: <FaCheck />,
        text: 'Includes membership',
      },
      {
        icon: <FaCheck />,
        text: 'Access to all gym facilities',
      },
      {
        icon: <FaCheck />,
        text: 'Diet plan included',
      },
      {
        icon: <FaCheck />,
        text: 'Health and fitness tips',
      },
      {
        icon: <FaCheck />,
        text: 'Monday-Friday gym access',
      },
      {
        icon: <MdClose />,
        text: 'Full access to everything',
      },
      {
        icon: <MdClose />,
        text: 'No additional amenities',
      },
    ],
  },
  {
    title: 'Professional',
    price: 60,
    benefits: [
      {
        icon: <FaCheck />,
        text: 'Includes membership',
      },
      {
        icon: <FaCheck />,
        text: 'Access to all gym facilities',
      },
      {
        icon: <FaCheck />,
        text: 'Diet plan included',
      },
      {
        icon: <FaCheck />,
        text: 'Health and fitness tips',
      },
      {
        icon: <FaCheck />,
        text: 'Monday-Friday gym access',
      },
      {
        icon: <MdClose />,
        text: 'Full access to everything',
      },
      {
        icon: <FaCheck />,
        text: 'No additional amenities',
      },
    ],
  },
];

const MembershipSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay, Mousewheel, FreeMode, Pagination]}
      freeMode={true}
      loop={false}
      autoplay={{ delay: 3000 }}
      mousewheel={false}
      pagination={{ clickable: true }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="min-h-[680px]"
    >
      {membershipData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="border border-accent hover:bg-primary-300/80 hover:scale-95
            transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto rounded-lg"
            >
              <div className="py-2 px-[60px] border-b border-accent">
                <h4 className="h4">{item.title}</h4>
              </div>
              {/* benefits */}
              <div className="py-6 px-[60px]">
                <ul className="flex flex-col gap-5 mb-2">
                  {item.benefits.map((item, index) => {
                    return (
                      <li className="flex items-center gap-2" key={item.text}>
                        <div className="text-accent text-lg">{item.icon}</div>
                        {item.text}
                      </li>
                    );
                  })}
                </ul>
                {/* price and button */}
                <p className="text-accent mb-4 items-center gap-1">
                  <sub className="text-2xl text-white">$</sub>
                  <strong className="text-4xl">{item.price}</strong>
                  <em className="self-end text-white">/month</em>
                </p>
                <CustomButton
                  text="Buy Now"
                  containerStyles="w-[196px] h-12"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MembershipSlider;
