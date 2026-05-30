import React from "react";
import "./App.css";
import Home from "./components/Home";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import StarField from "./components/StarField";

function App() {
  return (
    <div>
      <StarField />

      <main>
        <Home />
      </main>

      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default App;
