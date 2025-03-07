import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

const textureLoader = new THREE.TextureLoader();

function createMoon() {
  const geometry = new THREE.SphereGeometry(60.83, 32, 32);
  const moon_texture = textureLoader.load(
    "/src/World/assets/textures/moon/moon_texture.jpg"
  );

  const material = new THREE.MeshPhongMaterial({
    map: moon_texture,
  });

  const moon = new THREE.Mesh(geometry, material);
  moon.position.set(850, 0, 0); // initial position of the moon
  moon.rotation.y = Math.PI / 2;

  // Create a pivot to hold the moon
  const pivot = new THREE.Object3D();
  pivot.add(moon); // Add moon to pivot

  pivot.tick = (delta) => {
    // Rotate the moon on its axis
    moon.rotation.y += (1 / 27.3) * delta;

    // Rotate the pivot around the center of the scene (revolution)
    pivot.rotation.y += (1 / 2) * delta; // adjust this to control revolution speed
  };

  return pivot;
}

function createMoonOrbit(radius = 850, segments = 64) {
  const orbitGeometry = new THREE.BufferGeometry();
  const points = [];

  // Create points around a circle for the orbit
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(
      new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
    );
  }

  orbitGeometry.setFromPoints(points);

  // Create a line to represent the orbit path
  const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
  const orbit = new THREE.Line(orbitGeometry, orbitMaterial);

  return orbit;
}

export { createMoon, createMoonOrbit };
