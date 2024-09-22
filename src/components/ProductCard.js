import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductCard = ({ img_src, title, content, variants }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2,    
  });

  return (
    <motion.div
      ref={ref} 
      className="max-w-sm lg:max-w-[30%] rounded-md shadow-lg hover:shadow-2xl p-6 mx-auto transition duration-300"
      initial="hidden" 
      animate={inView ? "visible" : "hidden"} 
      variants={variants} 
    >
      <img
        src={img_src}
        alt={title}
        className="rounded-md shadow-2xl object-cover hover:scale-1.1 transition duration-300"
      />
      <div className="px-2 py-2 grid text-[#2C3333]">
        <p className="text-2xl font-bold font-roboto mt-2">{title}</p>
        <p className="text-lg font-normal font-roboto mt-2 mb-4">{content}</p>
        <button className="px-5 py-2 border-2 border-[#2C3333] text-white font-bold text-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-105 rounded-md bg-[#2C3333]">
          More collections
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
