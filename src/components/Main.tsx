import "./Main.scss";
import Content from "../types/interfaces.ts";
import parser from "html-react-parser";

const Main = ({ titel, pageDescription }: Content) => {
  return (
    <main className="main__projects">
      <article className="main__projects__header">
        <article className="main__projects__header-text">
          <h2 className="main__projects__header-text--styling-header">
            {parser(titel)} <br />
          </h2>
          <p className="main__projects__header-text--styling-paragraph">
            {parser(pageDescription)}
          </p>
        </article>
      </article>
    </main>
  );
};

export default Main;
