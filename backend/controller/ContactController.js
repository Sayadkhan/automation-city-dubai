import ContactInfo from "../models/contactInfo.js";

// Add contact info
export const addContactInfo = async (req, res) => {
  try {
    const { phone, whatsapp, email } = req.body;

    // Create a new contact info entry
    const contactInfo = new ContactInfo({ phone, whatsapp, email });
    await contactInfo.save();

    return res
      .status(201)
      .json({ message: "Contact information added successfully" });
  } catch (error) {
    console.error("Error adding contact info:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Get Contact Information
export const getContactInfo = async (req, res) => {
  try {
    const contactInfo = await ContactInfo.findOne();
    if (!contactInfo) {
      return res.status(404).json({ message: "Contact information not found" });
    }
    return res.status(200).json(contactInfo);
  } catch (error) {
    console.error("Error fetching contact info:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Update a specific contact (phone, whatsapp, email)
export const updateContact = async (req, res) => {
  const { type, value } = req.body; // type is phone, whatsapp, or email

  // Validate the contact type
  if (!["phone", "whatsapp", "email"].includes(type)) {
    return res.status(400).json({ message: "Invalid contact type" });
  }

  try {
    const contactInfo = await ContactInfo.findOne();

    if (!contactInfo) {
      return res.status(404).json({ message: "Contact information not found" });
    }

    contactInfo[type] = value;

    await contactInfo.save();

    return res.status(200).json({ message: `${type} updated successfully` });
  } catch (error) {
    console.error("Error updating contact:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Delete a specific contact (phone, whatsapp, email)
export const deleteContact = async (req, res) => {
  const { type } = req.body;

  // Validate the contact type
  if (!["phone", "whatsapp", "email"].includes(type)) {
    return res.status(400).json({ message: "Invalid contact type" });
  }

  try {
    const contactInfo = await ContactInfo.findOne();

    if (!contactInfo) {
      return res.status(404).json({ message: "Contact information not found" });
    }

    // Remove the specific field
    contactInfo[type] = undefined;

    await contactInfo.save();

    return res.status(200).json({ message: `${type} deleted successfully` });
  } catch (error) {
    console.error("Error deleting contact:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
