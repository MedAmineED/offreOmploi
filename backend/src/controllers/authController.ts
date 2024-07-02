import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../dbConfig/models/User";


require('dotenv').config();



const secretKey = process.env.SECRET_KEY as string; 



export const register = async (req: Request, res: Response) => {
    try {
        const { firstname, lastname, age, role, numtel, niveauetude, diplome, experience, email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = await User.create({ firstname, lastname, age, role, numtel, niveauetude, diplome, experience, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


//api/auth/login
export const login =  async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: "Invalid email" });
        }

        const isMatch = password == user.password;
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, secretKey, { expiresIn: "12h" });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
