import React from "react";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OpenDays from "./components/OpenDays";
import Exhibitions from "./components/Exhibitions";
import PermanentExhibitions from "./components/PermanentExhibitions";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <OpenDays />
        <Exhibitions />
        <PermanentExhibitions />
        <NewsLetter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
