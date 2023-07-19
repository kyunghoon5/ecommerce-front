import React from 'react';

import Billboard from '@/components/ui/billboard';
import Categories from '@/components/ui/categories';
import FeaturedProducts from '@/components/ui/featuredProducts';
import Contact from '@/components/contact';



const HomePage = () => {
  return (
    <div>
      <Billboard />
      <FeaturedProducts type="featured" />
      <Categories/>
      <FeaturedProducts type="trending" />
      <Contact/>
    </div>
  );
};

export default HomePage;
