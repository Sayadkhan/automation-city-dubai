import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { uploadLogo } from "../controller/LogoUpdateController.js";

const router = express.Router();

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Define the POST route for logo upload
router.post("/logo", upload.single("logo"), uploadLogo);

export default router;
