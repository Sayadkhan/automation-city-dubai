import express from "express";

import multer from "multer";
import {
  getAllBanners,
  removeBanner,
  uploadBanners,
} from "../controller/BannerController.js";
import path from "path";

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, "./uploads"),
    filename: (req, file, cb) =>
      cb(null, Date.now() + path.extname(file.originalname)),
  }),
});

router.post("/upload", upload.array("bannerImages", 5), uploadBanners);

router.get("/all-banners", getAllBanners);
router.delete("/delete-banner/:id", removeBanner);

export default router;
