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

    const baseUrl = process.env.URL;
    const placeImageUrl = `${baseUrl}/uploads/${req.file.filename}`;

    // Create a new place document
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

// Get all featured places
export const getAllFeaturedPlaces = async (req, res) => {
  try {
    const places = await FeaturedPlace.find();
    res.status(200).json(places);
  } catch (error) {
    console.error("Error fetching places:", error);
    res.status(500).json({ message: "Failed to fetch places", error });
  }
};

export const deleteFeaturedPlace = async (req, res) => {
  try {
    const { id } = req.params;
    const place = await FeaturedPlace.findByIdAndDelete(id);

    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }

    res.status(200).json({ message: "Place deleted successfully" });
  } catch (error) {
    console.error("Error deleting place:", error);
    res.status(500).json({ message: "Failed to delete place", error });
  }
};
