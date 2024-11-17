import Header from "../components/Header.tsx";

import Projects from "../components/Projects.tsx";
import Header_main from "../components/Header_main.tsx";

import "./home.scss";

const Home = () => {
  return (
    <>
      <section className="background_color">
        <Header />

        <section className="home-wrapper">
          <Header_main />

          <Projects />
        </section>
      </section>
    </>
  );
};
export default Home;
