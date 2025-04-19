// backend/controllers/SocialMediaController.js

import multer from "multer";
import path from "path";
import SocialMedia from "../models/SocialMediaSchema.js";

// Configure multer for icon file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/social-media-icons");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Add a new social media link with an icon
export const addSocialMediaLink = async (req, res) => {
  try {
    if (!req.body.name || !req.body.link || !req.file) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new social media entry
    const newSocialMedia = new SocialMedia({
      name: req.body.name,
      link: req.body.link,
      iconUrl: `/uploads/${req.file.filename}`,
    });

    // Save to the database
    await newSocialMedia.save();

    res.status(200).json({
      message: "Social Media link added successfully",
      newSocialMedia,
    });
  } catch (error) {
    console.error("Error adding social media link:", error);
    res.status(500).json({ message: "Failed to add social media link", error });
  }
};

// Get all social media links
export const getAllSocialMediaLinks = async (req, res) => {
  try {
    const socialMediaLinks = await SocialMedia.find();
    res.status(200).json(socialMediaLinks);
  } catch (error) {
    console.error("Error fetching social media links:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch social media links", error });
  }
};
