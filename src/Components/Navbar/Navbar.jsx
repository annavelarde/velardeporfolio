import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <label htmlFor="active" className="close"></label>
      <div className="wrapper">
        <ul className="ulNavbar">
          <li className="ilNavbar">
            {/* <a href="/">Home</a> */}
            <Link to="/" className="linkNavbar">
              Home
            </Link>
          </li>
          <li className="liNavbar">
            {/* <a href="/about">About</a> */}
            <Link to="/about">About </Link>
          </li>
          <li className="liNavbar">
            {/* <a href="/projects">Projects</a> */}
            <Link to="/projects">Projects </Link>
          </li>
          <li className="liNavbar">
            {/* <a href="/contact">Contact</a> */}
            <Link to="/contact">Contact </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
