import "./Navbar.css";

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
          <li className="liNavbar">
            <a href="/">Home</a>
          </li>
          <li className="liNavbar">
            <a href="/about">About</a>
          </li>
          <li className="liNavbar">
            <a href="/projects">Projects</a>
          </li>
          <li className="liNavbar">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
