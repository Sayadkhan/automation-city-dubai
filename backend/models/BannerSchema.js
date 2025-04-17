import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
  bannerImageUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Banner", bannerSchema);
