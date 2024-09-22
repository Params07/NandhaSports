import React from 'react';
import ProductCard from './components/ProductCard';
import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    { img_src: 'ProductcategoryImages/badmiton.jpg', title: 'Badminton', content: 'Running products needed for an optimal run.' },
    { img_src: 'ProductcategoryImages/badmiton.jpg', title: 'Badminton', content: 'Running products needed for an optimal run.' },
    { img_src: 'ProductcategoryImages/badmiton.jpg', title: 'Badminton', content: 'Running products needed for an optimal run.' },
    { img_src: 'ProductcategoryImages/badmiton.jpg', title: 'Badminton', content: 'Running products needed for an optimal run.' },
    { img_src: 'ProductcategoryImages/badmiton.jpg', title: 'Badminton', content: 'Running products needed for an optimal run.' },
    { img_src: 'ProductcategoryImages/badmiton.jpg', title: 'Badminton', content: 'Running products needed for an optimal run.' }
  ];

  const variants = {
    hidden: { opacity: 0, x: -200 }, 
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, 
  };

  return (
    <div id="products" className="h-full w-full px-2 sm:px-4 py-4 sm:py-8 mt-8">
      <div className="px-4 py-4">
        <p className="font-semibold font-roboto text-2xl sm:text-3xl">Products Categories</p>
        <p className="mt-2 mb-2 w-full h-0.5 bg-gray-600"></p>
      </div>

      <motion.div className="flex flex-wrap sm:gap-x-4 gap-y-8 md:gap-y-12 lg:gap-y-16">
        {products.map((content, index) => (
          <ProductCard
            key={index}
            img_src={content.img_src}
            title={content.title}
            content={content.content}
            variants={variants} // Pass the card animation variants
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Products;
