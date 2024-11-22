import Header from "../components/Header.tsx";

import Projects from "../components/Projects.tsx";
import Header_main from "../components/Header_main.tsx";
import Footer from "../components/Footer.jsx";
import "./home.scss";

import { classnames_home } from "../variables/variables.ts";

const setting = {
  classname: `${classnames_home.first_home_triangle}`,
  secondClassName: `${classnames_home.second_home_triangle}`,
};

const Home = () => {
  return (
    <>
      <section className="background_color">
        <Header {...setting} />

        <section className="home-wrapper">
          <Header_main />

          <Projects />
        </section>

        <Footer />
      </section>
    </>
  );
};
export default Home;
