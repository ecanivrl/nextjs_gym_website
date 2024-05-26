'use client';

import { FaUsers } from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa6';

import Achievements from './Achievements';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const featured = [
  {
    Icon: <FaUsers />,
    title: 'Award Wining Trainers',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus temporibus.',
  },
  {
    Icon: <IoIosPricetag />,
    title: 'Excellent Prices',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus temporibus.',
  },
  {
    Icon: <FaDumbbell />,
    title: 'Modern Equipment',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus temporibus.',
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="h2 text-center"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="max-w-[600px] mx-auto text-center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ad quo
            repudiandae magnam corrupti doloribus.
          </motion.p>
        </div>
        {/* featured items */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="text-black grid gridd-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-4 border p-10 rounded-sm hover:border-accent transition-all duration-300"
              >
                <div
                  className="text-4xl bg-primary-300 text-white w-[80px] h-[80px]
                rounded-full flex items-center justify-center hover:bg-accent
                "
                >
                  {feature.Icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h-4 text-accent">{feature.title}</h4>
                  <p>{feature.subTitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* achievements */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
