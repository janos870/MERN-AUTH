import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import path from "path";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  console.error(err);
  return res.status(statusCode).json({
    succcess: false,
    message,
    statusCode: statusCode,
    next: err.next,
  });
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Mongodb connected!");
  })
  .catch((err) => {
    console.log(err.message);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("Server started on port 3000");
});
