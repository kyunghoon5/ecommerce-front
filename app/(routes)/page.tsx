import Billboard from '@/components/ui/billboard';
import FeaturedProducts from '@/components/ui/featuredProducts';
import React from 'react';



const HomePage = () => {
  return (
    <div>
      <Billboard />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  );
};

export default HomePage;
