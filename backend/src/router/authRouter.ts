import express, { Request, Response, Router } from "express";
import { login, register } from "../controllers/authController";

const authRouter: Router = express.Router();
const secretKey = "your_secret_key"; // Change this to your secret key

authRouter.post("/register", register);

authRouter.post("/login", login);

export default authRouter;
