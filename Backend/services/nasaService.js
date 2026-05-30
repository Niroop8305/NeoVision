import axios from "axios";
import { NASA_URL, ASTEROID_LIMIT } from "../config/index.js";
import { getMongoCollection } from "../models/db.js";
import { getJulianDateNow } from "../utils/julian.js";
import { keplerToCartesianAtTime, computeOrbitTrail } from "./kepler.js";

export async function fetchAndStoreAsteroidData(limit = ASTEROID_LIMIT) {
  const { client, collection } = await getMongoCollection();
  const { client: rawClient, collection: rawCollection } =
    await getMongoCollection("asteroid_raw");
  try {
    const response = await axios.get(NASA_URL, {
      timeout: 30000, // 30 second timeout
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });
    const asteroids = response.data.near_earth_objects.slice(0, limit);

    await rawCollection.deleteMany({});
    await rawCollection.insertMany(asteroids);

    const nowJD = getJulianDateNow();
    const now = new Date();

    const asteroidData = await Promise.all(
      asteroids.map(async (asteroid) => {
        const orbitData = {
          id: asteroid.id,
          name: asteroid.name,
          a: parseFloat(asteroid.orbital_data.semi_major_axis),
          e: parseFloat(asteroid.orbital_data.eccentricity),
          i: parseFloat(asteroid.orbital_data.inclination),
          omega: parseFloat(asteroid.orbital_data.perihelion_argument),
          M: parseFloat(asteroid.orbital_data.mean_anomaly),
          Omega: parseFloat(asteroid.orbital_data.ascending_node_longitude),
          epoch: parseFloat(asteroid.orbital_data.epoch_osculation),
          mean_motion: parseFloat(asteroid.orbital_data.mean_motion),
        };

        // Extract size data from NASA API
        const estimatedDiameter = asteroid.estimated_diameter;
        const sizeData = {
          kilometers: {
            min: estimatedDiameter?.kilometers?.estimated_diameter_min || 0,
            max: estimatedDiameter?.kilometers?.estimated_diameter_max || 0,
          },
          meters: {
            min: estimatedDiameter?.meters?.estimated_diameter_min || 0,
            max: estimatedDiameter?.meters?.estimated_diameter_max || 0,
          },
          miles: {
            min: estimatedDiameter?.miles?.estimated_diameter_min || 0,
            max: estimatedDiameter?.miles?.estimated_diameter_max || 0,
          },
          feet: {
            min: estimatedDiameter?.feet?.estimated_diameter_min || 0,
            max: estimatedDiameter?.feet?.estimated_diameter_max || 0,
          },
        };

        const currentPosition = keplerToCartesianAtTime(orbitData, nowJD);
        const pastTrail = computeOrbitTrail(orbitData, 100, 200, nowJD);

        return {
          id: orbitData.id,
          name: orbitData.name,
          currentPosition,
          pastTrail,
          size: sizeData, // Add size data here
          isPotentiallyHazardous:
            asteroid.is_potentially_hazardous_asteroid || false,
          absoluteMagnitude: asteroid.absolute_magnitude_h || null,
        };
      }),
    );

    await collection.deleteMany({});
    await collection.insertOne({ fetchedAt: now, asteroidData });
  } catch (error) {
    console.error("[Fetch Error] Failed to fetch asteroid data:");
    console.error(`Error message: ${error.message}`);
    console.error(`Error code: ${error.code}`);
    if (error.response) {
      console.error(`Response status: ${error.response.status}`);
      console.error(`Response data:`, error.response.data);
    }
    // Don't crash the app, just log the error and continue
  } finally {
    await client.close();
    await rawClient.close();
  }
}

export async function getAsteroidsFromDB() {
  const { client, collection } = await getMongoCollection();
  try {
    const doc = await collection.findOne({}, { sort: { fetchedAt: -1 } });
    return doc
      ? { asteroidData: doc.asteroidData, fetchedAt: doc.fetchedAt }
      : { asteroidData: [], fetchedAt: null };
  } finally {
    await client.close();
  }
}

export async function getAsteroidRawData(id) {
  const { client, collection } = await getMongoCollection("asteroid_raw");
  try {
    const doc = await collection.findOne({ id });
    return doc;
  } finally {
    await client.close();
  }
}

export async function getAsteroidAIInfo(rawData) {
  // Format the response without using AI (no quota limits!)
  const diameter = rawData.estimated_diameter;
  const closeApproach = rawData.close_approach_data?.[0];
  const orbitalData = rawData.orbital_data;

  const formattedResponse = `
🌌 **ASTEROID ANALYSIS**

**Basic Information:**
• Name: ${rawData.name}
• ID: ${rawData.id}
• Discovery Date: ${orbitalData?.first_observation_date || "Unknown"}
• NASA JPL URL: ${rawData.nasa_jpl_url || "N/A"}

**Size Estimates:**
• Diameter: ${diameter?.kilometers?.estimated_diameter_min?.toFixed(3)} - ${diameter?.kilometers?.estimated_diameter_max?.toFixed(3)} kilometers
• Diameter: ${diameter?.meters?.estimated_diameter_min?.toFixed(1)} - ${diameter?.meters?.estimated_diameter_max?.toFixed(1)} meters
• Size in Miles: ${diameter?.miles?.estimated_diameter_min?.toFixed(3)} - ${diameter?.miles?.estimated_diameter_max?.toFixed(3)} miles
• Size in Feet: ${diameter?.feet?.estimated_diameter_min?.toFixed(1)} - ${diameter?.feet?.estimated_diameter_max?.toFixed(1)} feet

**Earth Approach Information:**
• Closest Approach: ${closeApproach ? new Date(closeApproach.close_approach_date_full).toLocaleDateString() : "N/A"}
• Distance: ${closeApproach ? `${parseFloat(closeApproach.miss_distance.kilometers).toLocaleString()} km (${parseFloat(closeApproach.miss_distance.lunar).toFixed(2)} lunar distances)` : "N/A"}
• Velocity: ${closeApproach ? `${parseFloat(closeApproach.relative_velocity.kilometers_per_hour).toLocaleString()} km/h` : "N/A"}
• Potentially Hazardous: ${rawData.is_potentially_hazardous_asteroid ? "⚠️ YES" : "✅ NO"}
• Sentry Object: ${rawData.is_sentry_object ? "Yes (being monitored)" : "No"}

**Recent Close Approaches:**
${
  rawData.close_approach_data
    ?.slice(0, 5)
    .map(
      (approach) =>
        `• ${new Date(approach.close_approach_date_full).toLocaleDateString()}: ${parseFloat(approach.miss_distance.kilometers).toLocaleString()} km`,
    )
    .join("\n") || "No recent approaches recorded"
}

**Orbital Characteristics:**
• Orbital Period: ${orbitalData?.orbital_period ? `${parseFloat(orbitalData.orbital_period).toFixed(2)} days (${(parseFloat(orbitalData.orbital_period) / 365.25).toFixed(2)} years)` : "N/A"}
• Semi-Major Axis: ${orbitalData?.semi_major_axis ? `${parseFloat(orbitalData.semi_major_axis).toFixed(4)} AU` : "N/A"}
• Perihelion Distance: ${orbitalData?.perihelion_distance ? `${parseFloat(orbitalData.perihelion_distance).toFixed(4)} AU` : "N/A"}
• Aphelion Distance: ${orbitalData?.aphelion_distance ? `${parseFloat(orbitalData.aphelion_distance).toFixed(4)} AU` : "N/A"}
• Eccentricity: ${orbitalData?.eccentricity ? parseFloat(orbitalData.eccentricity).toFixed(4) : "N/A"}
• Inclination: ${orbitalData?.inclination ? `${parseFloat(orbitalData.inclination).toFixed(4)}°` : "N/A"}
• Mean Motion: ${orbitalData?.mean_motion ? `${parseFloat(orbitalData.mean_motion).toFixed(6)}° per day` : "N/A"}

**Observation Data:**
• First Observed: ${orbitalData?.first_observation_date || "Unknown"}
• Last Observed: ${orbitalData?.last_observation_date || "Unknown"}
• Data Arc: ${orbitalData?.data_arc_in_days || "Unknown"} days
• Observations Used: ${orbitalData?.observations_used || "Unknown"}
• Orbit Uncertainty: ${orbitalData?.orbit_uncertainty || "Unknown"}
• Orbit Determination Date: ${orbitalData?.orbit_determination_date || "Unknown"}

**Physical Characteristics:**
• Absolute Magnitude (H): ${rawData.absolute_magnitude_h || "Unknown"}
• Jupiter Tisserand Invariant: ${orbitalData?.jupiter_tisserand_invariant ? parseFloat(orbitalData.jupiter_tisserand_invariant).toFixed(3) : "N/A"}
• Minimum Orbit Intersection: ${orbitalData?.minimum_orbit_intersection ? parseFloat(orbitalData.minimum_orbit_intersection).toFixed(6) + " AU" : "N/A"}

**Interesting Facts:**
${
  rawData.is_potentially_hazardous_asteroid
    ? "• ⚠️ This asteroid is classified as potentially hazardous due to its size and close approach to Earth's orbit."
    : "• ✅ This asteroid is not currently classified as potentially hazardous."
}
${
  rawData.is_sentry_object
    ? "• 🎯 This object is being monitored by NASA's Sentry system for potential future impact scenarios."
    : ""
}
• The asteroid orbits the Sun ${orbitalData?.orbital_period ? `every ${(parseFloat(orbitalData.orbital_period) / 365.25).toFixed(2)} Earth years` : "at an unknown period"}.
${
  diameter?.kilometers
    ? `• Its estimated size is roughly ${diameter.kilometers.estimated_diameter_min < 0.1 ? "smaller than a football field" : diameter.kilometers.estimated_diameter_min < 0.5 ? "comparable to a few city blocks" : diameter.kilometers.estimated_diameter_min < 1 ? "about the size of a large building" : "larger than several city blocks"}.`
    : ""
}
• Based on ${orbitalData?.observations_used || "multiple"} observations over ${orbitalData?.data_arc_in_days || "many"} days.
`;

  return formattedResponse;
}
