import React from "react";
import {Navbar} from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OpenDays from "./components/OpenDays";
import Exhibitions from "./components/Exhibitions"
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <OpenDays />
            <Exhibitions />
        </div>
    );
}

export default App;
