import Header from "../components/Header.tsx";
import "./work.scss";
import React_icon from "../assets/react.svg";
import Mongo_icon from "../assets/mongo.svg";
import Express_icon from "../assets/express.svg";
import nodejs_icon from "../assets/nodejs-icon.svg";
import aws_logo from "../assets/aws-svgrepo-com.svg";

const Work = () => {
  return (
    <>
      <Header />
      <section className="stack_and_image">
        <section className="stack_and_image__stack">
          <h2 className="stack_and_image__stack--heading">
            MERNing Ideas into Reality
          </h2>
          <p className="stack_and_image__stack--paragraph">
            I develop
            <b>interactive, accessible websites and products </b>
            using the MERN stack (MongoDB, Express.js, React.js, and Node.js),
            delivering scalable, high-performance solutions with seamless
            frontend and backend integration.
          </p>
          <section className="break"></section>
          <p className="stack_and_image__stack--paragraph">
            I also leverage cloud <b>technologies</b> to design, deploy, and
            manage reliable and <b>scalable applications</b>, ensuring optimal
            performance and resource efficiency.
          </p>
        </section>
        <section className="stack_and_image__img">
          <img
            className="stack_and_image__img--styling-img"
            src={Mongo_icon}
            alt=""
          />
          <img
            className="stack_and_image__img--styling-img"
            src={Express_icon}
            alt=""
          />
          <img
            className="stack_and_image__img--styling-img"
            src={React_icon}
            alt=""
          />
          <img
            className="stack_and_image__img--styling-img"
            src={nodejs_icon}
            alt=""
          />
          <img
            className="stack_and_image__img--styling-img"
            src={aws_logo}
            alt=""
          />
        </section>
      </section>
    </>
  );
};
export default Work;
