import FeaturedPlace from "../models/FeaturedplacesSchema.js";
import upload from "../utils/upload.js";

export const createFeaturedPlace = async (req, res) => {
  try {
    // Handle file upload using multer
    upload.single("ImageUrl")(req, res, async (err) => {
      if (err) {
        // Handle multer errors, e.g., file size, invalid file type, etc.
        return res.status(400).json({ message: err.message });
      }

      // Get the PlaceName from the body
      const { PlaceName } = req.body;

      // Validate input
      if (!PlaceName) {
        return res.status(400).json({ message: "PlaceName is required" });
      }

      // If file uploaded successfully, construct the file URL
      const ImageUrl = req.file
        ? `/uploads/featuredPlaces/${req.file.filename}` // Correct path to the uploaded image
        : null;

      if (!ImageUrl) {
        return res.status(400).json({ message: "Image file is required" });
      }

      // Create a new FeaturedPlace instance
      const newFeaturedPlace = new FeaturedPlace({
        PlaceName,
        ImageUrl,
      });

      // Save the new FeaturedPlace to the database
      await newFeaturedPlace.save();

      // Send success response
      return res.status(201).json({
        message: "Featured Place created successfully",
        data: newFeaturedPlace,
      });
    });
  } catch (error) {
    console.error(error);
    // Return a server error response
    return res
      .status(500)
      .json({ message: "Error creating Featured Place", error });
  }
};
// Controller to delete a featured place by ID
export const deleteFeaturedPlace = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the featured place by its ID
    const deletedPlace = await FeaturedPlace.findByIdAndDelete(id);

    if (!deletedPlace) {
      return res.status(404).json({ message: "Featured Place not found" });
    }

    return res.status(200).json({
      message: "Featured Place deleted successfully",
      data: deletedPlace,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error deleting Featured Place", error });
  }
};

// This function fetches all featured places from the database and sends them in the response
export const getAllFeaturedPlaces = async (req, res) => {
  try {
    const featuredPlace = await FeaturedPlace.find().select("-password");
    res.status(200).json({ featuredPlace });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users.",
      error: error.message,
    });
  }
};
