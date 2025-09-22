import express from "express";
import {getAllYoutubers, getById} from "../controllers/youtubersController.js"

const router = express.Router();

router.get("/", getAllYoutubers);
router.get("/:id", getById)

export default router