import React from 'react';

function SecondSection() {
  return (
    <div className="second">
      <h1 style={{ fontSize: '50px' }}>
        Harness the Power of <br />
        NASA's Earth Science
      </h1>
      <div className="second-contents">
        <div className="info-sections">
          <p>Unlock the Secrets of Our Changing Earth</p>
          <p>Gain a New Perspective on Earth's Environments</p>
          <p>Uncover the Patterns and Trends Shaping Our Planet</p>
        </div>
        <img src="src\assets\se-desktop.png" alt="Earth" />
      </div>
    </div>
  );
}

export default SecondSection;
