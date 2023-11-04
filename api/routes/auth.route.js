import express from "express";
import router from "./user.route.js";
import { signup } from "../controllers/auth.controller.js";

const app = express.Router();

router.post("/signup", signup);

export default router;
