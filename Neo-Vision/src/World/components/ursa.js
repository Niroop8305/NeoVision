import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

const textureLoader = new THREE.TextureLoader();

function createUrsa() {
  const geometry = new THREE.PlaneGeometry(600, 600);
  const ursa_texture = textureLoader.load(
    "/src/World/assets/textures/consteliations/ursa.jpg"
  );

  const material = new THREE.MeshPhongMaterial({
    map: ursa_texture,
  });

  const ursa = new THREE.Mesh(geometry, material);
  ursa.position.set(-197.645, 49.525, 1679.225);
  ursa.rotation.y = 2.95;

  return ursa;
}

export { createUrsa };
