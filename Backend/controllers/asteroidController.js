import {
  getAsteroidsFromDB,
  getAsteroidRawData,
  getAsteroidAIInfo,
} from "../services/nasaService.js";

export async function getAsteroids(req, res) {
  try {
    const data = await getAsteroidsFromDB();
    res.json(data);
  } catch (error) {
    console.error("[Controller Error] getAsteroids:", error);
    res.status(500).json({
      error: "Failed to retrieve asteroids",
      message: error.message,
    });
  }
}

export async function getAsteroidDetails(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Asteroid ID is required" });
    }

    const rawData = await getAsteroidRawData(id);

    if (!rawData) {
      return res.status(404).json({ error: "Asteroid not found" });
    }

    const aiInfo = await getAsteroidAIInfo(rawData);
    res.json({ aiInfo });
  } catch (err) {
    console.error("[Controller Error] getAsteroidDetails:", err);
    res.status(500).json({
      error: "Failed to generate asteroid info.",
      message: err.message,
    });
  }
}
