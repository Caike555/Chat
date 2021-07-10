import express from "express";
import {register_get, register_post} from "../controllers/register";

const router = express.Router();

router.get("/", register_get);
router.post("/", register_post);

export default router;
