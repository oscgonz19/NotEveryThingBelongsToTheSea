import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const CinematicSlider = () => {
  const photos = [
    '/wallpaper_v7.png',
    '/wallpaper_v6.png',
    '/wallpaper_v5.png',
    '/wallpaper_v4.png',
    '/wallpaper_v3.png',
    '/wallpaper_v2.png',
  ];

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute left-0 z-10 p-2 bg-black rounded-full cursor-pointer transform -translate-y-1/2 top-1/2"
      >
        <FiArrowLeft className="text-white text-2xl" />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute right-0 z-10 p-2 bg-black rounded-full cursor-pointer transform -translate-y-1/2 top-1/2"
      >
        <FiArrowRight className="text-white text-2xl" />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="relative w-full mx-auto py-8 bg-[#f5f5f5]">
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} className="px-4">
            <div className="relative w-full h-[450px] md:h-[450px] lg:h-[500px] bg-black">
              <Image
                src={photo}
                alt={`Cinematic ${index}`}
                fill
                style={{ objectFit: 'contain' }}
                className="absolute inset-0"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CinematicSlider;
