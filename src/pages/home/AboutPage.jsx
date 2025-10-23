import React, { useRef } from "react";
import "./AboutPage.css";
import apartheid from "/Images/aparthied Sa.png";
import bench from "/Images/bench.png";
import hector from "/Images/hector pieterson.png";
import chrisHani from "/Images/Chris Hani.png";
import policebrutality from "/Images/police brutality.png";
import policebrutality2 from "/Images/police brutality2.png";
import segregationImg from "/Images/segregationImage.png";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const PrevIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NextIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M9 18L15 12L9 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const About = () => {
  const swiperRef = useRef(null);

  return (
    <section className="abouthero">
      <div className="abouthero-background"></div>
      <div className="aboutpage-wrapper">
        <h1>
          The Apart<span className="highlighted">heid </span> Museum's Genesis
        </h1>
        <div className="about-paragraph">
          <p>
            The Apartheid Museum opened in 2001 and is acknowledged as the
            pre-eminent museum in the world dealing with 20th century South
            Africa, at the heart of which is the apartheid story.
          </p>
          <span>
            The Apartheid Museum, the first of its kind, illustrates the rise
            and fall of apartheid. An architectural consortium, comprising
            several leading architectural firms, conceptualised the design of
            the building on a seven-hectare stand. The museum is a superb
            example of design, space and landscape offering the international
            community a unique South African experience. The exhibits have been
            assembled and organised by a multi-disciplinary team of curators,
            film-makers, historians and designers. They include provocative film
            footage, photographs, text panels and artefacts illustrating the
            events and human stories that are part of the horrific period in our
            history, known as apartheid.
          </span>
          <span>
            In 1995 the South African government set up a process for the
            granting of casino licenses, establishing an agency to do this
            called the Gambling Board. The bid documents stipulated that bidders
            should demonstrate how they would attract tourism and thereby grow
            the economy and stimulate job creation. A consortium, called Akani
            Egoli Gold Reef City, put in a bid that included the commitment to
            building a museum. Their bid was successful, the Gold Reef City
            Casino was built and an adjacent piece of land given for the
            construction of a museum. The cost of the construction of what
            became the Apartheid Museum - approximately 80 million rand was paid
            for by Gold Reef City. The museum is registered as a Public Benefit
            Company incorporated not for gain with an independent board of
            trustees, the chairman of which is Dr John Kani. The company is
            independent of Gold Reef City, which has leased the museum to the
            Public Benefit Company for the duration of the casino licence. The
            museum therefore relies on donations, contributions and sponsorships
            to sustain its growth.
          </span>
        </div>
        <div className="about-gallery-wrapper">
          <h2>
            South African<span className="highlighted"> History </span> Unforgotten
          </h2>
          <div className="custom-swiper-container">
            <button
              className="custom-prev-btn"
              onClick={() => swiperRef.current?.swiper.slidePrev()}
            >
              <PrevIcon />
            </button>

            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              breakpoints={{
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                480: { slidesPerView: 1 },
              }}
              className="gallery-swiper"
            >
              <SwiperSlide>
                <div className="gallery-card">
                  <img src={apartheid} alt="Apartheid Museum" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="gallery-card">
                  <img src={bench} alt="Bench" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="gallery-card">
                  <img src={hector} alt="June 16" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="gallery-card">
                  <img src={chrisHani} alt="Chris Hani" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="gallery-card">
                  <img src={policebrutality} alt="Police Brutality" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="gallery-card">
                  <img src={policebrutality2} alt="Police Brutality 2" />
                </div>
              </SwiperSlide>
            </Swiper>
            <button
              className="custom-next-btn"
              onClick={() => swiperRef.current?.swiper.slideNext()}
            >
              <NextIcon />
            </button>
          </div>
        </div>
        <div className="about-segregation-wrapper">
          <div className="segregation">
            <h2>
              The South African{" "}
              <span className="highlighted"> segregation </span>
            </h2>
            <div className="about-paragraph">
              <p>
                Segregation was the core of the apartheid system, it meant that
                people were separated by race in every part of daily life. The
                government passed strict laws to keep white, Black, Coloured
                mixed race, and Indian South Africans apart.
              </p>
              <span>
                The Group Areas Act 1950 forced people of different races to
                live in separate areas. Black South Africans were moved out of
                cities and towns into “townships” or “homelands” far from where
                they worked. If a person was found in an area not assigned to
                their race, they could be arrested. White people had the best
                land, homes, and facilities, while Black areas were overcrowded
                and had poor infrastructure.
              </span>
              <div className="about-paragraph-left-wrapper">
                <div className="about-paragraph-left-image">
                  <img src={segregationImg} alt="Segregation" />
                </div>
                <span>
                  Under the Bantu Education Act 1953, schools were divided by
                  race. Black students received an inferior education, focused
                  only on basic skills and labor work not academic or
                  professional training. White schools were well-funded and
                  offered higher education opportunities. Everything from buses,
                  hospitals, beaches, toilets, and even benches had signs saying
                  “Whites Only” or “Non-Whites.” Black people could not use
                  facilities meant for white people even if those were empty.
                  Restaurants and movie theaters were also divided. Black people
                  were often only allowed to work as servants, laborers, or
                  cleaners for white employers. They earned very low wages and
                  had no labor rights. High-paying and skilled jobs were
                  reserved for white citizens. Segregation under apartheid
                  created deep inequality, poverty, and suffering for Black
                  South Africans. It also caused families to be separated and
                  communities to lose their homes. Even after apartheid ended in
                  1994, the effects of this segregation can still be seen today
                  in housing, education, and economic inequality.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
