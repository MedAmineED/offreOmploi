import express, { Request, Response, Router } from "express";
import { auhthorization,  loginCompany,  loginUser, register } from "../controllers/authController";

const authRouter: Router = express.Router();
const secretKey = "your_secret_key"; // Change this to your secret key

authRouter.post("/register", register);


authRouter.post("/login", loginUser);


//api/auth/loginCompany
authRouter.post("/loginCompany", loginCompany);

//api/auth/verifyUser
authRouter.post("/verifyUser", auhthorization);

export default authRouter;
