import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function Home() {
  // Create a ref for the element that will have the typing effect
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElement.current, {
      strings: [
        "At NeoVision, we bring the universe closer by visualizing the orbits of Near-Earth Objects (NEOs) in real time.",
        "Explore the mysteries of space with real-time NEO tracking.",
        "Join us in understanding the wonders of our cosmic neighborhood.",
      ], // These are the sentences that will be typed
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 15,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    // Clean up effect on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home">
      <div className="home-txt">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>NeoVision : Your Window to the Cosmos!</h1>
        {/* Replace the <p> with a <span> and attach the ref */}
        <p>
          <span ref={typedElement}></span>
        </p>
        <div className="buttons">
          <a href="http://127.0.0.1:5501/3d.html">
            <button className="get-started">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Get Started</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
