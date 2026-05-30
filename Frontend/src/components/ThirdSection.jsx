import React from "react";

function ThirdSection() {
  return (
    <div className="third">
      <div className="third-header">
        <h1>Discover the Cosmic Insights</h1>
        <p>Unveil the Connections Between Earth's Systems and Space Objects</p>
      </div>
      <div className="third-content">
        <div className="third-text-section">
          <h2 style={{ marginLeft: "50px", color: "#64ffda" }}>
            🛸 Real-time NEO Tracking
          </h2>
          <p style={{ marginLeft: "50px" }}>
            Monitor Near-Earth Objects with precision tracking technology. Our
            advanced visualization system provides real-time updates on asteroid
            positions, trajectories, and potential Earth-crossing events.
          </p>
          <h2 style={{ marginLeft: "150px", color: "#1de9b6" }}>
            🌌 3D Solar System Explorer
          </h2>
          <p style={{ marginLeft: "150px" }}>
            Experience our interactive 3D solar system that brings space
            exploration to your fingertips with stunning visual accuracy.
          </p>
        </div>
        <div className="third-image-section">
          <img
            src="src\assets\third-globe-img.png"
            alt="Cosmic Globe Visualization"
          />
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
