import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Long Sleeve Graphic T-shirt',
      desc: 'Long Sleeve Graphic T-shirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Long Sleeve Graphic T-shirt',
      desc: 'Long Sleeve Graphic T-shirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="absolute right-[20px] top-[80px] z-[999] bg-white p-[20px]  shadow-md">
      <h1 className="mb-[30px] text-gray-400 font-[400] text-[24px]">Products in your cart</h1>
      {data?.map((item) => (
        <div className="flex items-center gap-[20px] mb-[30px]" key={item.id}>
          <img src={item.img} alt="" className="w-[80px] h-[100px] object-cover" />
          <div className="details">
            <h1 className="text-[18px] font-[500]">{item.title}</h1>
            <p className="text-gray-400 mb-[10px] text-[14px]">{item.desc?.substring(0, 100)}</p>
            <div className="text-[#2879fe]">1 x &{item.price}</div>
          </div>
          <DeleteOutlinedIcon style={{color: 'red', fontSize:'30px',cursor:'pointer'}} />
        </div>
      ))}
      <div className="flex  justify-between font-[500] text-[18px] mb-[20px]">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button className="w-[250px] p-[10px] flex items-center justify-center gap-[20px] cursor-pointer border-none bg-[#2879fe] text-white font-[500] mb-[20px]" >PROCEED TO CHECKOUT</button>
      <span className="text-red-400 text-[12px] cursor-pointer">Reset Cart</span>
    </div>
  );
};

export default Cart;
