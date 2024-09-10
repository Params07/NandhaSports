import React from 'react'

const ProductCard = ({img_src,title}) => {
  return (
    <div className='max-w-sm lg:max-w-[30%] rounded-md shadow-lg hover:shadow-2xl p-6 mx-auto transition duration-300'>
       <img src={img_src} className='rounded-md shadow-2xl object-cover hover:scale-1.1  transition duration-300   '></img>
       <div className='px-2 py-2 grid  '>
        <p className='text-2xl font-bold font-roboto mt-2'>{title}</p>
        <p className='text-lg font-normal font-roboto mt-2 mb-4'>Running products needed for an optimal run.</p>
        <button className='px-5 py-2 border-2 border-black text-white font-bold text-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-105 rounded-md bg-black'>More collections</button>
       </div>
    </div>
  )
}

export default ProductCard