import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const LogoCarousel = () => {
  const logos = [
    '/brandImages/adidas.png',
    '/brandImages/nike.png',
    '/brandImages/puma.png',
    '/brandImages/crocs.png',
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false, 
  };

  return (
    <div className="px-6 mt-4 "  >
       <div className="">
        <p className="font-semibold font-roboto text-2xl sm:text-3xl">Our Brands</p>
        <p className="mt-2 mb-2 w-full h-0.5 bg-gray-600"></p>
      </div>
        <div className="slider-container ">
        
        <Slider {...settings}>
          {logos.concat(logos).map((logo, index) => (
            <div className="logo-container" key={index}>
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:h-24 md:w-24 lg:h-32 lg:w-32"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoCarousel;
