import Header from "../components/Header.tsx";
import Main from "../components/Main.tsx";
import { aboutPageContent } from "../variables/variables.ts";

const About = () => {
  return (
    <>
      <Header />
      <Main {...aboutPageContent} />
    </>
  );
};
export default About;
