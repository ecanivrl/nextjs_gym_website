'use client';

import GYMSVG from '@/public/assets/svgs/gym.svg';
import GYM1SVG from '@/public/assets/svgs/gym1.svg';
import GYM2SVG from '@/public/assets/svgs/gym2.svg';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href={'#home'}
      className="flex gap-px border rounded-md border-white group w-[195px] hover:bg-accent transition-all duration-150 justify-center text-white text-xl items-center"
    >
      <span className="border-b-2 border-dashed border-accent font-bold group-hover:border-white">
        ZALI
      </span>
      <span className="text-bold text-white font-bold group-hover:border-white">
        _
      </span>
      <span className="border-b-2 border-dashed border-accent font-bold group-hover:border-white">
        GYM
      </span>
      {/* <GYM1SVG className="sm:w-[60px] sm:h-[60px] w-11 h-11 group-hover:stroke-white group-hover:fill-white"/> */}
      {/* <GYM2SVG className="sm:w-[60px] sm:h-[60px] w-11 h-11 group-hover:stroke-white group-hover:fill-white" /> */}
      <GYMSVG className="sm:w-[50px] sm:h-[50px] w-11 h-11 group-hover:stroke-white group-hover:fill-white ml-3" />
    </Link>
  );
};

export default Logo;
