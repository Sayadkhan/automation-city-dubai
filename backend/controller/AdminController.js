import FeaturedPlace from "../models/FeaturedplacesSchema.js";
import upload from "../utils/upload.js";

export const createFeaturedPlace = async (req, res) => {
  try {
    upload.single("ImageUrl")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      const { PlaceName } = req.body;

      // Validate input
      if (!PlaceName) {
        return res.status(400).json({ message: "PlaceName is required" });
      }

      // Get the image URL from the file uploaded
      const ImageUrl = req.file
        ? `/uploads/featuredPlaces/${req.file.filename}`
        : null;

      if (!ImageUrl) {
        return res.status(400).json({ message: "Image file is required" });
      }

      const newFeaturedPlace = new FeaturedPlace({
        PlaceName,
        ImageUrl,
      });

      await newFeaturedPlace.save();

      return res.status(201).json({
        message: "Featured Place created successfully",
        data: newFeaturedPlace,
      });
    });
  } catch (error) {
    console.error(error);
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
