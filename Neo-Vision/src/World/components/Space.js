import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

const textureLoader = new THREE.TextureLoader();

function createSpace() {
  const geometry = new THREE.SphereGeometry(3500, 32, 32);
  const space_texture = textureLoader.load(
    "/src/World/assets/textures/space/starmap_g16k.jpg"
  );

  const material = new THREE.MeshBasicMaterial({
    map: space_texture,
    side: THREE.BackSide,
  });

  const space = new THREE.Mesh(geometry, material);

  return space;
}

export { createSpace };
