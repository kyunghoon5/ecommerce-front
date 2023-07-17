import React from 'react';
import Link from 'next/link';

import { Data } from '@/types';

interface CardProps {
  item: Data;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <Link href={`/product/${item.id}`}>
      <div>
        <div>
          <img src={item.img} alt="" />
          <img src={item.img2} alt="" />
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
