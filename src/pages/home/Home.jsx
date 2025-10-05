import Hero from "../../layout/home/sections/Hero";
import AboutSection from "../../layout/home/sections/AboutSection";
import OpenDays from "../../layout/home/sections/OpenDays";
import Exhibitions from "../../layout/home/sections/Exhibitions";
import PermanentExhibitions from "../../layout/home/sections/PermanentExhibitions";
import NewsLetter from "../../layout/home/sections/NewsLetter";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <OpenDays />
      <Exhibitions />
      <PermanentExhibitions />
      <NewsLetter />
    </>
  );
};

export default Home;
