import "./Main.scss";

const Main = () => {
  return (
    <main className="main__projects">
      <article className="main__projects__header">
        <article className="main__projects__header-text">
          <h2 className="main__projects__header-text--styling-header">
            Let's work <br /> together
          </h2>
          <p className="main__projects__header-text--styling-paragraph">
            From <b>API development and documentation</b>, <br />
            <b>single-page apps</b> to something more bespoke with{" "}
            <b>React JS</b>. I help awesome people to build ambitious yet
            accessible web projects.
          </p>
        </article>
      </article>
    </main>
  );
};

export default Main;
