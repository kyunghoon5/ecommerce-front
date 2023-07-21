"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Container from '@/components/ui/container';
import Cart from '@/components/ui/cart';

const Navbar = () => {
const [open, setOpen] = useState(false)

  return (
    <div className="pt-[10px] pb-[10px] pl-[30px] pr-[30px] h-[80px]">
      <Container>
        <div className="left flex gap-[25px] items-center text-[18px]">
          <div className="item flex  ">
            <img className="object-contain" src="img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item ">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item ">
            <Link href="/category/1">Women</Link>
          </div>
          <div className="item ">
            <Link href="/category/2">Men</Link>
          </div>
          <div className="item ">
            <Link href="/category/3">Children</Link>
          </div>
        </div>

        <div className="center font-bold text-[30px] tracking-[2px]  flex">
          <Link href="/">Vanessa</Link>
        </div>
        <div className="right items-center flex gap-2 text-[18px] gap-[25px] ">
          <div className="item">
            <Link href="/">Homepage</Link>
          </div>
          <div className="item">
            <Link href="/">About</Link>
          </div>
          <div className="item">
            <Link href="/">Contact</Link>
          </div>
          <div className="item">
            <Link href="/">Stores</Link>
          </div>
          <div className="icons flex items-center cursor-pointer text-[#777] gap-[15px]">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon  />
              <span>0</span>
            </div>
          </div>
        </div>
      </Container>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
