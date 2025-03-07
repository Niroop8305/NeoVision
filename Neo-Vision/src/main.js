import { World } from "./World/World.js";

function main() {
  const container = document.querySelector("#scene-container");
  const world = new World(container);
  world.start();
}

// Function to convert Keplerian parameters to Cartesian coordinates
function keplerToCartesian(a, e, i, Omega, omega, M) {
  // Convert angles from degrees to radians
  i = i * (Math.PI / 180);
  Omega = Omega * (Math.PI / 180);
  omega = omega * (Math.PI / 180);
  M = M * (Math.PI / 180);

  // Constants and calculations for position
  const E = M; // For simplicity, assuming M is close to E (Eccentric anomaly)
  const cosE = Math.cos(E);
  const sinE = Math.sin(E);

  // Semi-major axis
  const r = a * (1 - e * cosE);
  const x =
    r *
    (cosE * Math.cos(omega + Omega) -
      sinE * Math.sin(omega + Omega) * Math.cos(i));
  const y =
    r *
    (cosE * Math.sin(omega + Omega) +
      sinE * Math.cos(omega + Omega) * Math.cos(i));
  const z = r * (sinE * Math.sin(i));

  return { x, y, z };
}

const asteroids = [
  {
    name: "Ceres",
    keplerianData: {
      a: 2.77,
      e: 0.07582,
      i: 10.59,
      Omega: 80.3,
      omega: 73.5,
      M: 95.98,
    },
    cartesianData: null,
  },
  {
    name: "Pallas",
    keplerianData: {
      a: 2.77,
      e: 0.2306,
      i: 34.8,
      Omega: 173.1,
      omega: 310.2,
      M: 87.1,
    },
    cartesianData: null,
  },
  {
    name: "Juno",
    keplerianData: {
      a: 2.67,
      e: 0.254,
      i: 13.34,
      Omega: 105.33,
      omega: 276.7,
      M: 160.4,
    },
    cartesianData: null,
  },
  {
    name: "Vesta",
    keplerianData: {
      a: 2.36,
      e: 0.0906,
      i: 7.14,
      Omega: 103.43,
      omega: 144.56,
      M: 151.77,
    },
    cartesianData: null,
  },
  {
    name: "Hygiea",
    keplerianData: {
      a: 3.14,
      e: 0.1,
      i: 3.9,
      Omega: 67.7,
      omega: 258.9,
      M: 159.4,
    },
    cartesianData: null,
  },
  {
    name: "Eunomia",
    keplerianData: {
      a: 2.95,
      e: 0.213,
      i: 10.0,
      Omega: 110.5,
      omega: 307.1,
      M: 271.8,
    },
    cartesianData: null,
  },
  {
    name: "Psyche",
    keplerianData: {
      a: 2.95,
      e: 0.154,
      i: 3.46,
      Omega: 251.5,
      omega: 353.3,
      M: 155.6,
    },
    cartesianData: null,
  },
];

const comets = [
  {
    name: "Halley's Comet",
    keplerianData: {
      a: 17.8,
      e: 0.967,
      i: 162.26,
      Omega: 58.42,
      omega: 111.33,
      M: 38.38,
    },
    cartesianData: null,
  },
  {
    name: "Comet Hale-Bopp",
    keplerianData: {
      a: 3732.55,
      e: 0.995,
      i: 89.96,
      Omega: 165.1,
      omega: 120.2,
      M: 50.23,
    },
    cartesianData: null,
  },
  {
    name: "Comet NEOWISE",
    keplerianData: {
      a: 0.89,
      e: 0.996,
      i: 70.4,
      Omega: 14.6,
      omega: 91.3,
      M: 3.12,
    },
    cartesianData: null,
  },
  {
    name: "Comet Shoemaker-Levy 9",
    keplerianData: {
      a: 2.72,
      e: 0.846,
      i: 12.6,
      Omega: 158.0,
      omega: 126.7,
      M: 330.5,
    },
    cartesianData: null,
  },
  {
    name: "Comet Lovejoy",
    keplerianData: {
      a: 1.06,
      e: 0.996,
      i: 75.2,
      Omega: 19.4,
      omega: 42.7,
      M: 245.5,
    },
    cartesianData: null,
  },
  {
    name: "Comet 67P/Churyumov-Gerasimenko",
    keplerianData: {
      a: 6.44,
      e: 0.999,
      i: 7.04,
      Omega: 112.9,
      omega: 111.8,
      M: 49.1,
    },
    cartesianData: null,
  },
  {
    name: "Comet Hartley 2",
    keplerianData: {
      a: 6.45,
      e: 0.9,
      i: 13.6,
      Omega: 179.4,
      omega: 97.2,
      M: 39.0,
    },
    cartesianData: null,
  },
];

const pha = [
  {
    name: "Apophis",
    keplerianData: {
      a: 0.922,
      e: 0.191,
      i: 3.3,
      Omega: 204.52,
      omega: 126.4,
      M: 259.9,
    },
    cartesianData: null,
  },
  {
    name: "99942 Apophis",
    keplerianData: {
      a: 0.922,
      e: 0.191,
      i: 3.3,
      Omega: 204.52,
      omega: 126.4,
      M: 259.9,
    },
    cartesianData: null,
  },
  {
    name: "2023 DZ2",
    keplerianData: {
      a: 0.92,
      e: 0.196,
      i: 11.45,
      Omega: 203.5,
      omega: 130.8,
      M: 245.7,
    },
    cartesianData: null,
  },
  {
    name: "2012 DA14",
    keplerianData: {
      a: 0.914,
      e: 0.001,
      i: 10.7,
      Omega: 65.23,
      omega: 102.5,
      M: 212.4,
    },
    cartesianData: null,
  },
  {
    name: "2020 QG",
    keplerianData: {
      a: 1.019,
      e: 0.037,
      i: 2.1,
      Omega: 23.7,
      omega: 171.9,
      M: 188.6,
    },
    cartesianData: null,
  },
  {
    name: "2011 AG5",
    keplerianData: {
      a: 0.785,
      e: 0.222,
      i: 5.3,
      Omega: 189.8,
      omega: 23.5,
      M: 349.1,
    },
    cartesianData: null,
  },
  {
    name: "2004 MN4",
    keplerianData: {
      a: 0.92,
      e: 0.191,
      i: 4.3,
      Omega: 216.3,
      omega: 140.2,
      M: 140.5,
    },
    cartesianData: null,
  },
];

// Function to display dropdown menu for a category
function displayDropdown(category) {
  const infoBox = document.getElementById("info-box");
  let data;

  if (category === "asteroids") {
    data = asteroids;
  } else if (category === "comets") {
    data = comets;
  } else if (category === "pha") {
    data = pha;
  }

  // Create dropdown menu
  let dropdownHtml = `<select id="item-dropdown"><option>Select an item</option>`;
  data.forEach((item, index) => {
    dropdownHtml += `<option value="${index}" data-category="${category}">${item.name}</option>`;
  });
  dropdownHtml += `</select>`;

  // Display the dropdown in the info box
  infoBox.innerHTML = dropdownHtml;

  // Add event listener to dropdown
  const dropdown = document.getElementById("item-dropdown");
  dropdown.addEventListener("change", (event) => {
    const index = event.target.value;
    if (index) {
      displayDetails(category, index);
    }
  });
}

// Function to display details of a selected item with a "Back" button
function displayDetails(category, index) {
  const infoBox = document.getElementById("info-box");
  let data;

  if (category === "asteroids") {
    data = asteroids;
  } else if (category === "comets") {
    data = comets;
  } else if (category === "pha") {
    data = pha;
  }

  // Retrieve selected item's keplerianData and calculate cartesianData dynamically
  const item = data[index];
  const { a, e, i, Omega, omega, M } = item.keplerianData;
  const cartesian = keplerToCartesian(a, e, i, Omega, omega, M);

  item.cartesianData = cartesian; // Dynamically update Cartesian coordinates

  // Display the details of the selected item
  infoBox.innerHTML = `
        <h3>${item.name}</h3>
        <p><strong>Keplerian Parameters:</strong></p>
        <p>Semi-Major Axis (a): ${item.keplerianData.a} AU</p>
        <p>Eccentricity (e): ${item.keplerianData.e}</p>
        <p>Inclination (i): ${item.keplerianData.i}°</p>
        <p>Longitude of Ascending Node (Ω): ${item.keplerianData.Omega}°</p>
        <p>Argument of Periapsis (ω): ${item.keplerianData.omega}°</p>
        <p>Mean Anomaly (M): ${item.keplerianData.M}°</p><br><br>

        <p><strong>Cartesian Coordinates:</strong></p>
        <p>X: ${item.cartesianData.x.toFixed(3)} AU</p>
        <p>Y: ${item.cartesianData.y.toFixed(3)} AU</p>
        <p>Z: ${item.cartesianData.z.toFixed(3)} AU</p>

        <button id="back-button">Back</button>
      `;

  // Add event listener for the back button
  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", () => {
    displayDropdown(category);
  });
}

// Event listener for category dropdown selection
const categorySelect = document.getElementById("category-select");
categorySelect.addEventListener("change", (event) => {
  displayDropdown(event.target.value);
});

// Show the default category (Asteroids) on page load
displayDropdown("asteroids");

// Toggle drawer functionality
const drawerToggle = document.getElementById("drawer-toggle");
const drawer = document.getElementById("drawer");

drawerToggle.addEventListener("click", () => {
  drawer.classList.toggle("open");
});

main();
