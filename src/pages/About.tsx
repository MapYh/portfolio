import Header from "../components/Header.tsx";
import Main from "../components/Main.tsx";
import { aboutPageContent } from "../variables/variables.ts";
import "./about.scss";

const About = () => {
  return (
    <>
      <section className="background_color_about">
        <Header />
        <section className="about-wrapper ">
          <Main {...aboutPageContent} />
        </section>
      </section>
    </>
  );
};
export default About;
