import { Request, Response } from "express";
import User from "../dbConfig/models/User";

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
    }
};

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Failed to fetch users" });
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    const userId: string = req.params.id;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Failed to fetch user" });
    }
};



export const updateUser = async (req: Request, res: Response): Promise<void> => {
    const userId: string = req.params.id;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        await user.update(req.body);

        res.status(200).json(user);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Failed to update user" });
    }
};


// Delete user
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const userId: string = req.params.id;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        await user.destroy();

        res.status(204).send(); // No content response
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: "Failed to delete user" });
    }
};