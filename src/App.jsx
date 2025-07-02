import React from "react";
import {Navbar} from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OpenDays from "./components/OpenDays";
import Exhibitions from "./components/Exhibitions";
import PermanentExhibitions from "./components/PermanentExhibitions";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <OpenDays />
            <Exhibitions />
            <PermanentExhibitions />
        </div>
    );
}

export default App;
