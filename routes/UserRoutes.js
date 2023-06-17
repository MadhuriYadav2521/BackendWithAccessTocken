import express from "express";
import { checksForRegister } from "../middlewares/authMiddleware.js";
import { regenerateTocken, register } from "../controllers/userController.js";



var router = express.Router();


router.post('/register',checksForRegister,register);
router.post('/regenerateTocken',regenerateTocken);


export default router;