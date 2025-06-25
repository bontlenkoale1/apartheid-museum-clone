import React from "react";
import "./Exhibitions.css";
import bornFreeImage from "/Images/Born-Free-Title-pic_38c377dc885711df025c352161665529 1.png";
import tutuImage from "/Images/tutu.png";
import timeToActImage from "/Images/timetoact.png";

function Exhibitions() {
    return (
        <div className="container">
            <div className="exhibitions-wrapper">
                <div className="background-image-wrapper">
                    <svg
                        className="background-image"
                        width="80"
                        height="80"
                        viewBox="0 0 148 204"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{transform: "rotate(80deg)"}}
                    >
                        <path d="M148 0H-80V204H148V0Z" fill="#FCFCFC" />
                        <path
                            d="M34 204C96.9605 204 148 158.333 148 102C148 45.667 96.9605 0 34 0C-28.9605 0 -80 45.667 -80 102C-80 158.333 -28.9605 204 34 204Z"
                            fill="#DE962E"
                            fillOpacity="0.78"
                        />
                    </svg>
                </div>
                <div className="exhibitions-content">
                    <h2>
                        Exhibitions <span className="highlight"> Now On</span> !
                    </h2>
                </div>
            </div>
            <div className="exhibitions-card-wrapper">
                <div className="exhibitions-card-left">
                    <h2>Born Free : Generation of Hope</h2>
                    <p>
                        Born Free : Generation of Hope explores South Africa’s journey over the past three decades
                        through the eyes of those born around 1994.
                    </p>
                    <button className="learn-more">Learn More</button>
                </div>
            </div>
            <div></div>
            {/* image section */}
            <div className="exhibitions-card-images-wrapper">
                <div className="exhibitions-card-image-left">
                    <img src={bornFreeImage} className="bornfreeImage" alt="Born Free Exhibition" />
                    <div className="svg-background">
                        <svg
                            width="80"
                            height="80"
                            viewBox="0 0 324 350"
                            fill="none"
                            style={{transform: "rotate(270deg)"}}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M381 0H0V350H381V0Z" fill="#FCFCFC" />
                            <path
                                d="M190.5 350C295.71 350 381 271.65 381 175C381 78.3502 295.71 0 190.5 0C85.2897 0 0 78.3502 0 175C0 271.65 85.2897 350 190.5 350Z"
                                fill="#EDE0CD"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            {/* right side card */}
            <div className="exhibitions-card-wrapper-right">
                <div className="exhibitions-card-right">
                    <h2>TUTU Exhibition </h2>
                    <p>
                        Archbishop Desmond Tutu was born on the 7th of October 1931 . For the most pasts of 90 years ,
                        he has been a key player in South Africa’s life.
                    </p>
                    <button className="learn-more">Learn More</button>
                </div>
            </div>
            <div></div>
            {/* image section */}
            <div className="exhibitions-card-images-wrapper">
                <div className="exhibitions-card-image-left">
                    <img src={tutuImage} className="tutuimage" alt="Born Free Exhibition" />
                </div>
            </div>
            <div></div>
            <div className="background-image-svg-wrapper">
                <svg width="202" height="192" viewBox="0 0 202 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M114 192C176.96 192 228 149.019 228 96C228 42.9807 176.96 0 114 0C51.0395 0 0 42.9807 0 96C0 149.019 51.0395 192 114 192Z"
                        fill="#C09453"
                        fillOpacity="0.78"
                    />
                </svg>
            </div>
            {/* left side card */}
            <div className="exhibitions-card-wrapper">
                <div className="exhibitions-card-left">
                    <h2>Time To Act</h2>
                    <p>
                        Celebrating the 40th anniversary of the<strong>united Democratic Front </strong>{" "}
                    </p>
                    <button className="learn-more">Learn More</button>
                </div>
            </div>
            <div></div>
            {/* image section */}
            <div className="exhibitions-card-images-wrapper">
                <div className="exhibitions-card-image-left">
                    <img src={timeToActImage} className="bornfreeImage" alt="Born Free Exhibition" />
                </div>
            </div>
             <div className="background-image-svg-wrapper-left">
                <svg width="202" height="192" viewBox="0 0 202 192" fill="none"  style={{transform: "rotate(180deg)"}} xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M114 192C176.96 192 228 149.019 228 96C228 42.9807 176.96 0 114 0C51.0395 0 0 42.9807 0 96C0 149.019 51.0395 192 114 192Z"
                        fill="#C09453"
                        fillOpacity="0.50"
                    />
                </svg>
            </div>
        </div>
    );
}

export default Exhibitions;