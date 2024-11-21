import Header from "../components/Header.tsx";
import Main from "../components/Main.tsx";
import { aboutPageContent } from "../variables/variables.ts";
import "./about.scss";

import { classnames_about } from "../variables/variables.ts";

const settings = {
  classname: `${classnames_about.first_about_triangle}`,
  secondClassName: `${classnames_about.second_about_triangle}`,
};

const About = () => {
  return (
    <>
      <section className="background_color_about">
        <Header {...settings} />
        <section className="about-wrapper ">
          <Main {...aboutPageContent} />
        </section>
      </section>
    </>
  );
};
export default About;
