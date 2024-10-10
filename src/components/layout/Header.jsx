import logo from "../../assets/logo.png";
import Button from "../common/Button";
import Container from "../common/Container";

const Header = () => {
  return (
    <header className="w-screen z-10 absolute p-3">
      <Container classes="flex justify-end lg:justify-between items-center pr-4">
        <img className="h-14 hidden lg:block" src={logo} alt="Logo" />
        <Button
          text="Get In Touch"
          fontSize="text-sm"
          textColor="text-white"
          backgroundColor="bg-transparent"
          borderColor="border-white"
          borderWidth="border"
        />
      </Container>
    </header>
  );
};

export default Header;
