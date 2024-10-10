import about from "../assets/about.png";
import Section from "../components/common/Section";
import Container from "../components/common/Container";
import Heading from "../components/common/Heading";
import Para from "../components/common/Para";
import Button from "../components/common/Button";

const aboutUs =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.";

const About = () => {
  return (
    <Section classes="bg-[#1E2A5D0A]">
      <Container classes="flex flex-col justify-around items-center gap-5 md:flex-row p-10">
        <img className="hidden md:block" src={about} alt="About Us Image" />
        <div className="text-left max-w-[447px] flex flex-col items-center md:items-start justify-center gap-4">
          <Heading text="About Us" fontSize="text-4xl" />
          <Para text={aboutUs} fontSize="text-sm" />
          <Button
            text="Read More"
            fontSize="text-sm"
            textColor="text-white"
            backgroundColor="bg-red-600"
          />
        </div>
      </Container>
    </Section>
  );
};

export default About;
