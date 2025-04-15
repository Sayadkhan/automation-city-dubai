import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import connectDB from "./utils/bd.js";
import authRoute from "./routes/authRoute.js";
import featuredRoute from "./routes/featuredRoute.js";
import seattingRoute from "./routes/seattingRoute.js"; // Assuming you have a route for uploading logos
import multer from "multer";
import path from "path";

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();
const port = process.env.PORT || 5000;

// Handle file path for ES Modules
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (uploaded images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// CORS setup
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173", // Frontend URL
    credentials: true,
    allowedHeaders: ["Authorization", "Content-Type"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

// Define routes
app.use("/api/auth", authRoute);
app.use("/api", featuredRoute);
app.use("/api/upload", seattingRoute); // Assuming you have a route for uploading logos

// Database Connection and Server Start
connectDB()
  .then(() => {
    console.log("Connected to MongoDB");

    // Start the server
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message);
  });
