import React from 'react'
import { Data } from '@/types';

import Card from './card';

interface ListProps{
  maxPrice: number
  sort: string | null

}

const List: React.FC<ListProps> = ({maxPrice,sort}) => {

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
    <div className="flex justify-between flex-wrap">{data?.map(item=>(
      <Card item={item} key={item.id}/>
    ))}</div>
  )
}

export default List