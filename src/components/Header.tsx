import { Link } from "react-router-dom";
import Nav from "./Nav.tsx";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <article className="header-left">
          <div>Logo</div>
          <Nav />
        </article>
        <li className="header-nav-item">
          <Link to="/Hire_me">Hire me</Link>
        </li>
      </header>
      <main className="main">main</main>
      <article></article>
    </>
  );
};

export default Header;
