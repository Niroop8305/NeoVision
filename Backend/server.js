import express from "express";
import cors from "cors";
import asteroidRoutes from "./routes/asteroidRoutes.js";
import { startScheduler } from "./services/scheduler.js";
import { PORT, NODE_ENV, ALLOWED_ORIGINS } from "./config/index.js";

const app = express();

// CORS Configuration
const corsOptions = {
  origin: ALLOWED_ORIGINS,
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.path} - ${res.statusCode} (${duration}ms)`,
    );
  });
  next();
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: NODE_ENV,
  });
});

// API routes
app.use("/api", asteroidRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("[Error]", err);
  const statusCode = err.statusCode || 500;
  const message =
    NODE_ENV === "production" ? "Internal server error" : err.message;

  res.status(statusCode).json({
    error: message,
    ...(NODE_ENV !== "production" && { stack: err.stack }),
  });
});

// Graceful shutdown
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Environment: ${NODE_ENV}`);
  console.log(
    `🌐 CORS enabled for: ${Array.isArray(corsOptions.origin) ? corsOptions.origin.join(", ") : corsOptions.origin}`,
  );
  startScheduler();
});

process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("\nSIGINT received. Shutting down gracefully...");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
