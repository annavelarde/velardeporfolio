import "./Navbar.css";
import { Link } from "react-router-dom";
// import { useState } from "react"; // Import useState from React

function Navbar() {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  return (
    <div>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <label htmlFor="active" className="close"></label>
      <div className="wrapper">
        <ul>
          <li className="ilNavbar">
            {/* Add onClick handler to close navbar when link is clicked */}
            <Link to="/" className="linkNavbar">
              Home
            </Link>
          </li>
          <li className="liNavbar">
            <Link to="/about" className="linkNavbar">
              About
            </Link>
          </li>
          <li className="liNavbar">
            <Link to="/projects" className="linkNavbar">
              Projects
            </Link>
          </li>
          <li className="liNavbar">
            <Link to="/contact" className="linkNavbar">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
