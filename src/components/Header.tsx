/* import { Link } from "react-router-dom"; */
import Nav from "./Nav.tsx";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header header-styling">
        <article className="header-left">
          <div>Logo</div>
          <Nav />
        </article>
        <li className="header-nav-item">
          <a
            onClick={() =>
              (window.location.href = "mailto:Marko.paatalo@outlook.com")
            }
          >
            Hire me
          </a>
          {/* <Link to="/Hire_me">Hire me</Link> */}
        </li>
      </header>
    </>
  );
};

export default Header;
