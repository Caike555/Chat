import express from "express";
import chat from "../controllers/chat";

const router = express.Router();

router.get("/", chat);
export default router;
