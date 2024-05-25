import React from 'react'

const CustomButton = ({text, containerStyles}:{text:string, containerStyles: string}) => {
  return (
    <button className={`${containerStyles}`}>
        {/* animation span */}
        <span className='ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 group-hover:h-64
        group-hover:w-64 group-hover:-translate-y-32
        '></span>
        <span className='ease relative text-white transition-all duration-300'>{text}</span>
    </button>
  )
}

export default CustomButton
