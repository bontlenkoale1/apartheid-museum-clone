import React from 'react'
import "./Events.css";
import freedomDayImage from "/Images/1994.png";
import heritageDayImage from "/Images/heritage 1.png";
import bornFreeImage from "/Images/Born-Free-Title-pic_38c377dc885711df025c352161665529 1.png";
import tutuImage from "/Images/tutu.png";
import timeToActImage from "/Images/timetoact.png";

const Events = () => {
  return (
   <div className="eventshero">
      <div className="eventshero-background"></div>
        <h1 className="title">
     Passed
        <span className="highlights">Events</span>
      </h1>
      <br />
      <div className="events-card-wrapper">
        <div className="events-card">
          <h2 className="events-card-title">Freedom Day 2025</h2>
          <p className="events-card-date">April 27, 2025</p>
          <p className="events-card-description">
          The Apartheid Museum hosted a special event to commemorate Freedom Day, celebrating South Africa's first democratic elections held on April 27, 1994. The event featured guided tours, educational workshops, and cultural performances to honor the nation's journey to freedom.
          </p>
          <div className="events-card-image freedom-day-image-wrapper">
            <div className="freedom-day-image">
              <img src={freedomDayImage} alt="Freedom Day 2025" />
            </div>
          </div>
        </div>
        <div className="events-card">
          <h2 className="events-card-title">Heritage Day Celebration 2025</h2>
          <p className="events-card-date">September 24, 2025</p>
          <p className="events-card-description">
          In celebration of Heritage Day, the Apartheid Museum organized a vibrant event showcasing South Africa's rich cultural diversity. Visitors enjoyed traditional music, dance performances, and storytelling sessions that highlighted the various heritages that make up the nation.
          </p>
           <div className="events-card-image heritage-day-image-wrapper">
            <div className="heritage-day-image">
              <img src={heritageDayImage} alt="Heritage Day 2025" />
            </div>
          </div>
      </div>
      </div>
      <div className="events-now-showing-wrapper">
         <div className="events-now-showing">
          <h2 className="events-now-showing-title">
          Exhibitions <span className="highlight">Now On</span>!
        </h2>
          
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
      </div>
      </div>

  )
}

export default Events;
