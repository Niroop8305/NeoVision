import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

const textureLoader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(20, 0);
const lovejoyhalley_texture = textureLoader.load(
  "/src/World/assets/textures/comets/comet.jpg"
);
const material = new THREE.MeshPhongMaterial({
  map: lovejoyhalley_texture,
});

// Parameters for the elliptical orbit
const semiMajorAxis = 5000; // Adjust for the size of the orbit (a)
const semiMinorAxis = 4500; // Adjust for the size of the orbit (b)
const zAxisScale = 3; // Adjust for the z-axis scale (c)
const speed = 0.0001; // Speed at which the asteroid moves (smaller values make it slower)

// Calculate the focus distance for the ellipse
const focusDistance = Math.sqrt(semiMajorAxis ** 2 - semiMinorAxis ** 2); // Distance of focus from the center

// Focus of the ellipse (Earth's position near the axis)
const focus = new THREE.Vector3(40, 800, 60); // Earth positioned at (0,0,0)

// Create the asteroid mesh
function createlovejoy() {
  const lovejoy = new THREE.Mesh(geometry, material);

  // Set initial position for the asteroid, start at one end of the ellipse
  lovejoy.position.copy(new THREE.Vector3(semiMajorAxis - focusDistance, 0, 0)); // Start at (a - f, 0, 0)

  return lovejoy;
}

export { createlovejoy };

// Function to calculate the elliptical orbit path with focus offset
function calculateEllipse(t) {
  // Parametric equation for an ellipse with focus offset
  const x = (semiMajorAxis - focusDistance) * Math.cos(t); // Shift along the x-axis by the focus distance
  const y = semiMinorAxis * Math.sin(t);
  const z = zAxisScale * semiMinorAxis * Math.sin(t); // Skew in the z-axis if needed

  return new THREE.Vector3(x, y, z);
}

// Create an elliptical orbit for the asteroid and visualize the path
function createlovejoydirection(lovejoy) {
  const pathPoints = []; // Array to store points for the path
  const pathLength = 5000; // Define the length of the elliptical path
  let t = 0; // Parameter for interpolation

  const lineMaterial = new THREE.LineBasicMaterial({ color: "green" }); // Red color for visibility
  const lineGeometry = new THREE.BufferGeometry();
  const ellipticalPath = new THREE.Line(lineGeometry, lineMaterial);

  // Animate the asteroid along an elliptical orbit
  function animate() {
    requestAnimationFrame(animate);

    // Increment 't' to move along the ellipse
    t += speed; // Adjust t for speed

    // Get the new position along the ellipse
    const newPosition = calculateEllipse(t);
    lovejoy.position.copy(newPosition);

    // Update the path points as the asteroid moves
    pathPoints.push(newPosition.clone());

    // Limit the number of path points for performance
    if (pathPoints.length > pathLength) {
      pathPoints.shift(); // Remove the oldest point to keep the path manageable
    }

    // Update the line geometry to reflect the new path points
    lineGeometry.setFromPoints(pathPoints);
  }

  animate();

  return ellipticalPath; // Return the line object representing the path
}

export { createlovejoydirection };
