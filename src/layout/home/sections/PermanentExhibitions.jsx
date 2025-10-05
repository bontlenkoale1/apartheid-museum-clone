import React from "react";
import "./PermanentExhibitions.css";
import lifeUnderApartheid from "/Images/life_under_apartheid.png";
import anotherExhibition from "/Images/Hugh-Masekela-Tribute_7900f7cd03e44af544876f2d309bdce7.png";
import TutuExhibition from "/Images/Tutu-exhibition_7900f7cd03e44af544876f2d309bdce7.png";
import MandelaExhibitionImage from "/Images/Apartheid-museum-Mandela-Exhibition-banner_7900f7cd03e44af544876f2d309bdce7.png";

const PermanentExhibitions = () => {
  const exhibitions = [
    {
      id: 1,
      frontImage: lifeUnderApartheid,
      backTitle: "Life Under Apartheid",
      backDescription:
        "South Africa's struggle for liberation has been a journey of pain and strife. Freedom brought peace to our land in 1994 after centuries of colonialism and more than 40 years of life under apartheid.",
    },
    {
      id: 2,
      frontImage: anotherExhibition,
      backTitle: "Hugh Masekela Exhibition",
      backDescription:
        "Hugh Ramapolo Masekela was a South African trumpeter, flugelhornist, cornetist, singer and composer who was described as 'the father of South African jazz'. Masekela was known for his jazz compositions and for writing well-known anti-apartheid songs such as 'Soweto Blues' and 'Bring Him Back Home'",
    },
    {
      id: 3,
      frontImage: TutuExhibition,
      backTitle: "Desmond Tutu Exhibition",
      backDescription:
        "Desmond Mpilo Tutu was a South African Anglican bishop and theologian, known for his work as an anti-apartheid and human rights activist. He was Bishop of Johannesburg from 1985 to 1986 and then Archbishop of Cape Town from 1986 to 1996, in both cases being the first Black African to hold the position",
    },
    {
      id: 4,
      frontImage: MandelaExhibitionImage,
      backTitle: "Nelson Mandela Exhibition",
      backDescription:
        "Nelson Rolihlahla Mandela was a South African anti-apartheid activist and politician who served as the first president of South Africa from 1994 to 1999. He was the country's first black head of state and the first elected in a fully representative democratic election.",
    },
  ];

  return (
    <div className="permanent-exhibitions-container">
      <div className="text-center-wrapper">
        <div className="text-center mb-5">
          <h2>
            Permanent Exhibitions <span className="highlight">Now On</span>!
          </h2>
        </div>
      </div>

      <div className="flip-cards-grid">
        {exhibitions.map((exhibition) => (
          <div className="flip-card" key={exhibition.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={exhibition.frontImage}
                  alt={exhibition.backTitle}
                  className="exhibition-image"
                />
              </div>
              <div className="flip-card-back">
                <h3>{exhibition.backTitle}</h3>
                <p>{exhibition.backDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PermanentExhibitions;
