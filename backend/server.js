import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;


if (!MONGO_URI) {
  console.error("MongoDB connection string is missing!");
  process.exit(1); 
}


mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); 
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
