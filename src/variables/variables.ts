import Content from "../types/interfaces.ts";
import { HomePageContent, MailToContent } from "../types/interfaces.ts";

const homePageContent: HomePageContent = {
  titel: `Let's work <br/> together`,
  pageDescription: `From <b>API development and documentation </b>, <br /> <b>single-page apps</b> to something more bespoke with <b>React JS</b>. I help awesome people to build ambitious yet accessible web projects.`,
};

const aboutPageContent: Content = {
  titel: "About me",
  pageDescription:
    "Hello! I’m Test, a passionate and versatile software developer with a love for all things code. My journey into programming started with a curiosity about how technology shapes our daily lives, and over the years, that curiosity has evolved into a career focused on creating powerful, seamless digital experiences. ",
  titelMyInterest: "My Interests",
  myInterest:
    "I have a broad interest in development, spanning both front-end and back-end work. On the front-end side, I enjoy designing intuitive and responsive interfaces that bring ideas to life and make users' interactions feel natural. I work with frameworks like React, and Express and I’m always exploring new libraries and techniques to stay current in the fast-evolving world of front-end development.",
  myInterest_cont:
    "<br /> On the back end, I’m driven by a fascination with problem-solving and optimization. Whether I’m designing APIs, managing databases, or building scalable server architectures, I love diving into the details that make applications reliable and efficient. I have experience with languages like Node.js, C++, and Python, as well as databases like MySQL, MongoDB, and cloud services like AWS.",
  titelMyApproach: "My Approach",
  myApproach:
    "For me, coding is about more than just solving problems—it’s about creating meaningful experiences and continuously learning. I take pride in writing clean, maintainable code and always look for ways to optimize performance without sacrificing quality. Collaboration is key to my workflow, and I enjoy working in dynamic environments where ideas are shared, and knowledge is freely exchanged.",
  titelBeyondCode: "Beyond Code",
  BeyondCode:
    " I’m also an avid learner and regularly build my own projects to expand my skill set and stay on top of industry trends.<br /> <br />Let’s connect and build something amazing together!",
};

const mailToContent: MailToContent = {
  mailto: `mailto:Marko.paatalo@outlook.com`,
  label: `Hire me`,
};

export { homePageContent, aboutPageContent, mailToContent };
