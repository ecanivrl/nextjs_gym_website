export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      opacity: 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
// Compare this snippet from components/home/Services.tsx:
// import React from 'react';
//
// const Services = () => {
//   return (
//     <section className="h-screen bg-blue-500" id="services">
//       Services
//     </section>
//   );
// };
//
// export default Services;
