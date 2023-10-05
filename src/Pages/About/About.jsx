// import "./About.css";
import { Chrono } from "react-chrono";

function About() {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
      cardDetailedText: ["paragraph1", "paragraph2"],
      timelineContent: <div>Custom content</div>,
    },
    {
      title: "Timeline title 1",
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
    <div style={{ width: "600px", height: "1950px" }}>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        mediaSettings={{ align: "center", fit: "contain" }}
        enableBreakPoint
        theme={{
          primary: "teal",
          secondary: "white",
          cardBgColor: "transparent",
          cardBgColorActive: "black",
          titleColor: "black",
          titleColorActive: "lightpink",
          cardDetailedTextColor: "black",
          cardDetailedTextColorActive: "teal",
          cardTitleColor: "teal",
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
  );
}

export default About;
