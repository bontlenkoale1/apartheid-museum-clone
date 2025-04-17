import React, {useState} from "react";
import "./Navbar.css";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
  return (
    <div className="container">
      <div className="navbar-wrapper">
        <div className="navbar">
          <h1>Apartheid Museum</h1>
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
            <li>
              <a href="About Us">About Us</a>
            </li>
            <li>
              <a href="Exhibitions">Exhibitions</a>
            </li>
            <li>
              <a href="School Visits">School Visits</a>
            </li>
            <li>
              <a href="Events">Events</a>
            </li>
            <li>
              <a href="Resources">Resources</a>
            </li>
            <li>
              <a href="Contact Us">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />
    </div>
  );
};
