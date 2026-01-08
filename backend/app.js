import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    server.listen(8000, () => {
      console.log("Server running on 8000");
    });
  } catch (err) {
    console.error("Mongo error:", err);
  }
};

start();
