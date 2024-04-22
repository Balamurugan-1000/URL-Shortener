import express from "express";
import { saveURL, getLink } from "../controllers/urlController.js";
const router = express.Router();

router
	.get('/url', getLink)
	.post("/url", saveURL)


export default router;