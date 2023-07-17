'use client';

import React, { useState,useEffect } from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

const Billboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
 const intervalId = setInterval(() => {
   nextSlide();  
 }, 10000);

 useEffect(() => {
   return () => {
     clearInterval(intervalId);
   };
 }, [currentSlide, intervalId]);
 

  return (
    <div className=" relative overflow-hidden  w-full h-[calc(100vh-80px)]">
      <div
        className=" flex transition-all duration-1000 w-[300vw] h-full  "
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img
          src="img/test1.jpg"
          alt=""
          className="w-screen h-full object-cover"
        />
        <img src={data[1]} alt="" className="w-screen h-full object-cover" />
        <img
          src="img/test2.jpg"
          alt=""
          className="w-screen h-full object-cover"
        />
      </div>

      <div className=" absolute flex w-fit left-0 right-0 bottom-[100px] m-auto gap-[10px]">
        <div
          className="w-[50px] h-[50px] border-4 border-gray-400 rounded-lg flex items-center justify-center cursor-pointer"
          onClick={prevSlide}
        >
          <WestOutlinedIcon />
        </div>
        <div
          className="w-[50px] h-[50px]  border-4 border-gray-400 rounded-lg flex items-center justify-center cursor-pointer"
          onClick={nextSlide}
        >
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Billboard;
