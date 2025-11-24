import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "/Icons/logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-col">
          <div className="footer-logo">
            <img
              src={logo}
              alt="Apartheid Museum Logo"
              className="logo-image"
            />
            <h2>Apartheid Museum</h2>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-links">
            <div className="footer-heading-row">
              <h3>About </h3>
            </div>
            <ul>
              <li>
                <Link to="/AboutPage">About Us</Link>
              </li>
              <li>
                <a href="#about-us-overview">About Us Overview</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-links">
            <div className="footer-heading-row">
              <h3>Exhibitions</h3>
            </div>
            <ul>
              <li>
             <Link to="/exhibitions">Permanent Exhibitions</Link>
              </li>
              <li>
                <Link to="/exhibitions">Mandela Exhibition</Link>
              </li>
              <li>
                <Link to="/exhibitions">Hugh Masekela Exhibition</Link>
              </li>
              <li>
                < Link to="/exhibitions">Desmond Tutu Exhibition</Link>
              </li>
              <li>
                <Link to="/exhibitions">Past Exhibitions</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-links">
            <div className="footer-heading-row">
              <h3>School Visits</h3>
            </div>
            <ul>
              <li>
                <a href="#get-tickets">Get Tickets</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-links">
            <div className="footer-heading-row">
              <h3>Events</h3>
            </div>
            <ul>
              <li>
                <a href="#get-tickets">Get Tickets</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-links">
            <div className="footer-heading-row">
              <h3>Resources</h3>
            </div>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-links">
            <div className="footer-heading-row">
              <h3>Contact Us</h3>
            </div>
            <ul>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Apartheid Museum. All rights
            reserved.
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/ApartheidMuseumSA?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook style={{ color: "#fff", fontSize: "20px" }} />
            </a>
            <a
              href="https://x.com/apartheidmuseum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter style={{ color: "#fff", fontSize: "20px" }} />
            </a>
            <a
              href="https://www.instagram.com/apartheidmuseum/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram style={{ color: "#fff", fontSize: "20px" }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
