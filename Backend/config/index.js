import "dotenv/config";

// Validate required environment variables
const requiredEnvVars = [
  "NASA_API_KEY",
  "MONGO_URI",
  "DB_NAME",
  "COLLECTION_NAME",
];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

export const API_KEY = process.env.NASA_API_KEY;
export const NASA_URL = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`;
export const MONGO_URI = process.env.MONGO_URI;
export const DB_NAME = process.env.DB_NAME;
export const COLLECTION_NAME = process.env.COLLECTION_NAME;
export const PORT = process.env.PORT || 5000;
export const NODE_ENV = process.env.NODE_ENV || "development";
export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
export const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "https://neo-vision-hr.vercel.app",
  process.env.FRONTEND_URL,
].filter(Boolean);
export const FETCH_INTERVAL_HOURS = parseInt(
  process.env.FETCH_INTERVAL_HOURS || "1",
  10,
);
export const FETCH_INTERVAL_MS = FETCH_INTERVAL_HOURS * 60 * 60 * 1000;
export const ASTEROID_LIMIT = parseInt(process.env.ASTEROID_LIMIT || "5", 10);

// AI Configuration
export const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
