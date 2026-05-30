import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

function Home() {
  // Create refs for various effects
  const typedElement = useRef(null);
  const particlesRef = useRef(null);
  const asteroidsRef = useRef(null);
  const nebulasRef = useRef(null);

  // State for custom modals
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    // Initialize Typed.js with enhanced effects
    const typed = new Typed(typedElement.current, {
      strings: [
        "🌌 Discover the cosmic dance of Near-Earth Objects in stunning 3D visualization",
        "🛰️ Track asteroids and space debris with real-time precision and NASA data",
        "🌍 Protect our planet by understanding the orbital mechanics of cosmic threats",
        "⭐ Explore the infinite beauty and mystery of our solar system",
        "🚀 Journey through space with cutting-edge astronomical technology",
      ],
      typeSpeed: 35,
      backSpeed: 25,
      backDelay: 2500,
      startDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "✨",
      onStringTyped: () => {
        // Enhanced glow effect
        if (typedElement.current) {
          typedElement.current.classList.add("typed-text-glow");
          setTimeout(() => {
            typedElement.current?.classList.remove("typed-text-glow");
          }, 1500);
        }
      },
    });

    // Enhanced particle system
    const createParticles = () => {
      const particlesContainer = particlesRef.current;
      if (!particlesContainer) return;

      // Create 50 enhanced particles
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "cosmic-particle";

        // Varied particle sizes
        const size = Math.random() * 6 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random colors for space theme
        const colors = [
          "#64ffda",
          "#1de9b6",
          "#00bcd4",
          "#2196f3",
          "#ff6b6b",
          "#ffd700",
        ];
        particle.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];

        // Random animation delay and duration
        particle.style.animationDelay = `${Math.random() * 8}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 15}s`;

        particlesContainer.appendChild(particle);
      }
    };

    // Create floating asteroids
    const createAsteroids = () => {
      const asteroidContainer = asteroidsRef.current;
      if (!asteroidContainer) return;

      for (let i = 0; i < 8; i++) {
        const asteroid = document.createElement("div");
        asteroid.className = "floating-asteroid";

        // Random size and position
        const size = Math.random() * 30 + 20;
        asteroid.style.width = `${size}px`;
        asteroid.style.height = `${size}px`;
        asteroid.style.left = `${Math.random() * 90}%`;
        asteroid.style.top = `${Math.random() * 90}%`;

        // Random rotation and movement
        asteroid.style.animationDelay = `${Math.random() * 10}s`;
        asteroid.style.animationDuration = `${Math.random() * 20 + 30}s`;

        asteroidContainer.appendChild(asteroid);
      }
    };

    // Create nebula effects
    const createNebulas = () => {
      const nebulaContainer = nebulasRef.current;
      if (!nebulaContainer) return;

      for (let i = 0; i < 3; i++) {
        const nebula = document.createElement("div");
        nebula.className = "nebula-effect";

        // Random size and position
        const size = Math.random() * 400 + 300;
        nebula.style.width = `${size}px`;
        nebula.style.height = `${size}px`;
        nebula.style.left = `${Math.random() * 100}%`;
        nebula.style.top = `${Math.random() * 100}%`;

        // Random colors and animation
        const nebulaColors = [
          "radial-gradient(circle, rgba(100,255,218,0.1) 0%, rgba(29,233,182,0.05) 50%, transparent 100%)",
          "radial-gradient(circle, rgba(255,107,107,0.1) 0%, rgba(255,193,7,0.05) 50%, transparent 100%)",
          "radial-gradient(circle, rgba(33,150,243,0.1) 0%, rgba(156,39,176,0.05) 50%, transparent 100%)",
        ];
        nebula.style.background = nebulaColors[i];
        nebula.style.animationDelay = `${i * 3}s`;

        nebulaContainer.appendChild(nebula);
      }
    };

    createParticles();
    createAsteroids();
    createNebulas();

    // Ensure title visibility
    const ensureTitleVisibility = () => {
      const title = document.querySelector(".cosmic-title");
      if (title) {
        // Check if the title is visible by checking its computed style
        const computedStyle = window.getComputedStyle(title);
        const textFillColor = computedStyle.getPropertyValue(
          "-webkit-text-fill-color"
        );

        // If text is transparent but background-clip isn't working properly, force visibility
        if (
          textFillColor === "rgba(0, 0, 0, 0)" ||
          textFillColor === "transparent"
        ) {
          // Add a small delay to check if the background gradient is rendering
          setTimeout(() => {
            const rect = title.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
              // Element exists but might not be visible, force visibility
              title.classList.add("force-visible");
            }
          }, 100);
        }
      }
    };

    // Run the visibility check after a short delay
    setTimeout(ensureTitleVisibility, 500);

    // Add keyboard support for navigation
    const handleKeyPress = (event) => {
      if (event.key === "1") {
        // Trigger Solar System navigation
        document.querySelector(".primary-cosmic-btn")?.click();
      } else if (event.key === "2") {
        // Trigger NEO tracking navigation
        document.querySelector(".secondary-cosmic-btn")?.click();
      } else if (event.key === "a" || event.key === "A") {
        // Scroll to About section
        document.querySelector(".second")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else if (event.key === "h" || event.key === "H") {
        // Scroll to Home (top)
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    // Add scroll listener to update active navigation
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const homeSection = document.querySelector(".home-container");
      const secondSection = document.querySelector(".second");
      const thirdSection = document.querySelector(".third");

      const navLinks = document.querySelectorAll(".cosmic-nav-link");

      // Remove active class from all links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Determine which section is currently in view
      if (scrollPosition < window.innerHeight * 0.5) {
        // Home section
        document.querySelector('a[href="#home"]')?.classList.add("active");
      } else if (secondSection && thirdSection) {
        const secondRect = secondSection.getBoundingClientRect();
        const thirdRect = thirdSection.getBoundingClientRect();

        if (
          secondRect.top <= window.innerHeight / 2 ||
          thirdRect.top <= window.innerHeight / 2
        ) {
          // About section (second or third)
          document.querySelector('a[href="#about"]')?.classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount
    handleScroll();

    // Clean up effect on unmount
    return () => {
      typed.destroy();
      document.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      {/* Enhanced background layers */}
      <div className="cosmic-background">
        <div className="stars-layer"></div>
        <div className="galaxy-spiral"></div>
      </div>

      {/* Integrated Navigation */}
      <header className="cosmic-header">
        <nav className="cosmic-navigation">
          <a
            href="#home"
            className="cosmic-nav-link active"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            🏠 Home
          </a>
          <a
            href="#about"
            className="cosmic-nav-link"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(".second")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            🌌 About
          </a>
          <a
            href="#products"
            className="cosmic-nav-link"
            onClick={(e) => {
              e.preventDefault();
              setModalType("products");
              setShowModal(true);
            }}
          >
            🛰️ Products
          </a>
          <a
            href="/support.html"
            className="cosmic-nav-link"
            onClick={(e) => {
              e.preventDefault();
              setModalType("support");
              setShowModal(true);
            }}
          >
            🚀 Support
          </a>
        </nav>
      </header>

      {/* Nebula effects */}
      <div ref={nebulasRef} className="nebulas-container"></div>

      {/* Enhanced particle system */}
      <div ref={particlesRef} className="cosmic-particles"></div>

      {/* Floating asteroids */}
      <div ref={asteroidsRef} className="asteroids-container"></div>

      {/* Orbital rings */}
      <div className="orbital-rings">
        <div className="orbit-ring orbit-1"></div>
        <div className="orbit-ring orbit-2"></div>
        <div className="orbit-ring orbit-3"></div>
      </div>

      {/* Space Transition Overlay */}
      <div id="space-transition" className="space-transition">
        <div className="warp-stars">
          <div className="star-streak star-1"></div>
          <div className="star-streak star-2"></div>
          <div className="star-streak star-3"></div>
          <div className="star-streak star-4"></div>
          <div className="star-streak star-5"></div>
          <div className="star-streak star-6"></div>
        </div>
        <div className="flying-spacecraft">🚀</div>
        <div className="hyperspace-tunnel"></div>
        <div className="loading-text">Initiating Space Jump...</div>
      </div>

      {/* Main content */}
      <div className="home-content">
        <div className="cosmic-title-container">
          <div className="planet-icon">🌍</div>
          <h1 className="cosmic-title">
            <span className="title-word">Neo</span>
            <span className="title-word">Vision</span>
            <div className="subtitle">
              Guardian of Earth's Cosmic Neighborhood
            </div>
          </h1>
        </div>

        <div className="typing-container">
          <div className="typing-background"></div>
          <p className="cosmic-description">
            <span ref={typedElement}></span>
          </p>
        </div>

        <div className="action-buttons">
          <button
            className="primary-cosmic-btn"
            onClick={() => {
              // Trigger space transition animation
              const spaceTransition =
                document.getElementById("space-transition");
              const loadingText = document.querySelector(".loading-text");

              if (spaceTransition && loadingText) {
                loadingText.textContent = "Jumping to Solar System...";
                spaceTransition.classList.add("active");

                // Navigate after animation completes
                setTimeout(() => {
                  window.location.href = "/2D_World/index.html";
                }, 2500);
              }
            }}
          >
            <div className="btn-content">
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  fill="currentColor"
                />
              </svg>
              <span className="btn-text">Explore Solar System</span>
              <span className="btn-shortcut">Press 1</span>
              <div className="btn-glow"></div>
            </div>
          </button>

          <button
            className="secondary-cosmic-btn"
            onClick={() => {
              // Trigger space transition animation
              const spaceTransition =
                document.getElementById("space-transition");
              const loadingText = document.querySelector(".loading-text");

              if (spaceTransition && loadingText) {
                loadingText.textContent = "Tracking Near-Earth Objects...";
                spaceTransition.classList.add("active");

                // Navigate after animation completes
                setTimeout(() => {
                  window.location.href = "/3D_World/index.html";
                }, 2500);
              }
            }}
          >
            <div className="btn-content">
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill="currentColor"
                />
              </svg>
              <span className="btn-text">Track NEOs</span>
              <span className="btn-shortcut">Press 2</span>
              <div className="btn-glow"></div>
            </div>
          </button>
        </div>

        {/* Status indicators */}
        <div className="status-indicators">
          <div className="status-item">
            <div className="status-dot active"></div>
            <span>Live Data Feed</span>
          </div>
          <div className="status-item">
            <div className="status-dot active"></div>
            <span>3D Visualization</span>
          </div>
          <div className="status-item">
            <div className="status-dot active"></div>
            <span>Real-time Tracking</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="scroll-indicator"
        onClick={() =>
          document
            .querySelector(".second")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div className="scroll-arrow">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M7 10l5 5 5-5z" fill="currentColor" />
          </svg>
        </div>
        <span>Discover More</span>
      </div>

      {/* Custom Modal */}
      {showModal && (
        <div
          className="cosmic-modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div className="cosmic-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-icon">
                {modalType === "products" ? "🚀" : "🛟"}
              </div>
              <h3>
                {modalType === "products"
                  ? "Products Update"
                  : "Support Center"}
              </h3>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-message">
                <div className="message-icon">
                  {modalType === "products" ? "⭐" : "💫"}
                </div>
                <p>
                  {modalType === "products"
                    ? "New Products coming soon!"
                    : "Support Coming Soon!"}
                </p>
                <div className="sub-message">
                  {modalType === "products"
                    ? "We're working on exciting new features to enhance your cosmic exploration experience."
                    : "Our dedicated support team is preparing comprehensive help resources and live chat assistance for all your cosmic exploration needs."}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="cosmic-modal-btn"
                onClick={() => setShowModal(false)}
              >
                {modalType === "products" ? "Got it! 🌌" : "Thanks! 🌟"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
