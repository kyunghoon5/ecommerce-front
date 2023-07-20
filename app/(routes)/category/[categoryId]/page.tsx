'use client';

import List from '@/components/ui/list';
import React, { useState } from 'react';

import { Data } from '@/types';



const CategoryPage= () => {
  
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [sort, setSort] = useState<string | null>(null);

  return (
    <div className="flex py-[30px] px-[50px]">
      <div className="flex-[1] sticky h-[100%] top-[50px]">
        <div className="mb-[30px]">
          <h2 className="font-[600] text-xl mb-[20px]">Product Categories</h2>
          <div className="mb-[10px]">
            <input type="checkbox" id="1" value={1} />
            <label className="ml-10px" htmlFor="1">
              Shoes
            </label>
          </div>
          <div className="mb-[10px]">
            <input type="checkbox" id="2" value={2} />
            <label className="ml-10px" htmlFor="2">
              Skirts
            </label>
          </div>
          <div className="mb-[10px]">
            <input type="checkbox" id="3" value={3} />
            <label className="ml-10px" htmlFor="3">
              Coats
            </label>
          </div>
        </div>
        <div className="mb-[30px]">
          <h2 className="font-[600] text-xl mb-[20px]">Filter by price</h2>
          <div className="mb-[10px]">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  setMaxPrice(parseInt(e.target.value)) //
              }
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="mb-[30px]">
          <h2 className="font-[600] text-xl mb-[20px]">Sort by</h2>
          <div className="mb-[10px]">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort('asc')}
            />
            <label className="ml-10px" htmlFor="desc">
              Price (Lowest first)
            </label>
          </div>
          <div className="mb-[10px]">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort('desc')}
            />
            <label className="ml-10px" htmlFor="desc">
              Price (Highest first)
            </label>
          </div>
        </div>
      </div>
      <div className="flex-[3]">
        <img
          className="w-[100%] h-[300px] object-cover mb-[50px]"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List  maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default CategoryPage;
