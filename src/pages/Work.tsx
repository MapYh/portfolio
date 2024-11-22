import Header from "../components/Header.tsx";
import "./work.scss";
import React_icon from "../assets/react.svg";
import Mongo_icon from "../assets/mongo.svg";
import Express_icon from "../assets/express.svg";
import nodejs_icon from "../assets/nodejs-icon.svg";
import aws_logo from "../assets/aws-svgrepo-com.svg";
import background from "../assets/work-background.svg";
import Footer from "../components/Footer.jsx";
import { classnames_work } from "../variables/variables.ts";

const settings = {
  classname: `${classnames_work.first_work_triangle}`,
  secondClassName: `${classnames_work.second_work_triangle}`,
};

const Work = () => {
  return (
    <>
      <section className=" background_color_work ">
        <Header {...settings} />
        <section className="work-wrapper">
          <section className="stack_and_image">
            <section className="stack_and_image__stack ">
              <h2 className="stack_and_image__stack--heading">
                MERNing Ideas into Reality
              </h2>
              <p className="stack_and_image__stack--paragraph">
                I develop
                <b>interactive, accessible websites and products </b>
                using the MERN stack (MongoDB, Express.js, React.js, and
                Node.js), delivering scalable, high-performance solutions with
                seamless frontend and backend integration.
              </p>
              <section className="break"></section>
              <p className="stack_and_image__stack--paragraph">
                I also leverage cloud <b>technologies</b> to design, deploy, and
                manage reliable and <b>scalable applications</b>, ensuring
                optimal performance and resource efficiency.
              </p>
            </section>

            <section className="stack_and_image__img">
              <img
                className="stack_and_image__img-background"
                src={background}
                alt=""
              />
              <img
                className="stack_and_image__img--styling"
                src={Mongo_icon}
                alt=""
              />
              <img
                className="stack_and_image__img--styling"
                src={Express_icon}
                alt=""
              />
              <img
                className="stack_and_image__img--styling"
                src={React_icon}
                alt=""
              />
              <img
                className="stack_and_image__img--styling"
                src={nodejs_icon}
                alt=""
              />
              <img
                className="stack_and_image__img--styling"
                src={aws_logo}
                alt=""
              />
            </section>
          </section>
        </section>
        <Footer />
      </section>
    </>
  );
};
export default Work;
