// backend/controllers/BannerController.js
import Banner from "../models/BannerSchema.js";
import path from "path";

// Configure multer for handling multiple file uploads
import multer from "multer";

// Set up storage for banner images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
    e;
  },
});

const upload = multer({ storage: storage });

export const uploadBanners = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No banners uploaded" });
    }

    const baseUrl = process.env.URL;
    // Store all banner image URLs in the database
    const banners = req.files.map((file) => ({
      bannerImageUrl: `${baseUrl}/uploads/${file.filename}`,
    }));

    // Save all banners to the database
    await Banner.insertMany(banners);

    res.status(200).json({ message: "Banners uploaded successfully", banners });
  } catch (error) {
    console.error("Error uploading banners:", error);
    res.status(500).json({ message: "Failed to upload banners", error });
  }
};

export const getAllBanners = async (req, res) => {
  try {
    const banners = await Banner.find(); // Get all banners from the database
    res.status(200).json(banners); // Return the banners as JSON
  } catch (error) {
    console.error("Error fetching banners:", error);
    res.status(500).json({ message: "Failed to fetch banners", error });
  }
};

// Remove a banner by ID
export const removeBanner = async (req, res) => {
  try {
    const { id } = req.params; // Get the banner ID from the URL
    const banner = await Banner.findByIdAndDelete(id); // Delete the banner by ID

    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }

    res.status(200).json({ message: "Banner deleted successfully" });
  } catch (error) {
    console.error("Error deleting banner:", error);
    res.status(500).json({ message: "Failed to delete banner", error });
  }
};
