"use client"

import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contact = () => {
  return (
    <div className="bg-[#2879fe] text-white p-[15px] flex justify-center">
      <div className="w-[50%] flex items-center justify-between sm:w-auto ">
        <span >BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input
            className="p-[10px] border-none rounded-l-lg"
            type="text"
            placeholder="Enter your e-mail..."
          />
          <button className="p-[10px] text-white bg-[#333] rounded-r-lg border-none">
            JOIN US
          </button>
        </div>
        <div className="flex gap-[10px]">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};
export default Contact;
