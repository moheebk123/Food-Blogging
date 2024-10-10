import heroImg from "../assets/hero-img.png";
import heroVector from "../assets/hero-vector.png";
import Section from "../components/common/Section";
import Container from "../components/common/Container";
import HeadingSpan from "../components/common/HeadingSpan";
import Para from "../components/common/Para";
import Button from "../components/common/Button";

const Hero = () => {
  return (
    <Section>
      <Container classes="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-5 pb-24">
        <div className="w-full lg:w-1/2 p-5">
          <div className="mx-auto md:mx-0 max-w-[330px] flex flex-col gap-4 text-center md:text-left items-center md:items-start">
            <div>
              <HeadingSpan redColor={false} text="Discover the " />
              <HeadingSpan redColor={true} text="Best " />
              <HeadingSpan redColor={false} text="Food and Drinks " />
            </div>
            <Para
              text="Naturally made Healthcare Products for the better care & support of your body."
              fontSize="text-sm"
            />
            <Button
              text="Explore Now!"
              fontSize="text-base"
              textColor="text-white"
              backgroundColor="bg-red-600"
            />
          </div>
        </div>
        <div className="relative w-full md:w-1/2 ">
          <img src={heroImg} alt="Hero Section Image" />
          <img
            className="absolute top-0 right-0"
            src={heroVector}
            alt="Hero Section Image"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
