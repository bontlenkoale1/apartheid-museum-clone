import React, { useRef } from "react";
import "./Exhibitions.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import trainstation from "/Images/trainstation.png";
import segregation2 from "/Images/apartheidmuseum.png";
import publictransport from "/Images/images (1).png";
import hugh from "/Images/hugh.png";
import hughmasekela from "/Images/hughmasekela2.png";
import hughmasekela2 from "/Images/hughmasekela3.png";
import desmondimage from "/Images/desmondtutu2.png";
import desmondtutu2 from "/Images/desmondtutu.png";
import desmondtutu3 from "/Images/desmond.png";
import madiba from "/Images/madiba.png";
import mandela2 from "/Images/nelson2.png";
import mandela3 from "/Images/madiba2.png";

const PrevIcons = () => (
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

const NextIcons = () => (
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

const Exhibitions = () => {
  const swiperRef = useRef(null);
  return (
    <section className="exhibitionhero">
      <div className="exhibitionhero-background"></div>
      <div className="exhibitionpage-h1-wrapper">
        <h1>
          Permanent Exhibi<span className="highlighted">tions </span>
        </h1>
      </div>
      <div className="custom-swiper-container">
        <button
          className="custom-prev-btns"
          onClick={() => swiperRef.current?.swiper.slidePrev()}
        >
          <PrevIcons />
        </button>
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={5}
          slidesPerView={1}
          loop={true}
          navigation={false}
          className="exhibition-swiper"
        >
          <SwiperSlide>
            <div className="permanent-wrapper">
              <div className="permanent-exhibition-card">
                <h2>Life Under Apartheid</h2>
                <p>
                  Apartheid meaning “apartness” in Afrikaans, was a formal
                  system of racial segregation enforced in South Africa from
                  1948 to 1994. Its origins lay in Dutch and British
                  colonialism, beginning with the Dutch East India Company's
                  settlement at Table Bay in 1652. European settlers seized land
                  from Indigenous Africans, relied on slave labor, and later
                  developed into the Afrikaner community. British control from
                  1795 and the later Great Trek led to the creation of
                  independent Boer republics, but both colonial powers enforced
                  systems that exploited African people, laying the foundation
                  for apartheid. Apartheid officially began in 1948 when the
                  National Party, representing white Afrikaners, came to power.
                  Responding to white fears about Black urban migration, the
                  government passed laws tightening racial segregation.
                  Legislation such as the 'Group Areas Act' and the 'Natives
                  Act' controlled where Africans, Coloureds, and Indians could
                  live, work, and travel. Africans were required to carry
                  passes, and many were forcibly removed to rural, impoverished
                  “Bantustans” or homelands.
                  <br />
                  Acts banning interracial marriage and sexual relations further
                  enforced racial separation. By reserving 87% of land for
                  whites, apartheid ensured white dominance while Africans were
                  pushed into migrant labor, overcrowded townships, and
                  fragmented rural reserves. Millions of families were
                  separated, and violations of pass laws led to mass arrests.
                  Opposition existed from the start.
                  <br />
                  In the 1950s, protests, civil disobedience, and the 'Freedom
                  Charter' offered a vision of equality. After the 1960
                  Sharpeville Massacre, the ANC and PAC were banned, and many
                  leaders turned to armed struggle. New resistance emerged in
                  the 1970s with the Black Consciousness Movement and the Soweto
                  Uprising, while international boycotts increased pressure on
                  the regime. By the late 1980s, escalating unrest and global
                  condemnation forced negotiations. In 1990, Nelson Mandela was
                  released and banned organizations were legalized. **Apartheid
                  ended in 1994** with South Africa's first democratic
                  elections, won by the ANC.
                  <br />
                  Ernest Cole, born Kole, was probably the finest documentary
                  photographer of his generation. His outstanding photographic
                  record of what it was like to be black in Verwoerd's white
                  republic forms the heart of this exhibit. These photographs,
                  which Cole took into exile in the late 1960s, were published
                  in his book House of Bondage, which was banned in apartheid
                  South Africa. When the museum opened its doors in 2001, it was
                  the first time Cole's photographs were publicly displayed in
                  South Africa.
                </p>
                <p className="fun-fact">
                  • Ernest Cole, a black photographer, documented the injustices
                  of life under apartheid in the 1960s.
                  <br />
                  • Cole was one of the few to be race-reclassified as
                  'coloured' and changed his name from Kole to Cole.
                  <br /> • Cole's book House of Bondage is an exposé of everyday
                  life under apartheid experienced by black South Africans.
                </p>
              </div>
            </div>

            <div className="permanent-image-wrapper">
              <img
                src={trainstation}
                alt="Train Station"
                className="segragationimage"
              />
              <img
                src={segregation2}
                alt="apartheid"
                className="segragationimage"
              />
              <img
                src={publictransport}
                alt="public transport"
                className="segragationimage"
              />
            </div>
          </SwiperSlide>
          {/* card 2*/}
          <SwiperSlide>
            <div className="permanent-wrapper">
              <div className="permanent-exhibition-card">
                <h2>Hugh Masekela</h2>
                <p>
                  Hugh Masekela was a world-renowned South African
                  flugelhornist, trumpeter, composer, bandleader, singer, and
                  outspoken political voice whose music remained deeply rooted
                  in his homeland while achieving global acclaim. Born in
                  Witbank in 1939, his musical journey began at age 14 when
                  Father Trevor Huddleston, a strong advocate for equal rights,
                  gifted him his first trumpet. This early encouragement led to
                  the formation of the Huddleston Jazz Band and marked the
                  beginning of Masekela's signature Afro-Jazz style. In the late
                  1950s he emerged as a leading figure in a vibrant cultural
                  era, performing in the musical King Kong and joining the
                  legendary Jazz Epistles alongside Kippie Moeketsi, Abdullah
                  Ibrahim, and Jonas Gwangwa.
                  <br />
                  In 1960, at 21, Masekela went into exile, enrolling at the
                  Manhattan School of Music in New York. Immersed in the golden
                  age of American jazz, he drew inspiration from icons like
                  Miles Davis and John Coltrane, while mentors Dizzy Gillespie
                  and Louis Armstrong encouraged him to embrace African
                  influences. His 1963 debut album, Trumpet Africaine, reflected
                  this unique musical direction. Relocating to Los Angeles in
                  the late 1960s, Masekela became part of the counterculture
                  scene and performed at the 1967 Monterey Pop Festival. His
                  1968 hit “Grazin' in the Grass” topped the American charts,
                  launching him onto the global stage. Across a five-decade
                  career, he released over 40 albums and collaborated with
                  artists such as Fela Kuti, Paul Simon, Stevie Wonder, and
                  Miriam Makeba.
                  <br />
                  Masekela returned to South Africa in 1990 following the
                  unbanning of the ANC, years after his anthem “Bring Home
                  Nelson Mandela” became a global call for freedom. He continued
                  to shape South African culture through his autobiography,
                  musical productions, heritage work, and the creation of the
                  Hugh Masekela Heritage Foundation. His legacy remains that of
                  a cultural giant devoted to showcasing Africa's true identity.
                  Hugh Masekela (1939-2018).
                  <br />
                </p>
              </div>
            </div>

            <div className="permanent-image-wrapper">
              <img
                src={hugh}
                alt="Hugh Masekela"
                className="segragationimage"
              />
              <img
                src={hughmasekela}
                alt="hugh Masekela"
                className="segragationimage"
              />
              <img
                src={hughmasekela2}
                alt="Hugh Masekela"
                className="segragationimage"
              />
            </div>
          </SwiperSlide>
          {/* card 3*/}
          <SwiperSlide>
            <div className="permanent-wrapper">
              <div className="permanent-exhibition-card">
                <h2>Desmond Tutu</h2>
                <p>
                  Desmond Mpilo Tutu (1931-2021) was a South African Anglican
                  archbishop, theologian, and one of the most influential moral
                  leaders of the anti-apartheid movement. Born in Klerksdorp, he
                  first trained as a teacher but later entered the clergy, where
                  he used his position to speak out boldly against the
                  injustices of apartheid. Tutu became the first Black Anglican
                  Dean of Johannesburg and later the first Black Archbishop of
                  Cape Town, giving him a powerful platform to advocate for
                  equality and human rights.
                  <br />
                  He promoted nonviolent resistance and called for global
                  economic pressure on South Africa, earning the 1984 Nobel
                  Peace Prize for his work. Known for his compassion, humor, and
                  unwavering moral integrity, Tutu was widely regarded as the
                  spiritual voice of the struggle. After the end of apartheid,
                  he chaired the Truth and Reconciliation Commission, helping
                  the nation heal through truth-telling, forgiveness, and
                  restorative justice. He was also the originator of the idea of
                  a “Rainbow Nation,” emphasizing unity in diversity.
                  <br />
                  Throughout his life, Tutu championed many social causes,
                  including LGBTQ+ rights, HIV/AIDS awareness, peace in global
                  conflicts, and poverty reduction. His influence extended far
                  beyond South Africa, and he became a respected global advocate
                  for justice and dignity. Desmond Tutu passed away on December
                  26, 2021, leaving behind a legacy of courage, reconciliation,
                  and hope.
                  <br />
                </p>
              </div>
            </div>

            <div className="permanent-image-wrapper">
              <img
                src={desmondimage}
                alt="Desmond Tutu"
                className="segragationimage"
              />
              <img
                src={desmondtutu2}
                alt="Desmond Tutu"
                className="segragationimage"
              />
              <img
                src={desmondtutu3}
                alt="Desmond Tutu"
                className="segragationimage"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="permanent-wrapper">
              <div className="permanent-exhibition-card">
                <h2>Nelson Mandela</h2>
                <p>
                  Nelson Rolihlahla Mandela (1918-2013) was a South African
                  anti-apartheid revolutionary, political leader, and global
                  symbol of freedom and justice. Born in the village of Mvezo in
                  the Eastern Cape, he grew up within the Thembu royal family
                  and later studied law, becoming one of the country's first
                  Black lawyers.
                  <br />
                  Mandela became a central figure in the African National
                  Congress (ANC), helping to lead the struggle against
                  apartheid. He initially advocated nonviolent resistance but
                  later co-founded Umkhonto we Sizwe (MK) in 1961, the ANC's
                  armed wing, following increased state violence. In 1964, he
                  was sentenced to life imprisonment for sabotage and spent 27
                  years in prison, mostly on Robben Island. During these years,
                  he became a powerful global symbol of resistance to
                  oppression.
                  <br />
                  Mandela was released on February 11, 1990, as apartheid
                  crumbled under domestic and international pressure. He
                  immediately began working toward a negotiated, peaceful
                  transition to democracy. In 1994, after South Africa's first
                  democratic election, he became the country's first Black
                  President, leading efforts to unite a divided nation and
                  promote reconciliation. He championed nation-building, human
                  rights, and social justice, and helped establish the Truth and
                  Reconciliation Commission.
                  <br />
                  After leaving office in 1999, Mandela focused on humanitarian
                  work through the Nelson Mandela Foundation, addressing issues
                  such as HIV/AIDS, poverty, and education. His humility,
                  dignity, and commitment to peace earned him deep respect
                  across the world. Nelson Mandela passed away on December 5,
                  2013, but remains celebrated as a global icon of courage,
                  forgiveness, and the enduring fight for equality.
                  <br />
                  Beyond his presidency, Nelson Mandela's influence continued to
                  shape South Africa and the world. As a leader known for
                  humility and integrity, he refused to cling to power and
                  stepped down after a single term setting a rare example in
                  global politics. Mandela prioritized national healing over
                  revenge, urging South Africans to embrace reconciliation. His
                  famous message, “Courage is not the absence of fear, but the
                  triumph over it,” reflected his belief in forgiveness as a
                  powerful force for change. Mandela also dedicated much of his
                  post-presidential life to humanitarian causes. He became a
                  strong advocate for youth development and education, famously
                  saying, “Education is the most powerful weapon which you can
                  use to change the world.” He launched initiatives such as the
                  Nelson Mandela Children's Fund, Nelson Mandela Institute for
                  Education and Rural Development, and later the Nelson Mandela
                  Foundation, which continues his work today.
                </p>
              </div>
            </div>

            <div className="permanent-image-wrapper">
              <img
                src={madiba}
                alt="Nelson Mandela"
                className="segragationimage"
              />
              <img
                src={mandela3}
                alt="Nelson Mandela"
                className="segragationimage"
              />
              <img
                src={mandela2}
                alt="Nelson Mandela"
                className="segragationimage"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          className="custom-next-btns"
          onClick={() => swiperRef.current?.swiper.slideNext()}
        >
          <NextIcons />
        </button>
      </div>
    </section>
  );
};

export default Exhibitions;
