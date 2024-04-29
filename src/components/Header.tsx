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
      <main className="main">
        <section className="main__side">
          <section className="main__side-text">
            <h1>test</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              harum, molestiae dolor at vel magnam aliquid officiis error,
              facere possimus quasi dolores repellat doloribus quis facilis
              dolorem. Sit, unde velit.
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
