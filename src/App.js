import React from "react";

import "./App.css";
import Navbar from "./components/navbar/navbarComponent";
import Hero from "./components/hero/heroComponent";
import Card from "./components/card/cardComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
