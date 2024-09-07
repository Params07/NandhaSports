import React, { useState } from 'react';
import { IoReorderThree } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const NavItems = ['Home', 'Products', 'About', 'Map', 'Contact Us'];
  const [activeTab, setActiveTab] = useState('Home');
  const [NavItemsToggle,setNavItemsToggle] = useState(false);


  const handleClick = (tabName) => {
    setActiveTab(tabName);
    setNavItemsToggle(false)
  };


  return (
    <div className='w-full h-screen bg-[url("images/home.jpg")] bg-cover bg-center bg-opacity-900 bg-no-repeat'>
      <div className='flex text-white justify-between items-center h-20 px-10'>
        <div className='text-4xl font-bold font-guerrilla cursor-pointer'>NANDHA SPORTS</div>
        <div className='block lg:hidden cursor-pointer'>
        <IoReorderThree className='text-white font-bold text-3xl' onClick={()=>{setNavItemsToggle(!NavItemsToggle)}} />

        </div>
        <div className={` z-10 lg:z-0 absolute lg:bg-transparent  left-0 top-0 min-h-[400px] h-[450px] lg:h-max lg:min-h-max justify-center items-center space-y-8 lg:space-y-0  w-full  lg:top-0 
         lg:static font-roboto flex lg:flex-row flex-col  lg:space-x-8  bg-black lg:w-auto ${NavItemsToggle === false   ?'hidden lg:flex':'block '} `}>
           <div className={` block lg:hidden text-white p-2 top-0 right-0 absolute ${NavItemsToggle === true ?'block':'hidden'}`}>
           <IoMdClose className='text-3xl cursor-pointer hover:text-red-500 ' onClick={()=>{setNavItemsToggle(!NavItemsToggle)}}/>
          </div>
          {NavItems.map((item, id) => (
            <div
              key={id}
              className={`text-lg font-semibold w-32 text-center rounded py-2  lg:w-max cursor-pointer hover:text-primary hover:bg-primary hover:text-white lg:hover:text-primary
                 lg:hover:bg-transparent    lg:underline-animation ${activeTab === item ? 'active' : ''}`}
              onClick={() => handleClick(item)} 
            >
              {item}  
            </div>
          ))}
         
        </div>
       
      
      </div>
      <div className=' flex w-full h-full items-center justify-start   py-16'> 

        <div className='h-3/4  '>
        <div className='w-[650px]  px-16 flex flex-col space-y-12'>
               <p className='text-5xl font-bold text-white'>Gear Up. Get Better. Go Beyond.</p>
               <p className='text-2xl font-bold text-white drop-shadow-lg shadow-black'>Find the best selection of sports equipment and apparel to elevate your performance.</p>
               <p><button className='px-10 py-3 bg-primary text-white font-semibold text-xl  hover:bg-black hover:text-primary
               rounded  border-2 border-primary '>More collections</button></p>
         </div>
        
        </div>
</div>
    </div>
  );
};

export default Nav;
