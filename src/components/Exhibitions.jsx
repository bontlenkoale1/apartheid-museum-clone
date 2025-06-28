import React from "react";
import "./Exhibitions.css";
import bornFreeImage from "/Images/Born-Free-Title-pic_38c377dc885711df025c352161665529 1.png";
import tutuImage from "/Images/tutu.png";
import timeToActImage from "/Images/timetoact.png";

function Exhibitions() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2>
          Exhibitions <span className="highlight">Now On</span>!
        </h2>
      </div>

      {/* Bootstrap Card Grid */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Card 1 */}
        <div className="col">
          <div className="card h-100">
            <img src={bornFreeImage} className="card-img-top" alt="Born Free" />
            <div className="card-body">
              <h5 className="card-title">Born Free: Generation of Hope</h5>
              <p className="card-text">
                Born Free: Generation of Hope explores South Africa’s journey over the past three decades through the eyes of those born around 1994.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn custom-btn">Learn More</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col">
          <div className="card h-100">
            <img src={tutuImage} className="card-img-top" alt="Tutu" />
            <div className="card-body">
              <h5 className="card-title">TUTU Exhibition</h5>
              <p className="card-text">
                Archbishop Desmond Tutu was born on the 7th of October 1931. For most of his 90 years, he was a key player in South Africa’s life.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn custom-btn">Learn More</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col">
          <div className="card h-100">
            <img src={timeToActImage} className="card-img-top" alt="Time to Act" />
            <div className="card-body">
              <h5 className="card-title">Time To Act</h5>
              <p className="card-text">
                Celebrating the 40th anniversary of the <strong>United Democratic Front</strong>.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn custom-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exhibitions;
