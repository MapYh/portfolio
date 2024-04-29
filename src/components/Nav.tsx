import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="header-nav">
      <ul className="header-nav-list">
        <li className="header-nav-item">
          <Link to="/Home">|</Link>
        </li>
        <li className="header-nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="header-nav-item">
          <Link to="/About">About</Link>
        </li>
        <li className="header-nav-item">
          <Link to="/Work">Work</Link>
        </li>
        <li className="header-nav-item">
          <Link to="/Language">Language</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
