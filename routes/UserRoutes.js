import express from "express";
import { checksForRegister } from "../middlewares/authMiddleware.js";
import { register } from "../controllers/userController.js";
// import { generateTokenForUser } from "../controllers/access_key_generate.js";



var router = express.Router();


router.post('/register',checksForRegister,register);


export default router;