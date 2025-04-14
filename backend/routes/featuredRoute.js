import express from "express";
import {
  createFeaturedPlace,
  deleteFeaturedPlace,
  getAllFeaturedPlaces,
} from "../controller/AdminController.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.get("/all-featured", getAllFeaturedPlaces);

router.post("/add-featured", upload.single("ImageUrl"), createFeaturedPlace);
router.delete("/delete-featured/:id", deleteFeaturedPlace);

export default router;
