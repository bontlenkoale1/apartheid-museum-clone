import React from "react";
import "./Exhibitions.css";


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

        </div>
    );
}

export default Exhibitions;
