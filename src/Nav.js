import React, { useState, useEffect } from 'react';
import { IoReorderThree } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const NavItems = ['Home', 'Products', 'About', 'Map', 'Contact Us'];
  const [activeTab, setActiveTab] = useState('Home');
  const [NavItemsToggle, setNavItemsToggle] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleClick = (tabName) => {
    setActiveTab(tabName);
    setNavItemsToggle(false);
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className='w-full h-[700px] sm:h-[740px] md:h-[800px] bg-[url("images/mobile3.jpg")] lg:bg-[url("images/home.jpg")] bg-cover bg-center bg-opacity-50 bg-no-repeat'>
      <div className='flex text-white  justify-between items-center h-16 md:h-20 px-2 sm:px-4 md:px-10 w-full'>
        <div className='text-xl lg:text-4xl font-bold font-guerrilla cursor-pointer'>NANDHA SPORTS</div>
        <div className='block lg:hidden cursor-pointer'>
          <IoReorderThree className='text-white font-bold text-3xl' onClick={() => { setNavItemsToggle(!NavItemsToggle) }} />
        </div>
        <div className={`z-10  lg:z-0 absolute lg:bg-transparent left-0 top-0 min-h-[400px] h-[450px] lg:h-max lg:min-h-max justify-center items-center space-y-8 lg:space-y-0 w-full lg:top-0 
         lg:static font-roboto flex lg:flex-row flex-col lg:space-x-8 bg-black lg:w-auto ${NavItemsToggle === false ? 'hidden lg:flex' : 'block '} `}>
          <div className={`block lg:hidden text-white p-2 top-0 right-0 absolute ${NavItemsToggle === true ? 'block' : 'hidden'}`}>
            <IoMdClose className='text-3xl cursor-pointer hover:text-red-500 ' onClick={() => { setNavItemsToggle(!NavItemsToggle) }} />
          </div>
          {NavItems.map((item, id) => (
            <div
              key={id}
              className={`text-lg text-white backdrop-blur-sm font-semibold w-32 text-center rounded py-2 lg:w-max cursor-pointer hover:text-primary hover:bg-primary hover:text-white lg:hover:text-primary
                 lg:hover:bg-transparent lg:underline-animation ${activeTab === item ? 'active' : ''}`}
              onClick={() => handleClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className='flex h-full  w-full   items-end justify-start  pb-0 lg:pb-20 '>
        <div className={`h-[280px] sm:h-[310px]   lg:h-[320px] transition-all duration-1200 ease-in-out`}>
          <div className='w-full lg:w-[80%]  px-2 sm:px-16 grid space-y-2 sm:space-y-4 md:space-y-8'>
            <p className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white slide-in ${animate ? 'animate' : ''}`} style={{ animationDelay: '0.1s' }}>Gear Up. Get Better. Go Beyond.</p>
            <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold text-white drop-shadow-lg shadow-black slide-in ${animate ? 'animate' : ''}`} style={{ animationDelay: '0.8s' }}>Find the best selection of sports equipment and apparel to elevate your performance.</p>
            <p className={`slide-in ${animate ? 'animate' : ''}`} style={{ animationDelay: '1.2s' }}>
              <button className='px-5 py-2 lg:py-3 lg:px-10   gradient_bg font-semibold text-lg lg:text-xl bg-black text-primary rounded  '>
                More collections
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
