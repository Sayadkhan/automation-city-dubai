import mongoose from "mongoose";

// Define the schema for contact information
const contactInfoSchema = new mongoose.Schema(
  {
    phone: { type: String, default: null },
    whatsapp: { type: String, default: null },
    email: { type: String, default: null },
  },
  { timestamps: true }
);

// Create a model for ContactInfo
const ContactInfo = mongoose.model("ContactInfo", contactInfoSchema);

export default ContactInfo;
