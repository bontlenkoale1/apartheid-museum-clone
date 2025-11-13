import React from "react";
import "./Exhibitions.css";


const Exhibitions = () => {
  return (
    <section className="exhibitionhero">
      <div className="exhibitionhero-background"></div>
      <div className="exhibitionpage-h1-wrapper">
        <h1>
          Permanent Exhibi<span className="highlighted">tions </span>
        </h1>
      </div>
      <div className="liberation-leaders-wrapper">
        <div className="liberationleaders-header">
          <h2>Chris Hani</h2>
          <p>
            Chris Hani, born Martin Thembisile Hani on June 28, 1942, in
            Cofimvaba, Eastern Cape, was a dedicated anti-apartheid leader and
            freedom fighter. He joined the African National Congress (ANC) and
            the South African Communist Party (SACP), and later became Chief of
            Staff of Umkhonto we Sizwe (MK), the armed wing of the ANC. Known
            for his courage and connection to the people, Hani played a vital
            role in the liberation struggle.
          </p>
          <p>
            In 1993, he was tragically assassinated outside his home in Boksburg
            by Janusz Waluś, an event that almost pushed South Africa into civil
            conflict. Nelson Mandela’s call for peace helped prevent further
            violence. Today, Hani is remembered as a symbol of freedom, justice,
            and equality for all South Africans.
          </p>
        </div>
      </div>
      {/*  <div className="temp-exhibition-wrapper">
          <div className="temp-exhibition-heading">
            <h2>Temporary Exhibitions That Are Now Showing</h2>
          </div>
        </div>*/}
    </section>
  );
};

export default Exhibitions;
