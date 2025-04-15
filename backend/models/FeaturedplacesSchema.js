import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  placeName: {
    type: String,
    required: true,
  },
  placeImageUrl: {
    type: String,
    required: true,
  },
});

const FeaturedPlace = mongoose.model("FeaturedPlace", placeSchema);
export default FeaturedPlace;
