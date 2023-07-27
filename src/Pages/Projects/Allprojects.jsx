import "./Allprojects.css";

function Allprojects() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: "https://via.placeholder.com/400",
      description: "A brief description of project 1.",
    },
    {
      id: 2,
      title: "Project 2",
      image: "https://via.placeholder.com/400",
      description: "A brief description of project 2.",
    },
    {
      id: 3,
      title: "Project 3",
      image: "https://via.placeholder.com/400",
      description: "A brief description of project 3.",
    },
  ];

  return (
    <div>
      <h1>Check out my projects below</h1>
      <p className="mainText">
        As a dedicated web developer, I meticulously define objectives and
        target audience, researching trends and exploring inspiration. Using
        valuable data and paying close attention to detail, I immerse myself in
        developing wireframes and prototypes, ensuring a unique user experience
        design. Once the design stage is complete, my focus shifts to writing
        clean and optimized code, guaranteeing a responsive and high-performance
        website.
        {/* <br />
        As a dedicated <b>web developer</b> specializing in creating MERN
        (MongoDB, Express.js, React, Node.js) applications, my passion lies in
        developing immersive and user-centric digital experiences. With a keen
        eye for design and an undestanding of front-end technologies like HTML,
        CSS, and JavaScript, I bring ideas to life through intuitive user
        interfaces. On the back-end, I use my expertise in server-side
        programming and database management to ensure optimal functionality and
        data handling. */}
        {/* My commitment to web security and performance
        optimization ensures that each project I undertake delivers the best
        results. */}
        {/* <li>git </li>
        <li>deployment(cloud service)</li>
        <li>write clear.... </li>
        <li>use of frameworks...</li>
        <br /> */}
        <br />
        {/* <i>
          Let&apos;s collaborate to create web applications that not only meet
          your requirements but also exceed your expectations.
        </i> */}
      </p>
      <p>This potfolio showcases my expertise in</p>
      {/* <p className="mainText">
        This portfolio reflects my dedication to delivering innovative solutions
        and my ability to collaborate effectively to any development team.
      </p> */}
      <section className="cards">
        <article className="card card--1">
          <div className="card__img"></div>
          <a href="#" className="card_link">
            <div className="card__img--hover"></div>
          </a>
          <div className="card__info">
            <span className="card__category"> Project</span>
            <h3 className="card__title">First Project ....</h3>
            <span className="card__by">
              by{" "}
              <a href="#" className="card__author" title="author">
                Anna Velarde
              </a>
            </span>
          </div>
        </article>
        <div className="projects">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <img src={project.image} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Allprojects;
