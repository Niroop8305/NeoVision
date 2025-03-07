import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

const textureLoader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(20, 0);
const sd1_texture = textureLoader.load(
  "/src/World/assets/textures/astroids/astroid.jpg"
);
const material = new THREE.MeshPhongMaterial({
  map: sd1_texture,
});

const direction = new THREE.Vector3(
  Math.random() * 2 - 1,
  Math.random() * 2 - 1,
  Math.random() * 2 - 1
).normalize();

// Create the asteroid mesh
function createsd1() {
  const sd1 = new THREE.Mesh(geometry, material);

  sd1.position.set(1098, 1647, 1037); // Set randomized position

  const speed = 0.001 * 0.2;

  // Animate the asteroid
  function animate() {
    requestAnimationFrame(animate);
    sd1.position.add(direction.clone().multiplyScalar(speed)); // Clone direction for safe use
  }

  animate();

  return sd1;
}

function createsd1direction(sd1) {
  const startPosition = sd1.position.clone(); // Clone the initial position of sd1

  // Line Material and Geometry
  const lineMaterial = new THREE.LineBasicMaterial({ color: "#73694c" });
  const lineGeometry = new THREE.BufferGeometry().setFromPoints([
    startPosition, // Starting point is fixed at sd1's initial position
    startPosition.clone().add(direction.clone().multiplyScalar(500)), // Initial endpoint, scaled
  ]);
  const directionLine = new THREE.Line(lineGeometry, lineMaterial);

  const speed = 1;

  // Animate the asteroid and update the line
  function animate() {
    requestAnimationFrame(animate);

    // Move the asteroid
    sd1.position.add(direction.clone().multiplyScalar(speed));

    // Update the endpoint of the line to scale with the asteroid's movement
    const points = [
      startPosition, // Fixed starting point
      sd1.position.clone(), // Moving endpoint (current position of sd1)
    ];

    directionLine.geometry.setFromPoints(points); // Update the line geometry
  }

  animate();

  return directionLine;
}

export { createsd1, createsd1direction };
