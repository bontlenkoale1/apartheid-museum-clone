import React from "react";
import "./NewsLetter.css";
import mail from "/Images/undraw_newsletter_q7fx.png";
const NewsLetter = () => {
  return (
    <div className="custom-container">
      <div className="newsletter-container">
        <h2 className="newsletter-title">
          Subscribe to our <span className="highlights">Newsletter </span>!
        </h2>
      </div>
      <div className="newsletter-wrapper">
        <div className="newsletter-left-image-wrapper">
          <img src={mail} alt="Newsletter" className="newsletter-image" />
        </div>
        <div className="newsletter-form-right-wrapper">
          <form className="glass-form form-container">
            <h3 className="form-title">
              Subscribe to our newsletter and stay updated !
            </h3>
            <div className="form-grid">
              <div className="input-group">
                <label htmlFor="name" className="input-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="input-field"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="surname" className="input-label">
                  Surname
                </label>
                <input
                  type="text"
                  id="surname"
                  className="input-field"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email" className="input-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="input-field"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="phone" className="input-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="input-field"
                  autoComplete="phone"
                  required
                />
              </div>

              <div className="input-group full-width">
                <label htmlFor="textarea" className="input-label">
                  Your Message
                </label>
                <textarea
                  id="textarea"
                  className="input-field textarea-field"
                  required
                />
              </div>
            </div>
            <div className="subcribe-btn-wrapper">
              <button className="submit-button" type="submit">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
