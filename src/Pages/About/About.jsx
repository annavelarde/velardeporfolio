import "./About.css";
import { Chrono } from "react-chrono";

function About() {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
  ];

  return (
    <div className="container" style={{ width: "500px", height: "950px" }}>
      <div>
        <Chrono
          className="rct-item-content"
          items={items}
          mode="VERTICAL_ALTERNATING"
        />
        <p className="rct-card-subtitle">cardSubtitle</p>
      </div>
    </div>
  );
}

export default About;
