"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenVerification = void 0;
const jwt = require("jsonwebtoken");
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;
// Verify Token
const tokenVerification = (req, res, next) => {
    const Token = req.headers.authorization;
    if (Token) {
        const token = Token.split(" ")[1];
        try {
            const decodedPayload = jwt.verify(token, secretKey);
            req.user = decodedPayload;
            next();
        }
        catch (error) {
            return res.status(401).json({ message: "invalid token, access denied" });
        }
    }
    else {
        return res
            .status(401)
            .json({ message: "no token provided, access denied" });
    }
};
exports.tokenVerification = tokenVerification;
