import mongoose from "mongoose";

const FeaturedPlaceSchema = new mongoose.Schema(
  {
    PlaceName: {
      type: String,
      required: true,
    },
    ImageUrl: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const FeaturedPlace = mongoose.model("SiteSettings", FeaturedPlaceSchema);
export default FeaturedPlace;
