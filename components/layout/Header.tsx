'use client';

import Nav from './Nav';
import MobileNav from './MobileNav';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MdMenu } from 'react-icons/md';

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setHeaderActive(window.scrollY > 50);
    };

    // Add scroll event
    window.addEventListener('scroll', handleScroll);

    // clear scroll
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    // ! type other way to write the above code

    // const handleScroll = () => {
    //   if (window.scrollY > 50) {
    //     setHeaderActive(true);
    //   } else {
    //     setHeaderActive(false);
    //   }
    // };
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <header
      className={`${
        headerActive ? 'h-[100px]' : 'h-[124px]'
      } fixed w-full bg-primary-200 h-[100px] transition-all z-50 top-0 max-w-[1920px]`}
    >
      <div className="container mx-auto h-full flex justify-between items-center">
        {/* Logo */}
        <Link href={'#home'}>
          <Image
            src="/assets/img/logo.png"
            width={117}
            height={55}
            alt="logo"
            className="cursor-pointer"
          />
        </Link>
        {/* mobile nav - visible on small devices */}
        <MobileNav
          containerStyles={`
        ${
          headerActive ? 'top-[90px]' : 'top-[124px]'
          // min-h-[calc(100vh_-_124px)]
        }
        ${
          openMenu
            ? 'max-h-max pt-8 pb-10 border-t border-white/10'
            : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'
        }
        xl:hidden text-white flex flex-col fixed bg-primary-200 w-full left-0 top-[124px] text-base uppercase
         font-medium gap-8 text-center transition-all`}
        />
        {/* desktop nav - hidden on small devices */}
        <Nav containerStyles="flex gap-4 text-white hidden xl:flex text-base font-medium uppercase transition-all" />
        {/* hide open menu button */}
        <div className="flex items-center gap-5">
          {/* login & register buttons */}
          <div className="text-white flex items-center gap-4">
            <button className="hover:text-accent transition-all text-base font-medium uppercase">
              Login
            </button>
            <button className="hover:text-accent transition-all text-base font-medium uppercase">
              Register
            </button>
          </div>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="text-white xl:hidden"
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
