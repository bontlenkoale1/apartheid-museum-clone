import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-left-info-wrapper">
          <div className="contact-left-info">
            <h1>
              You Have Questions,
              <br />
              We Have Answers
            </h1>
            <p className="contact-description">
              Write to us or give us a call And We will get back to you with Any
              Inquiries or Support You May Need.
            </p>
            <br />
            <div className="info-grid">
              <div className="info-group">
                <h4>Location</h4>
                <p>
                  Apartheid Museum, Northern Parkway,
                  <br />
                  Gold Reef Rd, Ormonde, Johannesburg South, 2001
                </p>
              </div>

              <div className="info-group">
                <h4>Social Media</h4>
                <p>
                  <a
                    href="https://www.instagram.com/apartheidmuseum/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  <br />
                  <a
                    href="https://x.com/apartheidmuseum"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                  <br />
                  <a
                    href="https://www.facebook.com/ApartheidMuseumSA?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </p>
              </div>

              <div className="info-group">
                <h4>Email</h4>
                <p>info@apartheidmuseum.org</p>
              </div>

              <div className="info-group">
                <h4>Contact</h4>
                <p>
                  <a href="tel:+27 (0)11 309 4700">+27 (0)11 309 4700</a>
                </p>
              </div>
            </div>
          </div>
        </div>
                  <div className="contact-right-form-wrapper">
            <div className="contact-form">
              <h2>Tell Us What You Need</h2>
              <p className="form-subtitle">
                Our team is ready to assist you with every detail.
              </p>

              <form>
                <div className="row">
                  <input type="text" placeholder="First Name" />
                </div>

                <div className="row">
                  <input type="text" placeholder="Country" />
                  <input type="tel" placeholder="Phone Number" />
                </div>

                <input type="email" placeholder="Email Address" />


                <textarea placeholder="Message"></textarea>


                <button className="submit-btn">Submit</button>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;
