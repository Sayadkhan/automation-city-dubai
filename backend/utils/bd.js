import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbUrl = process.env.MONGO_URI || "";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl).then(() => {
      console.log(`database connent successfully ${dbUrl}`);
    });
  } catch (error) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
