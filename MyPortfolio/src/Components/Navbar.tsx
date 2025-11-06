import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "./assets/RandomGamer.png"

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // scrolling down
      setShow(false);
    } else {
      // scrolling up
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${show ? "navbar-show" : "navbar-hide"}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="navbar-logo-img" />
          <span className="navbar-logo-text">Your Virtual Guy</span>
        </div>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}onClick={closeMenu}>Home</Link></li>
          <li><Link to="/About" className={location.pathname === "/About" ? "active" : ""}onClick={closeMenu}>About</Link></li>
          <li><Link to="/Contact" className={location.pathname === "/contact" ? "active" : ""}onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

