import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import Section from "../common/Section";
import Container from "../common/Container";
import FooterColumn from "../common/FooterColumn";
import Heading from "../common/Heading";
import Para from "../common/Para";

const address =
  "Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434";

const Footer = () => {
  return (
    <Section classes="p-10 bg-[#f8f8f8]">
      <Container classes="grid md:place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <img src={logo} alt="Logo Image" />
        <FooterColumn>
          <Heading text="Contact Us" fontSize="text-lg" />
          <Para text={address} fontSize="text-sm" />
          <Para text="example2020@gmail.com" fontSize="text-sm" />
          <Para text="(904) 443-0343" fontSize="text-sm" />
        </FooterColumn>
        <FooterColumn>
          <Heading text="More" fontSize="text-lg" />
          <Para text="About Us" fontSize="text-sm" />
          <Para text="Products" fontSize="text-sm" />
          <Para text="Career" fontSize="text-sm" />
          <Para text="Contact Us" fontSize="text-sm" />
        </FooterColumn>
        <FooterColumn classes="items-center">
          <div className="hidden md:block">
            <Heading text="Social Links" fontSize="text-lg" />
          </div>
          <div className="translate-y-20 md:translate-y-0 md:mt-2 flex gap-6 items-center pb-10">
            <img src={instagram} alt="Instagram Logo" />
            <img src={twitter} alt="Twitter Logo" />
            <img src={facebook} alt="Facebook Logo" />
          </div>
          <br />
          <br />
          <div className="md:translate-y-5 md:-translate-x-1/1 lg:translate-0">
            <Para text="© 2022 Food Truck Example" fontSize="text-sm" />
          </div>
        </FooterColumn>
      </Container>
    </Section>
  );
};

export default Footer;
