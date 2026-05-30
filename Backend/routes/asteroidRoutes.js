import express from "express";
import {
  getAsteroids,
  getAsteroidDetails,
} from "../controllers/asteroidController.js";
import { getMongoCollection } from "../models/db.js";

const router = express.Router();

// Asteroid data endpoints
router.get("/asteroids", getAsteroids);
router.get("/asteroids/:id/details", getAsteroidDetails);

// Status endpoint - check database connection and data freshness
router.get("/status", async (req, res) => {
  try {
    const { client, collection } = await getMongoCollection();

    try {
      const doc = await collection.findOne({}, { sort: { fetchedAt: -1 } });
      const now = new Date();
      const dataAge = doc
        ? Math.floor((now - new Date(doc.fetchedAt)) / 1000 / 60)
        : null;

      await client.close();

      res.json({
        status: "operational",
        database: "connected",
        lastDataFetch: doc?.fetchedAt || null,
        dataAgeMinutes: dataAge,
        asteroidCount: doc?.asteroidData?.length || 0,
        timestamp: now.toISOString(),
      });
    } catch (dbError) {
      await client.close();
      throw dbError;
    }
  } catch (error) {
    console.error("[Status Check Error]:", error);
    res.status(500).json({
      status: "error",
      database: "disconnected",
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

export default router;
