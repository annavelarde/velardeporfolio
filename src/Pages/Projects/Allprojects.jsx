import "./Allprojects.css";
import projects from "../../dataprojects";

function Allprojects() {
  // console.log(dataProjects);

  return (
    <div>
      <div className="containerProjects">
        <h1 className="titleProjects">Check out my projects </h1>
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
          {/* <i>
          Let&apos;s collaborate to create web applications that not only meet
          your requirements but also exceed your expectations.
        </i> */}
        </p>
      </div>

      <section className="cards">
        <div className="projects">
          {projects.map((project) => (
            <article className="card card--1" key={project.idProyecto}>
              <div className="card__img"></div>
              <a href="#" className="card_link">
                <div className="card__img--hover"></div>
              </a>
              <div className="card__info">
                <span className="card__category"> {project.title}</span>
                <h3 className="card__title">{project.description}</h3>
                <span className="card__by">
                  by{" "}
                  <a href="#" className="card__author" title="author">
                    Anna Velarde
                  </a>
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
