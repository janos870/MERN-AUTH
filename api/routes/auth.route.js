import express from "express";
import router from "./user.route.js";
import { signup, signin, google, signout } from "../controllers/auth.controller.js";


const app = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signout);

export default router;
