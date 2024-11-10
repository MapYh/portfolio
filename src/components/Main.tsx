import "./Main.scss";
import Content from "../types/interfaces.ts";
import parser from "html-react-parser";

const Main = ({
  titel,
  pageDescription,
  titelMyInterest,
  myInterest,
  myInterest_cont,
  titelMyApproach,
  myApproach,
  titelBeyondCode,
  BeyondCode,
}: Content) => {
  return (
    <main className="main__about_page">
      <article className="main__about__header ">
        <article className="main__projects__header-text">
          <h2 className="main__projects__header-text--styling-header">
            {parser(titel)} <br />
          </h2>
          <p className="main__projects__header-text--styling-paragraph">
            {parser(pageDescription)}
          </p>
          <h3 className="main__projects__header-text--styling-header">
            {parser(titelMyInterest)} <br />
          </h3>
          <p className="main__projects__header-text--styling-paragraph">
            {parser(myInterest)}
          </p>
          <p className="main__projects__header-text--styling-paragraph">
            {parser(myInterest_cont)}
          </p>
          <h3 className="main__projects__header-text--styling-header">
            {parser(titelMyApproach)} <br />
          </h3>
          <p className="main__projects__header-text--styling-paragraph">
            {parser(myApproach)}
          </p>
          <h3 className="main__projects__header-text--styling-header">
            {parser(titelBeyondCode)} <br />
          </h3>
          <p className="main__projects__header-text--styling-paragraph">
            {parser(BeyondCode)}
          </p>
        </article>
      </article>
    </main>
  );
};

export default Main;
