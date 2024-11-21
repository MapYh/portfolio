import Nav from "./Nav.tsx";
import "./Header.scss";
import { Triangle_colors } from "../types/interfaces.ts";
import ButtonMailTo from "./ButtonMailto.tsx";
import { mailToContent } from "../variables/variables.ts";

const Header = (props: Triangle_colors) => {
  return (
    <>
      <header className="header header-styling">
        <article className="header-left">
          <div>
            <section className="main__logo--styling__nav">
              <div className={`${props.classname}`}></div>
              <div className={`${props.secondClassName}`}></div>
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
