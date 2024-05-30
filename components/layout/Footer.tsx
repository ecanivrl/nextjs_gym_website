'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

import CustomButton from '../common/CustomButton';

// frame-motion
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import Logo from './Logo';

// variants
const footerContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      duration: 0.5,
      ease: 'linear',
    },
  },
};

const footerItemVariant = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">
        <motion.div
          variants={footerContainerVariant}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8  gap-y-12"
        >
          {/* info */}
          <motion.div
            variants={footerItemVariant}
            className="flex flex-col gap-4"
          >
            <Logo />
            <p className="max-w-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Lincoln Park Chicago, Illionis</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>+90 (543) 801 48 28</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-xl text-accent" />
                <span>
                  <a href="mailto:kadri503394@gmail.com">
                    kadri503394@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </motion.div>
          {/* blog */}
          <motion.div variants={footerItemVariant}>
            <h4 className="h4 text-accent mb-4">Recent blog posts</h4>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link
                href={'#home'}
                className="hover:text-accent transition-all duration-300"
              >
                <h5 className="h5 leading-snug">
                  How to stay motived for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link
                href={'#home'}
                className="hover:text-accent transition-all duration-300"
              >
                <h5 className="h5 leading-snug">
                  How to stay motived for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
            {/* post */}
            <div className="flex flex-col gap-3 pb-3 mb-4">
              <Link
                href={'#home'}
                className="hover:text-accent transition-all duration-300"
              >
                <h5 className="h5 leading-snug">
                  How to stay motived for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
          </motion.div>
          {/* gallery */}
          <motion.div variants={footerItemVariant}>
            <h4 className="h4 text-accent mb-4">gallery</h4>
            {/* gallery imgs */}
            <div className="flex flex-wrap gap-2">
              <Link href={'#'}>
                <Image
                  src="/assets/img/trainers/david.jpg"
                  width={100}
                  height={100}
                  alt="gallery"
                  className="cursor-pointer"
                />
              </Link>
              <Link href={'#'}>
                <Image
                  src="/assets/img/trainers/matt.jpg"
                  width={100}
                  height={100}
                  alt="gallery"
                  className="cursor-pointer"
                />
              </Link>
              <Link href={'#'}>
                <Image
                  src="/assets/img/trainers/rosy.jpg"
                  width={100}
                  height={100}
                  alt="gallery"
                  className="cursor-pointer"
                />
              </Link>
              <Link href={'#'}>
                <Image
                  src="/assets/img/trainers/sofia.jpg"
                  width={100}
                  height={100}
                  alt="gallery"
                  className="cursor-pointer"
                />
              </Link>
              <Link href={'#'}>
                <Image
                  src="/assets/img/testimonial/lucy.jpg"
                  width={100}
                  height={100}
                  alt="gallery"
                  className="cursor-pointer"
                />
              </Link>
              <Link href={'#'}>
                <Image
                  src="/assets/img/testimonial/michael.jpg"
                  width={100}
                  height={100}
                  alt="gallery"
                  className="cursor-pointer"
                />
              </Link>
              <Link href={'#'}>
                <Image
                  src="/assets/img/trainers/david.jpg"
                  width={100}
                  height={100}
                  alt="gallery"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </motion.div>
          {/* newsletter */}
          <motion.div
            variants={footerItemVariant}
            className="flex flex-col gap-5"
          >
            <h4 className="h4 text-accent mb-4">Newsletter</h4>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
              temporibus dolores nobis facilis quo.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-[50px] outline-none px-4 text-primary-300"
              />
              <CustomButton
                text="Send"
                containerStyles="h-[50px] bg-accent px-8"
              />
            </form>
          </motion.div>
          {/* map */}
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="pb-5 w-full flex items-center"
      >
        <Link
          target="_blank"
          className="mx-auto text-white"
          href={'https://github.com/ecanivrl'}
        >
          Developed By ecanivrl
        </Link>
      </motion.div>
      {/* copyright */}
      <motion.div
        variants={fadeIn('up', 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-white border-t border-white/20 py-12"
      >
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <span>
              &copy; Copyright <span className="mx-1">{year}</span> Fit Physique
            </span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link
                  href={'#'}
                  className="text-white hover:text-accent transition-all duration-300"
                >
                  <FaFacebook className="" />
                </Link>
              </li>
              <li>
                <Link
                  href={'#'}
                  className="text-white hover:text-accent transition-all duration-300"
                >
                  <FaTwitter className="" />
                </Link>
              </li>
              <li>
                <Link
                  href={'#'}
                  className="text-white hover:text-accent transition-all duration-300"
                >
                  <FaInstagram className="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
