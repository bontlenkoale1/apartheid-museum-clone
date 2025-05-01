import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuIcon = document.querySelector(".menu-icon");
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !menuIcon.contains(event.target)
      ) {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="container">
      <div className="navbar-wrapper">
        <div className="navbar">
          <h1>Apartheid Museum</h1>
          
          {/* Mobile Sidebar */}
          <ul ref={sidebarRef} className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className="close-icon" onClick={closeSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#A96424"><path d="m258.42-218.69-38.92-39.73L440.27-480 219.5-701.58l38.92-39.73L480-519.73l221.58-221.58 38.92 39.73L519.73-480 740.5-258.42l-38.92 39.73L480-440.27 258.42-218.69Z"/></svg>
          </div>
            <li onClick={closeSidebar}><a href="#about-us">About Us</a></li>
            <li onClick={closeSidebar}><a href="#exhibitions">Exhibitions</a></li>
            <li onClick={closeSidebar}><a href="#school-visits">School Visits</a></li>
            <li onClick={closeSidebar}><a href="#events">Events</a></li>
            <li onClick={closeSidebar}><a href="#resources">Resources</a></li>
            <li onClick={closeSidebar}><a href="#contact-us">Contact Us</a></li>
          </ul>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#exhibitions">Exhibitions</a></li>
            <li><a href="#school-visits">School Visits</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="menu-icon" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#A96424"
            >
              <path d="M148.08-261.08v-55.96h663.84v55.96H148.08Zm0-191.34v-55.96h663.84v55.96H148.08Zm0-191.35v-55.96h663.84v55.96H148.08Z" />
            </svg>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};