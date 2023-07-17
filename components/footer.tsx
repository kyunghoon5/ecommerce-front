import React from 'react';

const Footer = () => {
  return (
    <div className="footer m-40">
      <div className="top flex gap-[50px] ">
        <div className="item flex-1 flex flex-col gap-[10px] text-justify">
          <h1 className="font-bold text-[20px] text-[#777]">Categories</h1>
          <span className="text-gray-400">Women</span>
          <span className="text-gray-400">Men</span>
          <span className="text-gray-400">Shoes</span>
          <span className="text-gray-400">Accessories</span>
          <span className="text-gray-400">New Arrivals</span>
        </div>
        <div className="item  flex-1 flex flex-col gap-[10px] text-justify">
          <h1 className="font-bold text-[20px] text-[#777] ">Links</h1>
          <span className="text-gray-400">FAQ</span>
          <span className="text-gray-400">Pages</span>
          <span className="text-gray-400">Stores</span>
          <span className="text-gray-400">Compare</span>
          <span className="text-gray-400">Cookies</span>
        </div>
        <div className="item  flex-1 flex flex-col gap-[10px] text-justify ">
          <h1 className="font-bold text-[20px] text-[#777]">About</h1>
          <span
            className="text-gray-400
          "
          >
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="item  flex-1 flex flex-col gap-[10px] text-justify">
          <h1 className="font-bold text-[20px] text-[#777] ">Contact</h1>
          <span className="text-gray-400">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="bottom flex items-center justify-between mt-[50px]">
        <div className="left flex items-center">
          <span className="logo text-[#2879fe] font-bold text-[24px]">Vanessa</span>
          <span className="copyright text-gray-400 text-[12px] ml-[20px]">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img className="h-[50px]" src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
