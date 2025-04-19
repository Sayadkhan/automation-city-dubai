import express from "express";
import {
  addContactInfo,
  deleteContact,
  getContactInfo,
  updateContact,
} from "../controller/ContactController.js";

const router = express.Router();

// Add contact information
router.post("/add", addContactInfo);

// Get contact information
router.get("/info", getContactInfo);

// Update a specific contact info (phone, whatsapp, email)
router.put("/update", updateContact);

// Delete a specific contact info (phone, whatsapp, email)
router.delete("/delete", deleteContact);

export default router;
