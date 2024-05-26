'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import CustomButton from '../common/CustomButton';

const classes = [
  {
    title: 'body building',
    image: '/assets/img/classes/bodybuilding.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis facere commodi, eligendi ex eos.',
  },
  {
    title: 'cardio',
    image: '/assets/img/classes/cardio.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis facere commodi, eligendi ex eos.',
  },
  {
    title: 'fitness',
    image: '/assets/img/classes/fitness.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis facere commodi, eligendi ex eos.',
  },
  {
    title: 'crossfit',
    image: '/assets/img/classes/crossfit.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis facere commodi, eligendi ex eos.',
  },
  {
    title: 'barbell',
    image: '/assets/img/classes/barbell.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis facere commodi, eligendi ex eos.',
  },
  {
    title: 'boxing',
    image: '/assets/img/classes/boxing.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis facere commodi, eligendi ex eos.',
  },
];

const Classes = () => {
  return (
    <section className="" id="class">
      <motion.div
        variants={fadeIn('down', 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-1"
      >
        {classes.map((item, index) => {
          return (
            <div
              key={index}
              className="relative w-full h-[300px] lg:h-[485px] flex flex-col items-center justify-center"
            >
              {/* overlay */}
              <div className="bg-black/50 absolute w-full h-full top-0 z-10"></div>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover "
              />
              {/* text and btn */}
              <div className="z-30 max-w-[380px] text-center flex justify-center items-center flex-col gap-4">
                <motion.h3
                  variants={fadeIn('down', 0.7)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="h3 text-accent"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  variants={fadeIn('down', 0.7)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-white"
                >
                  {item.description}
                </motion.p>
                <div className="relative">
                  <CustomButton
                    containerStyles="w-[164px] h-[46px]"
                    text="Read More"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Classes;
