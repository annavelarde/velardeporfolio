import "./About.css";
import { Chrono } from "react-chrono";

function About() {
  const items = [
    {
      title: "Jan 2022 - Now",
      cardTitle: "3D/Lighting Specialist,",
      cardSubtitle:
        "Working on projects using Revit (BIM 360) and ReluxCAD.Designing 3D spaces/Metaverse/VR.",
      cardDetailedText: ["paragraph1", "paragraph2"],
      timelineContent: <div>Hoare Lea. Bristol, UK</div>,
    },
    {
      title: "Jan 2020 - Jan 2022",
      cardTitle: "Card Title 1",
      items: [
        { cardTitle: "nested card title 1" },
        { cardTitle: "nested card title 2" },
      ],
    },
    { title: "Timeline title 2", cardTitle: "Card Title 2" },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
  ];

  return (
    <div className="aboutContainer">
      <div className="sectionsContainer">
        <div className="sectionAbout">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQFqsiryuS_u3A/profile-displayphoto-shrink_800_800/0/1680116012895?e=2147483647&v=beta&t=5b9tetwm3YOVOuO50o-FvIzE-MjIFztYfa2YPwYsl0g"
            alt=""
            style={{ width: "250px", height: "250px" }}
          />
          <div className="sectionAboutInfo">
            <h1>About.</h1>
            <h3>
              MERN Full Stack Developer - Javascript (ES6), MongoDB, Express,
              React, NodeJS, HTML & CSS
            </h3>
            <p>
              As a full-stack web developer, I am passionate about creating
              engaging and responsive websites that enhance user experiences. I
              thrive on the challenge of problem-solving and love working with
              code to find solutions that exceed client expectations. My strong
              technical skills and ability to quickly adapt to new technologies
              enable me to approach projects efficiently and effectively.
            </p>
          </div>
        </div>
        <div className="experienceInfo">
          <h1>Experience.</h1>
          <div style={{ width: "500px", height: "1950px" }}>
            <Chrono
              items={items}
              mode="VERTICAL_ALTERNATING"
              mediaSettings={{ align: "center", fit: "contain" }}
              enableBreakPoint
              theme={{
                primary: "teal",
                secondary: "transparent",
                cardBgColor: "transparent",
                cardBgColorActive: "black",
                titleColor: "black",
                titleColorActive: "lightpink",
                cardDetailedTextColor: "black",
                cardDetailedTextColorActive: "teal",
                cardTitleColor: "teal",
                cardTitle: "teal",
                cardTitleColorActive: "lightpink",
              }}
              fontSizes={{
                cardSubtitle: "0.85rem",
                cardText: "0.8rem",
                cardTitle: "1.2rem",
                title: "1.1rem",
              }}
              buttonTexts={{
                first: "Jump to First",
                last: "Jump to Last",
                next: "Next",
                previous: "Previous",
              }}
              classNames={{
                card: "my-card",
                cardMedia: "my-card-media",
                cardSubTitle: "my-card-subtitle",
                cardText: "my-card-text",
                cardTitle: "my-card-title",
                controls: "my-controls",
                title: "my-title",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
