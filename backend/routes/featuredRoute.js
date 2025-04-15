import express from "express";
import path from "path";

import { uploadPlace } from "../controller/FeaturedPlaceController.js";
import multer from "multer";

const router = express.Router();

// Setup multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // Specify the folder where files will be saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Ensure unique filenames by appending current timestamp
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Get all featured places
// router.get("/all-featured", getAllFeaturedPlaces);

// Add a new featured place with an image
router.post("/add-featured", upload.single("placeImage"), uploadPlace);

// Delete a featured place by ID
// router.delete("/delete-featured/:id", deleteFeaturedPlace);

export default router;
