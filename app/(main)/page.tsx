import { getCarsFromSession } from '@/lib/utils';

import Blog from './_component/blog';
import Faq from './_component/faq';
import FeaturedDeals from './_component/featured-deals';
import Hero from './_component/hero';
import Testimonials from './_component/testimonials';
import WhyChooseUS from './_component/why-choose-us';

const Home = () => {
  const listCars = getCarsFromSession();
  
  return (
    <>
      <Hero />
      <FeaturedDeals listCars={listCars} />
      <WhyChooseUS />
      <Testimonials />
      <Faq />
      <Blog />
    </>
  );
};

export default Home;
