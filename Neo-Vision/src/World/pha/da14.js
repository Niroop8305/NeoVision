import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

const textureLoader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(20, 0);
const da14_texture = textureLoader.load(
  "/src/World/assets/textures/pha/pha.jpg"
);
const material = new THREE.MeshPhongMaterial({
  map: da14_texture,
});

const direction = new THREE.Vector3(
  Math.random() * 2 - 1,
  Math.random() * 2 - 1,
  Math.random() * 2 - 1
).normalize();

// Create the asteroid mesh
function createda14() {
  const da14 = new THREE.Mesh(geometry, material);

  da14.position.set(1204, -1036, 608); // Set randomized position

  const speed = 0.001 * 0.2;

  // Animate the asteroid
  function animate() {
    requestAnimationFrame(animate);
    da14.position.add(direction.clone().multiplyScalar(speed)); // Clone direction for safe use
  }

  animate();

  return da14;
}

function createda14direction(da14) {
  const startPosition = da14.position.clone(); // Clone the initial position of da14

  // Line Material and Geometry
  const lineMaterial = new THREE.LineBasicMaterial({ color: "#fc1303" });
  const lineGeometry = new THREE.BufferGeometry().setFromPoints([
    startPosition, // Starting point is fixed at da14's initial position
    startPosition.clone().add(direction.clone().multiplyScalar(500)), // Initial endpoint, scaled
  ]);
  const directionLine = new THREE.Line(lineGeometry, lineMaterial);

  const speed = 1;

  // Animate the asteroid and update the line
  function animate() {
    requestAnimationFrame(animate);

    // Move the asteroid
    da14.position.add(direction.clone().multiplyScalar(speed));

    // Update the endpoint of the line to scale with the asteroid's movement
    const points = [
      startPosition, // Fixed starting point
      da14.position.clone(), // Moving endpoint (current position of da14)
    ];

    directionLine.geometry.setFromPoints(points); // Update the line geometry
  }

  animate();

  return directionLine;
}

export { createda14, createda14direction };
