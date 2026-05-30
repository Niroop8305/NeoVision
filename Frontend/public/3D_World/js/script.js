/**
 * Twitter:       @jprivet_dev
 * GitHub Gist:   https://gist.github.com/jprivet-dev/ed47f7eb4ce89d743e1e50f42530d38f
 *
 * EXAMPLES
 *
 * https://stemkoski.github.io/Three.js/
 * https://threejs.org/examples/
 *
 * EARTH
 *
 * http://learningthreejs.com/blog/2013/09/16/how-to-make-the-earth-in-webgl/
 * http://blog.mastermaps.com/2013/09/creating-webgl-earth-with-threejs.html
 * http://thematicmapping.org/playground/webgl/earth/
 *
 * SKYBOX / STARMAP
 *
 * https://threejs.org/examples/webgl_materials_cars.html
 * https://threejs.org/examples/#css3d_panorama
 *
 * LIGHT
 *
 * https://threejs.org/examples/webgl_lensflares.html
 * https://threejs.org/docs/api/lights/SpotLight.html
 *
 * SHADOW
 *
 * https://threejs.org/examples/webgl_shadowmap.html
 * http://jsfiddle.net/4Txgp/13/
 *
 * CONTROLS
 *
 * https://github.com/mrdoob/three.js/blob/master/examples/js/controls/OrbitControls.js
 * https://threejs.org/examples/misc_controls_orbit.html
 * http://workshop.chromeexperiments.com/examples/gui
 *
 * ANIMATION
 *
 * https://github.com/mrdoob/three.js/issues/1830
 * https://threejs.org/examples/webgl_animation_skinning_blending.html
 *
 * TEXTURES
 *
 * https://threejs.org/examples/webgl_materials_bumpmap.html
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
 * https://nasa3d.arc.nasa.gov/
 * http://planetpixelemporium.com/earth.html
 * http://earthobservatory.nasa.gov/blogs/elegantfigures/2011/10/06/crafting-the-blue-marble/
 * http://visibleearth.nasa.gov/view.php?id=79765
 * http://visibleearth.nasa.gov/view.php?id=57747
 *
 * Textures used in that codepen :
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/earth_bump_1024x512.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/earth_bump_2048x1024.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/earth_clouds_1024x512.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/earth_clouds_2048x1024.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/earth_map_1024x512.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/earth_map_2048x1024.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/earth_specular_1024x512.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/earth_specular_2048x1024.jpg
 *
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/lens_flare_circle_32x32.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/lens_flare_circle_64x64.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/lens_flare_hexagon_256x256.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/lens_flare_hexagon_256x256.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/lens_flare_sun_1024x1024.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/lens_flare_sun_512x512.jpg
 *
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/moon_bump_1024x512.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/moon_bump_512x256.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/moon_map_1024x512.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/moon_map_512x256.jpg
 *
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_negx_1024x1024.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_negx_512x512.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_negy_1024x1024.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_negy_512x512.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_negz_1024x1024.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_negz_512x512.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_posx_1024x1024.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_posx_512x512.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_posy_1024x1024.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_posy_512x512.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_posz_1024x1024.jpg
 * https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/skymap_posz_512x512.jpg
 */
var ASSETS_PATH = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/122460/",
  DEFAULT = "default",
  IMAGE_SD = "sd",
  IMAGE_HD = "hd",
  COLOR_WHITE = 0xffffff,
  COLOR_BLACK = 0x000000;

// Get API base URL from environment or default to localhost
const API_BASE_URL =
  window.ENV?.API_URL || "https://neovision.onrender.com/api";

// Add to your frontend script.js
async function fetchAsteroidTrails() {
  const response = await fetch(`${API_BASE_URL}/asteroids`);
  const data = await response.json();
  return data.asteroidData;
}

// STL Model Configuration
const ASTEROID_MODELS = [
  {
    name: "Bennu",
    path: "docs/resources/Bogus Bennu Shape STL/Bogus Bennu Shape.STL",
    scale: 1.0,
  },
  {
    name: "Geographos",
    path: "docs/resources/geographos/1620geographos.stl",
    scale: 0.8,
  },
  {
    name: "Golevka",
    path: "docs/resources/golevka/6489golevka.stl",
    scale: 1.2,
  },
  {
    name: "Kleopatra",
    path: "docs/resources/kleopatra/216kleopatra.stl",
    scale: 0.9,
  },
  {
    name: "Vesta",
    path: "docs/resources/vesta-globe-east/globe-east-hollow.stl",
    scale: 1.1,
  },
];

// Cache for loaded STL geometries
var loadedSTLGeometries = {};
var stlLoader;
var stlLoaderReady = false;
var useSTLModels = false; // Global flag to enable/disable STL model usage (disabled until STL files are added)

// Initialize STL Loader with error handling
function initializeSTLLoader() {
  try {
    if (
      typeof THREE !== "undefined" &&
      typeof THREE.STLLoader !== "undefined"
    ) {
      stlLoader = new THREE.STLLoader();
      stlLoaderReady = true;
      return true;
    } else {
      return false;
    }
  } catch (error) {
    useSTLModels = false;
    return false;
  }
}

// Wait for STL Loader to be available (with timeout)
function waitForSTLLoader(timeout = 5000) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const checkLoader = () => {
      if (initializeSTLLoader()) {
        resolve(true);
      } else if (Date.now() - startTime > timeout) {
        useSTLModels = false;
        reject(new Error("STL Loader timeout"));
      } else {
        // Retry every 100ms
        setTimeout(checkLoader, 100);
      }
    };
    checkLoader();
  });
}

// Function to load STL models
function loadSTLModel(modelPath) {
  return new Promise((resolve, reject) => {
    if (!stlLoaderReady || !stlLoader) {
      reject(
        new Error(
          "STL Loader not initialized. Make sure STLLoader.js is loaded.",
        ),
      );
      return;
    }

    if (loadedSTLGeometries[modelPath]) {
      // Return cached geometry
      resolve(loadedSTLGeometries[modelPath].clone());
      return;
    }

    stlLoader.load(
      modelPath,
      function (geometry) {
        // Store in cache
        loadedSTLGeometries[modelPath] = geometry;
        resolve(geometry.clone());
      },
      function (progress) {
        // Progress tracking
      },
      function (error) {
        reject(error);
      },
    );
  });
}

// Function to get a random STL model
function getRandomAsteroidModel() {
  const randomIndex = Math.floor(Math.random() * ASTEROID_MODELS.length);
  return ASTEROID_MODELS[randomIndex];
}

// Function to preload all STL models
async function preloadSTLModels() {
  if (!useSTLModels) {
    return;
  }

  try {
    await waitForSTLLoader();
    const loadPromises = ASTEROID_MODELS.map(async (model) => {
      try {
        await loadSTLModel(model.path);
      } catch (error) {
        // Error handled silently
      }
    });

    await Promise.all(loadPromises);
  } catch (error) {
    useSTLModels = false;
  }
}

// Initialize STL loading when the page loads
document.addEventListener("DOMContentLoaded", function () {
  // Try to initialize STL Loader immediately
  initializeSTLLoader();

  // Preload STL models if loader is available
  preloadSTLModels()
    .then(() => {
      // STL models loaded
    })
    .catch((error) => {
      // Error handled silently
    });

  // Initialize existing sidebar event listeners
  const closeBtn = document.getElementById("close-sidebar");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeSidebar);
  }

  // Close sidebar when clicking outside of it
  document.addEventListener("click", function (event) {
    const sidebar = document.getElementById("asteroid-sidebar");
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnCanvas = event.target.tagName === "CANVAS";

    if (
      !isClickInsideSidebar &&
      isClickOnCanvas &&
      sidebar.classList.contains("open")
    ) {
      // Don't close immediately, let the asteroid click handler run first
      setTimeout(() => {
        if (!event.target.closest(".asteroid-sidebar")) {
          // Only close if we didn't click on another asteroid
        }
      }, 100);
    }
  });
});

// Also try to initialize immediately when script loads
if (typeof THREE !== "undefined") {
  initializeSTLLoader();
}

// Store asteroid spheres and labels for click detection
var asteroidSpheres = [];
var asteroidLabels = [];
var isAnimatingCamera = false;

// Model viewer variables
var modelViewer = {
  scene: null,
  camera: null,
  renderer: null,
  model: null,
  controls: null,
  animationFrame: null,
};

// Raycaster for click detection
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

// Camera animation function
function animateCameraToTarget(
  targetPosition,
  lookAtTarget = new THREE.Vector3(0, 0, 0),
  duration = 2000,
) {
  if (isAnimatingCamera) return;

  isAnimatingCamera = true;
  const startPosition = Camera.perspectiveCamera.position.clone();
  const startTime = Date.now();

  // Disable orbit controls during animation
  Scene.orbitControls.enabled = false;

  function animate() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Smooth easing function
    const easeProgress = 1 - Math.pow(1 - progress, 3);

    Camera.perspectiveCamera.position.lerpVectors(
      startPosition,
      targetPosition,
      easeProgress,
    );
    Camera.perspectiveCamera.lookAt(lookAtTarget);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      isAnimatingCamera = false;
      // Re-enable orbit controls after animation
      Scene.orbitControls.enabled = true;
    }
  }

  animate();
}

// Mouse move event handler for hover effects
function onMouseMove(event) {
  // Calculate mouse position in normalized device coordinates
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Set up raycaster
  raycaster.setFromCamera(mouse, Camera.perspectiveCamera);

  // Reset all asteroid materials to normal
  asteroidSpheres.forEach((asteroid) => {
    asteroid.material.emissive.setHex(0x666666);
  });

  // Reset all labels to normal
  asteroidLabels.forEach((label) => {
    label.material.opacity = 1.0;
  });

  // Check for intersections with asteroids or labels
  const asteroidIntersects = raycaster.intersectObjects(asteroidSpheres);
  const labelIntersects = raycaster.intersectObjects(asteroidLabels);

  if (asteroidIntersects.length > 0) {
    // Highlight hovered asteroid
    const hoveredAsteroid = asteroidIntersects[0].object;
    hoveredAsteroid.material.emissive.setHex(0x999999);
    document.body.style.cursor = "pointer";

    // Also highlight corresponding label
    const correspondingLabel = asteroidLabels.find(
      (label) =>
        label.userData.name === hoveredAsteroid.userData.name &&
        label.userData.id === hoveredAsteroid.userData.id,
    );
    if (correspondingLabel) {
      correspondingLabel.material.opacity = 1.5;
    }
  } else if (labelIntersects.length > 0) {
    // Highlight hovered label
    const hoveredLabel = labelIntersects[0].object;
    hoveredLabel.material.opacity = 1.5;
    document.body.style.cursor = "pointer";

    // Also highlight corresponding asteroid
    const correspondingAsteroid = asteroidSpheres.find(
      (asteroid) =>
        asteroid.userData.name === hoveredLabel.userData.name &&
        asteroid.userData.id === hoveredLabel.userData.id,
    );
    if (correspondingAsteroid) {
      correspondingAsteroid.material.emissive.setHex(0x999999);
    }
  } else {
    document.body.style.cursor = "default";
  }
}
function onMouseClick(event) {
  // Don't process clicks during camera animation
  if (isAnimatingCamera) return;

  // Calculate mouse position in normalized device coordinates
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Set up raycaster
  raycaster.setFromCamera(mouse, Camera.perspectiveCamera);

  // Check for intersections with asteroid labels first (they should be easier to click)
  const labelIntersects = raycaster.intersectObjects(asteroidLabels);

  if (labelIntersects.length > 0) {
    // Click on asteroid label - find the corresponding asteroid
    const clickedLabel = labelIntersects[0].object;
    console.log("Clicked asteroid label:", clickedLabel.userData.name);

    // Find the corresponding asteroid by name/id
    const correspondingAsteroid = asteroidSpheres.find(
      (asteroid) =>
        asteroid.userData.name === clickedLabel.userData.name &&
        asteroid.userData.id === clickedLabel.userData.id,
    );

    if (correspondingAsteroid) {
      const asteroidPosition = correspondingAsteroid.position.clone();

      // Show asteroid details in sidebar
      showAsteroidDetails(clickedLabel.userData);

      // Calculate appropriate camera distance
      const asteroidDistanceFromOrigin = asteroidPosition.length();
      const cameraDistance = Math.max(100, asteroidDistanceFromOrigin * 0.3);

      // Create a normalized direction vector from origin to asteroid
      const direction = asteroidPosition.clone().normalize();

      // Position camera between Earth and asteroid, but closer to asteroid
      const cameraPosition = asteroidPosition.clone();
      cameraPosition.add(direction.multiplyScalar(cameraDistance * 0.5));

      console.log("Moving camera to asteroid via label click:", cameraPosition);
      animateCameraToTarget(cameraPosition, asteroidPosition);
    }
    return;
  }

  // Check for intersections with asteroid meshes
  const asteroidIntersects = raycaster.intersectObjects(asteroidSpheres);

  if (asteroidIntersects.length > 0) {
    // Click on asteroid - move camera to asteroid and show details
    const clickedAsteroid = asteroidIntersects[0].object;
    const asteroidPosition = clickedAsteroid.position.clone();

    console.log(
      "Clicked asteroid mesh:",
      clickedAsteroid.userData.name,
      "at position:",
      asteroidPosition,
    );

    // Show asteroid details in sidebar
    showAsteroidDetails(clickedAsteroid.userData);

    // Calculate appropriate camera distance based on asteroid's distance from origin
    const asteroidDistanceFromOrigin = asteroidPosition.length();
    const cameraDistance = Math.max(100, asteroidDistanceFromOrigin * 0.3); // At least 100 units away

    // Create a normalized direction vector from origin to asteroid
    const direction = asteroidPosition.clone().normalize();

    // Position camera between Earth and asteroid, but closer to asteroid
    const cameraPosition = asteroidPosition.clone();
    cameraPosition.add(direction.multiplyScalar(cameraDistance * 0.5));

    console.log(
      "Moving camera to:",
      cameraPosition,
      "Distance:",
      cameraDistance,
    );
    animateCameraToTarget(cameraPosition, asteroidPosition);
    return;
  }

  // Check for intersection with Earth
  const earthIntersects = raycaster.intersectObject(Earth.earthMesh);

  if (earthIntersects.length > 0) {
    // Click on Earth - move camera back to default Earth view
    console.log("Clicked on Earth, returning to default view");
    const earthViewPosition = new THREE.Vector3(0, 0, 150);
    animateCameraToTarget(earthViewPosition);
    return;
  }

  console.log("No objects clicked");
}

// Asteroid Details Sidebar Functions
async function fetchAsteroidDetails(asteroidId) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/asteroids/${asteroidId}/details`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching asteroid details:", error);
    throw error;
  }
}

function formatAsteroidInfo(aiInfo) {
  // Convert markdown-style formatting to HTML
  let formatted = aiInfo
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold text
    .replace(/\*(.*?)\*/g, "<em>$1</em>") // Italic text
    .replace(/\n\n/g, "</p><p>") // Paragraph breaks
    .replace(/\n•/g, "<br>•") // List items
    .replace(/\n    -/g, "<br>&nbsp;&nbsp;&nbsp;&nbsp;-") // Sub-list items
    .replace(/\n/g, "<br>"); // Line breaks

  return `<p>${formatted}</p>`;
}

function showAsteroidDetails(asteroidData) {
  const sidebar = document.getElementById("asteroid-sidebar");
  const infoDiv = document.getElementById("asteroid-info");

  // Debug: Log the asteroid data being passed to sidebar
  console.log("showAsteroidDetails called with:", {
    name: asteroidData.name,
    id: asteroidData.id,
    modelName: asteroidData.modelName,
    modelPath: asteroidData.modelPath,
    isFallback: asteroidData.isFallback,
    isAsteroid: asteroidData.isAsteroid,
  });

  // Show loading state
  infoDiv.innerHTML = '<div class="loading">Loading asteroid details...</div>';
  sidebar.classList.add("open");

  // Load and display the 3D model
  displayAsteroidModel(asteroidData);

  // Fetch detailed information
  fetchAsteroidDetails(asteroidData.id)
    .then((details) => {
      if (details.aiInfo) {
        infoDiv.innerHTML = formatAsteroidInfo(details.aiInfo);
      } else {
        infoDiv.innerHTML = `
                    <h3>Basic Information</h3>
                    <p><strong>Name:</strong> ${asteroidData.name || "Unknown"}</p>
                    <p><strong>ID:</strong> ${asteroidData.id || "Unknown"}</p>
                    <p class="error">Detailed information not available.</p>
                `;
      }
    })
    .catch((error) => {
      infoDiv.innerHTML = `
                <h3>Basic Information</h3>
                <p><strong>Name:</strong> ${asteroidData.name || "Unknown"}</p>
                <p><strong>ID:</strong> ${asteroidData.id || "Unknown"}</p>
                <div class="error">
                    <strong>Error loading details:</strong> ${error.message}
                </div>
            `;
    });
}

function closeSidebar() {
  const sidebar = document.getElementById("asteroid-sidebar");
  sidebar.classList.remove("open");

  // Clean up model viewer when closing sidebar
  if (modelViewer.animationFrame) {
    cancelAnimationFrame(modelViewer.animationFrame);
    modelViewer.animationFrame = null;
  }
  if (modelViewer.renderer) {
    const container = document.getElementById("asteroid-model-viewer");
    if (container && modelViewer.renderer.domElement) {
      container.removeChild(modelViewer.renderer.domElement);
    }
    modelViewer.renderer.dispose();
    modelViewer.renderer = null;
  }
}

// Initialize 3D model viewer
function initModelViewer() {
  const container = document.getElementById("asteroid-model-viewer");
  if (!container) {
    console.error("Model viewer container not found");
    return false;
  }

  try {
    // Clear any existing content
    container.innerHTML =
      '<div class="model-viewer-loading">Loading 3D model...</div>';

    // Clean up previous instance
    if (modelViewer.renderer) {
      if (
        modelViewer.renderer.domElement &&
        modelViewer.renderer.domElement.parentNode
      ) {
        modelViewer.renderer.domElement.parentNode.removeChild(
          modelViewer.renderer.domElement,
        );
      }
      modelViewer.renderer.dispose();
    }

    // Create scene
    modelViewer.scene = new THREE.Scene();

    // Create camera
    modelViewer.camera = new THREE.PerspectiveCamera(
      75,
      container.offsetWidth / container.offsetHeight,
      0.1,
      1000,
    );
    modelViewer.camera.position.set(0, 0, 10);

    // Create renderer with transparent background
    modelViewer.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    modelViewer.renderer.setSize(container.offsetWidth, container.offsetHeight);
    modelViewer.renderer.setClearColor(0x000000, 0); // Transparent background

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    modelViewer.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    modelViewer.scene.add(directionalLight);

    // Add another light from different angle for better visibility
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-5, -5, 5);
    modelViewer.scene.add(directionalLight2);

    // Clear loading message and add canvas
    container.innerHTML = "";
    container.appendChild(modelViewer.renderer.domElement);

    // Add mouse controls for rotation
    let mouseDown = false;
    let mouseX = 0,
      mouseY = 0;

    modelViewer.renderer.domElement.addEventListener("mousedown", (event) => {
      mouseDown = true;
      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    modelViewer.renderer.domElement.addEventListener("mousemove", (event) => {
      if (!mouseDown || !modelViewer.model) return;

      const deltaX = event.clientX - mouseX;
      const deltaY = event.clientY - mouseY;

      modelViewer.model.rotation.y += deltaX * 0.01;
      modelViewer.model.rotation.x += deltaY * 0.01;

      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    document.addEventListener("mouseup", () => {
      mouseDown = false;
    });

    // Start animation loop
    animateModelViewer();

    console.log("Model viewer initialized successfully");
    return true;
  } catch (error) {
    console.error("Failed to initialize model viewer:", error);
    container.innerHTML =
      '<div class="model-viewer-error">Viewer initialization failed</div>';
    return false;
  }
}

// Animation loop for model viewer
function animateModelViewer() {
  if (!modelViewer.renderer || !modelViewer.scene || !modelViewer.camera)
    return;

  modelViewer.animationFrame = requestAnimationFrame(animateModelViewer);

  // Auto-rotate the model slowly
  if (modelViewer.model) {
    modelViewer.model.rotation.y += 0.005;
  }

  modelViewer.renderer.render(modelViewer.scene, modelViewer.camera);
}

// Load and display asteroid model in sidebar
async function displayAsteroidModel(asteroidData) {
  const container = document.getElementById("asteroid-model-viewer");
  if (!container) return;

  console.log(
    "Displaying asteroid model for:",
    asteroidData.name,
    "Model info:",
    {
      modelName: asteroidData.modelName,
      modelPath: asteroidData.modelPath,
      isFallback: asteroidData.isFallback,
    },
  );

  try {
    // Initialize model viewer
    initModelViewer();

    // Remove any existing model first
    if (modelViewer.model) {
      modelViewer.scene.remove(modelViewer.model);
      modelViewer.model = null;
    }

    // Clear any existing labels
    const existingLabels = container.querySelectorAll(".model-viewer-label");
    existingLabels.forEach((label) => label.remove());

    let modelToLoad = null;

    // Use the EXACT same model that was used in the main scene
    if (asteroidData.modelPath && !asteroidData.isFallback) {
      // Find the exact model by path
      modelToLoad = ASTEROID_MODELS.find(
        (m) => m.path === asteroidData.modelPath,
      );
      console.log("Using exact model from main scene:", modelToLoad?.name);
    }

    if (!modelToLoad && !asteroidData.isFallback) {
      // If path doesn't match, try to find by name
      if (asteroidData.modelName && asteroidData.modelName !== "Procedural") {
        modelToLoad = ASTEROID_MODELS.find(
          (m) => m.name === asteroidData.modelName,
        );
        console.log("Found model by name:", modelToLoad?.name);
      }
    }

    if (!modelToLoad && !asteroidData.isFallback) {
      // Last fallback: pick a random model but log the mismatch
      console.warn(
        "Could not find exact model, using random model as fallback",
      );
      modelToLoad = getRandomAsteroidModel();
    }

    // Handle fallback (procedural) asteroids
    if (asteroidData.isFallback || !modelToLoad) {
      console.log("Creating procedural model for sidebar (fallback asteroid)");
      await createFallbackModel(asteroidData);
      return;
    }

    // Wait for STL loader to be ready
    if (!stlLoaderReady) {
      await waitForSTLLoader(3000); // 3 second timeout
    }

    if (!stlLoaderReady) {
      throw new Error("STL Loader not ready");
    }

    console.log(
      `Loading exact model for sidebar: ${modelToLoad.name} for asteroid ${asteroidData.name}`,
    );

    // Load the STL geometry with timeout
    const geometry = await Promise.race([
      loadSTLModel(modelToLoad.path),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Model loading timeout")), 5000),
      ),
    ]);

    // Create material with EXACT same properties as main scene
    let material;
    if (asteroidData.materialColor !== undefined) {
      // Use exact material properties from main scene
      material = new THREE.MeshPhongMaterial({
        color: asteroidData.materialColor,
        emissive: asteroidData.materialEmissive,
        specular: asteroidData.materialSpecular,
        shininess: asteroidData.materialShininess,
      });
      console.log(
        `Using exact material from main scene for ${asteroidData.name}`,
      );
    } else {
      // Fallback to asteroid type if exact properties not available
      material = asteroidData.asteroidType
        ? createRealisticAsteroidMaterial(asteroidData.asteroidType)
        : new THREE.MeshPhongMaterial({
            color: 0x999999,
            emissive: 0x333333,
            shininess: 30,
            specular: 0x555555,
          });
      console.log(`Using fallback material for ${asteroidData.name}`);
    }

    // Create mesh
    modelViewer.model = new THREE.Mesh(geometry, material);

    // Scale and center the model for the viewer
    geometry.computeBoundingBox();
    const boundingBox = geometry.boundingBox;
    const size = Math.max(
      boundingBox.max.x - boundingBox.min.x,
      boundingBox.max.y - boundingBox.min.y,
      boundingBox.max.z - boundingBox.min.z,
    );

    const scale = 4 / size; // Scale to fit nicely in viewer
    modelViewer.model.scale.set(scale, scale, scale);

    // Center the model
    const center = new THREE.Vector3(
      (boundingBox.max.x + boundingBox.min.x) / 2,
      (boundingBox.max.y + boundingBox.min.y) / 2,
      (boundingBox.max.z + boundingBox.min.z) / 2,
    );
    modelViewer.model.position.set(
      -center.x * scale,
      -center.y * scale,
      -center.z * scale,
    );

    // Add to scene
    if (modelViewer.scene) {
      modelViewer.scene.add(modelViewer.model);
    }

    // Add label to show which exact model is being displayed
    const label = document.createElement("div");
    label.className = "model-viewer-label";
    label.textContent = `3D Model: ${modelToLoad.name}`;
    label.style.cssText =
      "position: absolute; bottom: 10px; left: 10px; background: rgba(0,0,0,0.7); color: white; padding: 5px; border-radius: 3px; font-size: 12px;";
    container.appendChild(label);

    console.log(
      `Successfully loaded EXACT 3D model for asteroid: ${asteroidData.name} - Model: ${modelToLoad.name}`,
    );
  } catch (error) {
    console.error("Failed to load 3D model for sidebar:", error);

    // Try to create a fallback procedural model
    try {
      await createFallbackModel(asteroidData);
    } catch (fallbackError) {
      console.error("Fallback model also failed:", fallbackError);
      container.innerHTML =
        '<div class="model-viewer-error">3D model unavailable</div>';
    }
  }
}

// Create fallback procedural model for sidebar
async function createFallbackModel(asteroidData) {
  const container = document.getElementById("asteroid-model-viewer");

  // Remove any existing model first
  if (modelViewer.model) {
    modelViewer.scene.remove(modelViewer.model);
    modelViewer.model = null;
  }

  // Clear any existing labels
  const existingLabels = container.querySelectorAll(".model-viewer-label");
  existingLabels.forEach((label) => label.remove());

  // Create procedural geometry
  const geometry = createProceduralAsteroidGeometry(2, 0.4);

  // Use exact material properties if available, otherwise create new realistic material
  let material;
  if (asteroidData.materialColor !== undefined) {
    // Use exact material properties from main scene
    material = new THREE.MeshPhongMaterial({
      color: asteroidData.materialColor,
      emissive: asteroidData.materialEmissive,
      specular: asteroidData.materialSpecular,
      shininess: asteroidData.materialShininess,
    });
    console.log(
      `Using exact fallback material from main scene for ${asteroidData.name}`,
    );
  } else {
    // Create new realistic material
    material = asteroidData.asteroidType
      ? createRealisticAsteroidMaterial(asteroidData.asteroidType)
      : new THREE.MeshPhongMaterial({
          color: 0x666666,
          emissive: 0x222222,
          shininess: 20,
          specular: 0x444444,
        });
    console.log(`Using new fallback material for ${asteroidData.name}`);
  }

  modelViewer.model = new THREE.Mesh(geometry, material);
  modelViewer.model.scale.set(2, 2, 2);

  if (modelViewer.scene) {
    modelViewer.scene.add(modelViewer.model);
  }

  // Add label showing this is a procedural model
  const label = document.createElement("div");
  label.className = "model-viewer-label";
  label.textContent = "Procedural Model (Fallback)";
  label.style.cssText =
    "position: absolute; bottom: 10px; left: 10px; background: rgba(0,0,0,0.7); color: white; padding: 5px; border-radius: 3px; font-size: 12px;";
  container.appendChild(label);

  console.log(
    `Created procedural fallback model for asteroid: ${asteroidData.name}`,
  );
}

// ...existing code...

// ...existing code...

// Function to create asteroid geometry using STL models ONLY
async function createAsteroidGeometry(size = 2, specificModel = null) {
  try {
    // Wait for STL Loader to be ready if it isn't already
    if (!stlLoaderReady) {
      await waitForSTLLoader(5000); // 5 second timeout
    }

    if (!stlLoaderReady) {
      throw new Error("STL Loader failed to initialize");
    }

    const model = specificModel || getRandomAsteroidModel();
    console.log(
      `Creating geometry with model: ${model.name} (path: ${model.path})`,
    );

    // Add more detailed error handling for STL loading
    let geometry;
    try {
      geometry = await loadSTLModel(model.path);
      if (!geometry) {
        throw new Error(`STL loader returned null geometry for ${model.path}`);
      }
    } catch (stlError) {
      throw stlError;
    }

    // Validate geometry has vertices (compatible with both Geometry and BufferGeometry)
    let hasVertices = false;
    let vertexCount = 0;

    if (geometry.vertices && geometry.vertices.length > 0) {
      // THREE.Geometry format (Three.js r79)
      hasVertices = true;
      vertexCount = geometry.vertices.length;
      console.log(
        `Geometry has ${vertexCount} vertices (THREE.Geometry format)`,
      );
    } else if (
      geometry.attributes &&
      geometry.attributes.position &&
      geometry.attributes.position.count > 0
    ) {
      // THREE.BufferGeometry format (newer Three.js)
      hasVertices = true;
      vertexCount = geometry.attributes.position.count;
      console.log(
        `Geometry has ${vertexCount} vertices (THREE.BufferGeometry format)`,
      );
    }

    if (!hasVertices || vertexCount === 0) {
      console.error("Geometry structure:", {
        hasVertices: !!geometry.vertices,
        verticesLength: geometry.vertices ? geometry.vertices.length : "N/A",
        hasAttributes: !!geometry.attributes,
        hasPosition: !!(geometry.attributes && geometry.attributes.position),
        positionCount:
          geometry.attributes && geometry.attributes.position
            ? geometry.attributes.position.count
            : "N/A",
      });
      throw new Error(
        `Invalid geometry from STL model ${model.name} - no vertices found (checked ${vertexCount} vertices)`,
      );
    }

    // Normalize the geometry to fit the desired size
    geometry.computeBoundingBox();
    const boundingBox = geometry.boundingBox;

    if (!boundingBox || !boundingBox.max || !boundingBox.min) {
      throw new Error(`Invalid bounding box for STL model ${model.name}`);
    }

    const currentSize = Math.max(
      boundingBox.max.x - boundingBox.min.x,
      boundingBox.max.y - boundingBox.min.y,
      boundingBox.max.z - boundingBox.min.z,
    );

    if (currentSize <= 0) {
      throw new Error(
        `Invalid geometry size for STL model ${model.name}: ${currentSize}`,
      );
    }

    // Scale the geometry to the desired size
    const scaleFactor = (size * model.scale) / currentSize;
    geometry.scale(scaleFactor, scaleFactor, scaleFactor);

    // Center the geometry (Three.js r79 compatible)
    geometry.computeBoundingBox();
    const newBoundingBox = geometry.boundingBox;
    const center = new THREE.Vector3(
      (newBoundingBox.max.x + newBoundingBox.min.x) / 2,
      (newBoundingBox.max.y + newBoundingBox.min.y) / 2,
      (newBoundingBox.max.z + newBoundingBox.min.z) / 2,
    );
    geometry.translate(-center.x, -center.y, -center.z);

    // Compute normals for proper lighting
    geometry.computeFaceNormals();
    geometry.computeVertexNormals();

    console.log(
      `Successfully created asteroid geometry using STL model: ${model.name}`,
    );

    // Return both geometry and model info for better tracking
    geometry.modelInfo = {
      name: model.name,
      path: model.path,
      scale: model.scale,
    };

    return geometry;
  } catch (error) {
    // Do not fall back to procedural geometry - throw error to retry with different model
    throw error;
  }
}

// Fallback function for procedural asteroid geometry (keeping original as backup)
function createProceduralAsteroidGeometry(size = 2, irregularity = 0.3) {
  const geometry = new THREE.SphereGeometry(size, 12, 8);
  const vertices = geometry.vertices;

  // Add randomness to make it look like an irregular asteroid
  for (let i = 0; i < vertices.length; i++) {
    const vertex = vertices[i];
    const noise = (Math.random() - 0.5) * irregularity * size;
    vertex.normalize().multiplyScalar(size + noise);
  }

  geometry.computeFaceNormals();
  geometry.computeVertexNormals();

  return geometry;
}

// Function to create realistic asteroid material with authentic colors
function createAsteroidMaterial() {
  // Realistic asteroid color variations based on actual asteroid types
  const asteroidColorTypes = [
    // C-type asteroids (carbonaceous) - dark, carbon-rich
    {
      name: "C-type (Carbonaceous)",
      color: 0x2f2f2f, // Very dark gray
      emissive: 0x0a0a0a, // Minimal glow
      specular: 0x111111, // Low reflectivity
      shininess: 5,
    },
    // S-type asteroids (silicaceous) - rocky, moderate brightness
    {
      name: "S-type (Silicaceous)",
      color: 0x8b7355, // Brown-gray
      emissive: 0x1a1410, // Subtle warm glow
      specular: 0x333333, // Medium reflectivity
      shininess: 12,
    },
    // M-type asteroids (metallic) - brighter, metallic
    {
      name: "M-type (Metallic)",
      color: 0x696969, // Medium gray with metallic tint
      emissive: 0x151515, // Slight metallic glow
      specular: 0x555555, // Higher reflectivity
      shininess: 25,
    },
    // V-type asteroids (basaltic) - reddish
    {
      name: "V-type (Basaltic)",
      color: 0x8b4513, // Saddle brown
      emissive: 0x1a0f0a, // Warm reddish glow
      specular: 0x2a2a2a, // Moderate reflectivity
      shininess: 8,
    },
    // D-type asteroids (very dark, red)
    {
      name: "D-type (Dark Red)",
      color: 0x4a3429, // Dark reddish brown
      emissive: 0x0f0a08, // Very subtle glow
      specular: 0x1a1a1a, // Low reflectivity
      shininess: 3,
    },
    // P-type asteroids (very dark, primitive)
    {
      name: "P-type (Primitive)",
      color: 0x3d3d3d, // Dark charcoal
      emissive: 0x080808, // Minimal glow
      specular: 0x0f0f0f, // Very low reflectivity
      shininess: 2,
    },
    // A-type asteroids (moderate albedo, reddish)
    {
      name: "A-type (Moderate)",
      color: 0x8b6f47, // Olive drab
      emissive: 0x1c1610, // Subtle glow
      specular: 0x404040, // Moderate reflectivity
      shininess: 15,
    },
  ];

  // Randomly select an asteroid type
  const asteroidType =
    asteroidColorTypes[Math.floor(Math.random() * asteroidColorTypes.length)];

  // Create material with realistic properties
  const material = new THREE.MeshPhongMaterial({
    color: asteroidType.color,
    emissive: asteroidType.emissive,
    specular: asteroidType.specular,
    shininess: asteroidType.shininess,
  });

  // Add slight color variation within the same type (±10% brightness variation)
  const variation = 0.9 + Math.random() * 0.2; // 0.9 to 1.1
  material.color.multiplyScalar(variation);

  // Store the asteroid type for later use
  material.asteroidType = asteroidType.name;

  console.log(`Created ${asteroidType.name} asteroid material`);
  return material;
}

// Function to create realistic asteroid material with specific type or random
function createRealisticAsteroidMaterial(specificType = null) {
  // Realistic asteroid color variations based on actual asteroid types
  const asteroidColorTypes = [
    // C-type asteroids (carbonaceous) - dark, carbon-rich
    {
      name: "C-type",
      fullName: "C-type (Carbonaceous)",
      color: 0x2f2f2f, // Very dark gray
      emissive: 0x0a0a0a, // Minimal glow
      specular: 0x111111, // Low reflectivity
      shininess: 5,
    },
    // S-type asteroids (silicaceous) - rocky, moderate brightness
    {
      name: "S-type",
      fullName: "S-type (Silicaceous)",
      color: 0x8b7355, // Brown-gray
      emissive: 0x1a1410, // Subtle warm glow
      specular: 0x333333, // Medium reflectivity
      shininess: 12,
    },
    // M-type asteroids (metallic) - brighter, metallic
    {
      name: "M-type",
      fullName: "M-type (Metallic)",
      color: 0x696969, // Medium gray with metallic tint
      emissive: 0x151515, // Slight metallic glow
      specular: 0x555555, // Higher reflectivity
      shininess: 25,
    },
    // V-type asteroids (basaltic) - reddish
    {
      name: "V-type",
      fullName: "V-type (Basaltic)",
      color: 0x8b4513, // Saddle brown
      emissive: 0x1a0f0a, // Warm reddish glow
      specular: 0x2a2a2a, // Moderate reflectivity
      shininess: 8,
    },
    // D-type asteroids (very dark, red)
    {
      name: "D-type",
      fullName: "D-type (Dark Red)",
      color: 0x4a3429, // Dark reddish brown
      emissive: 0x0f0a08, // Very subtle glow
      specular: 0x1a1a1a, // Low reflectivity
      shininess: 3,
    },
    // P-type asteroids (very dark, primitive)
    {
      name: "P-type",
      fullName: "P-type (Primitive)",
      color: 0x3d3d3d, // Dark charcoal
      emissive: 0x080808, // Minimal glow
      specular: 0x0f0f0f, // Very low reflectivity
      shininess: 2,
    },
    // A-type asteroids (moderate albedo, reddish)
    {
      name: "A-type",
      fullName: "A-type (Moderate)",
      color: 0x8b6f47, // Olive drab
      emissive: 0x1c1610, // Subtle glow
      specular: 0x404040, // Moderate reflectivity
      shininess: 15,
    },
  ];

  // Select asteroid type (specific or random)
  let asteroidType;
  if (specificType) {
    asteroidType = asteroidColorTypes.find(
      (type) => type.name === specificType || type.fullName === specificType,
    );
    if (!asteroidType) {
      console.warn(`Unknown asteroid type: ${specificType}, using random type`);
      asteroidType =
        asteroidColorTypes[
          Math.floor(Math.random() * asteroidColorTypes.length)
        ];
    }
  } else {
    asteroidType =
      asteroidColorTypes[Math.floor(Math.random() * asteroidColorTypes.length)];
  }

  // Create material with realistic properties
  const material = new THREE.MeshPhongMaterial({
    color: asteroidType.color,
    emissive: asteroidType.emissive,
    specular: asteroidType.specular,
    shininess: asteroidType.shininess,
  });

  // Add slight color variation within the same type (±10% brightness variation)
  const variation = 0.9 + Math.random() * 0.2; // 0.9 to 1.1
  material.color.multiplyScalar(variation);

  // Store the asteroid type for later use
  material.asteroidType = asteroidType.name;

  console.log(`Created ${asteroidType.fullName} asteroid material`);
  return material;
}

// Function to clear previous asteroids and labels
function clearPreviousAsteroids() {
  // Remove asteroid meshes from scene
  asteroidSpheres.forEach((asteroid) => {
    Scene.scene.remove(asteroid);
    if (asteroid.geometry) asteroid.geometry.dispose();
    if (asteroid.material) asteroid.material.dispose();
  });

  // Remove asteroid labels from scene
  asteroidLabels.forEach((label) => {
    Scene.scene.remove(label);
    if (label.material && label.material.map) label.material.map.dispose();
    if (label.material) label.material.dispose();
  });

  // Clear arrays
  asteroidSpheres = [];
  asteroidLabels = [];
}

// Function to animate asteroids (add to your main animation loop)
function animateAsteroids(delta) {
  asteroidSpheres.forEach((asteroid) => {
    // Slow rotation for visual interest
    asteroid.rotation.x += delta * 0.5;
    asteroid.rotation.y += delta * 0.3;
    asteroid.rotation.z += delta * 0.2;
  });
}

async function plotAsteroidTrails() {
  const asteroidData = await fetchAsteroidTrails();

  // Choose a scaling factor so asteroid orbits fit your scene
  const ASTEROID_SCALE = 100; // Try 50, adjust as needed

  // Clear previous asteroid spheres and labels
  clearPreviousAsteroids();

  // Process asteroids sequentially to avoid overwhelming the loader
  for (let i = 0; i < asteroidData.length; i++) {
    const asteroid = asteroidData[i];

    // 1. Convert trail points to Vector3 and scale
    const trailPoints = asteroid.pastTrail.map(
      (pt) =>
        new THREE.Vector3(
          pt.x * ASTEROID_SCALE,
          pt.y * ASTEROID_SCALE,
          pt.z * ASTEROID_SCALE,
        ),
    );

    // 2. Create a smooth curve through the trail points
    const curve = new THREE.CatmullRomCurve3(trailPoints);
    const curvePoints = curve.getPoints(100);

    // 3. Create geometry for the curve (compatible with older Three.js)
    const positions = [];
    curvePoints.forEach((pt) => {
      positions.push(pt.x, pt.y, pt.z);
    });
    const curveGeometry = new THREE.BufferGeometry();
    curveGeometry.addAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(positions), 3),
    );

    const trailMaterial = new THREE.LineBasicMaterial({ color: 0xffa500 }); // orange
    const trailLine = new THREE.Line(curveGeometry, trailMaterial);
    Scene.scene.add(trailLine);

    // 4. Create realistic asteroid at the current position using STL models ONLY
    const { x, y, z } = asteroid.currentPosition;

    let asteroidMesh = null;
    let usedModel = null;
    let usedMaterial = null;
    let attempts = 0;
    const maxAttempts = 3;

    // Track tried models to avoid repeating failed ones
    const triedModels = new Set();

    // Retry loading STL model if it fails
    while (!asteroidMesh && attempts < maxAttempts) {
      try {
        attempts++;
        console.log(
          `Loading asteroid ${i + 1}/${asteroidData.length}: ${asteroid.name} (attempt ${attempts})`,
        );

        // Get a model we haven't tried yet
        let model;
        let modelAttempts = 0;
        do {
          model = getRandomAsteroidModel();
          modelAttempts++;
        } while (triedModels.has(model.path) && modelAttempts < 10);

        triedModels.add(model.path);
        console.log(
          `Trying model: ${model.name} for asteroid: ${asteroid.name}`,
        );

        // Create asteroid geometry with even larger size for better visibility
        const asteroidSize = 5.0 + Math.random() * 5.0; // Size between 5.0 and 10.0 (increased again)
        const asteroidGeometry = await Promise.race([
          createAsteroidGeometry(asteroidSize, model),
          new Promise((_, reject) =>
            setTimeout(
              () => reject(new Error("Geometry creation timeout")),
              10000,
            ),
          ),
        ]);

        // Use the actual model info from the geometry if available (for better tracking)
        const actualModel = asteroidGeometry.modelInfo || model;
        console.log(
          `Successfully created geometry using model: ${actualModel.name} for asteroid: ${asteroid.name}`,
        );

        const asteroidMaterial = createRealisticAsteroidMaterial();

        asteroidMesh = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
        asteroidMesh.position.set(
          x * ASTEROID_SCALE,
          y * ASTEROID_SCALE,
          z * ASTEROID_SCALE,
        );

        // Add some rotation for visual interest
        asteroidMesh.rotation.x = Math.random() * Math.PI * 2;
        asteroidMesh.rotation.y = Math.random() * Math.PI * 2;
        asteroidMesh.rotation.z = Math.random() * Math.PI * 2;

        // Make asteroid more visible by slightly increasing emissive
        asteroidMaterial.emissive.multiplyScalar(1.5);

        // Store the successful model and material for consistent sidebar use
        usedModel = actualModel;
        usedMaterial = asteroidMaterial;

        // Store asteroid data on the mesh for reference (including asteroid type for consistent materials)
        asteroidMesh.userData = {
          name: asteroid.name,
          id: asteroid.id,
          isAsteroid: true,
          modelName: usedModel.name,
          modelPath: usedModel.path,
          asteroidType: usedMaterial.asteroidType || "C-type",
          // Store additional info for perfect sidebar matching
          materialColor: usedMaterial.color.getHex(),
          materialEmissive: usedMaterial.emissive.getHex(),
          materialSpecular: usedMaterial.specular.getHex(),
          materialShininess: usedMaterial.shininess,
        };

        Scene.scene.add(asteroidMesh);
        asteroidSpheres.push(asteroidMesh); // Add to clickable asteroids array

        // 5. Create text label with asteroid name and id
        createAsteroidLabel(
          asteroid.name,
          asteroid.id,
          x * ASTEROID_SCALE,
          y * ASTEROID_SCALE,
          z * ASTEROID_SCALE,
        );

        console.log(
          `Successfully loaded asteroid ${i + 1}/${asteroidData.length}: ${asteroid.name} with STL model`,
        );
      } catch (error) {
        console.error(
          `Failed to create asteroid ${asteroid.name} (attempt ${attempts}):`,
          error,
        );
        if (attempts >= maxAttempts) {
          console.warn(
            `Creating fallback asteroid for ${asteroid.name} after ${maxAttempts} failed attempts`,
          );

          // Create a fallback asteroid using procedural geometry to ensure it's displayed
          try {
            const asteroidSize = 5.0 + Math.random() * 5.0;
            const fallbackGeometry =
              createProceduralAsteroidGeometry(asteroidSize);
            const asteroidMaterial = createRealisticAsteroidMaterial();

            asteroidMesh = new THREE.Mesh(fallbackGeometry, asteroidMaterial);
            asteroidMesh.position.set(
              x * ASTEROID_SCALE,
              y * ASTEROID_SCALE,
              z * ASTEROID_SCALE,
            );

            // Add some rotation for visual interest
            asteroidMesh.rotation.x = Math.random() * Math.PI * 2;
            asteroidMesh.rotation.y = Math.random() * Math.PI * 2;
            asteroidMesh.rotation.z = Math.random() * Math.PI * 2;

            // Store asteroid data on the mesh for reference
            asteroidMesh.userData = {
              name: asteroid.name,
              id: asteroid.id,
              isAsteroid: true,
              isFallback: true,
              modelName: "Procedural",
              modelPath: null,
              asteroidType: asteroidMaterial.asteroidType || "C-type",
              // Store material info for sidebar matching
              materialColor: asteroidMaterial.color.getHex(),
              materialEmissive: asteroidMaterial.emissive.getHex(),
              materialSpecular: asteroidMaterial.specular.getHex(),
              materialShininess: asteroidMaterial.shininess,
            };

            Scene.scene.add(asteroidMesh);
            asteroidSpheres.push(asteroidMesh);

            // Create text label
            createAsteroidLabel(
              asteroid.name,
              asteroid.id,
              x * ASTEROID_SCALE,
              y * ASTEROID_SCALE,
              z * ASTEROID_SCALE,
            );

            console.log(
              `Created fallback procedural asteroid for ${asteroid.name}`,
            );
          } catch (fallbackError) {
            console.error(
              `Even fallback failed for ${asteroid.name}:`,
              fallbackError,
            );
          }
        } else {
          // Wait a bit before retrying
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
    }
  }

  const displayedAsteroids = asteroidSpheres.length;
  const expectedAsteroids = asteroidData.length;
  console.log(
    `Finished processing ${expectedAsteroids} asteroids. Successfully displayed: ${displayedAsteroids}`,
  );

  if (displayedAsteroids < expectedAsteroids) {
    console.warn(
      `Missing ${expectedAsteroids - displayedAsteroids} asteroids. Check console for loading errors.`,
    );
  } else {
    console.log(`✅ All asteroids loaded successfully!`);
  }
}

// Function to create text labels for asteroids (now clickable and transparent)
function createAsteroidLabel(name, id, x, y, z) {
  // Create canvas for text (larger canvas for better quality)
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = 512; // Increased for better quality
  canvas.height = 256; // Increased for better quality

  // Keep background completely transparent
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Set text properties for name with strong outline for visibility
  context.fillStyle = "rgba(255, 255, 255, 1.0)";
  context.font = "bold 32px Arial"; // Larger font for better visibility
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.strokeStyle = "rgba(0, 0, 0, 0.9)";
  context.lineWidth = 4; // Thicker outline for better visibility

  // Draw asteroid name with strong stroke for better visibility against space background
  const nameText = name || "Unknown";
  context.strokeText(nameText, canvas.width / 2, canvas.height / 2 - 20);
  context.fillText(nameText, canvas.width / 2, canvas.height / 2 - 20);

  // Draw asteroid id
  context.font = "bold 22px Arial"; // Larger font for ID
  context.fillStyle = "rgba(200, 220, 255, 1.0)";
  context.lineWidth = 3; // Slightly thinner for ID text
  const idText = `ID: ${id || "N/A"}`;
  context.strokeText(idText, canvas.width / 2, canvas.height / 2 + 25);
  context.fillText(idText, canvas.width / 2, canvas.height / 2 + 25);

  // Add "Click for details" hint with subtle glow effect
  context.font = "italic 16px Arial";
  context.fillStyle = "rgba(150, 180, 255, 0.9)";
  context.strokeStyle = "rgba(0, 0, 0, 0.7)";
  context.lineWidth = 2;
  const hintText = "Click for details";
  context.strokeText(hintText, canvas.width / 2, canvas.height / 2 + 55);
  context.fillText(hintText, canvas.width / 2, canvas.height / 2 + 55);

  // Create texture from canvas
  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;

  // Create sprite material and sprite
  const spriteMaterial = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.01,
    // Note: sizeAttenuation is not available in Three.js r79
    // Labels will scale with distance but remain readable
  });
  const sprite = new THREE.Sprite(spriteMaterial);

  // Larger sprite scale for better visibility
  sprite.scale.set(70, 35, 1); // Increased size for better clickability

  // Position the sprite above the asteroid
  sprite.position.set(x, y + 15, z); // Moved higher above asteroid

  // Store asteroid data on the sprite for click detection
  sprite.userData = {
    name: name,
    id: id,
    isAsteroidLabel: true,
  };

  // Add sprite to scene and clickable labels array
  Scene.scene.add(sprite);
  asteroidLabels.push(sprite);
}

/**
 * Utils
 */
var Utils = {
  windowRatio: function () {
    return window.innerWidth / window.innerHeight;
  },
};

/**
 * Renderer
 */
var Renderer = (function () {
  var _Renderer = function () {
    var self = this;

    var paramsDefault = function () {
      return {
        webGLRenderer: {
          antialias: false,
          alpha: true,
          clearColor: COLOR_BLACK,
          canvasId: "canvas-earth",
        },
      };
    };

    var params = paramsDefault();

    this.init = function () {
      this.keepCurrentAntialias();

      // @see also THREE.CanvasRenderer()
      this.webGLRenderer = new THREE.WebGLRenderer({
        antialias: params.webGLRenderer.antialias,
        alpha: params.webGLRenderer.alpha,
      });

      this.webGLRenderer.setClearColor(params.webGLRenderer.clearColor);
      this.webGLRenderer.setPixelRatio(window.devicePixelRatio);
      this.webGLRenderer.domElement.id = params.webGLRenderer.canvasId;

      this.renderView();
    };

    this.refresh = function (antialias) {
      this.setParamAntialias(antialias);

      if (this.isAntialiasNotChanging()) {
        return;
      }

      this.keepCurrentAntialias();

      var canvasElement = document.getElementById(
        params.webGLRenderer.canvasId,
      );
      document.body.removeChild(canvasElement);
      this.init();

      Scene.activeOrbitControls();
      SceneShadow.activeWebGLRendererShadowMap();
    };

    this.setParamAntialias = function (antialias) {
      params.webGLRenderer.antialias =
        antialias || paramsDefault().webGLRenderer.antialias;
    };

    this.keepCurrentAntialias = function () {
      params.webGLRenderer.previousAntialias = params.webGLRenderer.antialias;
    };

    this.isAntialiasNotChanging = function () {
      return (
        params.webGLRenderer.antialias ===
        params.webGLRenderer.previousAntialias
      );
    };

    this.renderView = function () {
      this.view = document.body;
      this.view.appendChild(this.webGLRenderer.domElement);
      this.updateSize();
    };

    this.updateSize = function () {
      this.webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    };

    this.gui = {
      reset: function () {
        self.refresh();
      },

      add: function (gui) {
        var folderRenderer = gui.addFolder("RENDERER");

        folderRenderer
          .add(params.webGLRenderer, "antialias")
          .listen()
          .onChange(function (antialias) {
            self.refresh(antialias);
          });
      },
    };

    this.init();
  };

  return new _Renderer();
})();

/**
 * Camera
 */
var Camera = (function () {
  var _Camera = function () {
    var self = this;

    var paramsDefault = function () {
      return {
        perspectiveCamera: {
          positionX: 0,
          positionY: 0,
          positionZ: 150,
          fov: 63,
          near: 1,
          far: 8000,
        },
      };
    };

    var params = paramsDefault();

    this.init = function () {
      this.perspectiveCamera = new THREE.PerspectiveCamera(
        params.perspectiveCamera.fov,
        Utils.windowRatio(),
        params.perspectiveCamera.near,
        params.perspectiveCamera.far,
      );

      this.perspectiveCamera.position.set(
        params.perspectiveCamera.positionX,
        params.perspectiveCamera.positionY,
        params.perspectiveCamera.positionZ,
      );
    };

    this.updateAspect = function () {
      this.perspectiveCamera.aspect = Utils.windowRatio();
      this.perspectiveCamera.updateProjectionMatrix();
    };

    this.updateLookAt = function (target) {
      this.perspectiveCamera.lookAt(target);
    };

    this.gui = {
      params: {
        colors: {},
      },

      reset: function () {
        var _default = paramsDefault();

        self.perspectiveCamera.fov = _default.perspectiveCamera.fov;
        self.perspectiveCamera.near = _default.perspectiveCamera.near;
        self.perspectiveCamera.far = _default.perspectiveCamera.far;

        self.updateAspect();
      },

      add: function (gui) {
        var folderCamera = gui.addFolder("CAMERA");

        folderCamera
          .add(self.perspectiveCamera, "fov", 0, 150)
          .listen()
          .onChange(function () {
            self.updateAspect();
          });

        folderCamera
          .add(self.perspectiveCamera, "near", 0, 5)
          .listen()
          .onChange(function () {
            self.updateAspect();
          });

        folderCamera
          .add(self.perspectiveCamera, "far", 0, 10000)
          .listen()
          .onChange(function () {
            self.updateAspect();
          });

        folderCamera.add(this, "reset").name("RESET CAMERA");

        return folderCamera;
      },
    };

    this.init();
  };

  return new _Camera();
})();

/**
 * Skymap
 */
var Skymap = (function () {
  var _Skymap = function () {
    var self = this;

    var paramsDefault = function () {
      return {
        imgDef: IMAGE_HD,
        imgDefPrevious: undefined,
        cubeTextureLoader: {
          positionTag: "{pos}",
          positions: ["posx", "negx", "posy", "negy", "posz", "negz"],
          filename: {
            sd: "skymap_{pos}_512x512.jpg",
            hd: "skymap_{pos}_1024x1024.jpg",
          },
        },
      };
    };

    var params = paramsDefault();

    this.init = function () {};

    this.setParamImgDef = function (imgDef) {
      params.imgDef = imgDef || paramsDefault().imgDef;
    };

    this.setSceneBgCubeTexture = function (_scene, imgDef) {
      this.setParamImgDef(imgDef);
      if (this.doesRefreshTextureNecessary()) {
        _scene.background = this.getCubeTextureLoader();
        this.disableRefreshTexture();
      }
    };

    this.getCubeTextureLoader = function () {
      return new THREE.CubeTextureLoader()
        .setPath(ASSETS_PATH)
        .load(this.getFilenames());
    };

    this.getFilenames = function () {
      var filenames = [];

      for (var i = 0; i < params.cubeTextureLoader.positions.length; i++) {
        filenames.push(this.getFilename(params.cubeTextureLoader.positions[i]));
      }

      return filenames;
    };

    this.getFilename = function (position) {
      return params.cubeTextureLoader.filename[params.imgDef].replace(
        params.cubeTextureLoader.positionTag,
        position,
      );
    };

    this.doesRefreshTextureNecessary = function () {
      return params.imgDef !== params.imgDefPrevious;
    };

    this.disableRefreshTexture = function () {
      params.imgDefPrevious = params.imgDef;
    };

    this.gui = {
      params: {},

      reset: function () {
        var _default = paramsDefault();
        self.setSceneBgCubeTexture(Scene.scene, _default.imgDef);
      },

      add: function (gui) {
        var folderSkymap = gui.addFolder("SKYMAP");

        folderSkymap
          .add(params, "imgDef", [IMAGE_SD, IMAGE_HD])
          .listen()
          .onChange(function (imgDef) {
            self.setSceneBgCubeTexture(Scene.scene, imgDef);
          });

        folderSkymap.add(this, "reset").name("RESET SKYMAP");

        return folderSkymap;
      },
    };

    this.init();
  };

  return new _Skymap();
})();

/**
 * Cloud
 */
var Cloud = (function () {
  var _Cloud = function () {
    var self = this;

    var paramsDefault = function () {
      return {
        imgDef: IMAGE_SD,
        imgDefPrevious: undefined,
        visible: true,
        material: {
          wireframe: false,
          transparent: true,
          color: COLOR_WHITE,
          bumpScale: 0.13,
          opacity: 0.9,
          alphaMap: {
            sd: ASSETS_PATH + "earth_clouds_1024x512.jpg",
            hd: ASSETS_PATH + "earth_clouds_2048x1024.jpg",
          },
          bumpMap: {
            sd: ASSETS_PATH + "earth_clouds_1024x512.jpg",
            hd: ASSETS_PATH + "earth_clouds_2048x1024.jpg",
          },
        },
        geometry: {
          radius: 50.3,
          widthSegments: 64,
          heightSegments: 32,
        },
        animate: {
          enabled: true,
          rotationsYPerSecond: -0.0012,
        },
      };
    };

    var params = paramsDefault();

    this.init = function () {
      this.material = new THREE.MeshPhongMaterial({
        wireframe: params.material.wireframe,
        color: params.material.color,
        opacity: params.material.opacity,
        transparent: params.material.transparent,
        bumpScale: params.material.bumpScale,
      });

      this.setMaterialTextures();

      this.geometry = new THREE.SphereGeometry(
        params.geometry.radius,
        params.geometry.widthSegments,
        params.geometry.heightSegments,
      );

      this.cloudMesh = new THREE.Mesh(this.geometry, this.material);
      this.cloudMesh.visible = params.visible;
    };

    this.animate = function (delta) {
      if (params.animate.enabled) {
        this.cloudMesh.rotation.y +=
          delta * 2 * Math.PI * params.animate.rotationsYPerSecond;
      }
    };

    this.setParamImgDef = function (imgDef) {
      params.imgDef = imgDef || paramsDefault().imgDef;
    };

    this.setMaterialTextures = function (imgDef) {
      this.setParamImgDef(imgDef);

      if (this.doesRefreshTextureNecessary()) {
        this.material.alphaMap = new THREE.TextureLoader().load(
          params.material.alphaMap[params.imgDef],
        );
        this.material.bumpMap = new THREE.TextureLoader().load(
          params.material.bumpMap[params.imgDef],
        );
        this.disableRefreshTexture();
      }
    };

    this.doesRefreshTextureNecessary = function () {
      return params.imgDef !== params.imgDefPrevious;
    };

    this.disableRefreshTexture = function () {
      params.imgDefPrevious = params.imgDef;
    };

    this.gui = {
      params: {
        colors: {},
      },

      reset: function () {
        var _default = paramsDefault();

        self.cloudMesh.visible = _default.visible;

        self.material.wireframe = _default.material.wireframe;
        self.material.transparent = _default.material.transparent;
        self.material.opacity = _default.material.opacity;
        self.material.bumpScale = _default.material.bumpScale;
        self.material.color.setHex(_default.material.color);

        params.animate.enabled = _default.animate.enabled;
        params.animate.rotationsYPerSecond =
          _default.animate.rotationsYPerSecond;

        self.setMaterialTextures(_default.imgDef);

        this.resetColorsHexString();
      },

      resetColorsHexString: function () {
        this.params.colors.color = "#" + self.material.color.getHexString();
      },

      add: function (gui) {
        this.resetColorsHexString();

        var folderCloud = gui.addFolder("CLOUD");

        folderCloud.add(self.cloudMesh, "visible").listen();

        var folderMaterial = folderCloud.addFolder("Material");

        folderMaterial
          .add(params, "imgDef", [IMAGE_SD, IMAGE_HD])
          .listen()
          .onChange(function (imgDef) {
            self.setMaterialTextures(imgDef);
          });

        folderMaterial.add(self.material, "wireframe").listen();

        folderMaterial.add(self.material, "transparent").listen();

        folderMaterial.add(self.material, "opacity", 0, 1).listen();

        folderMaterial.add(self.material, "bumpScale", -1.5, 1.5).listen();

        folderMaterial
          .addColor(this.params.colors, "color")
          .listen()
          .onChange(function (color) {
            self.material.color.setHex(color.replace("#", "0x"));
          });

        var folderAnimate = folderCloud.addFolder("Animate");

        folderAnimate.add(params.animate, "enabled").listen();

        folderAnimate
          .add(params.animate, "rotationsYPerSecond", -2, 2)
          .listen();

        folderCloud.add(this, "reset").name("RESET CLOUD");

        return folderCloud;
      },
    };

    this.init();
  };

  return new _Cloud();
})();

/**
 * Earth
 */
var Earth = (function (Cloud) {
  var _Earth = function () {
    var self = this;

    var paramsDefault = function () {
      return {
        imgDef: IMAGE_SD,
        imgDefPrevious: undefined,
        visible: true,
        material: {
          wireframe: false,
          map: {
            sd: ASSETS_PATH + "earth_map_1024x512.jpg",
            hd: ASSETS_PATH + "earth_map_2048x1024.jpg",
          },
          bumpMap: {
            sd: ASSETS_PATH + "earth_bump_1024x512.jpg",
            hd: ASSETS_PATH + "earth_bump_2048x1024.jpg",
          },
          bumpScale: 0.45,
          specularMap: {
            sd: ASSETS_PATH + "earth_specular_1024x512.jpg",
            hd: ASSETS_PATH + "earth_specular_2048x1024.jpg",
          },
          specular: 0x2d4ea0,
          shininess: 6,
        },
        geometry: {
          radius: 50,
          widthSegments: 64,
          heightSegments: 32,
        },
        animate: {
          enabled: true,
          rotationsYPerSecond: 0.01,
        },
      };
    };

    var params = paramsDefault();

    this.init = function () {
      this.geometry = new THREE.SphereGeometry(
        params.geometry.radius,
        params.geometry.widthSegments,
        params.geometry.heightSegments,
      );

      this.material = new THREE.MeshPhongMaterial({
        wireframe: params.material.wireframe,
        bumpScale: params.material.bumpScale,
        specular: params.material.specular,
        shininess: params.material.shininess,
      });

      this.setMaterialTextures();

      this.earthMesh = new THREE.Mesh(this.geometry, this.material);
      this.earthMesh.visible = params.visible;

      this.earthMesh.add(Cloud.cloudMesh);
    };

    this.animate = function (delta) {
      if (params.animate.enabled) {
        this.earthMesh.rotation.y +=
          delta * 2 * Math.PI * params.animate.rotationsYPerSecond;
      }
    };

    this.setParamImgDef = function (imgDef) {
      params.imgDef = imgDef || paramsDefault().imgDef;
    };

    this.setMaterialTextures = function (imgDef) {
      this.setParamImgDef(imgDef);

      if (this.doesRefreshTextureNecessary()) {
        this.material.map = new THREE.TextureLoader().load(
          params.material.map[params.imgDef],
        );
        this.material.bumpMap = new THREE.TextureLoader().load(
          params.material.bumpMap[params.imgDef],
        );
        this.material.specularMap = new THREE.TextureLoader().load(
          params.material.specularMap[params.imgDef],
        );
        this.disableRefreshTexture();
      }
    };

    this.doesRefreshTextureNecessary = function () {
      return params.imgDef !== params.imgDefPrevious;
    };

    this.disableRefreshTexture = function () {
      params.imgDefPrevious = params.imgDef;
    };

    this.gui = {
      params: {
        colors: {},
      },

      reset: function () {
        var _default = paramsDefault();

        self.earthMesh.visible = _default.visible;

        self.material.wireframe = _default.material.wireframe;
        self.material.bumpScale = _default.material.bumpScale;
        self.material.shininess = _default.material.shininess;
        self.material.specular.setHex(_default.material.specular);

        params.animate.enabled = _default.animate.enabled;
        params.animate.rotationsYPerSecond =
          _default.animate.rotationsYPerSecond;

        self.setMaterialTextures(_default.imgDef);

        this.resetColorsHexString();
      },

      resetColorsHexString: function () {
        this.params.colors.specular =
          "#" + self.material.specular.getHexString();
      },

      add: function (gui) {
        this.resetColorsHexString();

        var folderEarth = gui.addFolder("EARTH");

        folderEarth.add(self.earthMesh, "visible").listen();

        var folderMaterial = folderEarth.addFolder("Material");

        folderMaterial
          .add(params, "imgDef", [IMAGE_SD, IMAGE_HD])
          .listen()
          .onChange(function (imgDef) {
            self.setMaterialTextures(imgDef);
          });

        folderMaterial.add(self.material, "wireframe").listen();

        folderMaterial.add(self.material, "bumpScale", -1.5, 1.5).listen();

        folderMaterial.add(self.material, "shininess", 0, 10).listen();

        folderMaterial
          .addColor(this.params.colors, "specular")
          .listen()
          .onChange(function (color) {
            self.material.specular.setHex(color.replace("#", "0x"));
          });

        var folderAnimate = folderEarth.addFolder("Animate");

        folderAnimate.add(params.animate, "enabled").listen();

        folderAnimate
          .add(params.animate, "rotationsYPerSecond", -2, 2)
          .listen();

        folderEarth.add(this, "reset").name("RESET EARTH");

        return folderEarth;
      },
    };

    this.init();
  };

  return new _Earth();
})(Cloud);

/**
 * Moon
 */
var Moon = (function (Earth) {
  var _Moon = function () {
    var self = this;

    var paramsDefault = function () {
      return {
        imgDef: IMAGE_SD,
        imgDefPrevious: undefined,
        moonMesh: {
          visible: true,
          position: {
            x: 0,
            y: 0,
            z: -100,
          },
        },
        material: {
          wireframe: false,
          map: {
            sd: ASSETS_PATH + "moon_map_512x256.jpg",
            hd: ASSETS_PATH + "moon_map_1024x512.jpg",
          },
          bumpMap: {
            sd: ASSETS_PATH + "moon_bump_512x256.jpg",
            hd: ASSETS_PATH + "moon_bump_1024x512.jpg",
          },
          bumpScale: 0.1,
          shininess: 0,
        },
        geometry: {
          radius: 10,
          widthSegments: 32,
          heightSegments: 16,
        },
        animate: {
          enabled: true,
          pivotRotationsPerSecond: 0.05,
        },
      };
    };

    var params = paramsDefault();

    this.init = function () {
      this.geometry = new THREE.SphereGeometry(
        params.geometry.radius,
        params.geometry.widthSegments,
        params.geometry.heightSegments,
      );

      this.material = new THREE.MeshPhongMaterial({
        wireframe: params.material.wireframe,
        bumpScale: params.material.bumpScale,
        shininess: params.material.shininess,
      });

      this.setMaterialTextures();

      this.moonMesh = new THREE.Mesh(this.geometry, this.material);

      this.moonMesh.position.set(
        params.moonMesh.position.x,
        params.moonMesh.position.y,
        params.moonMesh.position.z,
      );

      this.moonMesh.visible = params.moonMesh.visible;
      this.pivot = this.createPivot();
    };

    this.createPivot = function () {
      var pivot = new THREE.Object3D();
      pivot.position = Earth.earthMesh.position;
      pivot.add(this.moonMesh);

      return pivot;
    };

    this.animate = function (delta) {
      if (params.animate.enabled) {
        this.pivot.rotation.y +=
          delta * 2 * Math.PI * params.animate.pivotRotationsPerSecond;
      }
    };

    this.setParamImgDef = function (imgDef) {
      params.imgDef = imgDef || paramsDefault().imgDef;
    };

    this.setMaterialTextures = function (imgDef) {
      this.setParamImgDef(imgDef);

      if (this.doesRefreshTextureNecessary()) {
        this.material.map = new THREE.TextureLoader().load(
          params.material.map[params.imgDef],
        );
        this.material.bumpMap = new THREE.TextureLoader().load(
          params.material.bumpMap[params.imgDef],
        );
        this.disableRefreshTexture();
      }
    };

    this.doesRefreshTextureNecessary = function () {
      return params.imgDef !== params.imgDefPrevious;
    };

    this.disableRefreshTexture = function () {
      params.imgDefPrevious = params.imgDef;
    };

    this.gui = {
      params: {
        colors: {},
      },

      reset: function () {
        var _default = paramsDefault();

        self.moonMesh.visible = _default.moonMesh.visible;

        self.material.wireframe = _default.material.wireframe;
        self.material.bumpScale = _default.material.bumpScale;
        self.material.shininess = _default.material.shininess;

        self.moonMesh.position.x = _default.moonMesh.position.x;
        self.moonMesh.position.y = _default.moonMesh.position.y;
        self.moonMesh.position.z = _default.moonMesh.position.z;

        params.animate.enabled = _default.animate.enabled;
        params.animate.pivotRotationsPerSecond =
          _default.animate.pivotRotationsPerSecond;

        self.setMaterialTextures(_default.imgDef);
      },

      add: function (gui) {
        var folderMoon = gui.addFolder("MOON");

        folderMoon.add(self.moonMesh, "visible").listen();

        var folderPosition = folderMoon.addFolder("Position");

        folderPosition.add(self.moonMesh.position, "x", -100, 100).listen();

        folderPosition.add(self.moonMesh.position, "y", -100, 100).listen();

        folderPosition.add(self.moonMesh.position, "z", -100, 100).listen();

        var folderMaterial = folderMoon.addFolder("Material");

        folderMaterial
          .add(params, "imgDef", [IMAGE_SD, IMAGE_HD])
          .listen()
          .onChange(function (imgDef) {
            self.setMaterialTextures(imgDef);
          });

        folderMaterial.add(self.material, "wireframe").listen();

        folderMaterial.add(self.material, "bumpScale", -1.5, 1.5).listen();

        folderMaterial.add(self.material, "shininess", 0, 10).listen();

        var folderAnimate = folderMoon.addFolder("Animate");

        folderAnimate.add(params.animate, "enabled").listen();

        folderAnimate
          .add(params.animate, "pivotRotationsPerSecond", -2, 2)
          .listen();

        folderMoon.add(this, "reset").name("RESET MOON");

        return folderMoon;
      },
    };

    this.init();
  };

  return new _Moon();
})(Earth);

/**
 * Sun
 */
var Sun = (function () {
  var _Sun = function () {
    var self = this;

    var paramsDefault = function () {
      return {
        imgDef: IMAGE_HD,
        imgDefPrevious: undefined,
        sunLight: {
          visible: true,
          color: COLOR_WHITE,
          intensity: 1.3,
          position: {
            x: -380,
            y: 240,
            z: -1000,
          },
        },
        sunLensFlare: {
          textures: {
            sun: {
              sd: ASSETS_PATH + "lens_flare_sun_512x512.jpg",
              hd: ASSETS_PATH + "lens_flare_sun_1024x1024.jpg",
            },
            circle: {
              sd: ASSETS_PATH + "lens_flare_circle_32x32.jpg",
              hd: ASSETS_PATH + "lens_flare_circle_64x64.jpg",
            },
            hexagon: {
              sd: ASSETS_PATH + "lens_flare_hexagon_128x128.jpg",
              hd: ASSETS_PATH + "lens_flare_hexagon_256x256.jpg",
            },
          },
          flareCircleSizeMax: 70,
          lensFlares: [
            {
              size: 1400,
              opacity: 1,
              distance: 0,
            },
            {
              size: 20,
              opacity: 0.4,
              distance: 0.63,
            },
            {
              size: 40,
              opacity: 0.3,
              distance: 0.64,
            },
            {
              size: 70,
              opacity: 0.8,
              distance: 0.7,
            },
            {
              size: 110,
              opacity: 0.7,
              distance: 0.8,
            },
            {
              size: 60,
              opacity: 0.4,
              distance: 0.85,
            },
            {
              size: 30,
              opacity: 0.4,
              distance: 0.86,
            },
            {
              size: 120,
              opacity: 0.3,
              distance: 0.9,
            },
            {
              size: 260,
              opacity: 0.4,
              distance: 1,
            },
          ],
        },
      };
    };

    var params = paramsDefault();

    this.init = function () {
      this.textureLoader = new THREE.TextureLoader();
      this.sunLight = new THREE.DirectionalLight(
        params.sunLight.color,
        params.sunLight.intensity,
      );

      this.sunLight.position.set(
        params.sunLight.position.x,
        params.sunLight.position.y,
        params.sunLight.position.z,
      );

      this.sunLight.visible = params.sunLight.visible;

      this.createLensFlare();
      this.disableRefreshTexture();
    };

    this.setParamImgDef = function (imgDef) {
      params.imgDef = imgDef || paramsDefault().imgDef;
    };

    this.createLensFlare = function () {
      this.sunLensFlare = this.getSunLensFlare();
      this.sunLight.add(this.sunLensFlare);
    };

    this.getSunLensFlare = function () {
      this.loadLensFlareTextures();

      var sunLensFlare = new THREE.LensFlare(
        this.getTextureByIndex(0),
        params.sunLensFlare.lensFlares[0].size,
        params.sunLensFlare.lensFlares[0].distance,
        THREE.AdditiveBlending,
      );

      return this.addLensFlareSunCirclesAndHexagons(sunLensFlare);
    };

    this.addLensFlareSunCirclesAndHexagons = function (sunLensFlare) {
      for (var i = 1; i < params.sunLensFlare.lensFlares.length; i++) {
        sunLensFlare.add(
          this.getTextureByIndex(i),
          params.sunLensFlare.lensFlares[i].size,
          params.sunLensFlare.lensFlares[i].distance,
          THREE.AdditiveBlending,
        );
      }

      return sunLensFlare;
    };

    this.getTextureByIndex = function (index) {
      if (0 === index) {
        return this.textureFlareSun;
      }
      return params.sunLensFlare.lensFlares[index].size <
        params.sunLensFlare.flareCircleSizeMax
        ? this.textureFlareCircle
        : this.textureFlareHexagon;
    };

    this.loadLensFlareTextures = function () {
      this.textureFlareSun = this.textureLoader.load(
        params.sunLensFlare.textures.sun[params.imgDef],
      );
      this.textureFlareCircle = this.textureLoader.load(
        params.sunLensFlare.textures.circle[params.imgDef],
      );
      this.textureFlareHexagon = this.textureLoader.load(
        params.sunLensFlare.textures.hexagon[params.imgDef],
      );
    };

    this.refreshTextures = function (imgDef) {
      this.setParamImgDef(imgDef);

      if (this.doesRefreshTextureNecessary()) {
        this.loadLensFlareTextures();

        for (var i = 0; i < params.sunLensFlare.lensFlares.length; i++) {
          this.sunLensFlare.lensFlares[i].texture = this.getTextureByIndex(i);
        }

        this.disableRefreshTexture();
      }
    };

    this.doesRefreshTextureNecessary = function () {
      return params.imgDef !== params.imgDefPrevious;
    };

    this.disableRefreshTexture = function () {
      params.imgDefPrevious = params.imgDef;
    };

    this.gui = {
      params: {
        colors: {},
      },

      reset: function () {
        var _default = paramsDefault();

        self.sunLight.visible = _default.sunLight.visible;
        self.sunLight.intensity = _default.sunLight.intensity;
        self.sunLight.color.setHex(_default.sunLight.color);

        self.sunLight.position.x = _default.sunLight.position.x;
        self.sunLight.position.y = _default.sunLight.position.y;
        self.sunLight.position.z = _default.sunLight.position.z;

        for (var i = 0; i < params.sunLensFlare.lensFlares.length; i++) {
          self.sunLensFlare.lensFlares[i].size =
            _default.sunLensFlare.lensFlares[i].size;
          self.sunLensFlare.lensFlares[i].opacity =
            _default.sunLensFlare.lensFlares[i].opacity;
          self.sunLensFlare.lensFlares[i].distance =
            _default.sunLensFlare.lensFlares[i].distance;
        }

        this.resetColorsHexString();

        self.refreshTextures();
      },

      resetColorsHexString: function () {
        this.params.colors.color = "#" + self.sunLight.color.getHexString();
      },

      add: function (gui) {
        this.resetColorsHexString();

        var folderSun = gui.addFolder("SUN");

        folderSun.add(self.sunLight, "visible").listen();

        var folderLight = folderSun.addFolder("Light");

        folderLight.add(self.sunLight, "intensity", 0, 10).listen();

        folderLight
          .addColor(this.params.colors, "color")
          .listen()
          .onChange(function (color) {
            self.sunLight.color.setHex(color.replace("#", "0x"));
          });

        var folderPosition = folderSun.addFolder("Position");

        folderPosition.add(self.sunLight.position, "x", -2000, 2000).listen();

        folderPosition.add(self.sunLight.position, "y", -2000, 2000).listen();

        folderPosition.add(self.sunLight.position, "z", -2000, 2000).listen();

        var folderLensFlares = folderSun.addFolder("LensFlares");

        folderLensFlares
          .add(params, "imgDef", [IMAGE_SD, IMAGE_HD])
          .listen()
          .onChange(function (imgDef) {
            self.refreshTextures(imgDef);
          });

        for (var i = 0; i < self.sunLensFlare.lensFlares.length; i++) {
          folderLensFlares
            .add(self.sunLensFlare.lensFlares[i], "size", 0, 2000)
            .name(i + ". size")
            .listen();

          folderLensFlares
            .add(self.sunLensFlare.lensFlares[i], "opacity", 0, 1)
            .name(i + ". opacity")
            .listen();

          folderLensFlares
            .add(self.sunLensFlare.lensFlares[i], "distance", -1, 1)
            .name(i + ". distance")
            .listen();
        }

        folderSun.add(this, "reset").name("RESET SUN");

        return folderSun;
      },
    };

    this.init();
  };

  return new _Sun();
})();

/**
 * Scene
 */
var Scene = (function () {
  var _Scene = function () {
    var self = this;

    var paramsDefault = function () {
      return {
        orbitControls: {
          autoRotate: true,
          autoRotateSpeed: 0.02,
        },
      };
    };

    var params = paramsDefault();

    this.init = function () {
      this.scene = new THREE.Scene();
      this.scene.add(Earth.earthMesh);
      this.scene.add(Moon.pivot);
      this.scene.add(Sun.sunLight);

      Skymap.setSceneBgCubeTexture(this.scene);

      this.activeOrbitControls();
    };

    this.activeOrbitControls = function () {
      this.orbitControls = new THREE.OrbitControls(
        Camera.perspectiveCamera,
        Renderer.webGLRenderer.domElement,
      );

      this.applyParamsOrbitControlsAutoRotate();
      this.applyParamsOrbitControlsAutoRotateSpeed();

      this.orbitControls.enableDamping = true;
    };

    this.applyParamsOrbitControlsAutoRotate = function () {
      this.orbitControls.autoRotate = params.orbitControls.autoRotate;
    };

    this.applyParamsOrbitControlsAutoRotateSpeed = function () {
      this.orbitControls.autoRotateSpeed = params.orbitControls.autoRotateSpeed;
    };

    this.refreshOrbitControls = function () {
      this.activeOrbitControls();
      this.gui.reset();
    };

    this.gui = {
      params: {
        colors: {},
      },

      reset: function () {
        var _default = paramsDefault();

        params.orbitControls.autoRotate = _default.orbitControls.autoRotate;
        params.orbitControls.autoRotateSpeed =
          _default.orbitControls.autoRotateSpeed;

        self.applyParamsOrbitControlsAutoRotate();
        self.applyParamsOrbitControlsAutoRotateSpeed();
      },

      add: function (gui) {
        var folderOrbitControls = gui.addFolder("ORBIT CONTROLS");

        folderOrbitControls
          .add(params.orbitControls, "autoRotate")
          .listen()
          .onChange(function (value) {
            self.applyParamsOrbitControlsAutoRotate();
          });

        folderOrbitControls
          .add(params.orbitControls, "autoRotateSpeed", -1, 1)
          .listen()
          .onChange(function (value) {
            self.applyParamsOrbitControlsAutoRotateSpeed();
          });

        folderOrbitControls.add(this, "reset").name("RESET CONTR.");

        return folderOrbitControls;
      },
    };

    this.init();
  };

  return new _Scene();
})();

/**
 * SceneShadow
 */
var SceneShadow = (function (Scene) {
  var _SceneShadow = function () {
    var self = this;

    var paramsDefault = function () {
      return {
        cameraHelper: {
          visible: false,
        },
        shadow: {
          castShadow: true,
          camera: {
            near: 950,
            far: 1250,
            right: 150,
            left: -150,
            top: 150,
            bottom: -150,
          },
          mapSize: {
            width: 512,
            height: 512,
          },
          bias: 0,
        },
      };
    };

    var params = paramsDefault();

    this.init = function () {
      this.setShadowConfiguration();
    };

    this.setShadowConfiguration = function () {
      this.cameraHelper = new THREE.CameraHelper(Sun.sunLight.shadow.camera);
      Scene.scene.add(this.cameraHelper);
      this.cameraHelper.visible = params.cameraHelper.visible;

      Sun.sunLight.castShadow = params.shadow.castShadow;
      Sun.sunLight.shadow.camera.near = params.shadow.camera.near;
      Sun.sunLight.shadow.camera.far = params.shadow.camera.far;
      Sun.sunLight.shadow.mapSize.width = params.shadow.mapSize.width;
      Sun.sunLight.shadow.mapSize.height = params.shadow.mapSize.height;
      Sun.sunLight.shadow.bias = params.shadow.bias;

      Sun.sunLight.shadow.camera.right = params.shadow.camera.right;
      Sun.sunLight.shadow.camera.left = params.shadow.camera.left;
      Sun.sunLight.shadow.camera.top = params.shadow.camera.top;
      Sun.sunLight.shadow.camera.bottom = params.shadow.camera.bottom;

      Earth.earthMesh.castShadow = true;
      Earth.earthMesh.receiveShadow = true;

      Cloud.cloudMesh.receiveShadow = true;

      Moon.moonMesh.castShadow = true;
      Moon.moonMesh.receiveShadow = true;

      this.activeWebGLRendererShadowMap();

      this.updateShadow();
    };

    this.activeWebGLRendererShadowMap = function () {
      Renderer.webGLRenderer.shadowMap.enabled = true;
      Renderer.webGLRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
      Renderer.webGLRenderer.shadowMapSoft = true;
    };

    this.updateShadow = function () {
      Sun.sunLight.shadow.camera.updateProjectionMatrix();
      this.cameraHelper.update();
    };

    this.gui = {
      params: {
        colors: {},
      },

      reset: function () {
        var _default = paramsDefault();

        //self.cameraHelper.visible = _default.cameraHelper.visible;

        Sun.sunLight.castShadow = _default.shadow.castShadow;
        Sun.sunLight.shadow.camera.near = _default.shadow.camera.near;
        Sun.sunLight.shadow.camera.far = _default.shadow.camera.far;
        Sun.sunLight.shadow.mapSize.width = _default.shadow.mapSize.width;
        Sun.sunLight.shadow.mapSize.height = _default.shadow.mapSize.height;
        Sun.sunLight.shadow.bias = _default.shadow.bias;

        Sun.sunLight.shadow.camera.right = _default.shadow.camera.right;
        Sun.sunLight.shadow.camera.left = _default.shadow.camera.left;
        Sun.sunLight.shadow.camera.top = _default.shadow.camera.top;
        Sun.sunLight.shadow.camera.bottom = _default.shadow.camera.bottom;

        self.updateShadow();
      },

      add: function (gui) {
        var folderShadow = gui.addFolder("SHADOW");

        folderShadow
          .add(self.cameraHelper, "visible")
          .name("cameraHelper")
          .listen();

        folderShadow.add(Sun.sunLight, "castShadow").listen();

        folderShadow
          .add(Sun.sunLight.shadow.camera, "near")
          .step(10)
          .listen()
          .onChange(function () {
            self.updateShadow();
          });

        folderShadow
          .add(Sun.sunLight.shadow.camera, "far")
          .step(10)
          .listen()
          .onChange(function () {
            self.updateShadow();
          });

        folderShadow
          .add(Sun.sunLight.shadow.mapSize, "width", 0, 2048)
          .listen();

        folderShadow
          .add(Sun.sunLight.shadow.mapSize, "height", 0, 2048)
          .listen();

        folderShadow
          .add(Sun.sunLight.shadow, "bias", 0, 0.4)
          .step(0.001)
          .listen()
          .onChange(function () {
            self.updateShadow();
          });

        folderShadow
          .add(Sun.sunLight.shadow.camera, "right")
          .step(10)
          .listen()
          .onChange(function () {
            self.updateShadow();
          });

        folderShadow
          .add(Sun.sunLight.shadow.camera, "left")
          .step(10)
          .listen()
          .onChange(function () {
            self.updateShadow();
          });

        folderShadow
          .add(Sun.sunLight.shadow.camera, "top")
          .step(10)
          .listen()
          .onChange(function () {
            self.updateShadow();
          });

        folderShadow
          .add(Sun.sunLight.shadow.camera, "bottom")
          .step(10)
          .listen()
          .onChange(function () {
            self.updateShadow();
          });

        folderShadow.add(this, "reset").name("RESET SHADOW");

        return folderShadow;
      },
    };

    this.init();
  };

  return new _SceneShadow();
})(Scene);

/**
 * View
 */
var View = (function () {
  var self = this,
    clock,
    delta;

  var params = {
    imgDef: DEFAULT,
    helpClassname: "help",
  };

  var _View = function () {
    this.init = function () {
      clock = new THREE.Clock();

      this.updateAll();
      this.addGui();
      this.help();

      animate();

      plotAsteroidTrails(); // <--- Add here

      // Add click event listener
      window.addEventListener("click", onMouseClick, false);
      window.addEventListener("mousemove", onMouseMove, false);
      window.addEventListener("resize", this.updateAll, false);
    };

    this.addGui = function () {
      var gui = new dat.GUI();

      Scene.gui.add(gui);
      Camera.gui.add(gui);
      Skymap.gui.add(gui);
      Sun.gui.add(gui);
      folderEarth = Earth.gui.add(gui);
      Cloud.gui.add(folderEarth);
      Moon.gui.add(gui);
      SceneShadow.gui.add(gui);
      Renderer.gui.add(gui);

      gui
        .add(params, "imgDef", [DEFAULT, IMAGE_SD, IMAGE_HD])
        .name("IMG DEF ALL")
        .listen()
        .onChange(function (imgDef) {
          imgDef = DEFAULT === imgDef ? undefined : imgDef;

          Sun.refreshTextures(imgDef);
          Skymap.setSceneBgCubeTexture(Scene.scene, imgDef);
          Earth.setMaterialTextures(imgDef);
          Cloud.setMaterialTextures(imgDef);
          Moon.setMaterialTextures(imgDef);
        });

      gui.add(this, "resetAll").name("RESET ALL");
      gui.add(this, "help").name("(?) HELP");
    };

    this.resetAll = function () {
      params.imgDef = DEFAULT;

      Renderer.gui.reset();
      Scene.gui.reset();
      Camera.gui.reset();
      Skymap.gui.reset();
      Sun.gui.reset();
      Earth.gui.reset();
      Cloud.gui.reset();
      Moon.gui.reset();
      SceneShadow.gui.reset();
    };

    this.updateAll = function () {
      Camera.updateAspect();
      Renderer.updateSize();
    };

    this.help = function () {
      var helpElementStyle = document.getElementsByClassName(
        params.helpClassname,
      )[0].style;
      helpElementStyle.display = this.helpHideToggle(helpElementStyle.display);
    };

    this.helpHideToggle = function (value) {
      return "none" === value ? "block" : "none";
    };

    var animate = function () {
      requestAnimationFrame(animate);

      delta = clock.getDelta();

      Earth.animate(delta);
      Cloud.animate(delta);
      Moon.animate(delta);

      // Animate asteroids
      animateAsteroids(delta);

      Scene.orbitControls.update();
      Renderer.webGLRenderer.render(Scene.scene, Camera.perspectiveCamera);
    };

    this.init();
  };

  return new _View();
})();
