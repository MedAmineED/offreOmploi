import express, { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/userController";

const userRouter: Router = express.Router();


//get user list
userRouter.get("/api/user", getAllUsers);


//get user by id
userRouter.get("/api/userbyid/:id", getUserById);


// POST /api/user - Create a new user
userRouter.post("/api/user", createUser);



//update user
userRouter.put("/api/user/:id", updateUser);


//delete user 
userRouter.delete("/api/user/:id", deleteUser);







export default userRouter;