import React from 'react';
import Link from 'next/link';

import { Data } from '@/types';

interface CardProps {
  item: Data;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <Link href={`/product/${item.id}`}>
      <div className=" w-[280px] flex flex-col gap-[10px]">
        <div className="w-[100%] h-[400px] overflow-hidden relative ">
          {item.isNew && (
            <span className="absolute top-[5px] left-[5px] bg-white text-teal-500 py-[3px] px-[5px] z-[3] font-[500] text-[12px]">
              New Season
            </span>
          )}
          <img
            className="w-[100%] h-[100%] object-cover absolute opacity-100"
            src={item.img}
            alt=""
          />
          <img
            className="w-[100%] h-[100%] object-cover absolute opacity-0 hover:opacity-100 "
            src={item.img2}
            alt=""
          />
        </div>
        <h2 className="text-[16px] font-[400]">{item.title}</h2>
        <div className="flex gap-[20px]">
          <h3 className=" text-[18px] font-[500] text-gray-400 line-through ">${item.oldPrice}</h3>
          <h3
            className="text-[18px] font-[500]
        "
          >
            ${item.price}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
