// Upload logo and save its path in the database

import logo from "../models/LgooSchema.js";

export const uploadLogo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const baseUrl = process.env.URL;
    // Create a new logo document
    const newLogo = new logo({
      logoUrl: `${baseUrl}/uploads/${req.file.filename}`,
    });

    // Save the logo document to MongoDB
    await newLogo.save();

    res.status(200).json({
      message: "Logo uploaded successfully",
      logoUrl: newLogo.logoUrl,
    });
  } catch (error) {
    console.error("Error uploading logo:", error);
    res.status(500).json({ message: "Failed to upload logo", error });
  }
};
