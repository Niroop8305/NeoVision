import { OrbitControls } from "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  controls.enableDamping = true;

  // restricting zoom in and zoom out
  controls.minDistance = 0;
  controls.maxDistance = 38000000000000000000000000;

  return controls;
}

export { createControls };
