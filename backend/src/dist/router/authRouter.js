"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const authRouter = express_1.default.Router();
const secretKey = "your_secret_key"; // Change this to your secret key
authRouter.post("/register", authController_1.register);
authRouter.post("/login", authController_1.loginUser);
//api/auth/loginCompany
authRouter.post("/loginCompany", authController_1.loginCompany);
//api/auth/verifyUser
authRouter.post("/verifyUser", authController_1.auhthorization);
exports.default = authRouter;
