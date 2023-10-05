import "./Allprojects.css";
import projects from "../../dataprojects";
import ReactTyped from "react-typed";
// import { TypeAnimation } from "react-type-animation";

function Allprojects() {
  return (
    <div>
      <div className="containerProjects">
        <h1 className="titleProjects">
          {/* <TypeAnimation
            sequence={[`Check out my projects.`]}
            speed={60}
            style={{ whiteSpace: "pre-line", fontSize: "1.4em" }}
            repeat={true}
          /> */}
          {""}
          <ReactTyped
            strings={[
              "Take a peek at my portfolio.",
              "Hope it interests you.",
              "I'd love your feedback!",
            ]}
            typeSpeed={100}
            loop
            backSpeed={20}
            cursorChar="|"
            showCursor={true}
          />
        </h1>
        <p className="mainText">
          As a dedicated <b>web developer</b> specializing in creating MERN
          (MongoDB, Express.js, React, Node.js) applications, my passion lies in
          developing immersive and user-centric digital experiences. With a keen
          eye for design and a deep understanding of front-end technologies, I
          bring ideas to life through intuitive user interfaces, while on the
          back-end, I use my expertise in server-side programming & database
          management to ensure optimal functionality and efficient data
          handling.
          <br />
          <br />
          Please find below the projects I have been working on 🖥️
        </p>
      </div>
      <section className="cards">
        <div className="projects">
          {projects.map((project) => (
            <article className="card card--1" key={project.idProyecto}>
              <a href={project.link} className="card_link">
                <div className="card__img--hover">
                  <img
                    className="sizeImage"
                    src={project.url}
                    alt={project.title}
                  />
                </div>
              </a>
              <div className="card__info">
                <p className="card__category"> {project.title}</p>
                <h3 className="card__description">{project.description}</h3>
                <span className="card__by">
                  <p className="card__author" title="author">
                    by {project.ownedBy}
                  </p>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Allprojects;
