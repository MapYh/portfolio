import Nav from "./Nav.tsx";
import "./Header.scss";
import Logo from "../assets/logo.svg";
import ButtonMailTo from "./ButtonMailto.tsx";
import { mailToContent } from "../variables/variables.ts";

const Header = () => {
  return (
    <>
      <header className="header header-styling">
        <article className="header-left">
          <div>
            <img src={Logo} alt="Image of a logo" />
          </div>
          <Nav />
        </article>
        <ButtonMailTo {...mailToContent} />
      </header>
    </>
  );
};

export default Header;
