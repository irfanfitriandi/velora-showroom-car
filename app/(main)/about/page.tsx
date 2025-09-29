import {
  CompanyValuesSection,
  HeroSection,
  MilestonesSection,
  TestimonialsSection,
  WhyVeloraSection,
} from './_component/section';

const About = () => {
  return (
    <div className="bg-white pt-[68px] text-black md:pt-[100px]">
      <div className="container">
        <HeroSection />
        <CompanyValuesSection />
        <MilestonesSection />
        <WhyVeloraSection />
        <TestimonialsSection />
        {/* <AboutServiceSection /> */}
      </div>
    </div>
  );
};

export default About;
