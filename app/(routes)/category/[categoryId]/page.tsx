"use client"

import List from '@/components/ui/list';
import React, { useState } from 'react';

const CategoryPage = () => {


  const[maxPrice,setMaxPrice] =useState<number>(1000)
  const [sort, setSort] = useState<string | null>(null);
  
  return (
    <div className="products">
      <div className="left">
        <div className="fillteriTEM">
          <h2>Product Categories</h2>
          <div className="InputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="InputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="InputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="fillteriTEM">
          <h2>Filter by price</h2>
          <div className="inputItem">
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
        <div className="fillteriTEM">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort('asc')}
            />
            <label htmlFor="desc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort('desc')}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  );
};

export default CategoryPage;
