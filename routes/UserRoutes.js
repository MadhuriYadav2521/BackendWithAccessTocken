import express from "express";
import { checksForRegister } from "../middlewares/authMiddleware.js";
import { getMediaFromYouTube, regenerateTocken, register } from "../controllers/userController.js";



var router = express.Router();


router.post('/register',checksForRegister,register);
router.post('/regenerateTocken',regenerateTocken);
router.post('/getMediaFromYouTube',getMediaFromYouTube);


export default router;