import Blog from './_component/blog';
import Faq from './_component/faq';
import FeaturedDeals from './_component/featured-deals';
import Hero from './_component/hero';
import Testimonials from './_component/testimonials';
import WhyChooseUS from './_component/why-choose-us';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDeals />
      <WhyChooseUS />
      <Testimonials />
      <Faq />
      <Blog />
    </>
  );
};

export default Home;
