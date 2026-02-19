import express from "express";
import { setScore } from "../controllers/scoreControllers.js";


const router = express.Router();

router.post("/score", setScore);

export default router;
