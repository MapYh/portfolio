import Header from "../components/Header.tsx";
import Main from "../components/Main.tsx";
import { aboutPageContent } from "../variables/variables.ts";
import "./about.scss";

const About = () => {
  return (
    <>
      <section>
        <Header />
        <Main {...aboutPageContent} />
      </section>
    </>
  );
};
export default About;
