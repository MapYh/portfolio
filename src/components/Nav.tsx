import { Link } from "react-router-dom";
import "./Nav.scss";
/* import React from "react"; */
/* import Button from "./Language_button";
import Dropdown_card from "./Dropdown_card"; */

/* const languageListData: string[] = ["English", "Swedish"]; */
//Place a Api call to find data or import from another api call.

const Nav = () => {
  /*  const [open, setOpen] = React.useState(false); */
  return (
    <nav className="header-nav">
      <ul className="header-nav-list">
        <li className="header-nav-item ">
          <Link to=" ">|</Link>
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
        {/* <section className="header-nav-list-lang">
          <li className="header-nav-item header-styling">
            <Button onClick={() => setOpen((open) => !open)} />
          </li>
          {open && <Dropdown_card props={languageListData} />}
        </section> */}
      </ul>
    </nav>
  );
};

export default Nav;
