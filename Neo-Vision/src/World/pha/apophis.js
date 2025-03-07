import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

const textureLoader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(20, 0);
const apophis_texture = textureLoader.load(
  "/src/World/assets/textures/pha/pha.jpg"
);
const material = new THREE.MeshPhongMaterial({
  map: apophis_texture,
});

const direction = new THREE.Vector3(
  Math.random() * 2 - 1,
  Math.random() * 2 - 1,
  Math.random() * 2 - 1
).normalize();

// Create the asteroid mesh
function createapophis() {
  const apophis = new THREE.Mesh(geometry, material);

  apophis.position.set(904, 436, 808); // Set randomized position

  const speed = 0.001 * 0.2;

  // Animate the asteroid
  function animate() {
    requestAnimationFrame(animate);
    apophis.position.add(direction.clone().multiplyScalar(speed)); // Clone direction for safe use
  }

  animate();

  return apophis;
}

function createapophisdirection(apophis) {
  const startPosition = apophis.position.clone(); // Clone the initial position of apophis

  // Line Material and Geometry
  const lineMaterial = new THREE.LineBasicMaterial({ color: "#fc1303" });
  const lineGeometry = new THREE.BufferGeometry().setFromPoints([
    startPosition, // Starting point is fixed at apophis's initial position
    startPosition.clone().add(direction.clone().multiplyScalar(500)), // Initial endpoint, scaled
  ]);
  const directionLine = new THREE.Line(lineGeometry, lineMaterial);

  const speed = 1;

  // Animate the asteroid and update the line
  function animate() {
    requestAnimationFrame(animate);

    // Move the asteroid
    apophis.position.add(direction.clone().multiplyScalar(speed));

    // Update the endpoint of the line to scale with the asteroid's movement
    const points = [
      startPosition, // Fixed starting point
      apophis.position.clone(), // Moving endpoint (current position of apophis)
    ];

    directionLine.geometry.setFromPoints(points); // Update the line geometry
  }

  animate();

  return directionLine;
}

export { createapophis, createapophisdirection };
