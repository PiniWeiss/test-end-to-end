import express from "express";
import { getAllTerrorists } from "../controllers/terroristsControllers.js";


const router = express.Router();

router.get("/terrorists", getAllTerrorists);

export default router;
