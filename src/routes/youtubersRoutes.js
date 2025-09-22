import express from "express";
import {getAllYoutubers, getById, creatYoutuber, updateYoutuber, deleteYoutuber} from "../controllers/youtubersController.js"

const router = express.Router();

router.get("/", getAllYoutubers);
router.get("/:id", getById);
router.post("/", creatYoutuber);
router.put("/:id", updateYoutuber);
router.delete("/:id", deleteYoutuber);

export default router