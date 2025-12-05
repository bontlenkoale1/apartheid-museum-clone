import React from "react";
import "./Visit.css";
import { FiEye, FiDownload } from "react-icons/fi";

const Visit = () => {
  return (
    <div className="visithero">
      <div className="visithero-background"></div>
      <h1 className="title">
        School Visits: What You{" "}
        <span className="highlights">Need To Know </span>
      </h1>
      <br />
      <p className="description">
        School visits to the Apartheid Museum make education about the country's
        history more creative and memorable.They are important for establishing
        a comprehensive connection between learners and the information in their
        textbooks. If you wish visit to the museum, please note the following:
      </p>
      <br />
      {/* Booking Information */}
      <div className="bookinginfo-wrapper">
        <h2 className="info">Booking Information:</h2>
        <br />
        <ul className="info-list">
          <li>Admission fee is R60 per learner and R65 per teacher/educator</li>
          <li>
            Bookings need to be confirmed a week before hand. There is no
            guarantee that the school can be accommodated if the tour is not
            confirmed.
          </li>
          <li>
            The museum must be notified if the school is unable to attend at
            least a week beforehand.
          </li>
          <li>
            If you have made a booking, the museum will provide a guided tour
            for your school.
          </li>
          <li>
            Payment by cheque should be made out to the S.A. Apartheid Museum
            and handed over on arrival at the ticket office.
          </li>
          <li>Payment can also be made in cash on arrival.</li>
          <li>
            EFTs are accepted but you are required to produce proof of payment
            required on arrival.
          </li>
          <li>
            Note once payment has been made, there will no possibility of a
            refund.
          </li>
        </ul>
        {/* Visitors Guideline */}
        <h3 className="guideline-info">Visitor Guidelines:</h3>
        <ul className="info-list">
          <li>
            After securing a booking, teachers are encouraged to visit the
            museum before bringing their learners. This visit will be free for a
            maximum of two teachers per school provided that they produce a
            letter stamped by their school.
          </li>
          <li>
            Please specify in advance any topic you would like your guide to
            focus on.
          </li>
          <li>
            Tours are designed for different age groups. Different age groups
            will explore different sections of the museum.
          </li>
          <li>
            If you arrive late, your school may forfeit your guided tour and the
            teachers may have to take learners around the museum themselves.
          </li>
          <li>
            The museum does not admit school groups of children younger than
            Grade 5 because of the sensitive nature of the material on display.
          </li>
          <li>
            The museum opens at 9 am, and school tours take a minimum of two
            hours. Children will not benefit from the experience if the tour is
            cut short.
          </li>
          <li>
            Teachers are expected to accompany the children with the guide on
            the tour, and are responsible for the behaviour of the children
            during the tour.
          </li>
          <li>
            Every learner must bring a pen to complete some written activities
            in the museum.
          </li>
          <li>
            Grades 6 - 9 children will each be given a booklet to work with in
            the museum, designed for their grade level. Teachers can also use
            these booklets in follow-up lessons when they return to school.
          </li>
          <li>No cameras are allowed in the museum.</li>
          <li>
            No food is allowed in the museum. If children require a snack break
            during the tour, this can be negotiated with the guide.
          </li>
          <li>
            Alcohol is not permitted in the museum. Teachers or children who are
            inebriated will not be allowed access to the museum.
          </li>
        </ul>
      </div>
      <div className="downloads-section">
        <h2 className="download-title">Downloads:</h2>
        <br />

        {/* School Visits PDF */}
        <div className="download-item">
          <span>School Visits</span>
          <span>(122 KB)</span>
          <div className="icons">
           <a
              href="/apartheid-museum-clone/files/School-visits_latest_1.pdf"
              target="_blank"
            >
              <FiEye size={16} />
            </a>

            <a href="/apartheid-museum-clone/files/School-visits_latest_1.pdf" download>
              <FiDownload size={16} />
            </a>
          </div>
        </div>

        {/* Grade 6 & 7 */}
        <div className="download-item">
          <span>Grade 6 & 7 Workbook</span>
          <span>(4.779 MB)</span>
          <div className="icons">
            <a
              href="/apartheid-museum-clone/files/grade6-7.pdf"
              target="_blank"
            >
              <FiEye size={16} />
            </a>

            <a href="/apartheid-museum-clone/files/grade6-7.pdf" download>
              <FiDownload size={16} />
            </a>
          </div>
        </div>

        {/* Grade 8 */}
        <div className="download-item">
          <span>Grade 8 Workbook</span>
          <span>(2.116 MB)</span>
          <div className="icons">
            <a
              href="/apartheid-museum-clone/files/grade_8_workbook.pdf"
              target="_blank"
            >
              <FiEye size={16} />
            </a>

            <a
              href="/apartheid-museum-clone/files/grade_8_workbook.pdf"
              download
            >
              <FiDownload size={16} />
            </a>
          </div>
        </div>

        {/* Grade 9 */}
        <div className="download-item">
          <span>Grade 9 Workbook</span>
          <span>(2.651 MB)</span>
          <div className="icons">
            <a
              href="/apartheid-museum-clone/files/grade_9_workbook.pdf"
              target="_blank"
            >
              <FiEye size={16} />
            </a>

            <a
              href="/apartheid-museum-clone/files/grade_9_workbook.pdf"
              download
            >
              <FiDownload size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
