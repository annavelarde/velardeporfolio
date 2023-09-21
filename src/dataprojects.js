import calathea from "/calatheaapp.png";
import cluegame from "/cluegame.png";
import cargame from "/cargame.png";
import plantapp from "/plantapp.png";

const projects = [
  {
    idProyecto: "1",
    title: "Clue Game🔎",
    description:
      "Using only Vanilla Javascript and CSS to manipulate the Document Object Model (DOM), we've created an exciting new game. It's a game of chance that involves selecting a murderer, weapon, and location in order to solve a murder mystery. This project is sure to provide hours of entertainment for players of all ages. Deployed on the powerful Netlify platform and it has a responsive design.",
    leng: ["Javascript (ES6)", "CSS", "HTML5"],
    ownedBy: "Anna Velarde",
    year: "2023",
    url: cluegame,
    link: "https://thecluegame.netlify.app/",
  },
  {
    idProyecto: "2",
    title: "Plant weblog-🌿",
    description:
      "This application utilizes the cutting-edge technologies of MongoDB, Express, ReactJS and NodeJS (MERN), giving you unparalleled performance and flexibility. With comprehensive CRUD operations available, you'll have full control over your data. Plus, our MVC and ReactJS data management tools make it easy to keep your application running smoothly.",
    leng: [
      "Javascript",
      "CSS",
      "HTML",
      "MongoDB",
      "Cloudinary",
      "NodeJS",
      "Express",
    ],
    ownedBy: "Anna Velarde",
    year: "2022",
    url: plantapp,
    link: "https://plantsapp.netlify.app/",
  },
  {
    idProyecto: "3",
    title: "SpeedCar Game🏎",
    description:
      "SpeedCar is a game built using Vanilla Javascript and P5JS. The objective of the game is to collect points by obtaining stars. However, you must be careful and avoid the obstacles on the road, as they can cause you to lose the game.",
    leng: ["Javascript", "HTML", "CSS"],
    ownedBy: "Anna Velarde",
    year: "2022",
    url: cargame,
    link: "https://annavelarde.github.io/game/",
  },
  {
    idProyecto: "4",
    title: "Calathea App",
    description:
      "Looking for a powerful back-end web application that's perfect for plant bloggers? - Project: Calathea - MERN WebApp. This app was built using Javascript, Express, NodeJS, and MongoDB. Offers robust CRUD operations for both blogs and users, all while utilizing the highly efficient MVC architecture. A sleek UI design that incorporates the Bootstrap framework and handlebars as a simple templating engine (front-end).",
    // Technologies: Javascript(ES6) · Express · NodeJS · MongoDB · Bootstrap · Cloudinary",
    leng: ["Javascript", "CSS", "HTML", "Handlebars", "MongoDB", "Cloudinary"],
    ownedBy: ["Juan Carlos Eugenio", " & ", "Anna Velarde"],
    year: "2022",
    url: calathea,
    link: "https://calathea-blog.onrender.com/",
  },
];

export default projects;
