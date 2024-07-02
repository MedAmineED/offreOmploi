"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const userRouter = express_1.default.Router();
//get user list
userRouter.get("/api/user", userController_1.getAllUsers);
//get user by id
userRouter.get("/api/userbyid/:id", userController_1.getUserById);
// POST /api/user - Create a new user
userRouter.post("/api/user", userController_1.createUser);
//update user
userRouter.put("/api/user/:id", userController_1.updateUser);
//delete user 
userRouter.delete("/api/user/:id", userController_1.deleteUser);
exports.default = userRouter;
