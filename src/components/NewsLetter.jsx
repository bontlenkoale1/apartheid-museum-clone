import React from "react";
import "./NewsLetter.css";
import mail from "/Images/undraw_newsletter_q7fx.png";
const NewsLetter = () => {
  return (
    <div className="container">
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
          <form className="glass-form">
            <h3 className="form-title">
              Subscribe to our newsletter and stay updated !
            </h3>
            <div className="input-group">
              <div className="input-wrapper">
                <label htmlFor="name" className="name-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="name-input"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="email" className="email-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="email-input"
                  autoComplete="email"
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <div className="input-wrapper">
                <label htmlFor="country" className="country-label">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="country-select"
                  required
                >
                  <option value="">Kenya</option>
                  <option value="Japan">Japan</option>
                  <option value="South Africa">South Africa</option>
                </select>
              </div>

              <div className="input-wrapper">
                <label htmlFor="phone" className="phone-label">
                  Phone
                </label>
                <div className="phone-container">
                  <input
                    type="tel"
                    id="phone"
                    className="phone-input"
                    placeholder="58601644"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="input-group">
              <div className="input-wrapper">
                <label htmlFor="message" className="message-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="message-textarea"
                  rows="4"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
