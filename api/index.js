import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";

dotenv.config();
const app = express();

app.use("/api/user", userRoute);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Mongodb connected!");
  })
  .catch((err) => console.log(err.message));

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("Server started on port 3000");
});

