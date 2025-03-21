import { NextFunction, Request, Response } from "express";
import User from "../dbConfig/models/User";

const jwt = require ("jsonwebtoken");
require('dotenv').config();



const secretKey = process.env.SECRET_KEY as string; 


declare module "express-serve-static-core" {
    interface Request {
      user?: User | null;
    }
  }

// Verify Token
export const tokenVerification = (req : Request, res : Response, next: NextFunction) => {
    const Token = req.headers.authorization;
    if (Token) {
      const token = Token.split(" ")[1];
      try {
        const decodedPayload = jwt.verify(token, secretKey);
        req.user = decodedPayload;
        next();
      } catch (error) {
        return res.status(401).json({ message: "invalid token, access denied" });
      }
    } else {
      return res
        .status(401)
        .json({ message: "no token provided, access denied" });
    }
  };