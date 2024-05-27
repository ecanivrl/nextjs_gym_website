'use client';

import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import CustomButton from '../common/CustomButton';

// framer-motion
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import Image from 'next/image';
import Link from 'next/link';

const trainerData = [
  {
    image: '/assets/img/trainers/david.jpg',
    name: 'David Williams',
    role: 'Body Building Coach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    social: [
      { icon: <FaFacebook />, href: 'http://facebook.com' },
      { icon: <FaTwitter />, href: 'http://twitter.com' },
      { icon: <FaLinkedin />, href: 'http://linkedin.com' },
      { icon: <FaYoutube />, href: 'http://youtube.com' },
    ],
  },
  {
    image: '/assets/img/trainers/rosy.jpg',
    name: 'Rosy Rivera',
    role: 'Yoga Instructor',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    social: [
      { icon: <FaFacebook />, href: 'http://facebook.com' },
      { icon: <FaTwitter />, href: 'http://twitter.com' },
      { icon: <FaLinkedin />, href: 'http://linkedin.com' },
      { icon: <FaYoutube />, href: 'http://youtube.com' },
    ],
  },
  {
    image: '/assets/img/trainers/matt.jpg',
    name: 'Matt Stone',
    role: 'Cardio Trainer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    social: [
      { icon: <FaFacebook />, href: 'http://facebook.com' },
      { icon: <FaTwitter />, href: 'http://twitter.com' },
      { icon: <FaLinkedin />, href: 'http://linkedin.com' },
      { icon: <FaYoutube />, href: 'http://youtube.com' },
    ],
  },
  {
    image: '/assets/img/trainers/sofia.jpg',
    name: 'Sofia Lauren',
    role: 'Nutritionist',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    social: [
      { icon: <FaFacebook />, href: 'http://facebook.com' },
      { icon: <FaTwitter />, href: 'http://twitter.com' },
      { icon: <FaLinkedin />, href: 'http://linkedin.com' },
      { icon: <FaYoutube />, href: 'http://youtube.com' },
    ],
  },
];
const Team = () => {
  return (
    <section className="py-12 xl:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-6"
        >
          Our Trainers
        </motion.h2>
        {/* Trainers grid */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12 "
        >
          {trainerData.map((trainer, index) => {
            return (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                {/* image */}
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover "
                  />
                </div>
                {/* name */}
                <h4 className="h4 mb-2">{trainer.name}</h4>
                {/* role */}
                <p className="uppercase text-xs- tracking-[3px] mb-2">
                  {trainer.role}
                </p>
                {/* description */}
                <p className="mb-6 max-w-[320px] mx-auto">
                  {trainer.description}
                </p>
                {/* socials */}
                <div className="flex gap-4 mt-4">
                  {trainer.social.map((social, index) => {
                    return (
                      <div className="" key={index}>
                        <Link
                          className="hover:text-accent transition-colors duration-300 ease-in-out"
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="text-2xl hover:scale-110 transition-colors duration-100 ease-in-out">
                            {social.icon}
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* btn */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton
            containerStyles="w-[196px] h-[62px]"
            text="See All Trainers"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
