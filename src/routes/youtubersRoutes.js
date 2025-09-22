import express from "express";
import {getAllYoutubers} from "../controllers/youtubersController.js"

const router = express.Router();

router.get("/", getAllYoutubers)

export default router