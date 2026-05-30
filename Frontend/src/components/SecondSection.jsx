import React from "react";

function SecondSection() {
  return (
    <div className="second">
      <h1 style={{ fontSize: "50px" }}>
        Harness the Power of <br />
        NASA's Earth Science & Space Technology
      </h1>
      <div className="second-contents">
        <div className="info-sections">
          <p>🌍 Unlock the Secrets of Our Changing Earth</p>
          <p>🛰️ Gain Real-time Perspective on Near-Earth Objects</p>
          <p>📊 Uncover Orbital Patterns and Asteroid Trajectories</p>
          <p>🔬 Advanced 3D Visualization and Data Analytics</p>
        </div>
        <img src="src\assets\se-desktop.png" alt="Earth Science Technology" />
      </div>
    </div>
  );
}

export default SecondSection;
