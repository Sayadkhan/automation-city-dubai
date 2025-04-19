import express from "express";
import path from "path";
import multer from "multer";
import {
  addSocialMediaLink,
  getAllSocialMediaLinks,
} from "../controller/SocialMediaController.js";

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, "./uploads"),
    filename: (req, file, cb) =>
      cb(null, Date.now() + path.extname(file.originalname)),
  }),
});

// POST endpoint to add a new social media link
router.post("/add", upload.single("icon"), addSocialMediaLink);

// GET endpoint to fetch all social media links
router.get("/all", getAllSocialMediaLinks);

export default router;
