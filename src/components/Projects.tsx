import "./Projects.scss";
import tetris_img from "../assets/tetris.png";

const Projects = () => {
  return (
    <section className="projects">
      <article className="projects__collection project-text--styling">
        <article className="projects__collection-project ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MapYh/Tetris"
          >
            <section className="projects__collection-project-pic">
              <img
                src={tetris_img}
                alt="tetris placeholder pic"
                width="400"
                height="350"
              />
            </section>
          </a>

          <section className="projects__collection-project-text">
            <h1 className="project-titel--styling">Tetris</h1>
            <p className="project-text--styling">
              A Tetris like game that is built with JS and CSS, I used this game
              to practice JS and CSS.
            </p>
          </section>
        </article>
        {/* <article className="projects__collection-project">
          <section className="projects__collection-project-text">
            <h1 className="project-titel--styling">Titel desciption</h1>
            <p className="project-text--styling ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium officiis, voluptas cum a quidem quae maxime quis
              repellat ipsum nemo, hic, voluptatum nostrum. Rerum eos
              necessitatibus saepe quo officiis mollitia?
            </p>
          </section>
          <section className="projects__collection-project-pic">pic</section>
        </article>
        <article className="projects__collection-project">
          <section className="projects__collection-project-pic">pic</section>
          <section className="projects__collection-project-text">
            <h1 className="project-titel--styling">Titel desciption</h1>
            <p className="project-text--styling ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium officiis, voluptas cum a quidem quae maxime quis
              repellat ipsum nemo, hic, voluptatum nostrum. Rerum eos
              necessitatibus saepe quo officiis mollitia?
            </p>
          </section>
        </article> */}
      </article>
    </section>
  );
};

export default Projects;
