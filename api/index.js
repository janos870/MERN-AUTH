import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
dotenv.config();


const app = express();

app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);


mongoose
  .connect(process.env.MONGODB_URI,)
  .then(() => {
    console.log("Mongodb connected!");
  })
  .catch((err) => {
    console.log(err.message)
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("Server started on port 3000");
});

