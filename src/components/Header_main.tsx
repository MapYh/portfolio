import "./header_main.scss";

const Header_main = () => {
  return (
    <>
      <main className="main">
        <section className="main__side">
          <section className="main__side-text">
            <h1 className="main__side-text-header-one">
              Hi, My <br />
              name is <b>Marko</b>
            </h1>
            <p className="main__side-text-text-one">
              I'm an <b>creative developer</b> from Sweden.
            </p>
          </section>
        </section>
        <section className="main__side__logo">
          <section className="main__logo--styling">
            <div className="first_triangle"></div>
            <div className="second_triangle"></div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Header_main;
