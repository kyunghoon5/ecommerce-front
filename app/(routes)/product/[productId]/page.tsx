'use client';

import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const ProductPage = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images: string[] = [
    'https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    'https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
  ];
  return (
    <div className="py-[20px] px-[50px] flex gap-[50px]">
      <div className="flex-[1] flex gap-[20px]">
        <div className="flex-[1]">
          <img
            className="w-[100%] h-[150px] object-cover cursor-pointer mb-[10px]"
            src={images[0]}
            alt=""
            onClick={(e) => setSelectedImg(0)}
          />
          <img
            className="w-[100%] h-[150px] object-cover cursor-pointer mb-[10px]"
            src={images[1]}
            alt=""
            onClick={(e) => setSelectedImg(1)}
          />
        </div>

        <div className="flex-[5] ">
          <img
            className="w-[100%] max-h-[800px] object-cover"
            src={images[selectedImg]}
            alt=""
          />
        </div>
      </div>
      <div className="flex-[1] flex flex-col gap-[30px]">
        <h1 className="font-[600] text-xl">title</h1>
        <span className="text-[30px] text-[#2879fe] font-[500]">$199</span>
        <p className=" text-[10px] font-[300] text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          voluptas voluptatem perspiciatis ipsum repellendus, aperiam vero
          nulla. Itaque qui similique iusto asperiores quo, facere quae,
          corporis delectus illum dolor saepe?
        </p>
        <div className="flex items-center gap-[10px]">
          <button
            className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-none"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button
            className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-none"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button className="w-[250px] p-[10px] bg-[#2879fe] text-white flex items-center justify-center gap-[20px] cursor-pointer border-none font-[500]">
          <AddShoppingCartIcon /> ADD TO CARD
        </button>
        <div className="flex gap-[20px]">
          <div className="flex items-center gap-[10px] text-[#2879fe] text-[14px]">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="flex items-center gap-[10px] text-[#2879fe] text-[14px]">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="flex flex-col gap-[10px] text-gray-400 text-[14px] mt-[30px]">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr className="border-[1px] border-solid text-[#EEEDED]" />
        <div className="flex flex-col gap-[10px] text-gray-400 text-[14px] mt-[30px]">
          <span>DESCRIPTION</span>
          <hr className="w-[200px] border-[1px] text-[#EEEDED]" />
          <span>ADDITIONAL INFORMATION</span>
          <hr className="w-[200px] border-[1px] text-[#EEEDED]" />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
