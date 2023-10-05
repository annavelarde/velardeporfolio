import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <input type="checkbox" id="active" checked={menuOpen} />
      <label htmlFor="active" className="menu-btn" onClick={toggleMenu}>
        <span></span>
      </label>
      <label htmlFor="active" className="close" onClick={closeMenu}></label>
      <div className={`wrapper ${menuOpen ? "open" : ""}`}>
        <ul>
          <li className="navbar-item" onClick={closeMenu}>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item" onClick={closeMenu}>
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects" className="navbar-link" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li className="navbar-item" onClick={closeMenu}>
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
