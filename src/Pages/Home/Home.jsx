import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="background">
      <div className="containerHome">
        <div className="hero">
          <h1>Welcome to Anna&apos;s Portfolio</h1>
          <p>
            I&apos;m a passionate web developer with a love for creating
            beautiful and functional websites. With a strong foundation in HTML,
            CSS, and JavaScript, I enjoy bringing creative ideas to life through
            code. Whether it&apos;s crafting intuitive user interfaces or
            solving complex programming challenges, I&apos;m driven by a desire
            to deliver exceptional web experiences. BRING IDEAS TO LIVE!
            {/* My expertise extends to
            modern front-end frameworks like React, allowing me to build dynamic
            and interactive web applications. I&apos;m also experienced in
            back-end technologies such as Node.js and Express, enabling me to
            develop full-stack solutions. As a lifelong learner, I&apos;m always
            exploring new technologies and staying up-to-date with industry best
            practices. I believe in the power of collaboration and enjoy working
            in teams to deliver successful projects that exceed expectations. */}
            <br />
            <br />
            <p>
              Thank you for visiting my portfolio. Please feel free to explore
              my projects and get in touch if you&apos;d like to work together
              on your next web development venture!
            </p>
          </p>
          {/* <a href="/projects" className="view-projects-button button button4">
            View Projects
          </a> */}
          <Link to="/projects" className="view-projects-button button button4">
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
