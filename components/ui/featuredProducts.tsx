import React from 'react';
import { Data } from '@/types';
import Card from './card';

interface FeaturedProductsProps {
  type: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ type }) => {
  const data: Data[] = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Long Sleeve Graphic T-shirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Cost',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'S',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'L',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="my-[100px] mx-[200px]">
      <div className="flex items-center justify-between mb-[50px]">
        <h1 className=" flex-[2] capitalize font-bold text-[20px]">
          {type} products
        </h1>
        <p className=" flex-[3] text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          nobis facilis debitis explicabo veniam quisquam, repellat tempore,
          quam inventore praesentium amet. Totam ullam dolores nisi praesentium
          veniam id illo velit.
        </p>
      </div>
      <div className="flex justify-center gap-[50px]">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
