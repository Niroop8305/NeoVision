import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

const textureLoader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(20, 0);
const sb1_texture = textureLoader.load(
  "/src/World/assets/textures/astroids/astroid.jpg"
);
const material = new THREE.MeshPhongMaterial({
  map: sb1_texture,
});

const direction = new THREE.Vector3(
  Math.random() * 2 - 1,
  Math.random() * 2 - 1,
  Math.random() * 2 - 1
).normalize();

// Create the asteroid mesh
function createsb1() {
  const sb1 = new THREE.Mesh(geometry, material);

  sb1.position.set(1604, -1636, 608); // Set randomized position

  const speed = 0.001 * 0.2;

  // Animate the asteroid
  function animate() {
    requestAnimationFrame(animate);
    sb1.position.add(direction.clone().multiplyScalar(speed)); // Clone direction for safe use
  }

  animate();

  return sb1;
}

function createsb1direction(sb1) {
  const startPosition = sb1.position.clone(); // Clone the initial position of sb1

  // Line Material and Geometry
  const lineMaterial = new THREE.LineBasicMaterial({ color: "#73694c" });
  const lineGeometry = new THREE.BufferGeometry().setFromPoints([
    startPosition, // Starting point is fixed at sb1's initial position
    startPosition.clone().add(direction.clone().multiplyScalar(500)), // Initial endpoint, scaled
  ]);
  const directionLine = new THREE.Line(lineGeometry, lineMaterial);

  const speed = 1;

  // Animate the asteroid and update the line
  function animate() {
    requestAnimationFrame(animate);

    // Move the asteroid
    sb1.position.add(direction.clone().multiplyScalar(speed));

    // Update the endpoint of the line to scale with the asteroid's movement
    const points = [
      startPosition, // Fixed starting point
      sb1.position.clone(), // Moving endpoint (current position of sb1)
    ];

    directionLine.geometry.setFromPoints(points); // Update the line geometry
  }

  animate();

  return directionLine;
}

export { createsb1, createsb1direction };
