import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import NoPage from "../Pages/NoPage/NoPage.jsx";
import About from "../Pages/About/about.jsx";
import AllProjects from "../Pages/Projects/Allprojects.jsx";
import Contact from "../Pages/Contact/contact.jsx";
import Home from "../Pages/Home/home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <AllProjects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

export default router;
