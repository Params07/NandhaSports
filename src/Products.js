import React from 'react';
import ProductCard from './components/ProductCard';

const Products = () => {
  let products = [{ img_src: 'ProductcategoryImages/badmiton.jpg', title: 'Badminton' },
    { img_src: 'ProductcategoryImages/badmiton.jpg', title: 'Badminton' },
    { img_src: 'ProductcategoryImages/badmiton.jpg', title: 'Badminton' },
    { img_src: 'ProductcategoryImages/badmiton.jpg', title: 'Badminton' },
    { img_src: 'ProductcategoryImages/badmiton.jpg', title: 'Badminton' },
    { img_src: 'ProductcategoryImages/badmiton.jpg', title: 'Badminton' }

  ];

  return (
    <div className="h-full w-full px-2 sm:px-4 py-4 sm:py-8 mt-8">
      <div className='px-4 py-4'>
      <p className="font-semibold font-roboto text-2xl sm:text-3xl  ">Products Categories</p>
      <p className='mt-2 mb-2 w-full  h-0.5 bg-gray-600'></p>
      </div>
      <div className='flex flex-wrap sm:gap-x-4 gap-y-8 md:gap-y-12 lg:gap-y-16'>
        {products.map((content) => (
          <ProductCard key={content.title} img_src={content.img_src} title={content.title} />
        ))}
      </div>
    </div>
  );
};

export default Products;
