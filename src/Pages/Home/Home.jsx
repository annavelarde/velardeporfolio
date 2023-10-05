import "./Home.css";
import { Link } from "react-router-dom";
import ReactTyped from "react-typed";
// import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div>
      <div className="background">
        <div className="containerHome">
          <div className="hero">
            <h1>
              I&apos;m a{" "}
              <ReactTyped
                strings={["Developer...", "Writer...", "Designer..."]}
                typeSpeed={100}
                loop
                backSpeed={20}
                cursorChar="|"
                showCursor={true}
              />
            </h1>
            <h2>Welcome to Anna&apos;s Portfolio.</h2>
            <p>
              I&apos;m a passionate web developer with a love for creating
              beautiful and functional websites. With a strong foundation in
              HTML, CSS, and JavaScript, I enjoy bringing creative ideas to life
              through code. Whether it&apos;s crafting intuitive user interfaces
              or solving complex programming challenges, I&apos;m driven by a
              desire to deliver exceptional web experiences. BRING IDEAS TO
              LIVE!
              <br />
              <br />
              Thank you for visiting my portfolio. Please feel free to explore
              my projects and get in touch if you&apos;d like to work together
              on your next web development venture!
            </p>
            {/* <p>
            <TypeAnimation
              sequence={[
                `I'm a passionate web developer with a love for creating beautiful and functional websites. With a strong foundation in HTML, CSS, and JavaScript, I enjoy bringing creative ideas to life through code. Whether it's crafting intuitive user interfaces or solving complex programming challenges, I'm driven by a desire to deliver exceptional web experiences. Bring ideas to live!\n\nThank you for visiting my portfolio. Please feel free to explore my projects and get in touch if you'd like to work together on your next web development venture!`,
              ]}
              speed={110}
              style={{ whiteSpace: "pre-line", fontSize: "1.1em" }}
              repeat={true}
            />
          </p> */}
            <Link
              to="/projects"
              className="view-projects-button button button4"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
