'use client';

import { useMediaQuery } from 'react-responsive';
import { Link as ScrollLink } from 'react-scroll';

// framer-motion
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const links = [
  { name: 'home', target: 'home', offset: -100 },
  { name: 'about', target: 'about', offset: -80 },
  { name: 'class', target: 'class', offset: -80 },
  { name: 'team', target: 'team', offset: 0 },
  { name: 'prices', target: 'prices', offset: -40 },
  { name: 'testimonial', target: 'testimonial', offset: 0 },
  { name: 'blog', target: 'blog', offset: 0 },
  { name: 'contact', target: 'contact', offset: 0 },
];

const MobileNav = ({
  containerStyles,
  openMenu,
  setOpenMenu,
}: {
  containerStyles: string;
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth={true}
            spy={true}
            key={index}
            activeClass={`${isMobile && 'active'}`}
            duration={500}
            className=" hover:text-accent transition-all cursor-pointer"
            onClick={() => setOpenMenu(false)}
          >
            <motion.p
              variants={fadeIn('up', 0.1 * index)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.2 }}
              className="text-white text-lg"
            >
              {link.name}
            </motion.p>
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default MobileNav;
