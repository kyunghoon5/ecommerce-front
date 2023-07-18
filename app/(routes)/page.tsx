import React from 'react';

import Billboard from '@/components/ui/billboard';
import Categories from '@/components/ui/categories';
import FeaturedProducts from '@/components/ui/featuredProducts';



const HomePage = () => {
  return (
    <div>
      <Billboard />
      <FeaturedProducts type="featured" />
      <Categories/>
      <FeaturedProducts type="trending" />
      
    </div>
  );
};

export default HomePage;
