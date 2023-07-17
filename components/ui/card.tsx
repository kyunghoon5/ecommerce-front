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
      </div>
      <h2>{item.title}</h2>
      <div>
        <h3>${item.oldPrice}</h3>
        <h3>${item.price}</h3>
      </div>
    </Link>
  );
};

export default Card;
