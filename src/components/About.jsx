import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="about-image-content">
                <img src="Images/image.png" alt="about-image" />
            </div>
            <div className="about-text-content-right">
                <h1>
                    About Us <span className="hover-underline"></span>
                </h1>
                <div className="about-text-content">
                    <p>
                        The Apartheid Museum opened in 2001 and is acknowledged as the pre-eminent museum in the world
                        dealing with 20th century South Africa, at the heart of which is the apartheid story.
                    </p>
                    <p>
                        <bold>
                            The Apartheid Museum,the first of its kind, illustrates the rise and fall of apartheid.An
                            architectural consortium, comprising several leading architectural firms, conceptualised the
                            design of the building on a seven-hectare stand. The museum is a superb example of
                            design,space and landscape offering a unique experience to local and international visitors
                        </bold>
                    </p>
                </div>
                <div className="about-button-wrapper">
                    <button className="read-more-button">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default About;
