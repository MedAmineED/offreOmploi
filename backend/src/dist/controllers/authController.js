"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../dbConfig/models/User"));
const router = express_1.default.Router();
const secretKey = "your_secret_key"; // Change this to your secret key
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname, age, role, numtel, niveauetude, diplome, experience, email, password } = req.body;
        const existingUser = yield User_1.default.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = yield User_1.default.create({ firstname, lastname, age, role, numtel, niveauetude, diplome, experience, email, password });
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
exports.register = register;
//api/auth/login
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield User_1.default.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: "Invalid email" });
        }
        const isMatch = password == user.password;
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, secretKey, { expiresIn: "1h" });
        res.json({ token });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
exports.login = login;
