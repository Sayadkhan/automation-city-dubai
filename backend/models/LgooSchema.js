import mongoose from "mongoose";

const logoSchema = new mongoose.Schema({
  logoUrl: {
    type: String,
    required: true,
  },
});

const logo = mongoose.model("Logo", logoSchema);
export default logo;
