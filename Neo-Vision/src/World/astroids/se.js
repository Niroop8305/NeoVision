import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

const textureLoader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(20, 0);
const se_texture = textureLoader.load(
  "/src/World/assets/textures/astroids/astroid.jpg"
);
const material = new THREE.MeshPhongMaterial({
  map: se_texture,
});

const direction = new THREE.Vector3(
  Math.random() * 2 - 1,
  Math.random() * 2 - 1,
  Math.random() * 2 - 1
).normalize();

// Create the asteroid mesh
function createse() {
  const se = new THREE.Mesh(geometry, material);

  se.position.set(1913, 2061, -1768); // Set randomized position

  const speed = 0.001 * 0.2;
  // Animate the asteroid
  function animate() {
    requestAnimationFrame(animate);
    se.position.add(direction.clone().multiplyScalar(speed)); // Clone direction for safe use
  }

  animate();

  return se;
}

export { createse };

function createsedirection(se) {
  const startPosition = se.position.clone(); // Clone the initial position of se

  // Line Material and Geometry
  const lineMaterial = new THREE.LineBasicMaterial({ color: "#73694c" });
  const lineGeometry = new THREE.BufferGeometry().setFromPoints([
    startPosition, // Starting point is fixed at se's initial position
    startPosition.clone().add(direction.clone().multiplyScalar(500)), // Initial endpoint, scaled
  ]);
  const directionLine = new THREE.Line(lineGeometry, lineMaterial);

  const speed = 1;

  // Animate the asteroid and update the line
  function animate() {
    requestAnimationFrame(animate);

    // Move the asteroid
    se.position.add(direction.clone().multiplyScalar(speed));

    // Update the endpoint of the line to scale with the asteroid's movement
    const points = [
      startPosition, // Fixed starting point
      se.position.clone(), // Moving endpoint (current position of se)
    ];

    directionLine.geometry.setFromPoints(points); // Update the line geometry
  }

  animate();

  return directionLine;
}

export { createsedirection };
