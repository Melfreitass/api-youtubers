import express from "express";
import {getAllYoutubers, getById, creatYoutuber, updateYoutuber} from "../controllers/youtubersController.js"

const router = express.Router();

router.get("/", getAllYoutubers);
router.get("/:id", getById);
router.post("/", creatYoutuber);
router.put("/:id", updateYoutuber)

export default router