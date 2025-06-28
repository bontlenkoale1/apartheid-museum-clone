import React from "react";
import "./OpenDays.css";
import segregationImage from "/Images/segregation.png";

const OpenDays = () => {
  return (
    <div className="container">
      <div className="banner">
        <div className="banner-image">
          <img
            src={segregationImage}
            alt="Segregation"
            className="open-days-image"
          />
        </div>
      </div>
      <div className="container-fluid">
     <div className="open-days-container">
  <div className="open-days-wrapper">
    <div className="clock-icon-container">
      <svg className="clock-icon" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22 10V22L30 26M42 22C42 33.0457 33.0457 42 22 42C10.9543 42 2 33.0457 2 22C2 10.9543 10.9543 2 22 2C33.0457 2 42 10.9543 42 22Z"
          stroke="#F3F3F3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="open-days-text">
      <p>We are open from Wednesday to Sundays, 09:00 to 17:00 and most public holidays.</p>
      <p>Please note: We are closed on Good Friday and open on Easter Monday.</p>
      <p>Free entry for all South Africans on Freedom Day - 27 April 2025.</p>
    </div>
  </div>
  </div>
</div>
    </div>
  );
};

export default OpenDays;
