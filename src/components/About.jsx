import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-image-content">
        <img src="public/Images/image.png" alt="about-image" />
    </div>
    <div className="about-text-content-right">
        <h1>About Us <span className="hover-underline"></span></h1>
        <div className="about-text-content">
        <p>The Apartheid Museum opened in 2001 and is acknowledged as</p>
        <p>the pre-eminent museum in the world dealing with 20th century</p><p>South Africa, at the heart of which is the apartheid story.<bold><br />The Apartheid Museum,the first of its kind, illustrates the rise</bold></p>
        <p><bold> and fall of apartheid.<br />An architectural consortium, comprising</bold></p>
        <p><bold>several leading architectural firms, conceptualised the design of the building </bold></p>
        <p><bold>on a seven-hectare stand. The museum is a superb example of design,space and landscape</bold></p>
        <p><bold> offering a unique experience to local and international visitors.</bold></p>
        </div>
    </div>
    </div>
  );
};

export default About;
