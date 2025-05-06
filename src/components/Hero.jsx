import React from 'react';
import { FaSearch } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
        <div className="container">
            <div className="hero-wrapper">
                <div className="hero-image">
                    <img src="public/Images/hero.png" alt="hero" />
                </div>
                <div className="hero-search-container">
                  <form className="hero-form">
            <div className="search-input-wrapper">
              <input type="text"placeholder="Search prompt..."className="hero-input" />
                <button type="submit" className="search-button">
                <FaSearch className="search-icon" />
              </button>
                </div>
                </form>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Hero
