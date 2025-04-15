import FeaturedPlace from "../models/FeaturedplacesSchema.js";

import path from "path";
import fs from "fs";

// Upload place and save its name and image path in the database
export const uploadPlace = async (req, res) => {
  try {
    if (!req.file || !req.body.placeName) {
      return res
        .status(400)
        .json({ message: "Place name and image are required" });
    }

    // Create a new place document
    const placeImageUrl = `/uploads/${req.file.filename}`;
    const newPlace = new FeaturedPlace({
      placeName: req.body.placeName,
      placeImageUrl,
    });

    // Save the place document to MongoDB
    await newPlace.save();

    res.status(200).json({
      message: "Place uploaded successfully",
      newPlace,
    });
  } catch (error) {
    console.error("Error uploading place:", error);
    res.status(500).json({ message: "Failed to upload place", error });
  }
};
