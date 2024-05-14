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
      <main className="main">
        <section className="main__side">
          <section className="main__side-text">
            <h1 className="main__side-text-header-one">
              Hi, My <br />
              name is <b>Test</b>
            </h1>
            <p className="main__side-text-text-one">
              I'm an <b>creative developer</b> from Southern, Sweden.
            </p>
          </section>
        </section>
        <section className="main__side">
          <img src="" alt="" />
          pic
        </section>
      </main>
      <article></article>
    </>
  );
};

export default Header;
