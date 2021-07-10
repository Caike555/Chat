import express from "express";
import {login_get, login_post} from "../controllers/login";

const router = express.Router();

router.get("/", login_get);
router.post("/", login_post);

export default router;
