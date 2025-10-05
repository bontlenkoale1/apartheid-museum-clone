import React from 'react';
import { FaSearch } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-content">
          <form className="hero-form">
            <div className="search-input-wrapper">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search prompt..."
                className="hero-input"
              />
              <button type="submit" className="search-button">
                <FaSearch className="search-icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Hero;