// backend/routes/socialMediaRoutes.js
import express from "express";

import multer from "multer";
import {
  addSocialMediaLink,
  getAllSocialMediaLinks,
} from "../controller/SocialMediaController.js";

const router = express.Router();

// Multer middleware for uploading social media icons
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, "./uploads/social-media-icons"),
    filename: (req, file, cb) =>
      cb(null, Date.now() + path.extname(file.originalname)),
  }),
});

// POST endpoint to add a new social media link
router.post("/add", upload.single("icon"), addSocialMediaLink);

// GET endpoint to fetch all social media links
router.get("/all", getAllSocialMediaLinks);

export default router;
