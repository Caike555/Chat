import express from "express";
import support from "../controllers/support";

const router = express.Router();

router.get("/", support);
export default router;
