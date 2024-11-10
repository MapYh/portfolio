import Nav from "./Nav.tsx";
import "./Header.scss";

import ButtonMailTo from "./ButtonMailto.tsx";
import { mailToContent } from "../variables/variables.ts";

const Header = () => {
  return (
    <>
      <header className="header header-styling">
        <article className="header-left">
          <div>
            <section className="main__logo--styling__nav">
              <div className="nav__first-triangle"></div>
              <div className="nav__second-triangle"></div>
            </section>
          </div>
          <Nav />
        </article>
        <ButtonMailTo {...mailToContent} />
      </header>
    </>
  );
};

export default Header;
