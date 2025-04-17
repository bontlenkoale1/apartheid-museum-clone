import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Exhibitions from "./components/Exhibitions";
import PermanentExhibitions from "./components/PermanentExhibitions";
import MainContent from "./components/MainContent.sx";
import NewsLetter from "./components/PermanentExhibitions";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <main>
      <About />
      <Exhibitions />
      <PermanentExhibitions />
      <MainContent />
      <NewsLetter />
      </main>
      <Footer />
    </div>
  
  )
}

export default App;