import React from 'react';
import Link from 'next/link';

const Categories = () => {
  return (
    <div className="flex h-[80vh] gap-[10px] m-[10px]">
      <div className="flex-[1] flex flex-col gap-[10px]">
        <div className="flex-[1] flex gap-[10px] relative overflow-hidden">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute min-w-[100px] w-fit h-[50px] p-[10px] top-[0] bottom-[0] left-[0] right-[0] m-auto cursor-pointer border-none bg-white uppercase font-[500]">
            <Link className="link" href="/category/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="flex-[1] flex gap-[10px] relative overflow-hidden">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute min-w-[100px] w-fit h-[50px] p-[10px] top-[0] bottom-[0] left-[0] right-[0] m-auto cursor-pointer border-none bg-white uppercase font-[500]">
            <Link href="/category/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="flex-[1] flex flex-col gap-[10px]">
        <div className="flex-[1] flex gap-[10px] relative overflow-hidden">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute min-w-[100px] w-fit h-[50px] p-[10px] top-[0] bottom-[0] left-[0] right-[0] m-auto cursor-pointer border-none bg-white uppercase font-[500]">
            <Link href="/category/1" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="flex-[2] flex flex-col gap-[10px] ">
        <div className="flex-[1] flex gap-[10px] relative overflow-hidden">
          <div className="flex-[1] flex flex-col gap-[10px]">
            <div className="flex-[1] flex gap-[10px] relative overflow-hidden">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button className="absolute min-w-[100px] w-fit h-[50px] p-[10px] top-[0] bottom-[0] left-[0] right-[0] m-auto cursor-pointer border-none bg-white uppercase font-[500]">
                <Link href="/category/1" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="flex-[1] flex flex-col gap-[10px]">
            <div className="flex-[1] flex gap-[10px] relative overflow-hidden">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button className="absolute min-w-[100px] w-fit h-[50px] p-[10px] top-[0] bottom-[0] left-[0] right-[0] m-auto cursor-pointer border-none bg-white uppercase font-[500]">
                <Link href="/category/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-[1] flex gap-[10px] relative overflow-hidden">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute min-w-[100px] w-fit h-[50px] p-[10px] top-[0] bottom-[0] left-[0] right-[0] m-auto cursor-pointer border-none bg-white uppercase font-[500]">
            <Link href="/category/1" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
