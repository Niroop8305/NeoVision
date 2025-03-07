import React from 'react';

function ThirdSection() {
  return (
    <div className="third">
      <div className="third-header">
        <h1>Discover the Insights</h1>
        <p>Unveil the Connections Between Earth's Systems</p>
      </div>
      <div className="third-content">
        <div className="third-text-section">
          <h2 style={{ marginLeft: '50px', color: '#5481dc' }}>Satellite Imagery</h2>
          <p style={{ marginLeft: '50px' }}>
            From monitoring deforestation to tracking urban growth, NASA's open
            data offers a wealth of insights that can help us better understand
            and protect our planet.
          </p>
          <h2 style={{ marginLeft: '150px' }}>Geospatial Analytics</h2>
          <p style={{ marginLeft: '150px' }}>Predictive Modeling</p>
        </div>
        <div className="third-image-section">
          <img src="src\assets\third-globe-img.jpg" alt="Globe" />
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
