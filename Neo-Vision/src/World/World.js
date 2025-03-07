// importing components

import { createsc1, createsc1direction } from "./astroids/sc1.js";
import { createsg1, createsg1direction } from "./astroids/sg1.js";
import { createsb1, createsb1direction } from "./astroids/sb1.js";
import { createsd1, createsd1direction } from "./astroids/sd1.js";
import { createse, createsedirection } from "./astroids/se.js";
import { createCamera } from "./components/Camera.js";
import { createEarth } from "./components/Earth.js";
import { createLight } from "./components/Light.js";
import { createMoon, createMoonOrbit } from "./components/Moon.js";
import { createScene } from "./components/Scene.js";
import { createSpace } from "./components/Space.js";
import { createUrsa } from "./components/ursa.js";

// importing systems
import { Loop } from "./systems/animationLoop.js";
import { createControls } from "./systems/cameraControls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/resizer.js";
import { createhalley, createhalleydirection } from "./comets/halley.js";
import { createlovejoy, createlovejoydirection } from "./comets/lovejoy.js";
import { createapophis, createapophisdirection } from "./pha/apophis.js";
import { createdz2, createdz2direction } from "./pha/dz2.js";
import { createda14, createda14direction } from "./pha/da14.js";

let loop;
let controls;
let resizer;

class World {
  constructor(container) {
    this.camera = createCamera(container);
    this.scene = createScene();
    this.earth = createEarth();
    this.moon = createMoon();
    this.space = createSpace();
    this.renderer = createRenderer();
    this.ursa = createUrsa();
    this.moonorbit = createMoonOrbit();
    container.append(this.renderer.domElement);

    // adding moon, earth, space, ursa, moonorbit to the scene
    this.scene.add(this.moon);
    this.scene.add(this.earth);
    this.scene.add(this.space);
    this.scene.add(this.ursa);
    this.scene.add(this.moonorbit);

    //Adding Astroids

    //Adding sg1
    const sg1 = createsg1();
    const sg1directionline = createsg1direction(sg1); // Create its direction line

    this.scene.add(sg1); // Add the asteroid to the scene
    this.scene.add(sg1directionline); // Add the direction line to the scene

    //Adding sc1
    const sc1 = createsc1();
    const sc1directionline = createsc1direction(sc1); // Create its direction line

    this.scene.add(sc1); // Add the asteroid to the scene
    this.scene.add(sc1directionline); // Add the direction line to the scene

    //Adding sb1
    const sb1 = createsb1();
    const sb1directionline = createsb1direction(sb1); // Create its direction line

    this.scene.add(sb1); // Add the asteroid to the scene
    this.scene.add(sb1directionline); // Add the direction line to the scene

    //Adding sd1
    const sd1 = createsd1();
    const sd1directionline = createsd1direction(sd1); // Create its direction line

    this.scene.add(sd1); // Add the asteroid to the scene
    this.scene.add(sd1directionline); // Add the direction line to the scene

    //Adding se
    const se = createse();
    const sedirectionLine = createsedirection(se); // Create its direction line

    this.scene.add(se); // Add the asteroid to the scene
    this.scene.add(sedirectionLine); // Add the direction line to the scene

    //Adding commets to scene

    //Adding haley
    const halley = createhalley();
    const halleydirectionline = createhalleydirection(halley); // Create its direction line

    this.scene.add(halley); // Add the asteroid to the scene
    this.scene.add(halleydirectionline); // Add the direction line to the scene

    //Adding lovejoy
    const lovejoy = createlovejoy();
    const lovejoydirectionline = createlovejoydirection(lovejoy); // Create its direction line

    this.scene.add(lovejoy); // Add the asteroid to the scene
    this.scene.add(lovejoydirectionline); // Add the direction line to the scene

    //Adding pha to scene

    //Adding aphosis
    const aphosis = createapophis();
    const aphosisdirectionline = createapophisdirection(aphosis); // Create its direction line

    this.scene.add(aphosis); // Add the asteroid to the scene
    this.scene.add(aphosisdirectionline); // Add the direction line to the scene

    //Adding dz2
    const dz2 = createdz2();
    const dz2directionline = createdz2direction(dz2); // Create its direction line

    this.scene.add(dz2); // Add the asteroid to the scene
    this.scene.add(dz2directionline); // Add the direction line to the scene

    //Adding da14
    const da14 = createda14();
    const da14directionline = createda14direction(da14); // Create its direction line

    this.scene.add(da14); // Add the asteroid to the scene
    this.scene.add(da14directionline); // Add the direction line to the scene

    // Adding lights to the scene
    const { mainLight, ambientLight } = createLight();
    this.scene.add(mainLight, ambientLight);

    // Camera controls
    controls = createControls(this.camera, container);

    // On window resizing
    resizer = new Resizer(container, this.camera, this.renderer);

    // Animation loop
    loop = new Loop(this.camera, this.scene, this.renderer);
    loop.updatables.push(this.earth, this.moon);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
