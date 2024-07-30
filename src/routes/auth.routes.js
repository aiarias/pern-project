import Router from "express";
import { profile, signin, signup, singout } from "../controllers/auth.controller.js";

const router = Router();

router.post("/signin", signin);

router.post("/signup", signup);

router.post("/signout", singout);

router.get("/profile", profile);



export default router;