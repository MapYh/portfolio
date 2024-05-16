import Header from "../components/Header.tsx";
import Main from "../components/Main.tsx";
import Projects from "../components/Projects.tsx";
import Header_main from "../components/Header_main.tsx";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Header />

      <section className="home-wrapper">
        <Header_main />
        <Main />
        <Projects />
      </section>
    </>
  );
};
export default Home;
